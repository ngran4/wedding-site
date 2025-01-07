import React, { useState } from 'react'
import axios from 'axios'
import './SearchGuest.css'


const SearchGuest = ({setGroupData}) => {

  const [searchFullName, setSearchFullName] = useState("");
  const [error, setError] = useState("");


  const handleSearch = async () => {
  
      try {
        const res = await axios.get(`/api/guests/search`, { params: { fullName: searchFullName } });
        console.log(res, 'api response')
        setGroupData(res.data.groupMembers);
        setError("");
      } catch (err) {
        console.error("Error fetching group data:", err);
        console.log('Error Response:', err.response);
        setError(err.response?.data?.message || "Error fetching group data");
        setGroupData(null); // Clear group data
      }
  }

  return (
    <div className="search-guest__container">
      <input
        id="input-search-guest"
        type="text"
        placeholder="Enter your full name"
        value={searchFullName}
        onChange={(e) => setSearchFullName(e.target.value)}
      />
      <button className="btn search-btn" onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default SearchGuest