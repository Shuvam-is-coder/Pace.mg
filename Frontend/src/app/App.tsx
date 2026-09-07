import React from 'react'
import { Link, Outlet } from 'react-router'


const App = () => {
  return (
    <div className="app">      
      <div className="tab-left">
        <div className="brand">
          <h2>Pace</h2>
          <p>Productivity Workspace</p>
          <button>NEW ENTRY</button>
        </div>
        <div className="top">
          <Link className="link" to='/dashboard'>Dashboard</Link>
          <Link className="link" to='/tasks'>Tasks</Link>
          <Link className="link" to='/analytics'>Analytics</Link>
          <Link className="link" to='/calender'>Calender</Link>
          <Link className="link" to='/focus'>Focus</Link>
          <Link className="link" to='/goals'>Goals</Link>
          <Link className="link" to='/habits'>Habits</Link>
          <Link className="link" to='/inbox'>Inbox</Link>
          <Link className="link" to='/projects'>Projects</Link>
        </div>
        <div className="bottom">
          <Link className="link" to='/settings'>Settings</Link>
        </div>
      </div>
      <div className="children">
        <Outlet />
      </div>
    </div>
  )
}

export default App
