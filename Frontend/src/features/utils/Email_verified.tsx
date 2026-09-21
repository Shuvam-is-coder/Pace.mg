import { useNavigate } from 'react-router'
import './email_verified.css'

const Email_verified = () => {
  const navigate = useNavigate()

  return (
    <div className="email-verified min-h-screen max-w-full flex-center flex-col">
      <div className="email-verified-box rounded-xl chunky-border hard-shadow">
        <div className="top flex-between">
          {/* Clock Doodle */}
          <svg className="doodle-left text-dusty-blue" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 48 48" width="32">
            <circle cx="24" cy="24" r="18" strokeDasharray="2 4" strokeWidth="2"></circle>
            <circle cx="24" cy="24" r="20"></circle>
            <path d="M24 12v12l6 6"></path>
          </svg>
          {/* Brand Logo */}
          <h1>Pace</h1>
          {/* Checklist Doodle (SVG) */}
          <svg className="doodle-right text-muted-green" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 48 48" width="32">
            <rect height="36" rx="4" width="32" x="8" y="6"></rect>
            <path d="M16 16h16M16 24h16M16 32h10"></path>
            <path d="M12 16h0M12 24h0M12 32h0" strokeWidth="5"></path>
          </svg>
        </div>

        <div className="seal">
          <div className="seal-badge animate-sticker">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 48 48">
              <path className="seal-tick" d="M11 25l9 9 17-19"></path>
            </svg>
          </div>
          <span className="badge badge-muted-green animate-fade-in">Email Confirmed</span>
        </div>

        <div className="mid">
          <h2>You're verified!</h2>
          <p>Your email address is confirmed and your Pace account is ready. Sign in to pick things back up.</p>
        </div>

        <button type="button" className="btn btn-primary py-3 verify-btn" onClick={() => navigate('/login')}>
          Continue to Login
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="20">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </button>

        <div className="footer">
          <span>Wrong account?</span>
          <a href="/register" className="underline">Sign up again</a>
        </div>
      </div>
    </div>
  )
}

export default Email_verified
