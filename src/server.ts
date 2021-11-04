import express, { Request, Response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

//Endpoits
app.use('/categories', categoriesRoutes);

app.listen(8080, () => console.log("Application started on port 8080! 🚀"));