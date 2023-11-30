import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Timeline from './timeline/Timeline';
import Widgets from './widget/Widgets';
import '../App.css';

function Main() {
  return (
    <div className='app'>
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default Main;
