"use client";
import { useEffect } from 'react';
import '@/styles/globals.css'
import positionContainer from '@/public/js/script';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const Data = [
    {id:1,title:'Senior Embedded Systems Software Developer',name:'ASML',location:'Veldhoven, North Brabant, Netherlands (Hybrid)',date:'27/4/2023',description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta, dolore nihil, quae, perspiciatis nulla odio exercitationem nam sunt expedita voluptatem reiciendis possimus quam numquam excepturi fugit distinctio enim animi!',
    about:'About, sit amet consectetur adipisicing elit. Dignissimos dicta, dolore nihil, quae, perspiciatis nulla odio exercitationem nam sunt expedita voluptatem reiciendis possimus quam numquam excepturi fugit distinctio enim animi!',
    link:'https://www.linkedin.com/jobs/view/3633761743/?trackingId=NTp31T04QpWmv8Hu9IhTGw%3D%3D&refId=xJO%2BJEdATwesg54wf7%2Bx3w%3D%3D&midToken=AQEOMuSCKHdS6w&midSig=0jRzIgHhcmZGM1&trk=eml-jobs_jymbii_digest-job_card-0-jobcard_body&trkEmail=eml-jobs_jymbii_digest-job_card-0-jobcard_body-null-1qnbak~livo1f1s~hu-null-null&eid=1qnbak-livo1f1s-hu',},
    {id:2,title:'Embedded Software Lead Engineer | Bambi Medical',name:'Cooder',location:'Eindhoven, North Brabant, Netherlands (On-site) ',date:'27/4/2023',description:'At Bambi Medical, we are dedicated to making babies lives happier from day one. Do you want to be part of this? Send us a message!',link:'https://www.linkedin.com/jobs/view/3617944203/?trackingId=9sChIYb0SGmfOsCMdEDPdA%3D%3D&refId=7XavsmteRD2dI%2BWxdcw6IQ%3D%3D&midToken=AQEOMuSCKHdS6w&midSig=0jRzIgHhcmZGM1&trk=eml-jobs_jymbii_digest-job_card-0-jobcard_body&trkEmail=eml-jobs_jymbii_digest-job_card-0-jobcard_body-null-1qnbak~livo1f1s~hu-null-null&eid=1qnbak-livo1f1s-hu',},
    {id:3,title:'Systems Validation Engineer',name:'Tesla',location:'Tilburg, North Brabant, Netherlands',date:'27/4/2023',description:'Tesla Energy is seeking an exceptional systems validation engineer who is passionate about our mission to accelerate the world’s transition to sustainable energy and excited to take on a challenge. As a systems validation engineer, you will be responsible for supporting test setup, system testing, and requirement validation of our next-generation energy charging products. We foster a collaborative work environment and encourage each other to have fun as we work together to change the world',link:'https://www.linkedin.com/jobs/view/3637854848/?refId=nmIDTcX%2FSQeMcZiYjGFADg%3D%3D&trackingId=lpJ3wTAoTYOqvXNY%2Bhw7FA%3D%3D'},
    {id:4,title:'Project Manager “System Engineering” 0,8 - 1 fte',name:'Eindhoven',location:'North Brabant, Netherlands',date:'27/4/2023',description:'Eindhoven University of Technology (TU/e) is one of Europe’s top universities of technology, situated at the heart of a most innovative high-tech region. Due to a wealth of collaborations with industry and academic institutes, TU/e’s research has real-world impact. TU/e has around 3,000 employees, and about 13,000 students. Our university is at the heart of society: TU/e focuses on complex, societal and industrial challenges in education and research',link:'https://www.linkedin.com/jobs/view/3623006040/?trackingId=w8iaXsxpQ6KY22KkZNKT0A%3D%3D&refId=ObhNmiGlTm%2BGciaRyulKpA%3D%3D&midToken=AQEOMuSCKHdS6w&midSig=0jRzIgHhcmZGM1&trk=eml-jobs_jymbii_digest-job_card-0-jobcard_body&trkEmail=eml-jobs_jymbii_digest-job_card-0-jobcard_body-null-1qnbak~livo1f1s~hu-null-null&eid=1qnbak-livo1f1s-hu'},

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
                            <Link href={{
                                pathname:'/details',
                                query:item
                            }} className="bg-primary text-white px-4 py-1 md:px-8 md:py-2 rounded-md hover:bg-secondary">View</Link>
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
