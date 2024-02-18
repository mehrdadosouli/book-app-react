import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextData from './context/ContextTitleProvider.jsx'
import ContextTitleProvider from './context/ContextData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextTitleProvider>
        <ContextData>
            <App />
        </ContextData>
    </ContextTitleProvider>
)
