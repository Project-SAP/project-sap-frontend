import { io, Socket } from 'socket.io-client';

/**
 *  Ensure only a single socket connection is established per client
 *  Required since pages will be reloaded regularly. Resulting in a new connection attempt.
 */
export default class SocketClientFactory {
    private static socketClient: Socket;

    // Get path from envionment variable. Default to dev path if not found since localhost isn't a security concern.
    // TODO: Would like to check environment first instead of defaulting to localhost. But it works for now.
    private static socketPath: string =
        process.env.NEXT_PUBLIC_SOCKET_PATH == undefined
            ? 'http://localhost:8080'
            : process.env.NEXT_PUBLIC_SOCKET_PATH;

    private constructor() {}

    public static getInstance(): Socket {
        if (!SocketClientFactory.socketClient) {
            SocketClientFactory.socketClient = io(
                SocketClientFactory.socketPath
            );
        }

        return SocketClientFactory.socketClient;
    }
}
