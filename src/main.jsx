import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App className="bg-[#9CC1DE]" />
//   </StrictMode>,
// )
const root=createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);