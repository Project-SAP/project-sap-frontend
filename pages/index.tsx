import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callTestAPI}>Make API call</button>
            </main>
        </div>
    );
}

export default Home
