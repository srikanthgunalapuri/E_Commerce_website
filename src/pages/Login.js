import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import LoingIcon from "../assest/assest/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";

const Login = () => {
    const [showPassword , setShowPassword] = useState(false)
    const [data , setData] = useState({
        email : "" ,
        password : ""
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

const handlesubmit = (e) => {
e.preventDefault()
}
 console.log("data loing", data)
  return (
    
       <section id='loing'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                <LuUserCircle2 className='textcolor w-full h-full'/>
                    {/* <img src={LoingIcon} alt="loing icon" /> */}
                </div>

                <form className='pt-6 px-4 flex flex-col gap-2' onClick={handlesubmit}>
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
                <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600 pt-2'>
                Forgot Password
                </Link>
            </div>

                <button className='bgcolor bghover text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Loing</button>
       
          </form>
              <p className='py-5'>Don`t have account ? <Link to="/signup" className=' textcolor hovertext hover:underline '>Sing up</Link></p>
            </div>
          
        
        </div>
       </section>
  
    
  )
}

export default Login