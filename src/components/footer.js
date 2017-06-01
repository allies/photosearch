import React from 'react';
import Clock from './clock'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Clock date={new Date()} />
            </div>
        );
    }
}

export default Footer;