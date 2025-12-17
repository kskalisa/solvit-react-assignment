import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUsers, faBox, faClipboardList, faTags, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({ isOpen, setIsOpen }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: faTachometerAlt },
    { name: 'Users', icon: faUsers, badge: '116' },
    { name: 'Products', icon: faBox, badge: '100' },
    { name: 'Assignments', icon: faClipboardList, badge: '10' },
    { name: 'Categories', icon: faTags },
  ]

  return (
    <div style={{
      width: isOpen ? '224px' : '80px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e5e7eb',
      transition: 'width 0.3s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* Logo Section */}
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          flexShrink: 0
        }}>
          i
        </div>
        {isOpen && (
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#111827' }}>iHUZA</div>
            <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>INVENTORY</div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav style={{
        flex: 1,
        padding: '12px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveMenu(item.name)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              border: 'none',
              backgroundColor: activeMenu === item.name ? '#eff6ff' : 'transparent',
              color: activeMenu === item.name ? '#2563eb' : '#4b5563',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeMenu === item.name ? '500' : '400'
            }}
            title={!isOpen ? item.name : ''}
          >
            <FontAwesomeIcon icon={item.icon} style={{ fontSize: '18px', flexShrink: 0, width: '18px', height: '18px' }} />
            {isOpen && (
              <>
                <span style={{ flex: 1, textAlign: 'left', fontSize: '14px', fontWeight: '500' }}>{item.name}</span>
                {item.badge && (
                  <span style={{
                    fontSize: '12px',
                    backgroundColor: '#e5e7eb',
                    color: '#374151',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontWeight: '500'
                  }}>
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div style={{
        padding: '12px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          color: '#4b5563',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '8px',
          transition: 'background-color 0.2s',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          <FontAwesomeIcon icon={faDoorOpen} style={{ fontSize: '18px', flexShrink: 0, width: '18px', height: '18px' }} />
          {isOpen && <span style={{ fontWeight: '500', fontSize: '14px' }}>Logout</span>}
        </button>
      </div>
    </div>
  )
}
