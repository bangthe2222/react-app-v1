import { Outlet } from "react-router-dom";
import './About.scss';
export default function About() {
    return(
        <>
            <div className="about-container">
                <Outlet></Outlet>
            </div>
        </>
    )
}