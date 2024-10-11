import React, { useState } from 'react'
import {
  Typography,
  Card,
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  message,
} from 'antd'
import {
  CreditCardOutlined,
  HistoryOutlined,
  UpOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SubscriptionManagementPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const [isUpgradeModalVisible, setIsUpgradeModalVisible] = useState(false)
  const [isBillingModalVisible, setIsBillingModalVisible] = useState(false)

  const {
    data: subscriptionData,
    isLoading: isSubscriptionLoading,
    refetch: refetchSubscription,
  } = Api.subscription.findFirst.useQuery({
    where: { application: { organizationId } },
    include: { application: true },
  })

  const { data: invoices, isLoading: isInvoicesLoading } =
    Api.invoice.findMany.useQuery({
      where: { subscription: { application: { organizationId } } },
      orderBy: { issueDate: 'desc' },
    })

  const { mutateAsync: updateSubscription } =
    Api.subscription.update.useMutation()
  const { mutateAsync: updatePaymentMethod } =
    Api.paymentMethod.update.useMutation()

  const handleUpgrade = async (values: any) => {
    try {
      await updateSubscription({
        where: { id: subscriptionData?.id },
        data: { status: values.plan },
      })
      message.success('Subscription updated successfully')
      setIsUpgradeModalVisible(false)
      refetchSubscription()
    } catch (error) {
      message.error('Failed to update subscription')
    }
  }

  const handleUpdateBilling = async (values: any) => {
    try {
      await updatePaymentMethod({
        where: { id: subscriptionData?.id },
        data: { type: values.paymentType, details: values.cardNumber },
      })
      message.success('Billing information updated successfully')
      setIsBillingModalVisible(false)
    } catch (error) {
      message.error('Failed to update billing information')
    }
  }

  const columns = [
    {
      title: 'Invoice Date',
      dataIndex: 'issueDate',
      key: 'issueDate',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Subscription Management</Title>
        <Text>
          Manage your organization's subscription, billing, and invoices.
        </Text>

        <Card
          title="Current Subscription"
          style={{ marginTop: 24 }}
          loading={isSubscriptionLoading}
        >
          {subscriptionData && (
            <>
              <p>
                <strong>Plan:</strong> {subscriptionData.status}
              </p>
              <p>
                <strong>Start Date:</strong>{' '}
                {dayjs(subscriptionData.startDate).format('MMMM D, YYYY')}
              </p>
              <p>
                <strong>End Date:</strong>{' '}
                {dayjs(subscriptionData.endDate).format('MMMM D, YYYY')}
              </p>
              <p>
                <strong>Application:</strong>{' '}
                {subscriptionData.application?.name}
              </p>
              <Button
                type="primary"
                icon={<UpOutlined />}
                onClick={() => setIsUpgradeModalVisible(true)}
                style={{ marginTop: 16 }}
              >
                Upgrade/Downgrade Plan
              </Button>
            </>
          )}
        </Card>

        <Card title="Billing Information" style={{ marginTop: 24 }}>
          <Button
            icon={<CreditCardOutlined />}
            onClick={() => setIsBillingModalVisible(true)}
          >
            Update Billing Information
          </Button>
        </Card>

        <Card
          title="Billing History"
          style={{ marginTop: 24 }}
          extra={<HistoryOutlined />}
        >
          <Table
            columns={columns}
            dataSource={invoices}
            rowKey="id"
            loading={isInvoicesLoading}
          />
        </Card>

        <Modal
          title="Upgrade/Downgrade Plan"
          visible={isUpgradeModalVisible}
          onCancel={() => setIsUpgradeModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleUpgrade}>
            <Form.Item
              name="plan"
              label="Select Plan"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="BASIC">Basic</Select.Option>
                <Select.Option value="PRO">Pro</Select.Option>
                <Select.Option value="ENTERPRISE">Enterprise</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Confirm Change
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Update Billing Information"
          visible={isBillingModalVisible}
          onCancel={() => setIsBillingModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleUpdateBilling}>
            <Form.Item
              name="paymentType"
              label="Payment Type"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="CREDIT_CARD">Credit Card</Select.Option>
                <Select.Option value="DEBIT_CARD">Debit Card</Select.Option>
                <Select.Option value="PAYPAL">PayPal</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="cardNumber"
              label="Card Number"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Billing Information
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
