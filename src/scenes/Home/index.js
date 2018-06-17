import React, {Fragment} from 'react';

const Home = () => (
  <Fragment>
    <a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
      <i className="icon icon-menu"></i>
    </a>

    <div id="sidebar-id" className="off-canvas-sidebar">
      <p>Menú</p>
    </div>

    <a className="off-canvas-overlay" href="#close">Cerrar</a>

    <div className="off-canvas-content">
      <p>Contenido</p>
    </div>
  </Fragment>
)

export default Home;