
import React, { useState } from "react";

const JobList = () => {
  const [search, setSearch] = useState("");

  const jobs = [
    { id: 1, title: "Software Engineer", department: "Information Technology", location: "Agartala", status: "Open" },
    { id: 2, title: "HR Executive", department: "Human Resources", location: "Udaipur", status: "Closed" },
    { id: 3, title: "Accountant", department: "Finance", location: "Kailashahar", status: "Open" },
    { id: 4, title: "Marketing Manager", department: "Marketing", location: "Agartala", status: "Open" },
    { id: 5, title: "Research Analyst", department: "R&D", location: "Dharmanagar", status: "Closed" },
    { id: 6, title: "PR Officer", department: "Public Relations", location: "Khowai", status: "Open" },
    { id: 7, title: "Legal Advisor", department: "Legal", location: "Agartala", status: "Open" },
    { id: 8, title: "Engineer", department: "Engineering", location: "Ambassa", status: "Closed" },
    { id: 9, title: "Support Executive", department: "Customer Support", location: "Belonia", status: "Open" },
    { id: 10, title: "Admin Assistant", department: "Administration", location: "Sabroom", status: "Open" }
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", width: "230%", boxSizing: "border-box" }}>
      <h2>Job List</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, department or location"
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#5a2d0c", color: "white" }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Job Title</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td style={tdStyle}>{job.id}</td>
                <td style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.department}</td>
                <td style={tdStyle}>{job.location}</td>
                <td style={{ ...tdStyle, color: job.status === "Open" ? "green" : "red", fontWeight: "bold" }}>
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  textAlign: "left"
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};


import React, { useState } from "react";

const JobList = () => {
  const [search, setSearch] = useState("");

  const jobs = [
    { id: 1, title: "Software Engineer", department: "Information Technology", location: "Agartala", status: "Open" },
    { id: 2, title: "HR Executive", department: "Human Resources", location: "Udaipur", status: "Closed" },
    { id: 3, title: "Accountant", department: "Finance", location: "Kailashahar", status: "Open" },
    { id: 4, title: "Marketing Manager", department: "Marketing", location: "Agartala", status: "Open" },
    { id: 5, title: "Research Analyst", department: "R&D", location: "Dharmanagar", status: "Closed" },
    { id: 6, title: "PR Officer", department: "Public Relations", location: "Khowai", status: "Open" },
    { id: 7, title: "Legal Advisor", department: "Legal", location: "Agartala", status: "Open" },
    { id: 8, title: "Engineer", department: "Engineering", location: "Ambassa", status: "Closed" },
    { id: 9, title: "Support Executive", department: "Customer Support", location: "Belonia", status: "Open" },
    { id: 10, title: "Admin Assistant", department: "Administration", location: "Sabroom", status: "Open" }
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", width: "230%", boxSizing: "border-box" }}>
      <h2>Job List</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, department or location"
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#5a2d0c", color: "white" }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Job Title</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td style={tdStyle}>{job.id}</td>
                <td style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.department}</td>
                <td style={tdStyle}>{job.location}</td>
                <td style={{ ...tdStyle, color: job.status === "Open" ? "green" : "red", fontWeight: "bold" }}>
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  textAlign: "left"
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};


export default JobList;