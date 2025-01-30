import React, { Component } from 'react'; // React ve Component sınıfını içe aktarıyoruz.
import Navbar from "../src/Navbar"; // Navbar bileşenini içe aktarıyoruz.

export class S2 extends Component {
  render() {
    return (
      <div className='s2-back'>
        <Navbar/>{/* Navbar bileşenini içerir */}
        <div className='Home-parag'>
          {/*başlık bileşeni*/}
        <h1 className='Home-paragtitle'>Season 2 Summary</h1>
        {/*paragraf bileşeni*/}
        <p className='Home-paragtext'>In hiding, Hughie, Mother’s Milk, Frenchie, and Kimiko try to adjust to a new normal, with Butcher nowhere to be found. Meanwhile, Starlight must navigate her place in The Seven as Homelander sets his sights on taking complete control. His power is threatened with the addition of Stormfront, a social media-savvy new Supe, who has an agenda of her own. On top of that, the Supervillain threat takes center stage and makes waves as Vought seeks to capitalize on the nation’s paranoia.</p>
        </div>
      </div>
    )
  }
}

export default S2
