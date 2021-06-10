import React from 'react';

export default () => (
  <div>
    <h1 style={{textAlign: 'center'}}>
      Menu-project
    </h1>
    <p>
      This website is for distributing the contents of the
      <a href="https://www.luke.fi/menu/en/"> Menu-project </a>
      implemented by the Natural Resource Institute Finland.
    </p>
    <p>
      From this site we distribute the <i>Mela2.0 software</i>. We also distribute individually the <i>simulator platform</i> executable and other individual Mela2.0 components.
      We also serve the <i>Model function library</i> which is a centralized storage for model function packages.
    </p>

    <h3>
      Mela2.0 software and the simulator platform
    </h3>
    <p>
      Mela2.0 software is composed from <i>MSM2 simulator</i> implementation, <i>data conversion tool</i>, <i>J optimization software</i> and the simulator platform. All the components are also distributed individually.

      The MSM2 simulator which runs on top of a generic simulator platform is a updated version of its ancestor the <a href="http://mela2.metla.fi/mela/julkaisut/oppaat/mela2016.pdf">MELA software</a>.
      MSM2 is shipped with all necessary model function packages in order to run the simulation.
    </p>
    <p>
      Download Mela2.0 and all its components <a href="./simulator">here</a>.
    </p>

    <h3>
      Model function library
    </h3>
    <p>
      Model function library is a collection of model function packages. The packages mainly contain model functions, which are used in the MSM2 simulator of the Mela2.0 software.
      As model functions are the basic scientific cornerstones of simulation we serve a centralized library for the distributing them. The models can also be utlized in an sophisticated environment as the source code is open.
    </p>
    <p>
      The library is found <a href="./library"> here</a>.
    </p>
  </div>
);
