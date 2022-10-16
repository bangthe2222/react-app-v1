import './Home.scss'
import {BiCodeAlt} from 'react-icons/bi'
export default function HomePage() {
    return(
        <>
            <div className="home-page">
                
                <span id='home-page-text'>
                    <BiCodeAlt  id='home-page-text'></BiCodeAlt>
                    Hello World
                    <BiCodeAlt  id='home-page-text'></BiCodeAlt>    
                </span>
                
            </div>
        </> 
    )
}