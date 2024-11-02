import React from 'react';
import Pic from '../assets/images/EditedPic.png';
import { motion } from 'framer-motion';
import './index.scss'

const Index = () => {
  
  const pictureVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8 
      } 
    }
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

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.4 
      } 
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className="flex flex-row w-full h-full items-center justify-center gap-6 details-container">
        <motion.div 
          className="flex w-[300px] h-[300px] items-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={pictureVariants}
        >
          <img src={Pic} alt='developer Pic' className='object-cover w-full h-full rounded-full border-[2px] border-black'/>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center h-max w-max gap-4"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <div className="flex flex-col items-center justify-center h-max w-max">
            <p className='text-sm font-medium'>Hello, I'm</p>
            <h2 className='font-bold text-3xl'>Bethel Wisdom</h2>
            <h4 className='font-semibold text-xl'>A Fullstack Web Developer</h4>
          </div>

          <div className="flex flex-row w-max h-max items-center justify-center gap-3">
            <motion.button 
              className='p-3 text-xl font-semibold border-black border-[2px] rounded-3xl btn'
              whileHover="changeBg"
              variants={buttonVariant}
            >
              Download CV
            </motion.button>

            <motion.button 
              className='p-3 text-xl font-semibold border-black border-[2px] rounded-3xl btn'
              whileHover="changeBg"
              variants={buttonVariant}
            >
              Contact Me
            </motion.button>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Index;
