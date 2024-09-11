const { google } = require('goggleapis');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Load client secrets from local file
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json'); // __dirname variable is a global variable in Node.js that represents the directory name of the current module.
                                                                    // By combining __dirname with the string 'credentials.json', the code dynamically constructs an absolute path 
                                                                      // to the credentials.json file, regardless of where the script is executed from.
const TOKEN_PATH = path.join(__dirname, 'token.json');

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);


}