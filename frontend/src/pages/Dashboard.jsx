import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-base-100 text-base-content">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 border-r border-base-300">
        <div className="p-4 text-2xl font-bold">🛡️ SecureTest</div>
        <ul className="menu p-4 font-medium text-base">
          <li><a className="active">Dashboard</a></li>
          <li><a>Tests</a></li>
          <li><a>Users</a></li>
          <li><a>Reports</a></li>
          <li><a>Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex gap-4 items-center">
            <input type="text" placeholder="Search" className="input input-bordered input-sm w-48" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title">Total Tests</h2>
              <p className="text-2xl font-bold">128</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title">Active Users</h2>
              <p className="text-2xl font-bold">45</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title">Flags Detected</h2>
              <p className="text-2xl font-bold">13</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title">Reports</h2>
              <p className="text-2xl font-bold">22</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 bg-base-100 p-6 rounded-xl shadow border border-base-300">
          <h2 className="text-xl font-semibold mb-4">Recent Tests</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Attempts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math Final</td>
                  <td>2025-06-10</td>
                  <td><span className="badge badge-success">Completed</span></td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Physics Quiz</td>
                  <td>2025-06-08</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>Chemistry Lab</td>
                  <td>2025-06-06</td>
                  <td><span className="badge badge-error">Flagged</span></td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
