import { SiGithub } from 'react-icons/si';
import './Project.scss';

const Project = () =>{
    return(
        <div id='projects'>
            <div className="heading">Projects</div>
            <div className="project-container">
                <div className="project">
                    <a href="https://stunning-fairy-307567.netlify.app/">Shipping Site</a>
                    <p className='tech'>Html , css ,  bootstrap , js</p>
                    <p className='info'>A shipping site made for a client </p>
                    <div className="icons">
                        <a href="https://stunning-fairy-307567.netlify.app/">
                            <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://aminvi.github.io/LEXUSCLONE/">Lexus Clone</a>
                    <p className='tech'>Html, css , Bootstrap</p>
                    <p className='info'>a responsive webpage of the lexus clone of 2022</p>
                    <div className="icons">
                        <a href="https://aminvi.github.io/LEXUSCLONE/">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://aminvi.github.io/DogDonate/">Donate page</a>
                    <p className='tech'>Html , css , Bootstrap</p>
                    <p className='info'>A simple donate page for a client</p>
                    <div className="icons">
                        <a href="https://aminvi.github.io/DogDonate/">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://mainstreetbank.vercel.app">Banks</a>
                    <p className='tech'>ReactJS, bootrapcss</p>
                    <p className='info'>This is a banking collaaborative project made for a client .</p>
                    <div className="icons">
                        <a href="https://mainstreetbank.vercel.app">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://aminvi.github.io/mypage/">Myself</a>
                    <p className='tech'>Html, css</p>
                    <p className='info'>This is a webpage about myself.</p>
                    <div className="icons">
                        <a href="https://aminvi.github.io/mypage/">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://aminvi.github.io/productpreviewcard/">Product preview card</a>
                    <p className='tech'>HTML, CSS,</p>
                    <p className='info'>A webpage of a product preview card.</p>
                    <div className="icons">
                        <a href="https://aminvi.github.io/productpreviewcard/">
                        <SiGithub/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;