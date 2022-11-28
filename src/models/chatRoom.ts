import { ChatMessage } from './chatMessage';

export interface ChatRoom {
    id: string; // ID for room?
    peerId: string; // ID for peer?
    messages: ChatMessage[]; // List of messages sent and received?
}