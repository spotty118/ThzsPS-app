import React from 'react'
import { Typography, Row, Col, Card, List } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PaymentConfirmationPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: subscription, isLoading } = Api.subscription.findFirst.useQuery(
    {
      where: { userId: user?.id },
      orderBy: { createdAt: 'desc' },
      include: { application: true },
    },
  )

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!subscription) {
    navigate(`/organizations/${organizationId}/subscription`)
    return null
  }

  const benefits = [
    'Access to all premium features',
    'Priority customer support',
    'Unlimited storage',
    'Advanced analytics',
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card>
            <Title level={2} style={{ textAlign: 'center', color: '#52c41a' }}>
              <CheckCircleOutlined /> Payment Confirmed
            </Title>
            <Paragraph
              style={{
                textAlign: 'center',
                fontSize: '18px',
                marginBottom: '24px',
              }}
            >
              Thank you for your payment. Your subscription has been
              successfully updated.
            </Paragraph>
            <Title level={4}>Subscription Details:</Title>
            <Paragraph>
              <strong>Application:</strong> {subscription.application?.name}
            </Paragraph>
            <Paragraph>
              <strong>Status:</strong> {subscription.status}
            </Paragraph>
            <Paragraph>
              <strong>Start Date:</strong> {subscription.startDate}
            </Paragraph>
            <Paragraph>
              <strong>End Date:</strong> {subscription.endDate}
            </Paragraph>
            <Title level={4}>New Subscription Benefits:</Title>
            <List
              dataSource={benefits}
              renderItem={item => (
                <List.Item>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: '8px' }}
                  />
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
