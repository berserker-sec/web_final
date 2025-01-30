import React, { Component } from 'react';
import Navbar from "../src/Navbar"; // Navbar bileşenini ithal ediyoruz.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS stil dosyasını ithal ediyoruz.

export class Home extends Component {
  render() {
    return (
      <div className='home-back'>
        {/* Navbar bileşenini içerir */}
        <Navbar />
        <div className='Home-parag'>
          {/*başlık bileşeni*/}
          <h1 className='Home-paragtitle'>The Boys</h1>
          {/*paragraf bileşeni*/}
          <p className='Home-paragtext'>
            The Boys is an American satirical superhero television series developed by Eric Kripke for Amazon Prime Video. Based on the comic book of the same name by Garth Ennis and Darick Robertson, it follows the eponymous team of vigilantes as they combat superpowered individuals (referred to as "Supes") who abuse their powers for personal gain and work for a powerful company (Vought International) that ensures the general public views them as heroes. The series features an ensemble cast that includes Karl Urban, Jack Quaid, Antony Starr, Erin Moriarty, Dominique McElligott, Jessie T. Usher, Chace Crawford, Laz Alonso, Tomer Capone, Karen Fukuhara, Nathan Mitchell, Elisabeth Shue, Colby Minifie, Aya Cash, Claudia Doumit, Jensen Ackles, Cameron Crovetti, Susan Heyward, Valorie Curry, and Jeffrey Dean Morgan.

            Intended to be a feature-length film trilogy, the comic book series adaptation began its development in 2008, with Adam McKay set to direct. Due to creative differences between the crew and the studios that picked it up, the project was left in development hell. Eventually, the development for The Boys was revived in 2016 by Cinemax, which announced that it would be reworked as a television series. Kripke was recruited to be the showrunner of the series, while Seth Rogen and Evan Goldberg would be credited as executive producers. Amazon Studios obtained the rights for the series in November 2017, with production starting in May 2018 in Toronto, Canada.

            The Boys premiered its first season of eight episodes on July 26, 2019. A second season premiered on September 4, 2020, with the third season following on June 3, 2022. In June 2022, the series was renewed for a fourth season, which premiered on June 13, 2024. In May 2024, the series was renewed for a fifth and final season, which is expected to premiere in 2026. As part of a shared universe, a spin-off web series (Seven on 7) premiered on July 7, 2021, an adult animated anthology series (Diabolical) premiered on March 4, 2022, and a second live-action television series (Gen V) premiered on September 29, 2023.

            The series has been nominated for eight Primetime Emmy Awards, including Outstanding Drama Series in 2021, and has won seven Critics' Choice Super Awards and six Astra TV Awards.
          </p>
        </div>
        <div className='Home-parag'>
          <h1 className='Home-paragtitle'>Premise</h1>
          <p className='Home-paragtext'>
            The Boys is set in a universe where superpowered individuals (referred to as "Supes") are recognized as heroes by the general public and work for Vought International, a powerful corporation that markets and monetizes them. Outside their heroic personas, most are corrupt, self-serving and recklessly cause collateral damage. The series primarily focuses on two groups: The Boys, CIA-sponsored black ops agents looking to bring down Vought and its corrupt superheroes, and The Seven, Vought's premier superhero team, The Boys' most powerful adversaries.

            In the first season, after his girlfriend is accidentally killed by one of The Seven, led by the egotistical and unstable Homelander (Antony Starr), Hughie Campbell (Jack Quaid) is enlisted by Billy Butcher (Karl Urban), who despises all superpowered beings, and joins the vigilante team known as The Boys. As a conflict ensues between the two groups, Annie January / Starlight (Erin Moriarty), a young and hopeful heroine, is forced to face the truth about the heroes she admires after she joins The Seven.[2]

            In the second season, on the run from the law, hunted by the Supes, and desperately trying to regroup and fight back against Vought, The Boys try to adjust to a new normal in hiding, with Butcher nowhere to be found. Meanwhile, Annie, now aiding The Boys, must navigate her place in The Seven as Homelander sets his sights on taking complete control. His power is threatened with the addition of Stormfront (Aya Cash), a social media-savvy new Supe, who has an agenda and secret past of her own.[3]

            In the third season, one year after the Stormfront scandal, The Boys work for Victoria Neuman (Claudia Doumit)'s Bureau of Superhero Affairs to apprehend problematic Supes, having been at peace with The Seven; Butcher and Homelander itch to turn this peace and quiet into "blood and bone". When The Boys learn of a mysterious anti-Supe weapon, it sends them crashing into The Seven, starting a war and chasing the legend of the premier superhero: Soldier Boy (Jensen Ackles).[4]

            In the fourth season, six months after Soldier Boy's defeat, The Boys work with the CIA to assassinate Neuman in an effort to stop her from taking over the government. Concurrently, Neuman is under the muscly thumb of Homelander, who is consolidating his power. Butcher, with only months to live, has lost Becca's son and his position as leader of The Boys; the rest of the team is fed up with his lies. With the stakes higher than ever, they have to find a way to work together and save the world before it's too late.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
