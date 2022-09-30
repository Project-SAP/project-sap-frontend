import type { NextPage } from 'next'
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const MainLayout: NextPage = (props: PropsWithChildren) => {
    const style = {
        display: 'flex',
        // TODO: Strange error when using this property as seen below. Still builds, however.
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'auto'
    };

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
