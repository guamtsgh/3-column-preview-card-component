import './App.css'

import sedan from './assets/images/icon-sedans.svg'
import suv from './assets/images/icon-suvs.svg'
import luxury from './assets/images/icon-luxury.svg'

function App() {
  return <div id='container'>
    <section id='orange'>
      <div className='information'>
        <div className="logo">
          <img src={sedan} alt="sedan car" />
        </div>
        <h1 className='topic'>Sedans</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
      </div>
      <button>Learn More</button>
    </section>

    <section id='blue'>
      <div className='information'>
        <div className="logo">
          <img src={suv} alt="suv car" />
        </div>
        <h1 className='topic'>SUVs</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
      </div>
      <button>Learn More</button>
    </section>

    <section id='green'>
      <div className='information'>
        <div className="logo">
          <img src={luxury} alt="luxury car" />
        </div>
        <h1 className='topic'>Luxury</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
      </div>
      <button>Learn More</button>
    </section>
  </div>;
}

export default App;
