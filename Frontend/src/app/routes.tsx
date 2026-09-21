import { createBrowserRouter } from 'react-router'
// import Login from '../features/auth/Login';
// import Register from '../features/auth/Register';
import {
  Dashboard,
  Analytics,
  Focus,
  Tasks,
  Calender,
  Goals,
  Habits,
  Inbox,
  Projects,
  Settings,
  App,
  Login,
  Register,
  Email_verified,
} from '../features/import.e'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "dashboard", element: <Dashboard />},
            { path: "analytics", element: <Analytics />},
            { path: "focus", element: <Focus />},
            { path: "tasks", element: <Tasks />},
            { path: "calender", element: <Calender />},
            { path: "goals", element: <Goals />},
            { path: "habits", element: <Habits />},
            { path: "inbox", element: <Inbox />},
            { path: "projects", element: <Projects />},
            { path: "settings", element: <Settings />},
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/email-verified",
        element: <Email_verified />
    }
])

export default router