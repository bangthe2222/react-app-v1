import './TaskBar.scss';
import {Link} from 'react-router-dom';

function TaskBar() {
    return(

        <div>
            <div className='task-bar'>
                <ul>
                    <li><Link to={'./app1'}>App1</Link></li>
                    <li><Link to={'./app2'}>App2</Link></li>
                    <li><Link to={'./app3'}>App3</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default TaskBar;
