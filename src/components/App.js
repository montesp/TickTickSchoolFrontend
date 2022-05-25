import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LogIn } from "./log-in-up/LogIn";
import { LogUp } from './log-in-up/logUp';
import { TaskView } from './task-view/TaskView';
import { SubjectView } from './task-view/SubjectView';
import { NotFoundPage } from './not-found/NotFoundPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="registro" element={<LogUp />} />
        <Route path="tareas" element={<TaskView />} />
        <Route path="materias" element={<SubjectView />} />
        <Route
        path="*"
        element={<NotFoundPage/>}
    />
      </Routes>
    </Router>
  );
}

export { App };
