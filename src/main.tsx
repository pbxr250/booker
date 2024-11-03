import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { tgWebApp, userdata, mode, MODE } from "./utils/webapp"

const root = createRoot(document.getElementById('root')!)

try {
    if (import.meta.env.PROD) 
        if ( userdata.query_id === '' || mode === MODE.IncorrectMode )
            throw new Error('Mini App should be started from Telegram');

    root.render(
    <StrictMode>
        <App />
    </StrictMode>,
    )
} catch ( e ) {
    root.render(<h1>Mini App should be started from Telegram</h1>)
}