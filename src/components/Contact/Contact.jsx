import { SiGmail } from 'react-icons/si';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
        <div className="heading">
           <p className='text'>SEND ME AN EMAIL</p>
           <div className="icon">
            <a href="mailto:alameenhalifa@@gmail.com">
                <SiGmail />
            </a>
           </div>
           <div className="footer">
            <p className='footer_text'>© 2022 - Adesokan Alameen</p>
           </div>
        </div>
        </div>
    );
};

export default Contact;
