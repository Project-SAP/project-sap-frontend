import App, { AppContext, AppInitialProps } from 'next/app'

/**
 * Custom app class to override default styling and configuration.
 * Done because there's a stupid margin around all pages without it.
 */
class SapApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext): Promise<{ pageProps: {}; }> {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
}

export default SapApp;