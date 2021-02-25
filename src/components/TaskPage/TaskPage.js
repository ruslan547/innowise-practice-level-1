import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import Task from './Task/Task';
import './TaskPage.scss';
import TaskPageCalendar from './Calendar/Calendar';

function TaskPage({ task }) {
  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/register">
          <div className="task-page__arrow arrow" />
          <div className="text_nowrap">Today{"' "}s Task</div>
        </Link>
      </div>
      <Task task={task} />
      <textarea className="task-page__description">simthing</textarea>
      <TaskPageCalendar />
      <div className="actions">
        <button type="button">Delete</button>
        <button type="button">Update</button>
      </div>
    </div>
  );
}

TaskPage.propTypes = {
  task: PropType.object,
};

export default TaskPage;
