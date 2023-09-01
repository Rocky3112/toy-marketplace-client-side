/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import contact from '../../../public/contact.json'

const Contact = () => {
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(`service_ubx0k4e`, `template_tv5gkjj`, form.current, `fwUBPkDRGJGX8491J`)
            .then(function (response) {
                toast.success('thanks for your message');
                e.target.reset();
            }, function (error) {
                
            });
    }
    return (
        <div id='contactMe' className='mt-20 mb-10'>
            <div className=" min-h-screen">
                <div>
                   <h3 className="text-4xl font-semibold text-center text-yellow-500 py-3">Contact Info</h3>
                    <h3 className='text-2xl  px-36'>
                    Let's Connect! Reach out through the Contact Me section to discuss your web development needs, collaborations, or any inquiries. I'm excited to hear from you and explore how we can work together to bring your ideas to life.
                    </h3>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" className="w-full w-1/2 p-5 rounded-xl ">
                        
                        <div className='sm:p-10 md:p-0 lg:p-2 '>
                            <Lottie animationData={contact} loop={true} className='h-[450px]' />
                        </div>

                        <Fade direction='left' className=' ps-28'>
                        <div className='card'>
                            <h2 className="text-xl">Phone</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <a href="tel:+8801772893112">+8801772893112</a>
                            </figure>
                        </div>
                        <div className='my-2'>
                            <h2 className="text-xl">Email</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:alomgirhossainrocky@gmail.com">alomgirhossainrocky@gmail.com</a>
                            </figure>
                        </div>
                        {/* <div>
                            <h2 className="text-2xl">Address</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <address>Kajla, Matihar, Rajshahi </address>
                            </figure>
                        </div> */}
                        </Fade>
                    </div>
                    <Fade direction='right'>
                    <div data-aos="fade-left" className="card flex-shrink-0 w-full w-1/2 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-md text-center text-primary underline underline-offset-2">Direct Mail</h3>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required type="name" name='user_name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" name='user_email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea required type="text" name='message' rows={8} cols={60} className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value='Send' className="btn bg-yellow-500 border-0 hover:bg-green-500"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Contact;