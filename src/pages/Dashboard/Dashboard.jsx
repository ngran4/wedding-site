import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        const res = await axios.get('/api/guests/rsvps');
        console.log(res.data, "<==== res.data")
        setRsvps(res.data);
      } catch (error) {
        console.error('Error fetching RSVPs:', error);
      }
    };

    fetchRsvps();
  }, []);
 
  return (
    <div className="dashboard">
    <h1>RSVP Dashboard</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Welcome Dinner Response</th>
          <th>RSVP Status</th>
        </tr>
      </thead>
      <tbody>
        {rsvps.map((guest) => (
          <tr key={guest._id}>
            <td>{guest.fullName}</td>
            <td>{guest.group?.groupName || 'N/A'}</td>
            <td>{guest.welcomeDinnerResponse}</td>
            <td>{guest.rsvp?.response || 'Pending'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Dashboard