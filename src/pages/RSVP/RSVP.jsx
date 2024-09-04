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




export default RSVP