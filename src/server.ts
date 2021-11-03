import express, { Request, Response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());
app.use(categoriesRoutes)

app.post('/courses', (request: Request, response: Response) => {
  const { name } = request.body;

  return response.json({name});
})

app.listen(8080, () => console.log("Application started on port 8080! 🚀"));