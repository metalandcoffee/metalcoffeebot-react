export default class TwitchWebSocket {

    private ws: WebSocket | null = null;
    private readonly url = 'wss://eventsub.wss.twitch.tv/ws';

    // i want to see keepalives and then work on how to
    // handle heartbeat and then reconnecting if connection
    // is assumed dead
    // I need to subscribe to an event or the connection will
    // close in 10 seconds


    constructor() {}
    connect() {
        try {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = (e) => {
                console.log(e);
                console.log('Connected to Twitch EventSub WebSocket');
            };

            this.ws.onmessage = (e) => {
                // call method that evaluates message type.
                const message = JSON.parse(e.data);
                console.log(message);
            };
        } catch (error) {
            console.error('Failed to connect:', error);
        }
    }

    disconnect() {
        this.ws?.close();
        console.log('Disconnected from Twitch EventSub WebSocket');
    }

const response = await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
        method: 'POST',
        headers: {
          'Client-ID': 'YOUR_CLIENT_ID', // Replace with your actual client ID
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: subscriptionType,
          version: '1',
          condition: condition,
          transport: {
            method: 'websocket',
            session_id: sessionId
          }
        })
      });

//     const resetKeepaliveTimeout = (timeout) => {
//     if (keepaliveTimeoutRef.current) {
//       clearTimeout(keepaliveTimeoutRef.current);
//     }
    
//     // Set timeout to close connection if no keepalive received
//     keepaliveTimeoutRef.current = setTimeout(() => {
//       console.warn('Keepalive timeout - connection may be stale');
//       disconnect();
//     }, timeout + 1000); // Add 1 second buffer
//   };
}

// class Professor
//     properties
//         name
//         teaches
//     methods
//         grade(paper)
//         introduceSelf()