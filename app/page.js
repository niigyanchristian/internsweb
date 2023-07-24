"use client";
import { useEffect } from 'react';
import '@/styles/globals.css'
import positionContainer from '@/public/js/script';
import Link from 'next/link';

const Data = [
    {id:1,title:'Software Developer',name:'Newmont',location:'Accra',date:'27/4/2023',description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta, dolore nihil, quae, perspiciatis nulla odio exercitationem nam sunt expedita voluptatem reiciendis possimus quam numquam excepturi fugit distinctio enim animi!',link:'https://ghstandard.com/tag/newmont/',},
    {id:2,title:'Database Administrator',name:'Gold Fields',location:'Accra',date:'27/4/2023',description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta, dolore nihil, quae, perspiciatis nulla odio exercitationem nam sunt expedita voluptatem reiciendis possimus quam numquam excepturi fugit distinctio enim animi!',link:'https://ghstandard.com/tag/gold-fields/',},
    {id:3,title:'UI/UX Designer',name:'GCB Bank',location:'Accra',date:'27/4/2023',description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta, dolore nihil, quae, perspiciatis nulla odio exercitationem nam sunt expedita voluptatem reiciendis possimus quam numquam excepturi fugit distinctio enim animi!',link:'https://ghstandard.com/tag/gcb-bank-plc/'},

]
export default function Home() {

    useEffect(() => {
        // Add the scroll event listener when the component mounts.
        window.addEventListener('scroll', positionContainer);
    
        // Remove the scroll event listener when the component unmounts to avoid memory leaks.
        return () => {
          window.removeEventListener('scroll', positionContainer);
        };
    }, []);

  return (
    <div className='main_body'>  
      <div>
      <nav className="flex items-center bg-white border-b-[1px] mx-2 md:mx-0 border-gray-300">
            <div className="p-5">
                <a className="brand-name text-3xl font-semibold">Get Work</a>
            </div>
            <div className="">
               
            </div>
        </nav>
        <section>
            <div className='bg_img'>
            </div>
            <div className="w-full mx-1 md:mx-0 bg-gray-200 px-5 py-8 md:py-10 md:px-10">
                <div className="flex items-center mx-auto">
                    <div className="w-[90%] sm:w-4/5 md:w-9/12 lg:w-1/2 relative">
                        <label className="absolute -top-7 left-5 text-gray-900 font-semibold">search skill</label>
                        <input type="search" placeholder="Keywords, skills, company..." className="p-4 md:p-5 rounded-[30px] w-full border border-blue-500 outline-none"/>
                    </div>
                    <div><button className="py-3 md:py-4 mx-2 px-6 md:px-7 text-white bg-primary hover:bg-secondary rounded-[30px]">Search</button></div>
                </div> 
            </div>

            <div className="md:flex my-[5%] mx-[5%]">
                <div className="block md:hidden w-full mb-10 mx-3 md:mx-0" >
                    <div className="space-y-10 w-full static_container1 ">
                        <h2 className="my-5 text-xl font-semibold">Make your search easier</h2>
                        <div>
                            <label className="text-gray-800 font-semibold items-center flex">Role name<i className='bx bxs-briefcase text-gray-500 text-xl mx-2' ></i></label>
                            <input type="search" placeholder="what..." className="p-3 border-2 border-primary w-[90%] focus:outline-none focus:border-blue-500"/> 
                        </div>
                        <div>
                            <label className="flex items-center text-gray-800 font-semibold">Search location<i className='bx bx-map text-gray-900 text-xl mx-1' ></i></label>
                            <input type="search" placeholder="location..." className="p-3 border-2 border-primary w-[90%] focus:outline-none focus:border-blue-500"/>
                        </div>
                    </div>
                    
                </div>
                <div className="w-[30%] hidden md:block" >
                    <div className="space-y-10 w-full static_container2 ">
                        <h2 className="my-5 text-xl font-semibold w-[240px]">Make your search easier</h2>
                        <div>
                            <label className="text-gray-800 font-semibold items-center flex">Role name<i className='bx bxs-briefcase text-gray-500 text-xl mx-2' ></i></label>
                            <input type="search" placeholder="what..." className="p-3 border-2 border-primary w-[90%] focus:outline-none focus:border-blue-500 input1"/>
                        </div>
                        <div>
                            <label className="flex items-center text-gray-800 font-semibold">Search location<i className='bx bx-map text-gray-900 text-xl mx-1' ></i></label>
                            <input type="search" placeholder="location..." className="p-3 border-2 border-primary w-[90%] focus:outline-none focus:border-blue-500 input2"></input>
                        </div>
                    </div>
                    
                </div>

                <div className="w-[95%] md:w-[70%] mx-[1%] section1">
                    <h1 className="text-primary text-3xl font-semibold py-5 mx-5 md:mx-0">Jobs Available</h1>
                    {Data.map((item)=>(
                        <div key={item.id} className="p-5 border-b border-t border-primary hover:bg-gray-100 cursor-pointer text-gray-600">
                        <div className=" flex justify-between">
                            <h1 className=" text-[25px] md:text-3xl text-gray-800 font-semibold">{item.title}</h1>
                            <Link href={item.link} target='_blank' className="bg-primary text-white px-4 py-1 md:px-8 md:py-2 rounded-md hover:bg-secondary">Apply</Link>
                            {/* <button className="bg-primary text-white px-4 py-1 md:px-8 md:py-2 rounded-md hover:bg-secondary">Apply</button> */}
                        </div>
                        <p className="">{item.name}
                        </p>
                        <p>Location:{item.location}</p>
                        <p>Date posted:{item.date}</p>
                        <div className="mt-5">
                            <p className="text-primary">Description</p>
                            <p>{item.description}... <span className="cursor-pointer underline text-primary">more</span></p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
        
    </div>
      
    </div>
  )
}
