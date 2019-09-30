import React from 'react';
import PropTypes from 'prop-types';
import './PricingItem.css';

const PricingItem = ({ item }) => {
  const labelClasses = ['pricing-item-label'];
  const btnClasses = ['button'];
  if (item.label === 'Bronze') {
    labelClasses.push('label-bronze');
    btnClasses.push('btn-bronze');
  } else if (item.label === 'Silver') {
    labelClasses.push('label-silver');
    btnClasses.push('btn-silver');
  } else if (item.label === 'Gold') {
    labelClasses.push('label-gold');
    btnClasses.push('btn-gold');
  }
  return (
    <li className="pricing-list-item">
      <div className="pricing-item">
        <div className="image-box">
          <img src={item.icon} alt={item.label} className="image" />
        </div>
        <h2 className={labelClasses.join(' ')}>{item.label}</h2>
        <p className="capacity">{item.capacity} Storage</p>
        <p className="description">{item.description}</p>
        <p className="price">${item.price}/MO</p>
        <button type="button" className={btnClasses.join(' ')}>
          Get Started
        </button>
      </div>
    </li>
  );
};

PricingItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string,
    capacity: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default PricingItem;
