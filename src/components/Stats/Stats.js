import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';

const generateColor = () => {
  return `#${Math.random()
    .toString(16)
    .substr(-6)}`;
};

const ArrayElems = ({ array }) => {
  return array.map(el => {
    return (
      <li
        key={el.id}
        className="item"
        style={{ backgroundColor: generateColor() }}
      >
        <span className="label">{el.name}</span>
        <span className="percentage">{el.value}%</span>
      </li>
    );
  });
};

const Stats = ({ statsInfo }) => (
  <div>
    <section className="stats-section">
      <h2 className="title">{statsInfo.title}</h2>

      <ul className="stat-list">
        <ArrayElems array={statsInfo.stats} />
      </ul>
    </section>
  </div>
);

Stats.defaultProps = {
  statsInfo: PropTypes.shape({
    title: '',
  }),
};

Stats.propTypes = {
  statsInfo: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf.isRequired,
  }),
};

export default Stats;
