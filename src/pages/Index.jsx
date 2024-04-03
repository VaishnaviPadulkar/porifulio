import React, { useState } from 'react'
import img1 from '../assets/port1.jpeg'

import Navbar from './Navbar'
import ResumeDetails from './ResumeDetails'
import Projects from './Projects'
import Contact from './Contact'

const Port = () => {

    return <>
        <Navbar />
        <br /><br /><br /><br />
        <div className="container d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm-7 text-center">
                        {/* animation: myAnim 1s ease 0s 1 normal forwards */}
                        <img
                            src={img1}
                            className='img-fluid '
                            style={{
                                borderRadius: "50%",
                                animation: 'myAnim 1s ease 0s 1 normal forwards '
                            }}
                            height="65%"
                            width="65%"
                            alt="" />
                    </div>
                    <div className="col-sm-4 " style={{ animation: 'myAnimi 1s ease 0s 1 normal forwards ' }}>
                        <h1><span style={{
                            fontSize: "100px"
                        }}>Hello</span></h1>
                        <p className=''>About me,</p>
                        <p>As a recent graduate with a passion for web development, I am seeking opportunities as a MERN stack developer to apply and enhance my skills in MongoDB, Express.js, React, and Node.js.</p>

                        <div className='d-flex justify-content-between mt-5'>
                            <a href={'../public/vaishnavi.pdf'} download="resume" class="btn btn-outline-secondary">
                                Download Resume <i class="bi bi-download"></i>
                            </a>
                            <a href="#projects" className='btn btn-outline-secondary'>
                                Projects <i class="bi bi-folder-fill"></i>
                            </a>
                            <a href="#contact" className='btn btn-outline-secondary'>
                                Contact <i class="bi bi-person-lines-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >


        <ResumeDetails />
        <Projects />
        <Contact />





    </>
}

export default Port