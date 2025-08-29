export default class TwitchWebSocket {

    // Using TypeScript feature "parameter properties"
    constructor(
        private setSessionId: (sessionId: string) => void,
        private ws: WebSocket | null = null,
        private readonly url = 'wss://eventsub.wss.twitch.tv/ws'
    ) {
        this.setSessionId = setSessionId;
    }

    connect() {
        try {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = (e) => {
                console.log(e);
                console.log( 'Connected to Twitch EventSub WebSocket');
            };

            this.ws.onmessage = (e) => {
                // call method that evaluates message type.
                // if its welcome message, get session id and save it.
                const message = JSON.parse(e.data);
                console.log(message);
                switch (message.metadata.message_type) {
                    case 'session_welcome':
                    // Store the session ID for creating subscriptions
                    this.setSessionId(message.payload.session.id);
                }
                
            };
        } catch (error) {
            console.error('Failed to connect:', error);
        }
    }

    disconnect() {
        this.ws?.close();
        console.log('Disconnected from Twitch EventSub WebSocket');
    }

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