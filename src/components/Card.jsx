import React from "react";
import styles from  "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ imageSrc, title, description, buttonText , people }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/skills/${title}`)
    }
    return (
    <div className={styles.card}>
      <div className={styles.cardimage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.cardcontent}>
        <h3 className={styles.cardtitle}>{title}</h3>
        <p className={styles.carddescription}>{description}</p>
        <p className={styles.number}>Number Of People - {people}</p>
        <button onClick={handleClick}className={styles.cardbutton}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;