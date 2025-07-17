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
 
  const weddingCounts = { Accepted: 0, Declined: 0, Pending: 0 };
  const welcomeCounts = { Accepted: 0, Declined: 0, Pending: 0 };

    rsvps.forEach(guest => {
    weddingCounts[guest.rsvp?.response || 'Pending']++;
    welcomeCounts[guest.welcomeDinnerRsvp || 'Pending']++;
  });

  // Organize by group
  const groups = {};
  rsvps.forEach(guest => {
    const groupName = guest.group?.groupName || 'No Group';
    if (!groups[groupName]) groups[groupName] = [];
    groups[groupName].push(guest);
  });


  return (
    <div className="dashboard">
      <h1>RSVP Dashboard</h1>
      <div className="dashboard-counts">
        <h3>Wedding RSVP</h3>
        <p>Accepted: {weddingCounts.Accepted} | Declined: {weddingCounts.Declined} | Pending: {weddingCounts.Pending}</p>
        <h3>Welcome Dinner RSVP</h3>
        <p>Accepted: {welcomeCounts.Accepted} | Declined: {welcomeCounts.Declined} | Pending: {welcomeCounts.Pending}</p>
      </div>
      {Object.entries(groups).map(([groupName, guests]) => (
        <div key={groupName} className="dashboard-group">
          <h2>{groupName}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Welcome Dinner</th>
                <th>Wedding RSVP</th>
                <th>Meal Preference</th>
              </tr>
            </thead>
            <tbody>
              {guests.map(guest => (
                <tr key={guest._id}>
                  <td>{guest.fullName}</td>
                  <td>{guest.welcomeDinnerRsvp}</td>
                  <td>{guest.rsvp?.response || 'Pending'}</td>
                  <td>
                    {guest.rsvp?.mealPreference
                      ? `${guest.rsvp.mealPreference.firstCourse || ''} / ${guest.rsvp.mealPreference.secondCourse || ''}`
                      : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Dashboard