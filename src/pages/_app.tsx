import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Config from './../utils/config';

export default function App({
    Component,
    pageProps,
}: AppProps<{ session: Session }>) {
    // tslint:disable-next-line:no-console
    console.log(`API_PATH: ${Config.BASE_API_PATH}`);
    // tslint:disable-next-line:no-console
    console.log(`SOCKET_PATH: ${Config.SOCKET_PATH}`);
    // tslint:disable-next-line:no-console
    console.log(`APP_URL: ${Config.APP_URL}`);
    
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
