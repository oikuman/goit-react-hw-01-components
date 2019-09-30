import React from 'react';
import PropTypes from 'prop-types';
import pricingPlan from './pricing-plan.json';
import iconBronze from './assets/bronze-icon.png';
import iconSilver from './assets/silver-icon.png';
import iconGold from './assets/gold-icon.png';
import './PricingPlan.css';
import PricingItem from '../PricingItem';

pricingPlan[0].icon = iconBronze;
pricingPlan[1].icon = iconSilver;
pricingPlan[2].icon = iconGold;

const PricingItems = ({ items }) => {
  return items.map(item => <PricingItem key={item.id} item={item} />);
};

const PricingPlan = () => (
  <ul className="pricing-plan">
    <PricingItems items={pricingPlan} />
  </ul>
);

PricingItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default PricingPlan;
