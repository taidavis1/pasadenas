import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import FloatBtn from './components/FloatBtn';
import Service from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import {Route , Routes} from 'react-router-dom';
function App() {
  return (
    <main className='bg-white font-newFont'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path = '/Services' element = {<Service />}></Route>
        <Route path = '/Gallery' element = {<Gallery />}></Route>
        <Route path='/Contact' element = {<Contact />}></Route>
      </Routes>
      <Footer/>
      <FloatBtn />
    </main>
  );
}

export default App;
