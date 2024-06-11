import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './context/CartContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  // </React.StrictMode>,
)
