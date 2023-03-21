import styles from '../styles/Home.module.css';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addATask } from '../reducers/tasks';

function Home() {
  const [taskName, setTaskName] = useState('')
  const [isUrgent, setIsUrgent] = useState(false)
  const dispatch = useDispatch()

  const allTasks = useSelector((states) => states.tasks.value)

  let tasks = []
  if (allTasks.length > 0) {
    tasks = allTasks.map((data, i) => {
      return <Task key={i} name={data.name} isUrgent={data.isUrgent} isDone={data.isDone} />;
    });
  }

  const handleClickAddTask = () => {
    dispatch(addATask({name: taskName, isUrgent: isUrgent, isDone: false}))
    setTaskName('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.addContainer}>
          <input onChange={(e) => setTaskName(e.target.value)} value={taskName} type="text" placeholder="Task" id="taskName" className={styles.addTask} />
          <div className={styles.urgentSection}>
            <input onChange={(e) => setIsUrgent(!isUrgent)} type="checkbox" id="urgent" className={styles.urgentCheckbox} />
            <span className={styles.urgent}>URGENT</span>
          </div>
          <button onClick={() => handleClickAddTask()} id="add" className={styles.button}>ADD TASK</button>
        </div>

        <div className={styles.tasksContainer}>
          {tasks}
        </div>
      </div>
    </div>
  );
}

export default Home;
