import "./JobCard.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs";

dayjs.extend(relativeTime)

// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcffLSiQllBMUq55qU2GUbvJuY9o_IX5aGGnF501dEMr6bH2mrytYAZdMmvaoXdCfO0s&usqp=CAU'

function EmployerInfo({ image, employer_name, post_time, employment_type , link }) {
  return (
    <div className="employer_info_container">
      <div className="employer_info">
        <div className="employer_image">
          <img src={image} width={40} height={40} />
        </div>

        <div className="employer_name_container">
          <h3 className="employer_name">{employer_name}</h3>
          <p className="post_time">{dayjs(post_time).fromNow()}</p>
        </div>
      </div>

      <div className="employment_type">{employment_type}</div>
    </div>
  );
}

function Skill({ name }) {
  return <span className="skill_chip">{name}</span>;
}

function JobCard({
  location,
  title,
  description,
  image,
  employer_name,
  post_time,
  employment_type,
  skills,
  link,
}) {
   
  return (
    <div className="card">
      <div className="card_header">
        <span className="location_icon">
          <FaMapMarkerAlt />
        </span>

        <span className="job_location">{location}</span>
      </div>

      <div className="card_body">
        <h2 className="job_title"> 💼 {title}</h2>
        <p className="job_info">{description}</p>
      </div>

      <div className="card_footer">
        <EmployerInfo
          image={image}
          employer_name={employer_name}
          post_time={post_time}
          employment_type={employment_type}
        />
        <div className="skills">
          {skills?.map((skill) => {
            return <Skill name={skill} />;
          })}
        </div>
        <div className="apply">
        

        <a className="primary-button" target="_blank" href={link}> 💼 Apply Now</a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
