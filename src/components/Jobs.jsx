import "./Jobs.css";
import JobCard from "./JobCard.jsx";
import { useState, useEffect } from "react";
import { supabase } from "../configs/supabaseClient";
import { Circles } from "react-loader-spinner";

function Jobs() {
  const link = "";
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    setLoading(true);
    let { data, error } = await supabase.from("jobs").select("*");

    console.log("the data is : ", data);
    if (error) {
      setErrorMsg(
        "Could not get anonymous thought due to bad network. Please try again"
      );
      console.log("The error : ", error);
      setFetchedData(null);
      setLoading(false);
    }
    if (data) {
      setFetchedData(data);
      setLoading(false);
      setErrorMsg(null);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="container">
      <div className="info_container">
        <h1 className="title">Find a job that suits you</h1>
        <p className="intro">
          Finding a job should not be a full-time endeavour. Tell us what you're
          searching for and we'll find you a job
        </p>

        <div className="loading-center">
          {loading && (
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
        </div>
      </div>

      <div className="jobs_container">
        {/* <JobCard
          location="Addis Ababa, Ethiopia"
          title="Senior UX Designer at Costco ltd"
          description="Lorem ipsum and that kinda shit you'll just be doing work and just farming and all that it's not so hard man you just have to do it it's really simple"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcffLSiQllBMUq55qU2GUbvJuY9o_IX5aGGnF501dEMr6bH2mrytYAZdMmvaoXdCfO0s&usqp=CAU"
          employer_name="Costco ltd"
          post_time="19 hours ago"
          employment_type="Part-time"
          skills={[{ name: "React" }, { name: "Web Design" }]}
        /> */}
        {fetchedData &&
          fetchedData.map((job) => {
            return (
              <JobCard
                location={job.job_location}
                title={job.job_title}
                description={job.job_text}
                image={job.job_owner_img}
                employer_name={job.job_owner}
                post_time={job.job_post}
                employment_type={job.job_type}
                skills={job.job_skills}
                link={job.job_link}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Jobs;
