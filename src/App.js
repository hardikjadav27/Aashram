import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aashracomponet from './compnets/Aashracomponet';
import Header from './compnets/Header'; // Assuming this is your header component
// import Photosrolls from './compnets/photosrolls';
import Missvisobj from './compnets/Missvisobj';
import PhotoSlideshow from './compnets/PhotoSlideshow';
import RecentInitistives from './compnets/RecentInitistives';
import Donations from './compnets/Donations';
import Celebrations from './compnets/Celebrations';
import Footer from './compnets/Footer';
import VolunteerForm from './compnets/Joinform';
import Activities from './compnets/Activities';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Routes>
            <Route path='/' element={<Aashracomponet />} />
            <Route path='/header' element={<Header />} />
            {/* <Route path='/Photoscrolls' element={<Photosrolls />} /> */}
            <Route path='/Missvisobj' element={<Missvisobj />} />
            <Route path='/PhotoSlideshow' element={<PhotoSlideshow />} />
            <Route path='/RecentInitistives' element={<RecentInitistives />} />
            <Route path='/Donationsvvvvvv' element={<Donations />} />
            <Route path='/Celebrations' element={<Celebrations />} />
            <Route path='/Footer' element={<Footer />} />
            <Route path='/VolunteerForm' element={<VolunteerForm />} />
            <Route path='/Activities' element={<Activities />} />



          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
