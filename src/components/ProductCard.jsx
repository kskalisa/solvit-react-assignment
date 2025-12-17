export default function ProductCard({ name, category, status, date }) {
  const statusColors = {
    'In Stock': { bg: '#dcfce7', text: '#15803d' },
    'Low Stock': { bg: '#fef3c7', text: '#b45309' },
    'Out of Stock': { bg: '#fee2e2', text: '#b91c1c' },
  }

  const statusStyle = statusColors[status] || { bg: '#f3f4f6', text: '#374151' }

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
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <div>
          <h3 style={{
            fontWeight: '600',
            color: '#111827',
            fontSize: '15px'
          }}>{name}</h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            marginTop: '4px'
          }}>{category}</p>
        </div>
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
      </div>
      <p style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>{date}</p>
    </div>
  )
}
