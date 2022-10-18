import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import MainLayout from '../components/mainLayout';
import { DataModel } from '../utils/api/models/data.model';

const IndexPage: NextPage = () => {
    // Using states to allow relading data in the DOM
    let [renderedText, setRenderedText] = useState('');

    // TODO: Pull out to separate API class
    const callTestAPI = async () => {
        await fetch('/api/test')
            .then((res: Response) => res.json())
            .then((data: DataModel) => setRenderedText(data.message));
    };

    return (
        <>
            <MainLayout>
                <div className={styles.container}>
                    <h1 className="text-3xl font-bold underline">
                        Simple testing test
                    </h1>
                    <button data-testid="api-button" onClick={callTestAPI}>
                        Make API call
                    </button>
                    {renderedText != '' ? (
                        <p data-testid="api-output">{renderedText}</p>
                    ) : (
                        <p />
                    )}
                </div>
            </MainLayout>
        </>
    );
};

export default IndexPage;
