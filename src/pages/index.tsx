import React from 'react';

export default () => (
  <div>
    <h1 style={{textAlign: 'center'}}>
      Menu project
    </h1>
    <p>
      This website is for distributing the contents of the
      <a href="https://www.luke.fi/menu/en/"> Menu-project </a>
      implemented by the Natural Resource Institute Finland.
    </p>
    <p>
      From this site we distribute the Mela2.0 software.
      We also serve the Model function library which is a centralized storage for model function packages.
    </p>

    <h3>
      Mela2.0 software
    </h3>
    <p>
      Mela2.0 software is composed from MELA2SIM simulator implementation, data conversion tool, J optimization software and the simulator platform. All the components are also distributed individually.

      The Mela2.0 is an updated version of its ancestor the <a href="http://mela2.metla.fi/mela/julkaisut/oppaat/mela2016.pdf">MELA software</a>.
      The software is shipped with all necessary model function packages in order to run the simulation.
    </p>
    <p>
      Download Mela2.0 and all its components <a href="./simulator">here</a>.
    </p>

    <h3>
      Model function library
    </h3>
    <p>
      Model function library is a collection of model function packages. The packages mainly contain model functions, which are used in MELA2SIM component of the Mela2.0 software.
      As model functions are the basic scientific cornerstones of simulation we serve a centralized library for distributing them. The models can also be utlized in other environments as the source code is open.
    </p>
    <p>
      The library is found <a href="./library"> here</a>.
    </p>
  </div>
);
