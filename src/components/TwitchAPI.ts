// const response = await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
//         method: 'POST',
//         headers: {
//           'Client-ID': 'YOUR_CLIENT_ID', // Replace with your actual client ID
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           type: subscriptionType,
//           version: '1',
//           condition: condition,
//           transport: {
//             method: 'websocket',
//             session_id: sessionId
//           }
//         })
//       });
