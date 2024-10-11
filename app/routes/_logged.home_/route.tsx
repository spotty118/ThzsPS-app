import { Typography, Space, Card } from 'antd'
import { InfoCircleOutlined, RocketOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          padding: '24px',
        }}
      >
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to Our Application
        </Title>

        <Paragraph style={{ fontSize: '18px', textAlign: 'center' }}>
          This application helps you manage your projects and subscriptions
          efficiently.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle">
            <Title level={3}>
              <InfoCircleOutlined /> How It Works
            </Title>
            <Paragraph>
              1. Create an organization or join an existing one.
            </Paragraph>
            <Paragraph>
              2. Create applications within your organization.
            </Paragraph>
            <Paragraph>
              3. Manage subscriptions for your applications.
            </Paragraph>
            <Paragraph>4. Track invoices and payments.</Paragraph>
            <Paragraph>5. Get support when you need it.</Paragraph>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <Title level={3}>
              <RocketOutlined /> Get Started
            </Title>
            <Paragraph>
              To begin, navigate to your organization's dashboard and start
              creating your first application. From there, you can manage
              subscriptions, view notifications, and access support.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
