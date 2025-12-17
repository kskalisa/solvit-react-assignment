import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBox, faCheckCircle, faExclamationTriangle, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import StatCard from '../components/StatCard'
import SystemOverview from '../components/SystemOverview'
import ProductCard from '../components/ProductCard'
import UserRow from '../components/UserRow'

export default function Dashboard() {
  const stats = [
    { iconName: faUser, value: '116', label: 'Total Users', color: 'blue' },
    { iconName: faBox, value: '100', label: 'Total Products', color: 'blue' },
    { iconName: faCheckCircle, value: '10', label: 'Assigned Products', color: 'green' },
    { iconName: faExclamationTriangle, value: '90', label: 'Unassigned Products', color: 'yellow' },
  ]

  const products = [
    { name: 'MacBook Pro 16"', category: 'Laptops', status: 'In Stock', date: 'Dec 10, 2024' },
    { name: 'Dell XPS 13', category: 'Laptops', status: 'In Stock', date: 'Dec 9, 2024' },
    { name: 'iPhone 15 Pro', category: 'Mobile', status: 'Low Stock', date: 'Dec 8, 2024' },
    { name: 'iPad Air', category: 'Tablets', status: 'In Stock', date: 'Dec 7, 2024' },
    { name: 'Surface Pro 9', category: 'Tablets', status: 'Out of Stock', date: 'Dec 8, 2024' },
    { name: 'Samsung Galaxy S24', category: 'Mobile', status: 'In Stock', date: 'Dec 6, 2024' },
  ]

  const users = [
    { name: 'John Smith', email: 'john.smith@ihuza.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { name: 'Sarah Johnson', email: 'sarah.j@ihuza.com', role: 'Manager', status: 'Active', lastLogin: '5 hours ago' },
    { name: 'Michael Brown', email: 'michael.brown@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '1 day ago' },
    { name: 'Emily Davis', email: 'emily.davis@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '2 days ago' },
    { name: 'Robert Wilson', email: 'robert.w@ihuza.com', role: 'Manager', status: 'Inactive', lastLogin: '1 week ago' },
  ]

  const activities = [
    { iconName: faBox, title: 'Product added to inventory', description: 'MacBook Pro 16" M3 (PROD2024001)', date: 'Dec 4, 2024' },
    { iconName: faUser, title: 'Product assigned to Sarah Johnson', description: 'Dell ThinkPad X1 Carbon (PROD2024001)', date: 'Dec 3, 2024' },
    { iconName: faUser, title: 'Product assigned to Michael Brown', description: 'Apple MacBook Air M2 (PROD2024001)', date: 'Dec 2, 2024' },
    { iconName: faExclamationTriangle, title: 'Product sent for maintenance', description: 'HP Spectre x360 - Screen replacement required', date: 'Jan 16, 2024' },
    { iconName: faUser, title: 'New user registered', description: 'Amanda White - Staff Member', date: 'Jan 14, 2024' },
  ]

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1280px',
      margin: '0 auto'
    }}>
      {/* System Overview */}
      <SystemOverview />

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Recent Products & Activity Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '32px',
        marginBottom: '32px'
      }}>
        {/* Recent Added Products */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827'
            }}>Recent Added Products</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            {products.slice(0, 6).map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '24px'
          }}>Quick Actions</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '24px' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '600', color: '#111827', fontSize: '14px' }}>View Users</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>View all registered users</p>
              </div>
              <button style={{
                marginLeft: 'auto',
                padding: '4px 12px',
                backgroundColor: '#2563eb',
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}>
                Go
              </button>
            </button>

            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <FontAwesomeIcon icon={faBox} style={{ fontSize: '24px' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '600', color: '#111827', fontSize: '14px' }}>View Products</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>View all registered products</p>
              </div>
              <button style={{
                marginLeft: 'auto',
                padding: '4px 12px',
                backgroundColor: '#2563eb',
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}>
                Go
              </button>
            </button>

            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: '24px' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '600', color: '#111827', fontSize: '14px' }}>View Assignments</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>View all product assignments</p>
              </div>
              <button style={{
                marginLeft: 'auto',
                padding: '4px 12px',
                backgroundColor: '#9333ea',
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7e22ce'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9333ea'}>
                Go
              </button>
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f3f4f6',
        marginBottom: '32px'
      }}>
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#111827'
          }}>Users</h2>
          <button style={{
            padding: '8px 16px',
            backgroundColor: '#2563eb',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}>
            Add User
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%' }}>
            <thead style={{
              backgroundColor: '#f9fafb',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <tr>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#4b5563',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>User</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#4b5563',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Role</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#4b5563',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Status</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#4b5563',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Last Login</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#4b5563',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UserRow key={idx} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '32px'
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827'
            }}>Recent Activity</h2>
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
            onMouseLeave={(e) => e.currentTarget.style.color = '#2563eb'}>View all</button>
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f3f4f6',
            overflow: 'hidden'
          }}>
            {activities.map((activity, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  borderBottom: idx !== activities.length - 1 ? '1px solid #e5e7eb' : 'none'
                }}
              >
                <div style={{ fontSize: '24px', flexShrink: 0, color: '#2563eb' }}>
                  <FontAwesomeIcon icon={activity.iconName} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontWeight: '600',
                    color: '#111827',
                    fontSize: '14px'
                  }}>{activity.title}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    marginTop: '4px'
                  }}>{activity.description}</p>
                  <p style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    marginTop: '8px'
                  }}>{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space for additional content if needed */}
        <div></div>
      </div>
    </div>
  )
}
