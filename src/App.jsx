import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import { Header } from './components/Header'
import BeautyToyMore from './components/Pages/HomePage/BeautyToyMore'
import BestOfElectronic from './components/Pages/HomePage/BestOfElectronic'
import BoxProductGet from './components/Pages/HomePage/BoxProductGet'
import CarausalCard from './components/Pages/HomePage/CarausalBanner'
import FurnitureDeal from './components/Pages/HomePage/FurnitureDeal'
import SecondItemDropdown from './components/Pages/HomePage/SecondItemDropdown'
import SportsHealthMore from './components/Pages/HomePage/SportsHealthMore'
import TopDeals from './components/Pages/HomePage/TopDeals'
import TopStoriesBrandDirectory from './components/Pages/HomePage/TopStoriesBrandDirectory'
import Login from './components/Pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/SanatanDharma" element={<SanatanDharma />} /> */}
        <Route path="/" element={
          <>
            <Header />
            <SecondItemDropdown />
            <CarausalCard />
            <BestOfElectronic />
            <BeautyToyMore />
            <SportsHealthMore />
            <BoxProductGet />
            <FurnitureDeal />
            <TopDeals />
            <TopStoriesBrandDirectory />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  )
}

export default App
