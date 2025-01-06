import React, { useState } from 'react'
import axios from 'axios'


const SearchGuest = ({setGroupData}) => {

  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/guests/search>fullName=${fullName}`);
      setGroupData(res.data);

    } catch(err) {
      setError('Guest not found');
    }
  }
  return (
    <div>
      <input 
      type="text"
      placeholder="Enter full name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      />
      <button onClick={handdleSearch}>Search</button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default SearchGuest