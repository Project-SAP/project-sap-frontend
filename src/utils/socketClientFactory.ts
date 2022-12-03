import { io, Socket } from 'socket.io-client';
import Config from './config';

/**
 *  Ensure only a single socket connection is established per client
 *  Required since pages will be reloaded regularly. Resulting in a new connection attempt.
 */
export default class SocketClientFactory {
    private static socketClient: Socket;

    private constructor() {}

    // Get singleton instance
    // TODO: Determine if this is even required
    public static getInstance(): Socket {
        if (!SocketClientFactory.socketClient) {
            SocketClientFactory.socketClient = io(Config.SOCKET_PATH);
        }

        return SocketClientFactory.socketClient;
    }

    // Get a new non-singleton instance. Keeps initialization configuration abstracted away from business logic.
    public static getNewInstance(): Socket {
        return io(Config.SOCKET_PATH);
    }
}
