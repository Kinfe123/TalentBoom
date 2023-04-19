import React, { useEffect, useState } from "react";
import styles from "./Skilldetail.module.css";
// import { ArrowRightAlt } from "@mui/icons-material";
// import react from "../assets/react.svg";
import { useLocation, useRoutes  } from "react-router-dom";
import { filter } from "@syncfusion/ej2/maps";

const Skilldetail = () => {
    const [skill2 , setSkill2] = useState([])
    // const [skill , setSkill] = useState()
    const location = useLocation()
    const exact =  location.pathname.split('/')
    // setSkill(exact[exact.length - 1])
    const skill = exact[exact.length - 1]
    // const routes = useRoutes()
 
    
    const skillsArray = [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLSLTICgPeyt_24tXXcdmwvC7B0jYwZji6wHdcOm6A&s',
          title: "React",
          description:
            "React is a JavaScript library used for building user interfaces or UI components. It was developed by Facebook and is widely used in web development. It allows developers to build reusable UI components and easily manipulate them based on data changes, making it a popular choice for building dynamic web applications. React uses a component-based architecture where each component manages its own state and can be easily integrated with other components.",
          numStudents: 12,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLSLTICgPeyt_24tXXcdmwvC7B0jYwZji6wHdcOm6A&s',
          title: "Angular",
          description:
            "Angular is a TypeScript-based open-source framework used for developing web and mobile applications. It was developed by Google and provides a complete solution for building complex applications. Angular is built on top of TypeScript, which adds static typing and other features to JavaScript, making it easier to write and maintain larger applications.",
          numStudents: 9,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLSLTICgPeyt_24tXXcdmwvC7B0jYwZji6wHdcOm6A&s',
          title: "Angular",
          description:
            "Angular is a TypeScript-based open-source framework used for developing web and mobile applications. It was developed by Google and provides a complete solution for building complex applications. Angular is built on top of TypeScript, which adds static typing and other features to JavaScript, making it easier to write and maintain larger applications.",
          numStudents: 9,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLSLTICgPeyt_24tXXcdmwvC7B0jYwZji6wHdcOm6A&s',
          title: "Angular",
          description:
            "Angular is a TypeScript-based open-source framework used for developing web and mobile applications. It was developed by Google and provides a complete solution for building complex applications. Angular is built on top of TypeScript, which adds static typing and other features to JavaScript, making it easier to write and maintain larger applications.",
          numStudents: 9,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLSLTICgPeyt_24tXXcdmwvC7B0jYwZji6wHdcOm6A&s',
          title: "Angular",
          description:
            "Angular is a TypeScript-based open-source framework used for developing web and mobile applications. It was developed by Google and provides a complete solution for building complex applications. Angular is built on top of TypeScript, which adds static typing and other features to JavaScript, making it easier to write and maintain larger applications.",
          numStudents: 9,
        },
      ];


    const filtered = skillsArray.filter(each => each.title === skill)
    console.log(filtered)

  return (
    <div className={styles.container}>

     
      <div className={styles.imgcontainer}>
        <img src={filtered[0].image} alt="react image" />
      </div>

      <h1>{filtered[0].title}</h1>

      <p>
        {filtered[0].description} 
        
      </p>
      <p>Mentor: John Doe</p>
      <p>Cohort: #15</p>

      <div className={styles.card}>
        <a href={skill2.roadmapLink}>RoadMap Link</a>
        {/* <ArrowRightAlt /> */}
      </div>

      <div className={styles.btn}>Enroll Now</div>
    </div>
  );
};

export default Skilldetail;
