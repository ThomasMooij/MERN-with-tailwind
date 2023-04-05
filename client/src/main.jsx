import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './context/autContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
)
