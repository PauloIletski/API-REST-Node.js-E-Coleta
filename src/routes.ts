import express, { response } from 'express';


import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes=express.Router();

const pointsController= new PointsController();
const itemsControler=new ItemsController();


routes.get('/items', itemsControler.index);


routes.post('/points',pointsController.create);
routes.get('/points/:id',pointsController.show);
routes.get('/points',pointsController.index);

export default routes;