import React, { useRef, useState, useEffect } from 'react'
import { LocationMap } from '../location/LocationMap'
import { motion } from 'framer-motion'
import {BsTelegram,BsFacebook,BsTwitter} from "react-icons/bs"
import emailJs from "@emailjs/browser"
import "./Style.css"
function Contact() {
    const fullNameRef=useRef()
    const messageRef=useRef()
    const contactRef=useRef()
    const [loading,setLoading]=useState(false)
      useEffect(()=>{
        emailJs.init(import.meta.env.VITE_emailJsPublicKey)
      },[])
    const submitForm=async (e)=>{
        e.preventDefault()
        if(!fullNameRef.current.value || !messageRef.current.value|| !contactRef.current.value) return;
        setLoading(true)
        const serviceId="service_ad568om"
        const templateId="template_isjrral"
        try{
        await emailJs.send(serviceId, templateId, {
           userName: fullNameRef.current.value,
             userEmail: contactRef.current.value,
             contenu:messageRef.current.value
           });
           //add it to file json
          fetch("http://127.0.0.1:5009/data",{
            method:"POST",
            headers:{
              "content-Type":"application/json"
            },
            body:JSON.stringify({
              email:contactRef.current.value,
              message:messageRef.current.value,
              name:fullNameRef.current.value
            })
           })
          .then(res=>console.log(res.json()))
           
           //clear fields
           fullNameRef.current.value=""
           messageRef.current.value=""
           contactRef.current.value=""
         } catch (error) {
           console.log(error);
         } finally {
           setLoading(false);
         }

    }
  return (
    <div id='contact' className='my-10 container mx-auto'>
    <h1 className='font-bold text-[#00296D] drop-shadow-lg mb-6 text-center'>Contact Us</h1>

    <div className='contactContainer'>
    {/* contact form */}
    <motion.form initial={{
        x:"-100%",
        opacity:0
    }} whileInView={{
        x:0,
        opacity:1
    }} transition={{duration:1,ease:"easeInOut"}} viewport={{once:true}}
    onSubmit={submitForm} >
            <h2 className='font-semibold text-[#2977D5]'>Take a reservation</h2>
            <div class="form-inputs w-full">
                <div class="form-control fullName">
                 
                <input type="text" ref={fullNameRef} name="fullName" id="username" placeholder=" " />
                <label for="username" class="input-label">
                    <span class="label-name">
                        username
                    </span>
                </label>
                </div>
                <div class="form-control">
                
                <input type="email" id="email" placeholder=" " ref={contactRef} />
                <label for="email" class="input-label">
                    <span class="label-name">
                       email adress
                    </span>
                </label>
                </div>
                <div class="form-control">
                
                <textarea rows={6} cols={50} id='message' placeholder=' ' ref={messageRef}/>
                <label for="message" class="input-label">
                    <span class="label-name font-semibold">
                        message
                    </span>
                </label>
                </div>
               
               
            </div>

            <button className='bg-[#2977D5] px-3 py-1 text-white font-semibold rounded-lg self-end' type='submit'>send</button>
    </motion.form>
    <motion.div initial={{
        x:"100%",
        opacity:0
    }} whileInView={{
        x:0,
        opacity:1
    }} transition={{duration:1,ease:"easeInOut"}} viewport={{margin:"50px"}}
     className='mapContainer py-4 border-2 rounded-md shadow-xl'>
   {/** map*/}
  
  <LocationMap zoomLevel={22} />

    
   <div className='contactInfo'>
   <div className="flex gap-8 my-4">
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
    
  )
}

export default Contact