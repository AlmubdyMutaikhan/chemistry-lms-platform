import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AtomicStructure from './components/AtomicStructure/AtomicStructure';
import UserProfile from './components/Userprofile/Userprofile';
import Chapter from './components/Chapter/Chapter';
import ContactPage from './components/Contacts/Contacts';
import ChemistryLandingPage from './components/Landing/Landing';
import ChemistryInteractionPage from './components/ChemBond/ChemBond';
import BondingMechanisms from './components/ChemBond2/ChemBond';
import BondStrengthPage from './components/Bonds/Bonds';
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
        <Route path="/" element={<ChemistryLandingPage />} />
        <Route path="/chapter/1" element={<AtomicStructure />} />
        <Route path="/chapter/2" element={<ChemistryInteractionPage />} />
        <Route path="/chapter/3" element={<BondingMechanisms />} />
        <Route path="/chapter/4" element={<BondStrengthPage />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
