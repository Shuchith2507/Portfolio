import React from 'react';

const CertificatesPage = () => {
    // Replace the certificate data with the actual URLs and names of your certificates
    const certificates = [
        {
            url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~B49XAS3RE3QJ/CERTIFICATE_LANDING_PAGE~B49XAS3RE3QJ.jpeg',
            name: 'Data Analytics',
        },
        {
            url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0f8307aa-4230-440b-a47c-780c809a88ea.jpg?v=1690974684000',
            name: 'Web Development with MERN',
        },
        {
            url: 'https://www.credly.com/badges/c2d2c89e-feb2-4ef6-bf86-827814fb1620',
            name: 'Amazon Web Service',
        },
    ];

    return (
        <div className="certificates-page">
            <h2>Certificates Showcase</h2>
            <div className="certificates-container">
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate">
                        <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                            {certificate.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificatesPage;
