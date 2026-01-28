import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Providers</li>
          <li>Bookings</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="admin-content">
        <h1>Admin Dashboard</h1>

        <div className="admin-cards">
          <div className="admin-card">👥 Users: 120</div>
          <div className="admin-card">🧑‍🔧 Providers: 45</div>
          <div className="admin-card">📦 Active Orders: 18</div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
