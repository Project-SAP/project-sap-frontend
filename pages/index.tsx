import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from './../components/mainLayout';

const IndexPage: NextPage = () => {
    // TODO: Pull out to separate API class
    const callTestAPI = async () => {
        try {
            const res = await fetch(`${process.env.API_BASE_PATH}/test`);
            const data = await res.text();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <MainLayout>
            <div className={styles.container}>
                <p>Simple testing test</p>
                <button onClick={callTestAPI}>Make API call</button>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
