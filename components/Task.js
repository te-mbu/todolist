import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Task.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteATask } from '../reducers/tasks'


function Task(props) {
    const [isDoneStyle, setIsDoneStyle] = useState({})
    const dispatch = useDispatch()

    // Add urgent badge
    let stylesIsUrgent = {}
    if (!props.isUrgent) {
        stylesIsUrgent = {display: "none"}
    }
    // Dashed name when task is done
    function handleChangeCheckbox(e) {
        if (e.target.checked) {
            setIsDoneStyle({"text-decoration": "line-through"})
        } else {
            setIsDoneStyle({})
        }
    }
 
    return (
        <div className={styles.task}>
            <div className={styles.taskSection}>
              <input onChange={(e) => handleChangeCheckbox(e)} type="checkbox" className={styles.completeCheckbox} />
              <p style={isDoneStyle}>{props.name}</p>
              <span className={styles.urgentBadge} style={stylesIsUrgent}>URGENT</span>
            </div>
            <FontAwesomeIcon onClick={() => dispatch(deleteATask(props))} icon={faTrash} className={styles.delete} />
          </div>
    )
}

export default Task;
