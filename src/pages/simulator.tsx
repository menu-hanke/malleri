import React from 'react';

export default () => (
  <div>
    <h1 style={{textAlign: 'center'}}>
      MELA 2.0 simulaattori
    </h1>
    <p>
      Tältä sivulta voit ladata MELA 2.0 simulaattorin.
      Tämä on komentorivityökalu, josta on tehty julkaisuja Windows ja Linux ympäristöihin.
      Työkalu on saatavilla myös Docker käyttöön.
    </p>

    <ul>
      <li>Tähän latauslinkki Windows versioon</li>
      <li>Tähän latauslinkki Linux versioon</li>
      <li>Tähän viite Docker registryyn</li>
    </ul>

    <p>
        Simulaattorin lähdekoodit ovat saatavilla seuraavista osoitteista.
    </p>

    <ul>
      <li><a href="https://github.com/menu-hanke/m2">m2 simulaattori</a></li>
      <li><a href="https://github.com/menu-hanke/LAME">LAME simulaatioskriptiwrapperi</a></li>
    </ul>
  </div>
);
