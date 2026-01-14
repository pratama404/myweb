
const querystring = require('querystring');

// Usage: 
// 1. Set your CLIENT_ID and CLIENT_SECRET here temporarily
// 2. Run: node scripts/generate-spotify-token.js
// 3. Open the logged URL in browser, authorize, and copy the CODE
// 4. Paste the CODE back into the valid code variable below and re-run to get REFRESH_TOKEN

const CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_SPOTIFY_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000';

// --- STEP 1: GET CODE ---
const SCOPES = 'user-read-currently-playing user-read-recently-played';
const authUrl = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI,
    });

console.log('--- STEP 1: AUTHORIZE ---');
console.log('Open this URL in your browser:');
console.log(authUrl);
console.log('\nAfter authorizing, you will be redirected to localhost (it might fail as 404, thats fine).');
console.log('Copy the ?code=... part from the URL.');

// --- STEP 2: GET REFRESH TOKEN ---
// Uncomment below and paste your code to generate refresh token
/*
const CODE = 'PASTE_YOUR_CODE_HERE';

async function getRefreshToken() {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: CODE,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await response.json();
  console.log('\n--- STEP 2: YOUR TOKENS ---');
  console.log('Refresh Token (Save this to .env.local as SPOTIFY_REFRESH_TOKEN):');
  console.log(data.refresh_token);
}

getRefreshToken();
*/
