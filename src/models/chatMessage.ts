export interface ChatMessage {
    source: string;     // Who is the message from?
    content: string;    // What is in the message?
    timestamp: Date;    // When was the message sent?
}
