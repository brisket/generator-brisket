import Brisket from 'brisket';
import ApplicationRouter from './ApplicationRouter';
import HomeRouter from '../home/HomeRouter';
import SidesRouter from '../sides/SidesRouter';

const Routers = Brisket.Routers.toUse({

  // this Router includes a catch all i.e. 404 page
  CatchAllRouter: ApplicationRouter,

  // list all other routers here e.g. require('../example/ExampleRouter')
  routers: [
    HomeRouter,
    SidesRouter
  ]

});

export default Routers;
