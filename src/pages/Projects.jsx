import React from 'react'
import img2 from '../assets/1.jpg'

const Projects = () => {
    return (
        <div>

            <div id='projects' className="container-fluid d-flex align align-items-center py-5">
                <div className="container">
                    <div className="row py-5">
                        <span className='fs-1 fw-bold text-center'>Projects</span>
                        <div className="col-sm-4 offset-2">
                            <p className='fs-1 fw-bold '>Project 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Hic ipsam praesentium molestiae quaerat error
                                facilis quas doloribus eius quibusdam tenetur!</p>
                        </div>
                        <div className="col-sm-4 offset-2">
                            <img className='img-fluid' src={img2} height="100%" width="100%" alt="" />
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-sm-4 offset-2">
                            <p className='fs-1 fw-bold '>Project 2</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Hic ipsam praesentium molestiae quaerat error
                                facilis quas doloribus eius quibusdam tenetur!</p>
                        </div>
                        <div className="col-sm-4 offset-2">
                            <img className='img-fluid' src={img2} height="100%" width="100%" alt="" />
                        </div>
                    </div>
                    <div className="row py-5 ">
                        <div className="col-sm-4 offset-2">
                            <p className='fs-1 fw-bold '>Project 3</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Hic ipsam praesentium molestiae quaerat error
                                facilis quas doloribus eius quibusdam tenetur!</p>
                        </div>
                        <div className="col-sm-4 offset-2">
                            <img className='img-fluid' src={img2} height="100%" width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects