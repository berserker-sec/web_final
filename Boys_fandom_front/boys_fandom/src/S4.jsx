import React, { Component } from 'react'; // React ve Component sınıfını içe aktarıyoruz.
import Navbar from "../src/Navbar"; // Navbar bileşenini içe aktarıyoruz.

export class S4 extends Component {
  render() {
    return (
      <div className='s4-back'>
        <Navbar/>{/* Navbar bileşenini içerir */}
        <div className='Home-parag'>
          {/*başlık bileşeni*/}
        <h1 className='Home-paragtitle'>Season 4 Summary</h1>
        {/*paragraf bileşeni*/}
        <p className='Home-paragtext'>It’s been a year of calm. Homelander's subdued. Butcher works for the government, supervised by Hughie of all people. But both men itch to turn this peace and quiet into blood and bone. So when The Boys learn of a mysterious Anti-Supe weapon, it sends them crashing into the Seven, starting a war, and chasing the legend of the first Superhero: Soldier Boy.</p>
        </div>
      </div>
    )
  }
}

export default S4