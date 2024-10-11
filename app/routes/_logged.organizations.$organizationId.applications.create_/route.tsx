import React, { useState } from 'react'
import { Typography, Input, Button, Space, message, Spin } from 'antd'
import { SendOutlined, LoadingOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateApplicationPage() {
  const [description, setDescription] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { user } = useUserContext()

  const createApplication = Api.application.create.useMutation()
  const generateText = Api.ai.generateText.useMutation()

  const handleSubmit = async () => {
    if (!description.trim()) {
      message.error('Please enter a description for your application.')
      return
    }

    setIsGenerating(true)

    try {
      const generatedResponse = await generateText.mutateAsync({
        prompt: description,
      })

      if (generatedResponse.answer) {
        const newApplication = await createApplication.mutateAsync({
          data: {
            name: 'Generated Application',
            description: description,
            userId: user?.id || '',
            organizationId: organizationId || '',
          },
        })

        message.success('Application created successfully!')
        navigate(
          `/organizations/${organizationId}/applications/${newApplication.id}`,
        )
      } else {
        message.error('Failed to generate application. Please try again.')
      }
    } catch (error) {
      console.error('Error creating application:', error)
      message.error('An error occurred while creating the application.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Create New Application</Title>
        <Paragraph>
          Describe the application you want to create, and our AI will generate
          the code for you.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <TextArea
            rows={6}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter a description of the application you want to create..."
          />

          <Button
            type="primary"
            icon={isGenerating ? <LoadingOutlined /> : <SendOutlined />}
            onClick={handleSubmit}
            disabled={isGenerating}
            style={{ width: '100%' }}
          >
            {isGenerating ? 'Generating...' : 'Generate Application'}
          </Button>

          {isGenerating && (
            <div style={{ textAlign: 'center' }}>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
              <Paragraph>
                Generating your application. This may take a few moments...
              </Paragraph>
            </div>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
