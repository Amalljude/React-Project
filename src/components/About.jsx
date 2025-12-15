import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div style={{ backgroundColor: 'lightcyan', minHeight: '80vh', padding: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <h2>About This App</h2>
                <p>
                    This is a simple React demo application built to demonstrate routing,
                    context usage and basic component structure. You can register as a user,
                    view products, and explore simple dashboards.
                </p>
                <p>
                    The UI is kept intentionally minimal for learning and extension.
                    Feel free to modify components, styles, and routes to fit your needs.
                </p>
                <p>
                    Built with React and React Router.
                </p>
                <div style={{ marginTop: '18px' }}>
                    <Link to="/home">← Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default About
