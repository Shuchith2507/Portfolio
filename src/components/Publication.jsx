import React from 'react';

const Publication = () => {
    return (
        <div className="publication-page">
            <h2>Publication Showcase</h2>
            <div className="publication-container">
                {/* Replace 'your_publication_url_here' with the actual URL of your publication */}
                <iframe
                    src="https://doi.org/10.1109/ICKECS56523.2022.10060221"
                    title="Publication Showcase"
                    frameborder="0"
                    width="100%"
                    height="600px"
                ></iframe>
            </div>
        </div>
    );
};

export default Publication;
