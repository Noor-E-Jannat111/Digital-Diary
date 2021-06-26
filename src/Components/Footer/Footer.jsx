import React from 'react'
import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className="footer-area ">
                <h1>All right reserved <mark>"Digital Diary"</mark></h1>
                <div className="icons-flex">
                    <a href='https://www.facebook.com/noorejannat044' target='_blank'> <FaFacebookSquare className='Icon' /> </a>
                    <a href='https://www.instagram.com/noorejannat/' target='_blank'> <FaInstagramSquare className='Icon' /> </a>
                    <a href='https://github.com/Noor-E-Jannat111' target='_blank'> <FaGithubSquare className='Icon' /> </a>
                </div>
            </footer>
        </>
    )
}

export default Footer
