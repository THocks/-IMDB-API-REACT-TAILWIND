import React from 'react'

//ICONS
import { IoLogoLinkedin } from 'react-icons/io'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
  return (
    <>
      
<div className=" bg-primary ">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> Baixe agora nosso Aplicativo grátis  </h3>
          
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                   alt="logodoplaystore"
                   className="w-7 md:w-8"
                    />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                     alt="logodapple" />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 text-xl md:order-1 mt-8 md:mt-0"> &copy; Desenvolvedor Thiago Lima, 2023. </p>
 
            <div className="order-1 md:order-2 flex ">
           
                <IoLogoLinkedin className='px-2 ' color='white' size={45}/>
                <IoLogoGithub className='px-2 ' color='white' size={45}/>
            </div>
        </div>
     </div>
   </div>
    </>
  )
}

export default Footer
