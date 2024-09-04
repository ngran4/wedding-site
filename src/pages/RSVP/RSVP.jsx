import React, { useState } from 'react';
import axios from 'axios';

const RSVP = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: ''});
  const [group, setGroup] = useState(null);

  // handle input changes and update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`/api/guests/group?firstName=${formData.firstName}&lastName=${formData.lastName}`); //***group id instead of first and last name */
      setGroup(res.data); // update group state with fetched data
    } catch (error) {
      alert('error fetching group details');
    }
  }

  return (
    <div>
      <h1>RSVP Here</h1>
      {!group ? ( 
        // if group data not available, show initial form, otherwise show group RSVP form
      <form>
        {/* input for putting first and last name same input box? */}
        <input type="text" name="name" placeholder="Name" required /> 
        <button type='submit'>Find RSVP</button>
      </form>

      ) : (
        <GroupRSVPForm group={group} />
      )}

    </div>
  )
}


const GroupRSVPForm = ({ group }) => {
  const [rsvpData, setRsvpData] = useState(group.members.map(member => ({
    ...member,
    attending: '',
    mealChoice: '',
    specialRequests: ''
  })));

  const handleChange = (index, e) => {
    const newRsvpData = [...rsvpData]; // create copy of rsvp data state
    newRsvpData[index][e.target.name] = e.target.value;
    setRsvpData(newRsvpData); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/guests/rsvp', rsvpData);
      alert('RSVP submitted successfully');
    } catch (error) {
      alert('error submitting RSVP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {rsvpData.map((member, idx) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <label>
            Attending:
            <div>
              <label>
                <input type="radio" name="attending" value={true} onChange={(e) => handleChange(idx, e)} required />
                Yes
              </label>
              <label>
                <input type="radio" name="attending" value={false} onChange={(e) => handleChange(idx, e)} required />
                No
              </label>
            </div>
          </label>
          <label>
            Meal Choice:
            <input type="text" name="mealChoice" onChange={(e) => handleChange(idx, e)} required />
          </label>
          <label>
            Special Requests:
            <input type="text" name="specialRequests" onChange={(e) => handleChange(idx, e)} />
          </label>

        </div>
      ))}
      <button type='submit'>Submit RSVP</button>
    </form>
  )
}

export default RSVP