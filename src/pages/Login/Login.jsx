import React, {useState} from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from '../components/GoogleLogin'; 

function Login() {
  const [user, setUser] = useState();

  return (
    <GoogleOAuthProvider clientId="163584497548-6uovpebrvioqdepje90dinuagvi60ulc.apps.googleusercontent.com">
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
    </GoogleOAuthProvider>
  );
}