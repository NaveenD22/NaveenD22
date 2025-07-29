import React, { useEffect,useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const GoToTop = () => {
const [ShowBtn, setShowBtn] = useState(false);

const goToTop=()=>{
	window.scrollTo({top:0, left:0, behavior:'smooth' });
}

	const listenToScrolling=()=>{
		let hide=300;
		const scrollingValue=document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollingValue > hide){
			setShowBtn(true);
		}else {
			setShowBtn(false);
		}
	}
	useEffect(()=>{
		window.addEventListener('scroll',listenToScrolling)
	})
	return (
		<div className={`${ShowBtn ? 'flex':'hidden'} w-full justify-end h-[28] fixed z-10 bottom-20 right-6`}>
			<button className='h-14 w-14 bg-indigo-900 rounded-full font-bold text-2xl flex justify-center items-center shadow-indigo-800 shadow-xl ' onClick={goToTop}>
				<FaArrowUp className='animate-bounce'/>
			</button>
		</div>
	

	)
}

export default GoToTop