import React from 'react'
import html from '../assets/images/html-5.png'
import css from '../assets/images/css-3.png'
import js from '../assets/images/js.png'
import nodejs from '../assets/images/programing.png'
import react from '../assets/images/physics.png'
import check from '../assets/icons/bxs-badge-check.svg'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div className='w-full h-full flex-col flex gap-6'>

      <div className="flex w-full flex-col h-max items-center justify-center">
        {/* <p className='text-sm font-medium upper-text'>More knowledge</p> */}
        <h4 className='text-2xl font-bold'>Skills</h4>
      </div>

      <div className="flex flex-col w-full items-center gap-2 justify-center">
        <div className="flex items-center justify-center">
          <h4 className='font-bold text-xl'>Technologies I Use:</h4>
        </div>

        <div className="flex flex-row gap-3">
          <div className="flex card ">
            <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
                <div className="flex front w-[40px] h-[40px]">
                    <img src={html} className="w-[40px] h-[40px]" alt="HTML Logo" />
                </div>
                <div className="back">
                    <p className='text-sm font-bold'>HTML</p>
                </div>
            </div>
          </div>
          <div className="flex card ">
            <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
                <div className="flex front w-[40px] h-[40px]">
                    <img src={css} className="w-[40px] h-[40px]" alt="Css Logo" />
                </div>
                <div className="back">
                    <p className='text-sm font-bold'>CSS</p>
                </div>
            </div>
          </div>
          <div className="flex card ">
            <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
                <div className="flex front w-[40px] h-[40px]">
                    <img src={js} className="w-[40px] h-[40px]" alt="JS Logo" />
                </div>
                <div className="back">
                    <p className='text-sm font-bold'>JS</p>
                </div>
            </div>
          </div>
          <div className="flex card ">
            <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
                <div className="flex front w-[40px] h-[40px]">
                    <img src={react} className="w-[40px] h-[40px]" alt="React Logo" />
                </div>
                <div className="back">
                    <p className='text-sm font-bold'>React</p>
                </div>
            </div>
          </div>
          <div className="flex card ">
            <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
                <div className="flex front w-[40px] h-[40px]">
                    <img src={nodejs} className="w-[40px] h-[40px]" alt="Nodejs Logo" />
                </div>
                <div className="back">
                    <p className='text-sm font-bold'>NodeJs</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full flex-row items-start justify-center p-2 gap-24 skillCards">
        <div className="flex w-[33%] h-[350px] p-2 shadow-md rounded-lg border inner">
          <div className=" w-full h-full justify-center flex flex-col gap-6">
            <h4 className='text-xl font-bold text-center'>Frontend Development</h4>
            <div className="flex w-full h-full items-center justify-center p-2">
              <ul className='w-full h-full grid-cols-[repeat(2,_50%)] grid gap-2'>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Html</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Css</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Javasrcipt</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>React</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '94%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Tailwindcss</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>React Native</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Git</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '97%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </ul>
            </div>
          </div>
        </div>


        <div className="flex w-[33%] h-[350px] p-2 shadow-md rounded-lg border inner">
          <div className=" w-full h-full justify-center flex flex-col gap-6">
            <h4 className='text-xl font-bold text-center'>Frontend Development</h4>
            <div className="flex w-full h-full items-center justify-center p-2">
              <ul className='w-full h-full grid-cols-[repeat(2,_50%)] grid gap-2'>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Nodejs</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Php</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Firebase</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Sql</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>Appwrite</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-row items-center gap-[5px] justify-center w-max h-max">
                    <img src={check} alt="" className='w-6 h-6'/>
                    <p className='font-bold'>MongoDB</p>
                  </div>
                  <motion.div className='w-full h-2 flex'>
                    <motion.div className='bg-gray-300 w-full h-full rounded-lg relative'>
                      <motion.span 
                        className="absolute top-0 left-0 h-full bg-black w-full rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%'}}
                        transition={{ duration: 0.9 , delay: 0.3,}}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills