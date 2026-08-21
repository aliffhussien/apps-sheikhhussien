import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Norhan app - proxied to local server */}
        <Route 
          path="/norhan/*" 
          element={
            <iframe 
              src="http://localhost:8888/" 
              style={{ width: '100%', height: '100vh', border: 'none' }}
              title="Norhan Therapy App"
            />
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
