import React from 'react'
import './About.css';

import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
const About = () => {
    return (
        <>
            <section className="about-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>About Me</h5>
                    <div className="under-line"></div>
                </div>

                <p>Hello, This is Noor-E-Jannat who wanna make something good. I am a JavaScript Developer also love to React.</p>

                <div className="social-flex">
                    <a href='https://www.facebook.com/noorejannat044' target='_blank'> <FaFacebookSquare className='Icon' /> </a>
                    <a href='https://www.instagram.com/noorejannat/' target='_blank'> <FaInstagramSquare className='Icon' /> </a>
                    <a href='https://github.com/Noor-E-Jannat111' target='_blank'> <FaGithubSquare className='Icon' /> </a>
                </div>
            </section>
        </>
    )
}

export default About
