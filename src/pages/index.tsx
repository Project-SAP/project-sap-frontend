import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import MainLayout from '../components/mainLayout';
import TestApiHandler from '../api/TestApiHandler';

const IndexPage: NextPage = () => {

    const apiHandler = new TestApiHandler();

    // Using states to allow relading data in the DOM
    let [renderedText, setRenderedText] = useState("");

    // TODO: Pull out to separate API class
    const callTestAPI = async () => {
        const data = await apiHandler.getDataMessage();
        setRenderedText(data.message);
    };

    return (
        <>
            <MainLayout>
                <div className={styles.container}>
                    <p>Simple testing test</p>
                    <button data-testid='api-button' onClick={callTestAPI}>Make API call</button>
                    {renderedText != "" ?
                        <p data-testid='api-output'>
                            {renderedText}
                        </p> :
                        <p />
                    }
                </div>
            </MainLayout>
        </>
    );
}

export default IndexPage;
