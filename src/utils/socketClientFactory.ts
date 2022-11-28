import { io, Socket } from 'socket.io-client';

// Ensure only a single socket connection is established per client
export default class SocketClientFactory {
    private static socketClient: Socket;
    private static socketPath: string =
        process.env.NEXT_PUBLIC_SOCKET_PATH == undefined
            ? ''
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
