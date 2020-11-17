import { Router } from 'express';
import disciplineRouter from './discipline.routes';
import contentRouter from './content.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.routes';
import markRouter from './Mark.routes';
const routes = Router();

routes.use('/discipline', disciplineRouter)
routes.use('/student', studentRouter)
routes.use('/lesson', lessonRouter)
routes.use('/content', contentRouter)
routes.use('/mark', markRouter)
export default routes;
