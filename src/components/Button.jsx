import React from 'react'

export default function Button({ children, variant = 'primary', style, type = 'button', ...props }) {
  const base = {
    padding: '8px 14px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: 'none'
  }

  const variants = {
    primary: {
      backgroundColor: 'var(--primary-500)',
      color: '#fff'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--primary-600)'
    },
    secondary: {
      backgroundColor: 'var(--muted-100)',
      color: '#111827'
    }
  }

  const applied = { ...base, ...(variants[variant] || variants.primary), ...style }

  return (
    <button type={type} style={applied} {...props}>
      {children}
    </button>
  )
}
