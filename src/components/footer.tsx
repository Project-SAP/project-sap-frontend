import type { NextPage } from 'next';
import { CSSProperties } from 'react';

const Footer: NextPage = () => {
    const style = {
        backgroundColor: 'blue',
        color: 'white',
        position: 'absolute',
        width: '100%',
        height: '30px',
        bottom: 0,
    } as CSSProperties;

    return (
        <div className='footer' style={style}>
            <div style={{ margin: '5px' }}>
                CS: 498 - SAP
            </div>
        </div>
    );
}

export default Footer;