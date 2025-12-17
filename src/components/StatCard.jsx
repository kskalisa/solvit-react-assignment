import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StatCard({ iconName, value, label, color = 'blue' }) {
  const iconBgColors = {
    blue: { bg: '#dbeafe', text: '#2563eb' },
    green: { bg: '#dcfce7', text: '#22c55e' },
    yellow: { bg: '#fef3c7', text: '#eab308' },
    red: { bg: '#fee2e2', text: '#ef4444' },
  }

  const colors = iconBgColors[color] || iconBgColors.blue

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      border: '1px solid #f3f4f6',
      transition: 'box-shadow 0.2s',
      cursor: 'default'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)'}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}>
        <div>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            fontWeight: '500'
          }}>{label}</p>
          <p style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#111827',
            marginTop: '8px'
          }}>{value}</p>
        </div>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          backgroundColor: colors.bg,
          color: colors.text
        }}>
          <FontAwesomeIcon icon={iconName} />
        </div>
      </div>
    </div>
  )
}
