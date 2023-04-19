import React from 'react'
import styles from './Skilldetail.module.css'
import { ArrowRightAlt } from '@mui/icons-material';
import react from '../assets/react.svg'

const Skilldetail = () => {

    const skill2 = {
        title: "React",
        imageUrl: react,
        description: "React is a popular JavaScript library used for building user interfaces.",
        roadmapLink: "https://reactjs.org/docs/getting-started.html",
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <img src={skill2.imageUrl} alt="react image" />
            </div>

            <h1>{skill2.title}</h1>

            <p>
                {skill2.description}  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Et, accusamus, hic doloremque asperiores laborum quia sequi expedita ullam laboriosam eos,
                deserunt repellat consequatur dolor odio vel harum blanditiis illum. Aliquid!
            </p>
            <p>
                Mentor: John Doe
            </p>
            <p>
                Cohort: #15
            </p>

            <div className={styles.card}>
                <a href={skill2.roadmapLink}>RoadMap Link</a>
                <ArrowRightAlt />
            </div>

            <div className={styles.btn}>
                Enroll Now
            </div>

        </div>
    )
}

export default Skilldetail