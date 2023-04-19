import React from 'react'
import styles from './Dashboardside.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Dashboardside = () => {
  return (
    <div className={styles.container}>
      <div className="logo">
        <img
          src="https://juxtopposed.github.io/realtimecolors/images/favicon.png"
          alt="logoface"
          className="logoface"
        />
        <a href="https://realtimecolors.com/" target="_blank">
          <h2 className="sitename">TalentBoom.</h2>
        </a>
      </div>

      <div className={styles.thelist}>
        <div className={styles.list}><DashboardIcon className={styles.icon}/>Dashboard</div>
        <div className={styles.list}><PendingIcon className={styles.icon}/>Pending Courses</div>
        <div className={styles.list}><CheckCircleOutlineIcon className={styles.icon}/>Completed Courses</div>
        <div className={styles.list}><AccountBoxIcon className={styles.icon}/>Profile</div>
        <div className={styles.list}><LogoutIcon className={styles.icon}/>Logout</div>
      </div>


    </div>
  )
}

export default Dashboardside