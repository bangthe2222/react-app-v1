import './Contact.scss';
import {FiGithub} from 'react-icons/fi';
import {CgMail} from 'react-icons/cg';
import {RiAccountPinBoxLine} from 'react-icons/ri'
function Contact() {
    return(
        <>
            <div className='contact-page-container'>
                <div className='contact-page'>
                    <p><RiAccountPinBoxLine></RiAccountPinBoxLine> Name: Nguyen The Bang</p>
                    <p><CgMail></CgMail> Email: bang.nguyenthe2222@hcmut.edu.vn</p>
                    <p><FiGithub></FiGithub> Github: <a href='https://github.com/bangthe2222'>https://github.com/bangthe2222</a></p>
                </div>
            </div>
        </>
    )
}
export default Contact;