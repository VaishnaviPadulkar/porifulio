import React, { useState } from 'react'
import { useAddUserMutation } from '../redux/userApi';


export default function Contact() {
    const { addUser } = useAddUserMutation()

    const [userData, setUserData] = useState([
        { name: "name", type: "text" },
        { name: "email", type: "email" },
        { name: "message", type: "text" }
    ])
    console.log(userData);


    return (
        <div className=''>
            <div id='contact' className='container-fluid d-flex align-align-items-center py-5'>
                <div className="container mt-4 ">
                    <div className="row">
                        <div className=''>
                            <strong className='fs-1 d-flex justify-content-center align-content-center'>Contact Me</strong>
                            <h8 className="d-flex justify-content-center align-content-center mb-4">Please Fill out the form below to discuss any work opportunities.</h8>
                        </div>
                        <div className="col-sm-4 offset-sm-4 text-center">
                            <input
                                // onChange={handleChange}
                                className='form-control mb-2 bg-body-secondary'
                                placeholder='Your Name'
                                type="text"
                                name="name"
                                id="" />
                            <input
                                // onChange={handleChange}
                                className='form-control mb-2 bg-body-secondary'
                                placeholder='Your Email'
                                type="email"
                                name="email"
                                id="" />
                            <textarea row="4"
                                // onChange={handleChange}
                                className='form-control mb-2 bg-body-secondary'
                                placeholder='Your Message'
                                name="message"
                                id="" >
                            </textarea>

                            <button onClick={e => addUser(userData)} type="button" class="btn btn-outline-secondary mt-2 me-2">Submit</button>
                            {/* <Link to="/" type="button" class="btn btn-light mt-2">back</Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center py-5" >
                <div div className="container" >
                    <div className="row d-flex justify-content-evenly ">
                        <div className="col-sm-3 ">
                            <strong >Phone</strong><br />
                            <span>12345 12345</span>
                        </div>
                        <div className="col-sm-3">
                            <strong htmlFor="">Email</strong><br />
                            <a href="mailto: vaishnavipadulkar@gmail.com">vaishnavipadulkar@gmail.com</a>
                        </div>
                        <div className="col-sm-3">
                            <strong>Follow Me</strong><br />
                            <a className='p-2 text-dark' href="https://www.linkedin.com/in/vaishnavi-padulkar-b2812321a" target='_blank'>
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a className='p-2 text-dark' href="https://github.com/VaishnaviPadulkar" target='_blank'>
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <p>
                                ©2024 By Vaishnavi Padulkar.
                            </p>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}
