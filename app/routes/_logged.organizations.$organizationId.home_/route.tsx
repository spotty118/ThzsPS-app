import React from 'react'
import { Typography, Card, Row, Col, Button, List, Spin } from 'antd'
import {
  ProjectOutlined,
  PlusOutlined,
  CodeOutlined,
  RocketOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomeDashboardPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const { data: applications, isLoading } = Api.application.findMany.useQuery({
    where: { organizationId },
    include: { subscriptions: true },
  })

  const handleCreateApplication = () => {
    navigate(`/organizations/${organizationId}/applications/create`)
  }

  const handleViewApplication = (applicationId: string) => {
    navigate(`/organizations/${organizationId}/applications/${applicationId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Organization Dashboard</Title>
        <Text>
          Welcome to your organization's dashboard. Here's an overview of your
          projects and their statuses.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={24} md={16}>
            <Card
              title={
                <>
                  <ProjectOutlined /> Projects Overview
                </>
              }
              extra={
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={handleCreateApplication}
                >
                  Create New Application
                </Button>
              }
            >
              {isLoading ? (
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <Spin size="large" />
                </div>
              ) : (
                <List
                  dataSource={applications}
                  renderItem={app => (
                    <List.Item
                      key={app.id}
                      actions={[
                        <Button
                          type="link"
                          onClick={() => handleViewApplication(app.id)}
                        >
                          View Details
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={app.name}
                        description={
                          app.description || 'No description provided'
                        }
                      />
                      <div>
                        <Text type="secondary">
                          Created: {dayjs(app.createdAt).format('MMMM D, YYYY')}
                        </Text>
                      </div>
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card
              title={
                <>
                  <CodeOutlined /> Code Generation
                </>
              }
            >
              <Text>
                Real-time updates on code generation will appear here.
              </Text>
            </Card>
            <Card
              title={
                <>
                  <RocketOutlined /> Container Execution
                </>
              }
              style={{ marginTop: '16px' }}
            >
              <Text>
                Real-time updates on container execution will appear here.
              </Text>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
