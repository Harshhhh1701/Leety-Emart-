
import './App.css';
import Features from './Components/features';
import Hero from './Components/hero';
import Navbar from './Components/navbar';

function App() {
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen">
      <Navbar />
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
