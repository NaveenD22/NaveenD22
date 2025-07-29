import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import {FaPlus,FaTelegramPlane} from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';
// service id service_b0ynq31
const Contact = () => {


  const form = useRef();

  function mail(e) {
	
    e.preventDefault();

    emailjs.sendForm('service_b0ynq31', 'template_1zkwylw', form.current, 'QXeWmpYvWOMOVOgPg')
      .then((result) => {
          console.log(result.text);
					// clear all input field values
					form.current.reset();
					// Success toast message
					toast.success("Email Has been successfully sent ");
      }, (error) => {
          console.log(error.text);
					toast.error(error.text);
      });}
  
	return (
		<div className=' py-16 bg-indigo-400/50 flex flex-col justify-start items-center gap-4 ' id='Hire'>
			<div className="flex p-10 gap-2 w-full items-center justify-center font-medium">
					<p className='text-4xl'><FaPlus/></p>
					<h1 className='text-4xl'>Hire<span className='text-orange-700'> Me</span></h1>
			</div>
			<form ref={form} onSubmit={mail}  className='w-3/4 sm:w-[40%]  rounded-xl  flex flex-col gap-4 items-end'>
				<div className="flex w-full bg-white/30 flex-col gap-4 p-4">
					<input type="text" required className='w-full  bg-black/50 h-14 rounded-xl px-2  font-bold' placeholder='Name' name='from_name'/>
					<input type="text" required className='w-full  bg-black/50 h-14 rounded-xl px-2 font-bold' placeholder='Phone' name='user_phone' />
					<input type="email" required className='w-full  bg-black/50 h-14 rounded-xl px-2  font-bold' placeholder='Email' name='user_email' />
					
					<textarea  className='w-full  bg-black/40 h-32 rounded-xl p-2 text-xl' placeholder='Message' name='message'></textarea>
					</div>
			<button className="bg-indigo-900 font-semibold flex p-4 gap-2 items-center rounded-3xl w-32 justify-center text-white shadow-black/80 shadow-xl text-xl cursor-pointer" onClick={()=>mail}>Submit <span className='rounded-full bg-white p-1 text-black'><FaTelegramPlane/></span></button>
			
			</form>
			
			<Toaster/>
		</div>
	)
}

export default Contact