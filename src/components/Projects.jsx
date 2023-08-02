import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Hotel Management System',
            description: 'Developed a robust Java Full Stack application using Swing AWT, MySQL database, and implemented MVC, Singleton, Factory, and Chain of Responsibility design patterns for efficient and organized data management and user interface interaction.',
            url: 'https://github.com/Shuchith2507/Hotel-Management-System.git',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR87Vc_e4tP2bBRUQln3rnWaW7UoEAy_0zg&usqp=CAU',
        },
        {
            title: 'Food App',
            description: 'FoodApp is a web application that offers a delightful and user-friendly experience for exploring a variety of delicious dishes and placing orders. It features an intuitive menu, a convenient cart system, and a secure payment gateway for seamless transactions.',
            url: 'https://github.com/Shuchith2507/FoodApp.git',
            imageUrl: 'https://user-images.githubusercontent.com/115855123/257033242-90fec61b-3906-4791-931a-abfb7696ba81.png',
        },
        {
            title: 'Predicting Network Connectivity in Traffic Networks',
            description: 'Predicting network connectivity in traffic networks using SUMO involves simulating vehicle movements, while a Graph Neural Network (GNN) model can be applied to predict traffic patterns.',
            url: 'https://github.com/Shuchith2507/Connectivity-Traffic-Networks.git',
            imageUrl: 'https://www.researchgate.net/publication/347807150/figure/fig2/AS:973059062251522@1609006767571/The-graphical-user-interface-of-the-SUMO-based-simulator.ppm',
        },
        {
            title: 'Kafka Architecture',
            description: 'Kafka is a distributed streaming platform that allows real-time data processing by employing a publish-subscribe messaging system. In Python, developers can use the `kafka-python` library to produce and consume messages efficiently using simple architecture.',
            url: 'https://github.com/Shuchith2507/Kafka-architecture.git',
            imageUrl: 'https://static.javatpoint.com/python/images/kafka-in-python.png',
        },
        {
            title: 'MRI Reconstruction using GANs',
            description: 'MRI Reconstruction using GANs involves training a Generative Adversarial Network (GAN) model to generate high-quality MRI images from undersampled k-space data, enabling faster and more accurate image reconstruction, benefiting medical imaging and diagnosis.',
            url: 'https://github.com/Shuchith2507/MRI-image-Reconstruction.git',
            imageUrl: 'https://user-images.githubusercontent.com/115855123/257042294-e2e61a37-01e2-48ee-8092-6b7682c6add0.png',
        },
        {
            title: 'Monument Detection using GCP',
            description: 'Monument detection using GCP (Google Cloud Platform) employs machine learning models, such as object detection, to identify and recognize monuments or landmarks in images or videos, aiding in visual analysis and geospatial applications.',
            url: 'https://github.com/Shuchith2507/Monument-Detection-GCP.git',
            imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CEwudsSZy1nV3qCqenTMsw.jpeg',
        },
        {
            title: 'ATM Simulator using C',
            description: 'Creating an ATM simulator using C involves implementing functions for account balance, withdrawal, deposit, and pin validation to mimic ATM functionality within a console-based program. Users can interact with the program to perform typical ATM operations.',
            url: 'https://github.com/Shuchith2507/ATM-Simulator.git',
            imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--K8IHQlya--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cmhui7eby0pquxwwjrso.png',
        },
        {
            title: 'QR Generation and Detection',
            description: 'QR Generation and Detection refers to the process of creating QR codes using libraries like `qrcode` in Python and utilizing image processing techniques, such as those provided by `opencv`, to decode and extract information from QR codes.',
            url: 'https://github.com/Shuchith2507/QR-Code-Generator-Decoder.git',
            imageUrl: 'https://user-images.githubusercontent.com/115855123/257041982-89f5dbbb-a0f5-4403-9367-d3e55d1095d0.png',
        },

    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        {project.imageUrl && ( // Only render the image if imageUrl exists
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                        )}
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
