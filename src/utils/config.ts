/**
 * A static configuration class containing all cosntant and common configuration for the application
 */
export default class Config {
    // TODO: Would like to check environment first instead of defaulting to localhost. But it works for now.
    public static BASE_API_PATH: string =
        process.env.NEXT_PUBLIC_API_BASE_PATH == undefined
            ? 'http://localhost:8080'
            : process.env.NEXT_PUBLIC_API_BASE_PATH;

    public static SOCKET_PATH: string =
        process.env.NEXT_PUBLIC_SOCKET_PATH == undefined
            ? 'http://localhost:8080'
            : process.env.NEXT_PUBLIC_SOCKET_PATH;

    public static APP_URL =
        process.env.NEXT_PUBLIC_APP_URL == undefined
            ? window.location.origin
            : process.env.NEXT_PUBLIC_APP_URL;
}
