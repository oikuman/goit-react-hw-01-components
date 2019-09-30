import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ user }) => (
  <div>
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt="user avatar" className="avatar" />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li className="list-item">
          <span className="stats-label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className="list-item">
          <span className="stats-label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className="list-item">
          <span className="stats-label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
