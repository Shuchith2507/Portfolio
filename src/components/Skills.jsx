import React from 'react';

function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'DBMS', 'ML', 'Data Analytics', 'BigData'];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
