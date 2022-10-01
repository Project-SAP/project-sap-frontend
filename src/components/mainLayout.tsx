import type { NextPage } from 'next'
import { CSSProperties, PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

// NextJs requires more explicit typing for props when defining a `NextPage`
const MainLayout: NextPage<PropsWithChildren> = (props: PropsWithChildren) => {
    const style = {
        display: 'flex',
        // TODO: Strange error when using this property as seen below. Still builds, however.
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'auto'
    } as CSSProperties;

    return (
        <>
            <div style={style}>
                <Header />
                {props.children}
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;
