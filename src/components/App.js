import React from 'react';
import './App.css';
import Profile from './Profile';
import Stats from './Stats';
import PricingPlan from './PricingPlan';
import TransactionHistory from './TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const statsInfo = {
  title: 'Upload stats',
  stats: [
    { id: 1, name: '.docx', value: 32 },
    { id: 2, name: '.mp3', value: 4 },
    { id: 3, name: '.pdf', value: 17 },
    { id: 4, name: '.mp4', value: 47 },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile user={user} />
        <Stats statsInfo={statsInfo} />
        <PricingPlan />
        <TransactionHistory />
      </header>
    </div>
  );
}

export default App;
