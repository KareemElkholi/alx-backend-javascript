import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const routes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default routes;
