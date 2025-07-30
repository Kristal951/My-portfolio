import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ToastManager from './ToastManager'; 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const toastRef = useRef();
  const addToast = useCallback((message, type) => {
    if (toastRef.current) {
      toastRef.current.addToast(message, type);
    }
  }, []);

  const reset = () => {
    setName('');
    setTel('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

        if (name === '' || tel === '' || email === '' || message === '') {
            setLoading(false);
            return addToast("Please fill in all fields!", "info"); 
        }

        await emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_KEY,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,{
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            }
        );
      addToast("Email sent successfully!", "success"); 
      reset();
    } catch (error) {
      setLoading(false);
      addToast("Failed to send email. Please try again.", "error"); 
      console.log(error);
    }
  };

  const buttonVariant = {
    changeBg: {
      backgroundColor: 'rgb(0,0,0)',
      color: '#fff',
      transition: { duration: 0.8, type: 'ease-in' },
    },
  };

  const inputVariant = {
    hidden: {
      opacity: 0,
      x: 2 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.8, 
        duration: 1.5 
      },
    },
  };
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.3, 
        duration: 1.5,
      },
    },
  };

  const btnContainer = {
    hidden: { y: -2, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8, staggerChildren: 0.5, stiffness: 1 },
    },
  };

  return (
    <motion.div 
      className="w-full h-full lg:h-full flex md:p-2 mt-4" 
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <form className="flex w-full h-full flex-col gap-4 items-center" ref={form} onSubmit={sendEmail}>
        <motion.input
          name="user_name"
          type="text"
          className="md:w-4/5 w-full h-[45px] focus:ring-2 ring-black bg-gray-200 focus:outline-none rounded-md p-2 input"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
        />
        <motion.input
          name="user_tel"
          type="tel"
          className="md:w-4/5 w-full h-[45px] focus:ring-2 ring-black bg-gray-200 focus:outline-none rounded-md p-2 input"
          placeholder="Your phone number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
        />
        <motion.input
          name="user_email"
          type="email"
          className="md:w-4/5 w-full h-[45px] focus:ring-2 ring-black bg-gray-200 focus:outline-none rounded-md p-2 input"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
        />
        <motion.textarea
          placeholder="Your message"
          name="message"
          className="md:w-4/5 w-full md:h-2/5 h-[70%] focus:ring-2 ring-black bg-gray-200 focus:outline-none rounded-md p-2 input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
            type="submit"
            className={
              loading
                ? 'cursor-not-allowed w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
                : 'w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
            }
            whileHover="changeBg"
            variants={buttonVariant}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
          <motion.button
            className={
              loading
                ? 'cursor-not-allowed w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
                : 'w-[45%] border-[1px] border-black p-2 rounded-md font-semibold btns'
            }
            whileHover="changeBg"
            variants={buttonVariant}
            onClick={reset}
            disabled={loading}
          >
            Reset
          </motion.button>
        </motion.div>
      </form>

      <ToastManager ref={toastRef} />
    </motion.div>
  );
};

export default ContactForm;
