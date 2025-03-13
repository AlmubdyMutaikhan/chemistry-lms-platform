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
import CovalentBondPage from './components/Covalent/Covalent';
import IonicBondPage from './components/Chapter12/Chapter12';
import MetallicBondPage from './components/Chapter13/Chapter13';
import HydrogenBondPage from './components/Chapter14/Chapter14';
import VanDerWaalsBondPage from './components/Chapter15/Chapter15';

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
        <Route path="/chapter/11" element={<CovalentBondPage />} />
        <Route path="/chapter/12" element={<IonicBondPage />} />
        <Route path="/chapter/13" element={<MetallicBondPage />} />
        <Route path="/chapter/14" element={<HydrogenBondPage />} />
        <Route path="/chapter/15" element={<VanDerWaalsBondPage />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
