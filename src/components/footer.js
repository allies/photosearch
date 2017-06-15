import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>&copy; 2017 | <a href="http://alliesinteractive.com/" title="Allies Interactive Services Pvt. Ltd.">Allies Interactive Services Pvt. Ltd</a>.<span className="docs"><a href="/documentation.pdf">*Docs</a></span></p>
            </div>
        );
    }
}

export default Footer;