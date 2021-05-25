import React from 'react';
import LibraryIndex from '../containers/LibraryIndex';
import {useRouteData} from 'react-static';

export default () => {
  const routeData = useRouteData();
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Mallifunktiokirjasto</h1>
      <p>
        Mallifunktiokirjasto on kokoelma mallifunktiopaketteja.
        Paketit ovat kokoelmia R tai Lua kielillä kirjoitetuista laskentamalleista.
        Näitä voidaan käyttää esim. LAME simulaatioskriptien yhteydessä.
      </p>
      <p>
        Alla kirjaston sisältö. Klikkaamalla paketin nimeä avautuu näkyviin lisätietoja.
      </p>
      <LibraryIndex packages={routeData.packages}></LibraryIndex>
    </div>
  );
};
