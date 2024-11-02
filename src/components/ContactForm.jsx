import React, { useState , useRef} from 'react'
import { motion } from 'framer-motion'
import './index.scss'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_gxsrz5c', 'template_dv5294i', form.current, {
          publicKey: 'huVJ1ENAN0dvzozZ6',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    

    const buttonVariant={
        changeBg:{
          backgroundColor: 'black',
          color: 'white',
          transition:{
            duration: 0.8,
            type: 'ease-in',
          }
        }
    }

    const inputVariant={
        hidden:{
            opacity: 0,
            x:2,
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                delay: 0.3,
                duration: 0.8
            }
        }
    }

    const btnContainer={
        hidden:{
            y: -2,
            opacity: 0,
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                delay: 0.3,
                duration: 0.8,
                staggerChildren: 0.5,
                stiffness: 1,
            }
        }
    }

    const [name, setName] =useState('')
    const [tel, setTel] =useState('')
    const [email, setEmail] =useState('')
    const [message, setMessage] =useState('')

    const reset =(e)=>{
        e.preventDefault()
        setName('')
        setTel('')
        setEmail('')
        setMessage('')
    }

  return (
    <div className='w-full h-screen flex p-2 '>
        <form className="flex w-full h-full flex-col gap-4 items-center" ref={form} onSubmit={sendEmail}>
            <motion.input 
                name="user_name"
                type="text"
                className='w-4/5 h-[40px] bg-gray-200 focus:outline-none rounded-md p-2 input' 
                placeholder='Your  name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                variants={inputVariant}
                initial="hidden"
                whileInView="visible"
            />
            <motion.input 
                name="user_tel"
                type="tel" 
                className='w-4/5 h-[40px] bg-gray-200 focus:outline-none rounded-md p-2 input' 
                placeholder='Your phone number'
                value={tel}
                onChange={(e)=> setTel(e.target.value)}
                variants={inputVariant}
                initial="hidden"
                whileInView="visible"
            />
            <motion.input 
                name="user_email"
                type="email" 
                className='w-4/5 h-[40px] bg-gray-200 focus:outline-none rounded-md p-2 input' 
                placeholder='Your email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                variants={inputVariant}
                initial="hidden"
                whileInView="visible"
            />
            <motion.textarea 
                placeholder='Your message'
                name='message'
                className='w-4/5 h-2/5 bg-gray-200 focus:outline-none rounded-md p-2 input' 
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                variants={inputVariant}
                initial="hidden"
                whileInView="visible"
            />
            <motion.div 
                className="flex flex-row w-4/5 items-center justify-center gap-[10%]"
                variants={btnContainer}
                initial="hidden" 
                whileInView="visible"
            >
                <motion.button 
                    type='submit'
                    className='w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
                    whileHover="changeBg"
                    variants={buttonVariant}
                >                
                    Send
                </motion.button>
                <motion.button 
                    className='w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
                    whileHover="changeBg"
                    variants={buttonVariant}
                    onClick={reset}
                >
                    Reset
                </motion.button>
            </motion.div>
        </form>
    </div>
  )
}

export default ContactForm