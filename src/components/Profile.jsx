import React, { useState } from 'react';
import './Profile.css'

const ProfilePage = () => {
  const [avatar, setAvatar] = useState(''); 

  const handleAvatarUpload = (e) => {
    // file upload logic
  };

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <div className="avatar-container">
          {avatar ? (
            <img src={avatar} alt="Profile Avatar" className="avatar" />
          ) : (
            <div className="avatar-placeholder">
              <span>Upload a Profile Picture</span>
              <input type="file" accept="image/*" onChange={handleAvatarUpload} />
            </div>
          )}
        </div>
        <h1 className="username">John Doe</h1>
      </div>
      <div className="bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, ligula vitae cursus ultrices, velit velit pulvinar nibh, sit amet sagittis nunc lectus vel dolor.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
