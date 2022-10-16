import './NoPage.css';
import {DiGithubAlt} from 'react-icons/di';
function NoPage(props) {
    return(
        <>
        <div className='no-page'>
        <DiGithubAlt id='no-page'></DiGithubAlt>
            <h1>PAGE NOT FOUND {props.page}</h1>
        </div>
        </>
    )
}

export default NoPage;