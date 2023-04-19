import * as React from "react";

import styles from "./Skills.module.css";
import Card from "./Card";

const Skills = () => {
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
  return (
    <div className={styles.page}>
      {skillsArray.map((obj) => (
        <Card
          title={obj.title}
          description={obj.description}
          buttonText="Enroll now"
          imageSrc={obj.image}
          key={obj.title}
          people={obj.numStudents}
        />
      ))}
    </div>
  );
};
export default Skills;
