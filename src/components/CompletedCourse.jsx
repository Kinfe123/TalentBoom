import "./OngoingCourses.css";
import { MdOutlineSearch } from "react-icons/md";
import CourseCard from "./CourseCard.jsx";

import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
// import courses from './Courses.json'

function NoResultFound({ name }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
    
      <h1>No Results Found :(</h1>
    </div>
  );
}

function CompletedCourses({ name, courses }) {
  const [displayedCourses, setDisplayedCourses] = useState(courses);
  const {user} = useUser()
  function displaySearchResults(term) {
    const filtered = courses.filter((course) => {
     
      if (term == "" || term == undefined) {
        return course;
      } else if (
        course.title.trim().toLowerCase().includes(term.trim().toLowerCase())
      ) {
        return course;
      }
    });

    setDisplayedCourses(filtered);
  }

  return (
    <div className="main_courses_container">
      <div className="welcome_container">
        <p className="welcome_back">Welcome back</p>
        <h1 className="my_name">{user.username}</h1>

        <div className="search_bar">
          <MdOutlineSearch className="search_icon" />
          <input
            placeholder="Search Courses"
            className="search_input"
            type="text"
            onChange={(e) => {
              displaySearchResults(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="courses_container">
        <h2 className="text-black text-lg space-x-1">Completed Courses</h2>
        <div className="courses">
          {displayedCourses?.map((course) => {
            return (
              <CourseCard
                image={course.image}
                title={course.title}
                progress={"100"}
                level={course.level}
              />
            );
          })}
          {displayedCourses.length == 0 && <NoResultFound />}
        </div>
      </div>
    </div>
  );
}

export default CompletedCourses;
