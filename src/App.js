import './App.css';
import CoreList from './components/CoreList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Specialy from './components/Specialy';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <CoreList />
      <Specialy />
      <Footer />
    </>
  );
}

export default App;
