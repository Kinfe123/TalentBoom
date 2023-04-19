import React from "react";
import styles from  "./Card.module.css";

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardimage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.cardcontent}>
        <h3 className={styles.cardtitle}>{title}</h3>
        <p className={styles.carddescription}>{description}</p>
        <button className={styles.cardbutton}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
