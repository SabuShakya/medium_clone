import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"
import Topbar from "components/topbar"
import { CurrentUserProvider } from "contexts/currentUser"

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  )
}

export default App
