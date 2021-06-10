import React from 'react';

export default () => (
  <div>
    <h1 style={{textAlign: 'center'}}>
      Mela2.0 distribution
    </h1>
    <p>
      From here you can download the Mela2.0 software.
    </p>
    <p>
      Also for those who want to build their own custom simulators we ship only the platform executable among the other individual Mela2.0 components.
    </p>

    <h3>
      Mela2.0 software
    </h3>

    <p>
      The Mela2.0 software is distributed with all key components that are needed for   simulation runs.
      The distribution includes the MSM2 script based simulator implementation along with all the necessary modelfuntions, initial data conversion tool, optimization tool and the simulator platform executable.
      From the image under one may see the design of Mela2.0 software and all its key components.
    </p>

    <img src="images/mela2.0-software-crosscut.png"/>

    <ul>
      <li>
        <a>Donwload link for Windows</a>
      </li>
      <li>
        <a>Download link for Linux</a>
      </li>
      <li>
        <a>Reference link to Docker registry</a>
      </li>
    </ul>

    <h3>Simulator platform</h3>

    <p>
      The simulator platform is distributed as both Windows and Linux version while the MSM2 simulator is system independent. MSM2 is script based implementation and runs on top of the platform.
    </p>

    <ul>
      <li>
        <a>Donwload link for Windows</a>
      </li>
      <li>
        <a>Download link for Linux</a>
      </li>
      <li>
        <a>Reference link to Docker registry</a>
      </li>
    </ul>

    <h3>Initial data conversion</h3>

    <p>
      Initial data conversion is a tool for generating simulation data for forestry simulation runs.
    </p>

    <ul>
      <li>
        <a>Donwload link for Windows</a>
      </li>
      <li>
        <a>Download link for Linux</a>
      </li>
      <li>
        <a>Reference link to Docker registry</a>
      </li>
    </ul>

    <h3>J software</h3>

    <p>
      J software is a tool for resolving optimization problems for simulation output.
    </p>

    <ul>
      <li>
        <a>Donwload link for Windows</a>
      </li>
      <li>
        <a>Download link for Linux</a>
      </li>
      <li>
        <a>Reference link to Docker registry</a>
      </li>
    </ul>


    <h3>
      Source code
    </h3>
    <p>
        The source codes of Mela2.0 software may be found from the following links.
    </p>

    <ul>
      <li><a href="https://github.com/menu-hanke/LAME">MSM2 simulator</a></li>
      <li><a href="https://github.com/menu-hanke/m2">Simulator platform</a></li>
      <li><a href="https://github.com/menu-hanke/m2">Initial data conversion</a></li>
      <li><a href="https://github.com/menu-hanke/m2">J software</a></li>
    </ul>
  </div>
);
