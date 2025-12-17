export default function UserRow({ name, email, role, status, lastLogin }) {
  const roleColors = {
    'Admin': { bg: '#dbeafe', text: '#1e40af' },
    'Manager': { bg: '#f3e8ff', text: '#6d28d9' },
    'Staff': { bg: '#f3f4f6', text: '#374151' },
  }

  const statusColors = {
    'Active': { bg: '#dcfce7', text: '#15803d' },
    'Inactive': { bg: '#f3f4f6', text: '#374151' },
  }

  const roleStyle = roleColors[role] || { bg: '#f3f4f6', text: '#374151' }
  const statusStyle = statusColors[status] || { bg: '#f3f4f6', text: '#374151' }

  return (
    <tr style={{
      borderBottom: '1px solid #e5e7eb',
      transition: 'background-color 0.15s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
      <td style={{
        padding: '16px 24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#e5e7eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '600',
            color: '#4b5563'
          }}>
            {name.charAt(0)}
          </div>
          <div>
            <p style={{
              fontWeight: '500',
              color: '#111827',
              fontSize: '14px'
            }}>{name}</p>
            <p style={{
              fontSize: '14px',
              color: '#6b7280'
            }}>{email}</p>
          </div>
        </div>
      </td>
      <td style={{
        padding: '16px 24px'
      }}>
        <span style={{
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: roleStyle.bg,
          color: roleStyle.text
        }}>
          {role}
        </span>
      </td>
      <td style={{
        padding: '16px 24px'
      }}>
        <span style={{
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: statusStyle.bg,
          color: statusStyle.text
        }}>
          {status}
        </span>
      </td>
      <td style={{
        padding: '16px 24px',
        fontSize: '14px',
        color: '#4b5563'
      }}>{lastLogin}</td>
      <td style={{
        padding: '16px 24px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          <button style={{
            color: '#2563eb',
            backgroundColor: 'transparent',
            border: 'none',
            fontWeight: '500',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#2563eb'}>Edit</button>
          <button style={{
            color: '#dc2626',
            backgroundColor: 'transparent',
            border: 'none',
            fontWeight: '500',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b91c1c'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#dc2626'}>Delete</button>
        </div>
      </td>
    </tr>
  )
}
