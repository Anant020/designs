// import './App.css'
// import { useState } from 'react';
// import profile from '../undefined.jpg';
// import nature from '../nature.png';
// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const notify = () => {
//     toast.warning("Tu toh rehne hi de !", {
//       position: "top-center"
//     });
  
//     setTimeout(() => {
//       toast.warning("Lawde", {
//         position: "top-center"
//       });
//     }, 1000);
//   };
  
//   function changehandler(event) {
//     const selectedFile = event.target.files[0];
//     const imageUrl = URL.createObjectURL(selectedFile);
//     setImage(imageUrl);
//   }
//   const [image, setImage] = useState(null);
//   return (
//     <div className=''>
//       {/* <div className=' h-50 block sm:flex justify-center py-8  '> */}
//       <div className='block sm:flex sm:justify-center my-6'>
//         {/* <h1 className=' text-blue-500 dark:text-green-700'>Hello World</h1> */}

//         <div className=' max-w-64 h-auto  shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] '>
//           <div className=' pb-0 pt-4 pr-4 pl-4  sm:p-4 flex text-left  font-medium '>
//             <img src={image ? image : profile} className=' rounded-full w-[9vh] h-[9vh]'></img>
//             <label className=' w-[9vh] h-[9vh] bg-transparent cursor-pointer absolute '><input type='file' className='hidden' onChange={changehandler}></input></label>
//             <div className='block'>
//               <h1 className='  px-4 pt-4 text-black'>Anant Shah</h1>
//               <h1 className='px-4 m-0 text-blue-400 opacity-4'>React Developer</h1>
//             </div>
//           </div>
//           <div className='block text-left  font-medium px-4 max-w-[270px] pb-3'><h1>Brewing magic, designing and building real world solutions</h1></div>
//         </div>

//         <div className=' max-w-64  shadow-2xl h-auto  rounded-2xl mx-4 bg-[#EEEEEE] '>
//           <div className=' pb-0 pt-4 pr-4 pl-4  sm:p-4 flex text-left  font-medium'>
//             <img src={profile} className=' rounded-full w-[9vh] h-[9vh]'></img>
//             <div className='block'>
//               <h1 className='  px-4 pt-4 text-black'>Mr. xyz</h1>
//               <h1 className='px-4 m-0 text-blue-400 opacity-4'>Ceo</h1>
//             </div>
//           </div>
//           <div className='block text-left  font-medium px-4 max-w-[270px] pb-3'><h1>lorem ipsor dolor set imet ser lor ti amor mi ti amor hello</h1></div>
//         </div>

//         <div className=' max-w-[30vh]  shadow-2xl h-auto rounded-2xl overflow-hidden mx-4 bg-[#EEEEEE]'>
//           <div className='  p-4  max-h-[12vh] overflow-hidden '>
//             <img src={nature} className=' rounded-xl' ></img>
//           </div>
//           <div>
//             <h1 className='px-4 w-auto font-medium text-center pb-2 pt-3'>The Mountain moves when the one calls</h1>
//           </div>
//         </div>


//         <div className=' max-w-[30vh]  shadow-2xl h-auto rounded-2xl overflow-hidden mx-4 bg-[#EEEEEE] '>
//           <div className='p-4'>
//             <div className='flex'>
//               <div className=' h-14 w-[14px] mx-[9px] bg-green-600 rounded-md '><div className=' h-10 w-[14px]  bg-blue-600 rounded-md '></div></div>
//               <div className=' h-14 w-[14px] mx-[9px] bg-green-600 rounded-md '><div className=' h-6 w-[14px]  bg-blue-600 rounded-md  '></div></div>
//               <div className=' h-14 w-[14px] mx-[9px] bg-green-600 rounded-md'><div className=' h-9 w-[14px]  bg-blue-600 rounded-md'></div></div>
//               <div className=' h-14 w-[14px] mx-[9px] bg-green-600 rounded-md'><div className=' h-0 w-[14px]  bg-blue-600 rounded-md'></div></div>
//               <div className=' h-14 w-[14px] mx-[9px] bg-green-600 rounded-md'><div className=' h-5 w-[14px]  bg-blue-600 rounded-md'></div></div>
//             </div>
//             <div className='flex font-medium text-[10px]  '>
//               <h1 className='mx-[6.5px]'>23%</h1>
//               <h1 className='mx-[6.5px]'>67%</h1>
//               <h1 className='mx-[6.5px]'>30%</h1>
//               <h1 className='mx-[6.5px]'>100%</h1>
//               <h1 className='mx-[3px]'>78%</h1>
//             </div>
//             <div className=' font-medium text-[14px] mx-1 mt-2 '>
//               23 + 67 + 30 + 100 + 78
//             </div>
//             <div className='w-auto h-[2px] bg-black  opacity-60'></div>
//             <div className='font-medium text-[14px] mx-1 flex justify-center'>5</div>
//           </div>
//         </div>
        
//         <div className=' max-w-[30vh]  shadow-2xl h-auto rounded-2xl overflow-hidden mx-4 bg-[#EEEEEE] '>
//           <div className='p-4'>
//             <h1 className='font-medium'>Press this button to make everything good.</h1>
//             <div className='w-auto h-[2px] bg-black my-3 opacity-70'></div>
//             <div className=' flex justify-center  mt-4 '>
//             <button className='w-auto h-[46px] bg-orange-500  rounded-xl px-16 hover:bg-[#31363F] font-medium hover:text-white' onClick={notify}>Solution</button>
//             </div>
//           </div>
//         </div>



//       </div>

//       <div className=' w-auto h-60 bg-yellow-400'></div>
//       <ToastContainer theme='dark'/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Front from './Front'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Front/>} />
        
      </Routes>
    </div>
  )
}

