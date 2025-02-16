import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './conponents/HomePage'
import CloudComputing from './subjpages/CloudComputing';
// import AnotherPage from './subpages/anotherPage'; // Import other subpages
import './App.css'
import ProtoType from './subjpages/ProtoType';

function App() {


  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proto-type" element={<ProtoType/>}/>
        <Route path="/cloud-computing" element={<CloudComputing />} />

        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
      </Routes>
  );
}

export default App;
