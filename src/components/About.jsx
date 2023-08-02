import React from 'react';
import '../styles.css'
function About() {
    const aboutMeText = "I am Shuchith B U, a passionate Computer Science Engineer pursuing my B.Tech degree at PES University in Bengaluru, India. With expertise in Java, Python, R, C, and C++, I have a strong grasp of engineering principles and excel in Software Engineering, Data Analytics, and Web Development. Having completed certifications in Google Data Analytics and The Complete 2023 Web Development Bootcamp, I am well-equipped to tackle diverse technical challenges. I take pride in having my research on \"Benefits of Hydroponic System using IoT\" published at the esteemed 2022 ICKES. Through projects like Hotel Management, Online Food Aggregator, ATM Simulator, Kafka Architecture, Bank Database Management, and IOT-based Smart Hydroponics, I've applied my knowledge practically. My contributions to Machine Learning and valuable industry experience as an Engineering Intern at Riskcovry and Research Intern at PESU-CIOT drive my ambition to make a meaningful impact in Computer Science and beyond, seeking continuous growth and innovation in the ever-evolving technology world.";
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>{aboutMeText}</p>
        </section>
    );
};

export default About;
