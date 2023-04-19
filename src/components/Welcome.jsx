import React from 'react'
import styles from './Welcome.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import study from '../assets/work.svg'

const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.notesection}>
                <h3>Welcome back.</h3>
                <h1>Jamie Lee</h1>

                <div className={styles.bottomlink}>
                    <p>Go back to courses</p>
                    <ArrowRightAltIcon />
                </div>
            </div>

            <div className={styles.imgcontainer}>
                <img src={study} alt="person studying"/>
            </div>
        </div>
    )
}

export default Welcome;