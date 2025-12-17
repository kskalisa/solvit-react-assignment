import Button from './Button'

export default function Header({ toggleSidebar }) {
  return (
    <header className="app-header" style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant="ghost" onClick={toggleSidebar} style={{ padding: '8px', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          <svg style={{ width: '24px', height: '24px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>Welcome Back, Admin</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* Theme Toggle */}
        <Button variant="ghost" style={{ padding: '8px', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          <svg style={{ width: '24px', height: '24px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.001 9.001 0 0020.354 15.354z" />
          </svg>
        </Button>

        {/* Settings */}
        <Button variant="ghost" style={{ padding: '8px', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          <svg style={{ width: '24px', height: '24px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" style={{ position: 'relative', padding: '8px', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          <svg style={{ width: '24px', height: '24px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '10px',
            height: '10px',
            backgroundColor: '#ef4444',
            borderRadius: '50%'
          }}></span>
        </Button>

        {/* User Profile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingLeft: '16px',
          borderLeft: '1px solid #e5e7eb'
        }}>
          <p style={{ fontSize: '14px', color: '#4b5563' }}>Admin@ihuza.com</p>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#2563eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            A
          </div>
        </div>
      </div>
    </header>
  )
}
