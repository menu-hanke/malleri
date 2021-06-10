import React from 'react';
import LibraryIndex from '../containers/LibraryIndex';
import {useRouteData} from 'react-static';

export default () => {
  const routeData = useRouteData();
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Model function package distribution
      </h1>
      <p>
        From this page we distribute model function packages for simulation or custom needs.
      </p>
      <p>
        A model function package is a collections of model functions. Generally a model function is a scientific model that has been translated to source code.
      </p>
      <p>
        The core idea is that model functions are used in simulators that run on top of the simulator platform, but in practice singel model functions may be used in any sophisticated environment.
        A single model package may contain model functions written in any publicly available programming language, but at the moment model functions are mainly Lua or R related. In other words feel free to download packages for any need you have.
      </p>
      <p>
        Also if you are interested in bringing your own scientific models as part of the library the process is described in more detail <a href="./404">here</a>.
      </p>

      <h3>Model function library</h3>
      <p>
        Below is a list of all model function packages in the library.
        By clicking the package name pops up additional information about the package and its content.
      </p>
      <LibraryIndex packages={routeData.packages}></LibraryIndex>
    </div>
  );
};
