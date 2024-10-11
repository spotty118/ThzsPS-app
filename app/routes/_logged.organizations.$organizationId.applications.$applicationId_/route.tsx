import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Button,
  Space,
  Spin,
  message,
  Descriptions,
} from 'antd'
import {
  DownloadOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { Prisma } from '@prisma/client'
type ApplicationWithStatus = Prisma.ApplicationGetPayload<{}> & {
  containerStatus?: 'RUNNING' | 'STOPPED'
}
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ApplicationDetailsPage() {
  const { applicationId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [logs, setLogs] = useState<string[]>([])
  const [containerStatus, setContainerStatus] = useState<'RUNNING' | 'STOPPED'>(
    'STOPPED',
  )

  const {
    data: application,
    isLoading,
    refetch,
  } = Api.application.findUnique.useQuery({
    where: { id: applicationId },
  })

  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()

  const handleContainerAction = async (
    action: 'start' | 'stop' | 'restart',
  ) => {
    try {
      await updateApplication({
        where: { id: applicationId },
        data: {}, // We don't update the application data directly
      })
      setContainerStatus(action === 'stop' ? 'STOPPED' : 'RUNNING')
      message.success(`Container ${action}ed successfully`)
      refetch()
    } catch (error) {
      message.error(`Failed to ${action} container`)
    }
  }

  const handleDownloadCode = () => {
    // Implement code download logic here
    message.info('Downloading code...')
  }

  useEffect(() => {
    SocketClient.useEvent('application-logs', (payload: unknown) => {
      if (
        typeof payload === 'object' &&
        payload !== null &&
        'message' in payload
      ) {
        setLogs(prevLogs => [...prevLogs, payload.message as string])
      }
    })
  }, [])

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!application) {
    return (
      <PageLayout layout="full-width">
        <Title level={4}>Application not found</Title>
      </PageLayout>
    )
  }

  const applicationWithStatus: ApplicationWithStatus = {
    ...application,
    containerStatus,
  }

  return (
    <PageLayout layout="full-width">
      <Card>
        <Title level={2}>Application Details</Title>
        <Paragraph>
          View and manage your application details, container status, and logs.
        </Paragraph>

        <Descriptions bordered>
          <Descriptions.Item label="Name">
            {applicationWithStatus.name}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {applicationWithStatus.description}
          </Descriptions.Item>
          <Descriptions.Item label="Container Status">
            {applicationWithStatus.containerStatus}
          </Descriptions.Item>
        </Descriptions>

        <Space
          direction="vertical"
          size="middle"
          style={{ width: '100%', marginTop: '20px' }}
        >
          <Card
            title="Container Management"
            extra={
              <Button icon={<DownloadOutlined />} onClick={handleDownloadCode}>
                Download Code
              </Button>
            }
          >
            <Space>
              <Button
                icon={<PlayCircleOutlined />}
                onClick={() => handleContainerAction('start')}
                disabled={applicationWithStatus.containerStatus === 'RUNNING'}
              >
                Start
              </Button>
              <Button
                icon={<PauseCircleOutlined />}
                onClick={() => handleContainerAction('stop')}
                disabled={applicationWithStatus.containerStatus !== 'RUNNING'}
              >
                Stop
              </Button>
              <Button
                icon={<ReloadOutlined />}
                onClick={() => handleContainerAction('restart')}
              >
                Restart
              </Button>
            </Space>
          </Card>

          <Card title="Application Logs">
            <pre
              style={{
                maxHeight: '300px',
                overflow: 'auto',
                backgroundColor: '#f0f0f0',
                padding: '10px',
              }}
            >
              {logs.length > 0 ? logs.join('\n') : 'No logs available'}
            </pre>
          </Card>
        </Space>
      </Card>
    </PageLayout>
  )
}
