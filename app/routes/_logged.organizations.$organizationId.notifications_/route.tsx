import { Typography, List, Button, Switch, message, Space } from 'antd'
import { BellOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationsPage() {
  const { user } = useUserContext()
  const [preferences, setPreferences] = useState({
    subscriptionRenewals: true,
    sessionExpirations: true,
  })

  const {
    data: notifications,
    isLoading,
    refetch,
  } = Api.notification.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
  })

  const { mutateAsync: updateNotification } =
    Api.notification.update.useMutation()
  const { mutateAsync: deleteNotification } =
    Api.notification.delete.useMutation()

  const handleMarkAsRead = async (id: string) => {
    try {
      await updateNotification({
        where: { id },
        data: { readAt: dayjs().format() },
      })
      message.success('Notification marked as read')
      refetch()
    } catch (error) {
      message.error('Failed to mark notification as read')
    }
  }

  const handleDismiss = async (id: string) => {
    try {
      await deleteNotification({ where: { id } })
      message.success('Notification dismissed')
      refetch()
    } catch (error) {
      message.error('Failed to dismiss notification')
    }
  }

  const handlePreferenceChange = (key: string) => (checked: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: checked }))
    message.success('Preference updated')
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>
            <BellOutlined /> Notifications
          </Title>
          <Text>
            View and manage your notifications about important events.
          </Text>

          <div>
            <Title level={4}>Notification Preferences</Title>
            <Space direction="vertical">
              <div>
                <Switch
                  checked={preferences.subscriptionRenewals}
                  onChange={handlePreferenceChange('subscriptionRenewals')}
                />
                <Text style={{ marginLeft: 8 }}>Subscription Renewals</Text>
              </div>
              <div>
                <Switch
                  checked={preferences.sessionExpirations}
                  onChange={handlePreferenceChange('sessionExpirations')}
                />
                <Text style={{ marginLeft: 8 }}>Session Expirations</Text>
              </div>
            </Space>
          </div>

          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button
                    key="read"
                    icon={<CheckOutlined />}
                    onClick={() => handleMarkAsRead(item.id)}
                    disabled={!!item.readAt}
                  >
                    Mark as Read
                  </Button>,
                  <Button
                    key="dismiss"
                    icon={<CloseOutlined />}
                    onClick={() => handleDismiss(item.id)}
                    danger
                  >
                    Dismiss
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={item.message}
                  description={
                    <Space>
                      <Text type="secondary">
                        {dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')}
                      </Text>
                      {item.readAt && <Text type="secondary">(Read)</Text>}
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Space>
      </div>
    </PageLayout>
  )
}
