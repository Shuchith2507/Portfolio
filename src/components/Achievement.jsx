import React from 'react';

const Achievement = () => {
    return (
        <div className="achievement-page">
            <h2>Won BugsandByte Hackathon</h2>
            <div className="linkedin-container">
                {/* Replace 'your_embed_code_here' with the actual LinkedIn post embed code */}
                <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6992801132976713728" height="955" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>' }} />
            </div>
        </div>
    );
};

export default Achievement;
