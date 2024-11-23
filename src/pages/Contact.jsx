import React from 'react'
import ContactForm from '../components/ContactForm'
import './index.scss'
import { IoLinkSharp } from "react-icons/io5";
import { links } from '../components'
import {motion } from 'framer-motion';

const Contact = () => {
    const linkVariants = {
        hidden:{
            opacity:0,
            x: -3,
        },
        visible:(i)=>({
            opacity:1,
            x:0,
            transition:{
                delay: i * 1,
                duration: 1,
                type: "easeInOut",
            }
        })
    }
    const HeaderVariants = {
        hidden:{
            opacity:0,
            y: -20,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                delay: 0.2,
                duration: 0.8,
            }
        }
    }
  return (
    <div className='w-full h-screen p-2 pt-0 flex flex-col overflow-hidden'>
        <motion.div className="flex w-full flex-col h-max items-center justify-center" variants={HeaderVariants} initial="hidden" whileInView="visible">
            <div className="flex-row flex gap-1">
                <p className='flex-row flex text-sm font-medium upper-text'>
                    Let's get in touch
                </p>
                
                
            </div>
            <h2 className='text-2xl font-bold flex-row flex gap-2'>
                <p>
                    Contact Me
                </p>
            </h2>
        </motion.div>
        <div className="flex w-full h-full flex-row contact-container">
            <div className="flex w-[50%] h-[80%] items-center justify-start contact-container-2">
                <div className="flex w-max h-max p-2 flex-col contact-links-container gap-6">
                        {
                            
                            links.map((link, i)=>(
                                <motion.div 
                                    className="flex h-max w-max items-center justify-center gap-[5px] p-2 bg-gray-200 rounded-lg shadow-md long-text-container contact-link-card"
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={linkVariants}
                                >
                                    <a 
                                        href={link.href}
                                        target='_blank'
                                        rel="noreferrer"
                                        className='flex flex-row items-center justify-center gap-1'
                                    > 
                                        <img 
                                            src={link.icon}
                                            alt={link.alt} 
                                            className='w-[40px] h-[40px]'
                                        />
                                        <IoLinkSharp/> 
                                        <p className='text-[18px] font-semibold truncate long-text'>
                                            {link.text}
                                        </p>
                                    </a>
                                </motion.div>
                            ))
                        }
                </div>
            </div>
            <div className="flex w-[50%] h-full justify-end flex-col items-center contact-form-container-1">
                <h2 className='text-xl font-bold'>Leave a message</h2>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact