import React from 'react'

export default function DashboardCard({ title, children, style }) {
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--muted-200)',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 2px rgba(2,6,23,0.04)',
      ...style
    }}>
      {title && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{title}</h3>
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  )
}
