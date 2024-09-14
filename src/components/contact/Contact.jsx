import React, { useRef, useState, useEffect } from 'react';
// import { Map } from '../map/Map'
import { motion } from 'framer-motion';
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';
import emailJs from '@emailjs/browser';
import './Style.css';

function Contact() {
    const fullNameRef = useRef();
    const messageRef = useRef();
    const contactRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailJs.init(import.meta.env.VITE_emailJsPublicKey);
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        if (!fullNameRef.current.value || !messageRef.current.value || !contactRef.current.value) return;
        setLoading(true);

        const serviceId = 'service_ad568om';
        const templateId = 'template_isjrral';

        try {
            await emailJs.send(serviceId, templateId, {
                userName: fullNameRef.current.value,
                userEmail: contactRef.current.value,
                contenu: messageRef.current.value
            });

            // Add it to file JSON
            const response = await fetch('http://127.0.0.1:5009/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: contactRef.current.value,
                    message: messageRef.current.value,
                    name: fullNameRef.current.value
                })
            });
            const data = await response.json();
            console.log(data);

            // Clear fields
            fullNameRef.current.value = '';
            messageRef.current.value = '';
            contactRef.current.value = '';
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className='my-10 container mx-auto'>
            <h1 className='font-bold text-[#00296D] drop-shadow-lg mb-6 text-center'>Contact Us</h1>

            <div className='contactContainer'>
                {/* Contact form */}
                <motion.form
                    initial={{
                        x: '-100%',
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    onSubmit={submitForm}
                >
                    <h2 className='font-semibold text-[#2977D5]'>Take a reservation</h2>
                    <div className='form-inputs w-full'>
                        <div className='form-control fullName'>
                            <input type='text' ref={fullNameRef} name='fullName' id='username' placeholder=' ' />
                            <label htmlFor='username' className='input-label'>
                                <span className='label-name'>username</span>
                            </label>
                        </div>
                        <div className='form-control'>
                            <input type='email' id='email' placeholder=' ' ref={contactRef} />
                            <label htmlFor='email' className='input-label'>
                                <span className='label-name'>email address</span>
                            </label>
                        </div>
                        <div className='form-control'>
                            <textarea rows={6} cols={50} id='message' placeholder=' ' ref={messageRef} />
                            <label htmlFor='message' className='input-label'>
                                <span className='label-name font-semibold'>message</span>
                            </label>
                        </div>
                    </div>

                    <button
                        className='bg-[#2977D5] px-3 py-1 text-white font-semibold rounded-lg self-end'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </motion.form>
                <motion.div
                    initial={{
                        x: '100%',
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ margin: '50px' }}
                >
                    {/* Uncomment if map is needed */}
                    {/* <div className='mapContainer py-4 border-2 rounded-md shadow-xl'>
                        <Map zoomLevel={22} />
                    </div> */}

                    <div className='contactInfo'>
                        <div className='flex gap-8 my-4'>
                            <BsFacebook size={30} />
                            <BsTwitter size={30} />
                            <BsTelegram size={30} />
                        </div>
                        <h3>+223 67 55 44</h3>
                        <h4 className='font-semibold'>Dr_khaled@gmail.com</h4>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
