// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home',
      position: 'leftbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/home',
      label: 'Home/Dashboard',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/home'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/applications/create',
      label: 'Create Application',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/applications/create'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/applications',
      label: 'My Applications',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/applications'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/subscription',
      label: 'Subscription Management',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/subscription'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/subscription/confirmation',
      label: 'Payment Confirmation',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/subscription/confirmation'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/notifications',
      label: 'Notifications',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/notifications'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/help',
      label: 'Help & Support',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/help'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
