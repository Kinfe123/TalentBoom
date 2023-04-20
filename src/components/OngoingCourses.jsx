/* eslint-disable react/react-in-jsx-scope */
import "./OngoingCourses.css";
import { MdOutlineSearch } from "react-icons/md";
import CourseCard from "./CourseCard.jsx";
import { useUser } from "@clerk/clerk-react";

import { useState } from "react";


function NoResultFound() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <h1>No Results Found :(</h1>
    </div>
  );
}

function OngoingCourses({ name, courses }) {
  const {user} = useUser()
  const [displayedCourses, setDisplayedCourses] = useState(courses);

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
        <h2>Continue Learning</h2>
        <div className="courses">
          {displayedCourses.map((course) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <CourseCard
                image={course.image}
                title={course.title}
                progress={course.progress}
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

export default OngoingCourses;
