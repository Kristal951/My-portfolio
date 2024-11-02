import React from 'react'
import XP from '../assets/icons/xp.svg'
import './index.scss'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        <div className="flex w-full flex-col h-max items-center justify-center">
            <p className='text-sm font-medium'>More Details</p>
            <h4 className='text-2xl font-bold'>About Me</h4>
        </div>

        <div className="flex flex-row gap-10 h-screen w-full items-start justify-between p-14 details-container-2">
            <div className="flex w-[50%] h-max items-center justify-center ">
                <div className="flex bg-[#4b55631a] bg-opacity-10 h-[300px] w-[300px] rounded-lg img-container">
                </div>
            </div>

            <div className="flex flex-col w-[50%] gap-8 level-container">
                <div className="flex-row flex gap-4 level-container-2">
                    <div className="flex border-black flex-col border-[2px] rounded-3xl items-center justify-start w-[300px] p-[5px] h-[150px] level-container-3">
                        <div className="flex flex-col p-[5px] w-max h-max items-center justify-center xp-container">
                            <img src={XP} alt="experience" className='w-[30px] h-[30px]' />
                            <h5 className='text-xl font-bold '>Experience Level</h5>
                        </div>
                        
                        <p className='font-semibold'>3 years plus</p>
                        <p className='font-semibold'>Fullstack developer</p>
                    </div>
                    <div className="flex border-black flex-col border-[2px] rounded-3xl items-center justify-start w-[300px] p-[5px] h-[150px]">
                        Sit fugiat ex dolor elit et quis ea. Anim elit aute aliquip nisi excepteur occaecat duis laborum deserunt labore irure incididunt ut voluptate. Laborum nostrud nostrud eiusmod tempor laboris veniam eiusmod exercitation esse fugiat ad exercitation anim tempor. Magna adipisicing cupidatat aute incididunt labore consectetur deserunt ad veniam cupidatat ea. Aliqua amet sit pariatur sit ex ad velit dolor.
                    </div>
                </div>

                <p>
                    I am focused and dedicated fullstack developer, who render services like mobile application
                    development, fullstack web development, 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About