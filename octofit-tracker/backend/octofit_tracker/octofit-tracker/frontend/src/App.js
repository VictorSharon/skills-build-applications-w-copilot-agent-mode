
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Track your fitness journey!</h5>
            <p className="card-text">Log activities, join teams, and climb the leaderboard.</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        {/* Bootstrap Table */}
        <h2 className="h4">Sample Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Duration (min)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iron Man</td>
              <td>Running</td>
              <td>30</td>
              <td><button className="btn btn-info btn-sm" onClick={() => setShowModal(true)}>Details</button></td>
            </tr>
            <tr>
              <td>Batman</td>
              <td>Cycling</td>
              <td>45</td>
              <td><button className="btn btn-info btn-sm" onClick={() => setShowModal(true)}>Details</button></td>
            </tr>
          </tbody>
        </table>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Activity Details</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>More details about the activity will go here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bootstrap Form */}
        <h2 className="h4 mt-5">Add Activity</h2>
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="user" className="form-label">User</label>
            <input type="text" className="form-control" id="user" placeholder="Enter user name" />
          </div>
          <div className="col-md-4">
            <label htmlFor="activity" className="form-label">Activity</label>
            <input type="text" className="form-control" id="activity" placeholder="Enter activity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="duration" className="form-label">Duration (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Add Activity</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
