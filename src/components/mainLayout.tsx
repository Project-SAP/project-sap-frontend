import type { NextPage } from 'next'
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

// NextJs requires more explicit typing for props when defining a `NextPage`
const MainLayout: NextPage<PropsWithChildren> = (props: PropsWithChildren) => {
    return (
        <>
            <div>
                <Header />
                {props.children}
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;
