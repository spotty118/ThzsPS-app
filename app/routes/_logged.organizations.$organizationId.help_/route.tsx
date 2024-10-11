import React, { useState } from 'react'
import {
  Typography,
  Space,
  Card,
  List,
  Input,
  Button,
  Form,
  message,
} from 'antd'
import {
  QuestionCircleOutlined,
  MessageOutlined,
  BulbOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HelpSupportPage() {
  const { user } = useUserContext()
  const [feedbackForm] = Form.useForm()

  const { data: faqs } = Api.supportTicket.findMany.useQuery({
    where: { status: 'FAQ' },
    select: { subject: true, description: true },
  })

  const { mutateAsync: createSupportTicket } =
    Api.supportTicket.create.useMutation()

  const [contactForm] = Form.useForm()

  const handleContactSubmit = async (values: {
    subject: string
    description: string
  }) => {
    try {
      await createSupportTicket({
        data: {
          ...values,
          status: 'OPEN',
          userId: user?.id || '',
        },
      })
      message.success('Support ticket submitted successfully')
      contactForm.resetFields()
    } catch (error) {
      message.error('Failed to submit support ticket')
    }
  }

  const handleFeedbackSubmit = async (values: { feedback: string }) => {
    try {
      await createSupportTicket({
        data: {
          subject: 'Feedback',
          description: values.feedback,
          status: 'FEEDBACK',
          userId: user?.id || '',
        },
      })
      message.success('Feedback submitted successfully')
      feedbackForm.resetFields()
    } catch (error) {
      message.error('Failed to submit feedback')
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Help and Support</Title>
        <Paragraph>
          Welcome to our Help and Support page. Here you can find FAQs, contact
          support, and submit feedback.
        </Paragraph>

        <Card
          title={
            <>
              <QuestionCircleOutlined /> FAQs
            </>
          }
        >
          <List
            dataSource={faqs}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.subject}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Card>

        <Card
          title={
            <>
              <MessageOutlined /> Contact Support
            </>
          }
        >
          <Form
            form={contactForm}
            onFinish={handleContactSubmit}
            layout="vertical"
          >
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'Please enter a description' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card
          title={
            <>
              <BulbOutlined /> Submit Feedback
            </>
          }
        >
          <Form
            form={feedbackForm}
            onFinish={handleFeedbackSubmit}
            layout="vertical"
          >
            <Form.Item
              name="feedback"
              label="Your Feedback"
              rules={[
                { required: true, message: 'Please enter your feedback' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Feedback
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </PageLayout>
  )
}
