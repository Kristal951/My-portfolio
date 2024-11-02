import React, {useRef} from 'react'
import ContactForm from '../components/ContactForm'
import './index.scss'

const Contact = () => {

  return (
    <div className='w-full h-screen p-2 pt-0 flex flex-col'>
        <div className="flex w-full flex-col h-max items-center justify-center">
            <p className='text-sm font-medium'>Let's get in touch</p>
            <h2 className='text-2xl font-bold'>Contact Me</h2>
        </div>
        <div className="flex w-full h-full flex-row contact-container">
            <div className="flex w-[50%] h-full p-2 contact-links-container border-[1px] border-black">
                <div className="flex h-max w-max items-center justify-center gap-[5px] p-2">
                    <p className='text-xl font-bold'>Email:</p>
                    <p className='text-sm font-semibold'>bethelwisdom951@gmail.com</p>
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