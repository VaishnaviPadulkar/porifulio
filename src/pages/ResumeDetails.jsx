import React from 'react'

const ResumeDetails = () => {
    return (
        <div className=''>
            <div id='resume' className="py-5">
                <div className="container  pt-5 ">
                    <div className="row  justify-content-center align-items-center">
                        <span className='fs-1 fw-bold text-center'>Resume</span>

                        <div className="col-sm-7 fs-3 fw-medium">
                            <span>Work</span><p>Experience</p>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>
                    <div className="row  justify-content-center  align-items-center">
                        <div className="col-sm-7 text-center">
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>
                    <div className="row  justify-content-center  align-items-center">
                        <div className="col-sm-7 text-center">
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>


                    <hr />

                    <div className="row  justify-content-center  align-items-center">
                        <div className="col-sm-7 fs-3 fw-medium">
                            <span>Education</span>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            {/* <h5>Bachelor's Degree</h5> */}
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>
                    <div className="row  justify-content-center  align-items-center">
                        <div className="col-sm-7 text-center">
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row  justify-content-center  align-items-center">
                        <div className="col-sm-7 fs-3 fw-medium">
                            <span>Skills</span><p>& Expertise</p>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-7 text-center">
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti ipsa omnis minima odio fugit quia fugiat suscipit magni nulla?</p>
                        </div>
                    </div>

                    <hr />

                </div>
            </div >
            <div className='text-center '>
                <a href={'../public/vaishnavi.pdf'} download="resume" class="btn btn-outline-dark">
                    Download Resume <i class="bi bi-download"></i>
                </a>
            </div>
        </div>
    )
}

export default ResumeDetails