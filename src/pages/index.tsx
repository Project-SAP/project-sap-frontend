import type { NextPage } from 'next'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import MainLayout from '../components/mainLayout';
import TestApiHandler from '../api/TestApiHandler';

const IndexPage: NextPage = () => {

    const apiHandler = new TestApiHandler();

    // Using states to allow relading data in the DOM
    let [renderedText, setRenderedText] = useState("");

    // TODO: Pull out to separate API class
    const callTestAPI = async () => {
        const newText = await apiHandler.getDataMessage();
        setRenderedText(newText);
    };

    return (
        <>
            <MainLayout>
                <div className={styles.container}>
                    <p>Simple testing test</p>
                    <button onClick={callTestAPI}>Make API call</button>
                    {renderedText != "" ?
                        <p className='api-output'>
                            {renderedText}
                        </p> :
                        <p></p>
                    }
                </div>
            </MainLayout>
        </>
    );
}

export default IndexPage;
