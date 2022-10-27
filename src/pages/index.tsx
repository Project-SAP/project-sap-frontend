import type { NextPage } from 'next';
import { useState } from 'react';
import MainLayout from '../components/mainLayout';
import { DataModel } from '../utils/api/models/data.model';
import Head from 'next/head'

const IndexPage: NextPage = () => {
    // Using states to allow reloading data in the DOM
    let [renderedText, setRenderedText] = useState('');

    // TODO: Pull out to separate API class
    const callTestAPI = async () => {
        await fetch('/api/test')
            .then((res: Response) => res.json())
            .then((data: DataModel) => setRenderedText(data.message));
    };

    return (
        <>
            <Head>
                <title>CatSafe - Of the Wildcats, by the Wildcats, for the Wildcats!</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body>
                <MainLayout>
                    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-complementary to-dominant">
                        <div>
                            <h1 className="text-white text-9xl text-serif">CatSafe</h1>
                        </div>
                    </section>
                </MainLayout>
            </body>
            </>
    );
};

export default IndexPage;
