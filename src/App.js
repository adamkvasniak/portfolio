import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import HomePage from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
        <ParallaxProvider> 
            <HomePage />
        </ParallaxProvider>
    </div>
  );
}

export default App;
