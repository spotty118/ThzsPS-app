import React, { useState } from 'react'
import { Typography, Input, Table, Space, Button } from 'antd'
import { SearchOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyApplicationsPage() {
  const { organization } = useUserContext()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const { data: applications, isLoading } = Api.application.findMany.useQuery({
    where: {
      organizationId: organization?.id,
      name: { contains: searchTerm, mode: 'insensitive' },
    },
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() =>
            navigate(
              `/organizations/${organization?.id}/applications/${record.id}`,
            )
          }
        >
          View Details
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>My Applications</Title>
        <Paragraph>
          View and manage all the applications you have created within your
          organization.
        </Paragraph>

        <Space style={{ marginBottom: '16px' }}>
          <Input
            placeholder="Search applications"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '300px' }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() =>
              navigate(`/organizations/${organization?.id}/applications/create`)
            }
          >
            Create New Application
          </Button>
        </Space>

        <Table
          columns={columns}
          dataSource={applications}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </PageLayout>
  )
}
