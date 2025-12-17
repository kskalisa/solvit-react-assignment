import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'

export default function SystemOverview() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
      borderRadius: '8px',
      padding: '32px',
      color: 'white',
      marginBottom: '32px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            <FontAwesomeIcon icon={faBox} style={{ color: 'white' }} />
          </div>
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>iHUZA INVENTORY - System Overview</h2>
            <p style={{
              color: 'rgba(219, 234, 254, 1)',
              marginTop: '8px',
              fontSize: '14px'
            }}>Monitor your iHUZA inventory and product assignments in real-time.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: '8px 16px',
          borderRadius: '8px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#4ade80',
            borderRadius: '50%',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
          <span style={{
            fontSize: '14px',
            fontWeight: '500'
          }}>All Systems Operational</span>
        </div>
      </div>
    </div>
  )
}
