import React, {useState} from 'react';
import axios from 'axios';
import GoogleLogin from '../components/GoogleLogin'; 

function Login() {
  const [user, setUser] = useState();

  return (

      <div className="Login">
        <h1>Login</h1>
        <GoogleLogin setUser={setUser} />
        {user && (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
      </div>
  );
}