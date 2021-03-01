import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Tasker from './components/Tasker/Tasker';
import TaskPage from './components/TaskPage/TaskPage';
import { AuthProvider } from './contexts/AuthContext';
import { startOfDay } from './date/date';

function App() {
  const [currentTask, setCurrentTask] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));

  return (
    <div className="wrapper">
      <div className="container">
        <HashRouter basename="/">
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Tasker}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
              />
              <PrivateRoute
                path="/task"
                component={TaskPage}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
              />
              <Route path="/signin" component={Signin} />
              <Route path="/register" component={Register} />
            </Switch>
          </AuthProvider>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
