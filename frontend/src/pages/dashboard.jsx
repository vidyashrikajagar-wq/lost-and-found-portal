import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLost: 0,
    totalFound: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/dashboard");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1>👋 Welcome Back</h1>

        <p>
          Manage your campus Lost & Found activities from one place.
        </p>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">

          <h2>👥</h2>

          <h3>{stats.totalUsers}</h3>

          <p>Registered Users</p>

        </div>

        <div className="stat-card">

          <h2>📢</h2>

          <h3>{stats.totalLost}</h3>

          <p>Lost Reports</p>

        </div>

        <div className="stat-card">

          <h2>📦</h2>

          <h3>{stats.totalFound}</h3>

          <p>Found Reports</p>

        </div>

      </div>

      {/* Quick Actions */}

      <h2 className="section-title">Quick Actions</h2>

      <div className="action-grid">

        <Link to="/lostitems" className="action-btn">
          📢 Report Lost Item
        </Link>

        <Link to="/founditems" className="action-btn">
          📦 Report Found Item
        </Link>

      </div>

      {/* Recent Activity */}

      <div className="recent-card">

        <h2>📌 Recent Activity</h2>

        <ul>

          <li>📱 Laptop reported lost in Library</li>

          <li>🎒 Backpack found near Canteen</li>

          <li>🪪 ID Card recovered successfully</li>

        </ul>

      </div>

    </div>
  );
}

export default Dashboard;