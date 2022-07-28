
import './App.css';
import Features from './Components/features';
import Footer from './Components/footer';
import Hero from './Components/hero';
import Navbar from './Components/navbar';

function App() {
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
