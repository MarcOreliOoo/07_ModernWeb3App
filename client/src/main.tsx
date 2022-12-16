import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionContextProvider } from './context/TransactionContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
  </TransactionContextProvider>
)
