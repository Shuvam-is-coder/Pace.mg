import React from 'react'
import './auth.css'

const Login = () => {
  return (
    <>
      <div className="login min-h-screen max-w-full flex-center flex-col">
        <div className="login-box rounded-xl chunky-border hard-shadow gap-3">
          <div className="top flex-between">
            {/* Clock Doodle */}
            <svg className="text-dusty-blue opacity-80 -rotate-12" fill="none" height="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 48 48" width="32">
            <circle cx="24" cy="24" r="18" stroke-dasharray="2 4" stroke-width="2"></circle>
            <circle cx="24" cy="24" r="20"></circle>
            <path d="M24 12v12l6 6"></path>
            </svg>
            {/* Brand Logo */}
            <h1>Pace</h1> 
            {/* Checklist Doodle (SVG) */}
            <svg className="text-muted-green opacity-80 rotate-6" fill="none" height="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 48 48" width="32">
            <rect height="36" rx="4" width="32" x="8" y="6"></rect>
            <path d="M16 16h16M16 24h16M16 32h10"></path>
            <path d="M12 16h0M12 24h0M12 32h0" stroke-width="5"></path>
          </svg>
          </div>
          <div className="mid text-center font-body text-on-surface-variant mb-unit">
            <p>Welcome back. Time to get things done.</p>
          </div>
          <form>
            <div className="email-input">
              <label htmlFor="email">Email</label>
              <input className="input px-4 py-3 rounded-sm" type="email" placeholder="you@example.com"/>
            </div>

            <div className="password-input">
              <div className="flex flex-between">
                <label htmlFor="password">Password</label>
                <a href="#" className="underline">Forgot Password</a>
              </div>
              <input className="input px-4 py-3 rounded-sm" type="password" placeholder="••••••••"/>
            </div>

            <div className="remember-me gap-3">
              <input type="checkbox" id="remember" name="remember" className="checkbox" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>

            <button type="submit" className="btn btn-primary py-3">Login</button>
          </form>
          <div className="footer gap-1">
            <span>Don't have an Account</span>
            <a href="#" className="underline register">Create Account</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
