import "./Jobs.css";
import JobCard from "./JobCard.jsx";
import { useState, useEffect } from "react";
import { supabase } from "../configs/supabaseClient";
import { Circles } from "react-loader-spinner";
import styles from "./Jobfilter.module.css";
import Jobfilter from "./JobFilter";
import Filter from "./JobFilter";

function Jobs() {
  const link = "";
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [Selectedskills, setSelectedskills] = useState([]);
  const [Selectedlocation, setSelectedlocation] = useState(null);
  const [allSelected, setAllSelected] = useState([]);
  const [SelectedType, setSelectedType] = useState(null);

  const allSkills = [
    { value: "html", label: "html" },
    { value: "css", label: "css" },
    { value: "js", label: "js" },
    { value: "Azure", label: "Azure" },
    { value: "Tensorflow", label: "Tensorflow" },
  ];

  const type = [
    { value: "full-time", label: "Fulltime" },
    { value: "part-time", label: "Parttime" },
  ];

  const locations = [
    { value: "remote", label: "remote" },
    { value: "office", label: "office" },
  ];

  const handleSkillChange = (selectedOptions) => {
    setAllSelected([])

    
    const filteredData = allSelected.filter((each) =>
      each.job_skills.includes(selectedOptions[0].value)
    );
    
   
    setAllSelected( filteredData);
    // fetchJobs(selectedOptions);
  };
  const handleLocationChange = (selectedOptions) => {
    setAllSelected([])
    const filteredData = allSelected.filter((each) =>
      each.job_location.includes(selectedOptions.value)
    );
    console.log(filteredData);

    setAllSelected(filteredData);
    // fetchJobs(selectedOptions);
  };
  const handleTypechange = (selectedOptions) => {
    setAllSelected([])
    const filteredData = allSelected.filter((each) =>
      each.job_type.includes(selectedOptions[0].value)
    );

    setAllSelected( filteredData);
    // fetchJobs(selectedOptions);
  };

  
  async function getJobs() {
    setLoading(true);
    let { data, error } = await supabase.from("jobs").select("*");

    
    if (error) {
      setErrorMsg(
        "Could not get anonymous thought due to bad network. Please try again"
      );
      console.log("The error : ", error);
      setFetchedData(null);
      setAllSelected(null);
      setLoading(false);
    }
    if (data) {
      setFetchedData(data);
      setAllSelected(data);
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
        <div className="job-filter">
          {fetchedData && (
            <div className={styles.container}>
              <div className={styles.tags}>
                <Filter
                  label={"Skills"}
                  options={allSkills}
                  isMulti={true}
                  onChange={handleSkillChange}
                />
                <Filter
                  label={"Location"}
                  options={locations}
                  isMulti={false}
                  onChange={handleLocationChange}
                />
                <Filter
                  label={"Type"}
                  options={type}
                  isMulti={false}
                  onChange={handleTypechange}
                />
              </div>

              {/* <button className={styles.btn}>Filter</button> */}
            </div>
          )}
        </div>
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
        {allSelected &&
          allSelected.map((job) => {
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
