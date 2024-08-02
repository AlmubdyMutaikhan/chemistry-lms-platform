import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AtomicStructure from './components/AtomicStructure/AtomicStructure';
import UserProfile from './components/Userprofile/Userprofile';
import Chapter from './components/Chapter/Chapter';
// import HomePage from './pages/HomePage';
// import CoursePage from './pages/CoursePage';
// import DashboardPage from './pages/DashboardPage';
// import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<AtomicStructure />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
