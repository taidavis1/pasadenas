import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import FloatBtn from './components/FloatBtn';
import Service from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Booking from './components/Booking/Booking';
import BookingMain from './components/Booking/BookingMain';
import BookingDate from './components/Booking/BookingDate';
import BookingTech from './components/Booking/BookingTech';
import BookingServices from './components/Booking/BookingServices';
function App() {
  return (
    <main className='bg-white font-newFont'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path = '/Services' element = {<Service />}></Route>
        <Route path = '/Gallery' element = {<Gallery />}></Route>
        <Route path='/Contact' element = {<Contact />}></Route>
        <Route path="/Booking/*" element={<BookingMain />}>
            <Route index element={<Navigate to="services" />} />
            <Route path="services" element={<BookingServices />} />
            <Route path="datetime" element={<BookingDate />} />
            <Route path="bookingtechnician" element={<BookingTech />} />
            <Route path="info" element={<Booking />} />
            <Route path="*" element={<Navigate to="/Booking/" />} />
        </Route>
      </Routes>
      <Footer/>
      <FloatBtn />
    </main>
  );
}

export default App;
