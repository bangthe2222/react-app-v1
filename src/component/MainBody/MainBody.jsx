import './MainBody.css';
import TaskBar from '../TaskBar/TaskBar';
import { Outlet } from "react-router-dom";
function MainBody() {
    return (
        <>
            <div className='_main'>
                <TaskBar></TaskBar>
                <Outlet></Outlet>
            </div>
        </>

    )
}
export default MainBody;