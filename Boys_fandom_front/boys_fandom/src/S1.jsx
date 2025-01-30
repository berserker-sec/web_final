import React, { Component } from 'react'; // React ve Component sınıfını içe aktarıyoruz.
import Navbar from "../src/Navbar"; // Navbar bileşenini içe aktarıyoruz.

export class S1 extends Component {
  render() {
    return (
      <div className='s1-back'>
        <Navbar /> {/* Navbar bileşenini içerir */}
        <div className='Home-parag'>
          {/*başlık bileşeni*/}
          <h1 className='Home-paragtitle'>Season 1 Summary</h1>
          {/*paragraf bileşeni*/}
          <p className='Home-paragtext'>
            The Boys is set in a universe where superpowered individuals are recognized as heroes by the general public and owned by powerful corporation Vought International, which markets and monetizes them. Outside of their heroic personas, most are arrogant and corrupt. The series primarily focuses on two groups: the Seven, Vought International's premier superhero team, and the titular Boys, vigilantes looking to keep the corrupted heroes under control.

            The Boys are led by Billy Butcher, who despises all superpowered people, and the Seven are led by the egotistical and unstable Homelander. As a conflict ensues between the two groups, the series also follows the new members of each team: Hughie Campbell of the Boys, who joins the vigilantes after his girlfriend is killed by one of the Seven; and Annie January / Starlight of the Seven, a young and hopeful heroine forced to face the truth about the heroes she admires.
          </p>
        </div>
      </div>
    );
  }
}

export default S1; // S1 bileşenini dışa aktarıyoruz.
