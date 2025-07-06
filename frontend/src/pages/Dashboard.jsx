import React, { useEffect, useState } from 'react';
import { useDashboardStore } from '../store/useDashboardStore';

const Dashboard = () => {
  const { dashdata, fetchDash } = useDashboardStore();
  const [activeTab, setActiveTab] = useState('created');

  useEffect(() => {
    fetchDash();
    const interval = setInterval(fetchDash, 5000);
    return () => clearInterval(interval);
  }, []);

  const createdTests = Array.isArray(dashdata) ? dashdata : [];
  const testResults = []; 

  useEffect(() => {
    if (createdTests.length === 0) {
      setActiveTab('results');
    }
  }, [createdTests]);

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-8">
        <div className="btn-group">
          <button
            className={`btn ${activeTab === 'created' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('created')}
          >
            Created Tests
          </button>
          <button
            className={`btn ${activeTab === 'results' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('results')}
          >
            My Results
          </button>
        </div>
      </div>

      {/* Created Tests */}
      {activeTab === 'created' && (
        <>
          {createdTests.length === 0 ? (
            <div className="text-center bg-base-100 p-10 rounded-xl shadow">
              <h2 className="text-2xl font-semibold">No Tests Created</h2>
              <p className="text-gray-500 mt-2">You haven’t created any tests yet.</p>
              <button className="btn btn-primary mt-4">Create a Test</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {createdTests.map((test, i) => (
                <div key={i} className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <h2 className="card-title">{test.name}</h2>
                    <p><strong>Created:</strong> {test.createdAt}</p>
                    <p><strong>Duration:</strong> {test.duration}</p>
                    <p><strong>Students:</strong> {test.completed.length} done / {test.total} total</p>

                    {/* Completed Results */}
                    {test.completed.length > 0 && (
                      <>
                        <p className="mt-2 font-semibold">Completed:</p>
                        <ul className="list-disc list-inside text-sm ml-2">
                          {test.completed.map((res, idx) => (
                            <li key={idx}>
                              {res.email?.replace(/(.{3}).+(@.+)/, '$1***$2')} — Score: {res.score}/{res.total}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* Attempting Users */}
                    {test.attempting.length > 0 && (
                      <>
                        <p className="mt-2 font-semibold">Currently Attempting:</p>
                        <ul className="list-disc list-inside text-sm ml-2">
                          {test.attempting.map((email, idx) => (
                            <li key={idx}>
                              {email.replace(/(.{3}).+(@.+)/, '$1***$2')}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* Invite Link */}
                    <div className="mt-3">
                      <label className="text-sm font-semibold">Invite Link:</label>
                      <div className="flex gap-2 mt-1">
                        <input
                          readOnly
                          value={test.link}
                          className="input input-sm input-bordered w-full"
                        />
                        <button
                          className="btn btn-sm btn-outline"
                          onClick={() => navigator.clipboard.writeText(test.link)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button className="btn btn-sm btn-primary">View</button>
                      <button className="btn btn-sm btn-warning">Edit</button>
                      <button className="btn btn-sm btn-error">Close</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Results Placeholder */}
      {activeTab === 'results' && (
        <>
          {testResults.length === 0 ? (
            <div className="text-center bg-base-100 p-10 rounded-xl shadow">
              <h2 className="text-2xl font-semibold">No Results Found</h2>
              <p className="text-gray-500 mt-2">You haven’t taken any tests yet.</p>
              <button className="btn btn-secondary mt-4">Join a Test</button>
            </div>
          ) : (
            <div className="bg-base-100 p-4 rounded-xl shadow overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {testResults.map((res, i) => (
                    <tr key={i}>
                      <td>{res.name}</td>
                      <td>{res.date}</td>
                      <td><span className="badge badge-success">{res.status}</span></td>
                      <td>{res.score}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
