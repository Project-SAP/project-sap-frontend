import type { NextPage } from 'next';

const Header: NextPage = () => {
    const style = {
        backgroundColor: 'blue',
        color: 'white',
        width: '100%',
        height: '50px'
    }
    return (
        <div className='header' style={style}>
            <div style={{ margin: '10px' }}>
                CS: 498 - SAP
            </div>
        </div>
    );
}

export default Header;