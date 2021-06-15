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
      The Mela2.0 software is distributed with all key components that are needed for simulation runs.
      The distribution includes the MELA2SIM simulator implementation along with all the necessary modelfuntions, initial data conversion tool, optimization tool and the simulator platform executable.
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
      <li>
        <a href="https://github.com/menu-hanke/m2">
          Source code of the initial data conversion tool</a>
      </li>
    </ul>

    <h3>
      MELA2SIM simulator
    </h3>
    <p>
        MELA2SIM is a script based simulator written in Lua programming language which needs the simulator platform in order to execute the simulation.
        The source codes of MELA2SIM can be found from the following link.
    </p>
    <ul>
      <li><a href="https://github.com/menu-hanke/LAME">MELA2SIM simulator</a></li>
    </ul>

    <h3>Simulator platform</h3>
    <p>
      Simulator platform is an executable in which simulator implementations such as MELA2SIM run. The simulator platform is distributed as both Windows and Linux version.
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
      <li>
        <a href="https://github.com/menu-hanke/m2">
          Source code of the simulator platform</a>
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
      <li>
        <a href="https://github.com/menu-hanke/m2">
          Source code for the J software</a>
      </li>
    </ul>

    <h3>Report generator</h3>
    <p>
      Report generator is a tool for generating reports for MELA2.0 software output.
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
      <li>
        <a href="./404">
          Source code for the report generator</a>
      </li>
    </ul>



  </div>
);
