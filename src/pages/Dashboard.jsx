import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBox, faCheckCircle, faExclamationTriangle, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import StatCard from '../components/StatCard'
import SystemOverview from '../components/SystemOverview'
import ProductCard from '../components/ProductCard'
import UserRow from '../components/UserRow'
import Button from '../components/Button'
import DashboardCard from '../components/DashboardCard'

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

      {/* Recent Added Products - full width horizontal row */}
      <div style={{
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '16px'
        }}>Recent Added Products</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {products.map((product, idx) => (
            <div key={idx}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <DashboardCard title="Users" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div />
          <Button onClick={() => {}} variant="primary">Add User</Button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%' }}>
            <thead style={{ backgroundColor: 'var(--muted-100)', borderBottom: '1px solid var(--muted-200)' }}>
              <tr>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Login</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UserRow key={idx} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>

      {/* Recent Activity & Quick Actions (below Users) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginTop: '0px'
      }}>
        {/* Recent Activity */}
        <DashboardCard title="Recent Activity">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activities.map((activity, idx) => (
              <div key={idx} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--muted-200)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '18px', color: 'var(--primary-500)', flexShrink: 0 }}>
                  <FontAwesomeIcon icon={activity.iconName} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '13px' }}>{activity.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-400)', marginTop: '4px' }}>{activity.description}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-400)', marginTop: '6px' }}>{activity.date}</div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Quick Actions */}
        <DashboardCard title="Quick Actions">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '18px', color: 'var(--primary-600)' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>View Users</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-400)' }}>View all users</div>
                </div>
              </div>
              <Button variant="primary" style={{ padding: '6px 10px', fontSize: '12px' }}>Go</Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBox} style={{ fontSize: '18px', color: 'var(--primary-600)' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>View Products</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-400)' }}>View all products</div>
                </div>
              </div>
              <Button variant="primary" style={{ padding: '6px 10px', fontSize: '12px' }}>Go</Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: '18px', color: 'var(--primary-600)' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>View Assignments</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-400)' }}>View assignments</div>
                </div>
              </div>
              <Button variant="secondary" style={{ padding: '6px 10px', fontSize: '12px' }}>Go</Button>
            </div>
          </div>
        </DashboardCard>
      </div>

    </div>
  )
}
