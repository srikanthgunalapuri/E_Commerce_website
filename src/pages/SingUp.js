import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";
import { FaEyeSlash } from "react-icons/fa";
// import LoingIcon from "../assest/assest/signin.gif"
import ImageTobase64 from "../helpers/ImageTobase64"
import SummaryApi from '../common';

const SingUp = () => {
    const [showPassword , setShowPassword] = useState(false)
   

    const [data , setData] = useState({
        name:"",
        email : "" ,
        password : "",
        Cpassword : "",
        profilepic: ""

    })

const handleOnChange = (e) => {
    const {name , value } = e.target

    setData((preve) => {
        return{
            ...preve, 
            [name] : value
    }
    })
} 

// const [imagePic, setImagePic] = useState('');

//  const handleUploadPic = async(e) => {
//   const file = e.target.files[0]
//   if(file) {

//     const imageBase64 = await ImageTobase64(file)
//     setImagePic(imageBase64)
//     console.log("imagePic", imageBase64)
//   }
// };
const [imagePic, setImagePic] = useState('');

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageBase64 = await ImageTobase64(file);
      setImagePic(imageBase64);
      console.log("imagePic", imageBase64);
    }
  };
  
const handlesubmit = async(e) => {
e.preventDefault()

if(data.password === data.Cpassword) {
  const dataResponse = await fetch(SummaryApi.signUp.url, {
    method : SummaryApi.signUp.method,
    header : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  
  const ruselt = await dataResponse.json()
  console.log("data", ruselt)
}
else {
  console.log("Please check your password")

}

}

  return (
    <section id='singup'>
    <div className='mx-auto container p-4'>
    <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
      <div className='w-full h-full'>
        {imagePic ? (
          <img src={imagePic} alt="Uploaded" className='w-full h-full rounded-full' />
        ) : (
          <LuUserCircle2 className='textcolor w-full h-full rounded-full' />
        )}
      </div>
      <form>
        <label htmlFor="file-upload" className='cursor-pointer'>
          <div className='text-xs py-3 absolute bg-slate-200 opacity-70 w-full bottom-0 text-center'>
            Upload photo
          </div>
          <input 
            type="file" 
            id="file-upload" 
            className='hidden'
            onChange={handleUploadPic}
          />
        </label>
      </form>
    </div>
            <form className='pt-6 px-4 flex flex-col gap-2 ' onClick={handlesubmit}>

            <div className='grid'>
            <label>Name :</label>
            <div className='bg-slate-100 p-2'>
            <input type="text" 
            placeholder='Enter Your Name'
            name='name' 
            value={data.name}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent'/>
            </div>
            </div>

            <div className='grid'>
            <label>Email :</label>
            <div className='bg-slate-100 p-2'>
            <input type="email" 
            placeholder='Enter Email'
            name='email' 
            value={data.email}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent'/>
            </div>
            </div>

            <div>
            <label>Password :</label>
            <div className='bg-slate-100 p-2 flex items-center justify-center' >
            <input type={showPassword ? "text" : "password"} 
            placeholder='Enter Password'
            name='password' 
            value={data.password}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent'/>
           <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve)=>!preve)}>
            {/* <span>
                {
                    showPassword ? (
                        <FaEyeSlash />
                    ) : (
                        <FaEye />
                    )
                }
            </span> */}
           
           </div>
            </div>
           
            </div>

            <div>
            <label>Cpassword :</label>
            <div className='bg-slate-100 p-2 flex items-center justify-center' >
            <input type={showPassword ? "text" : "password"} 
            placeholder='Enter confiom Password'
            name='Cpassword' 
            value={data.Cpassword}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent'/>
           <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve)=>!preve)}>
            <span>
                {
                    showPassword ? (
                        <FaEyeSlash />
                    ) : (
                        <FaEye />
                    )
                }
            </span>
           
           </div>
            </div>
           
            </div>


            <button className='bgcolor bghover text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sing up</button>
   
      </form>
          <p className='py-5'>Alredy have account ? <Link to={"/Login"} className=' textcolor texthover hover:underline '>Login</Link></p>
        </div>
      
    
    </div>
   </section>
  )
}

export default SingUp