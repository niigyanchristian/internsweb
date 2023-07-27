"use client";
import { useEffect,useState } from 'react';
import '@/../../styles/globals.css'
import positionContainer from '@/public/js/script';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter } from 'next/navigation';

export default function Home({searchParams}) {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
console.log('====================================');
console.log(router);
console.log('====================================');
    useEffect(() => {
        setIsClient(true)
    }, []);

    if(isClient){
        return (
          <section>
              <head>
                  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                  <title>Title | Company</title>
              </head>
          <body className="background-color: rgb(249, 246, 246);">
          <div>
              <nav className="flex items-center bg-white border-b-[1px] border-gray-300">
                  <div className="p-5">
                      <a className="brand-name text-3xl font-semibold">Get Work</a>
                  </div>
                  <div className="">
                      <a href="#" className="mx-4 text-xl text-gray-800 hover:text-secondary hover:font-semibold transition-all duration-300">Home</a>
                      <a href="#" className="mx-4 text-xl text-gray-800 hover:text-secondary hover:font-semibold transition-all duration-300">Post Job</a>
                  </div>
              </nav>
      
              <section className="mx-[3%] sm:mx-[5%] md:mx-[10%]">
                  <div className="m-2 sm:m-4 md:m-7">
                      <div className="mt-10 flex items-center">
                          {/* <Link onClick={()=>router.back} className="p-1 cursor-pointer hover:bg-gray-400 px-6 text-left rounded-[18px] bg-gray-300"><i className="bx bx-left-arrow-alt text-primary text-2xl"></i></Link> */}
                          <button onClick={()=>router.back()} className="p-1 cursor-pointer hover:bg-gray-400 px-6 text-left rounded-[18px] bg-gray-300"><i className="bx bx-left-arrow-alt text-primary text-2xl"></i></button>
                          {/* <a title="Go Back" ></a> */}
                      </div>
                      <p className=" text-center text-primary text-5xl font-bold mt-10 md:mt-0">Get Hired!</p>
                  </div>
                  <div className="sm:flex justify-between items-center">
                      <div className="my-10 text-gray-600 w-full sm:w-3/4">
                          <p className="text-3xl text-gray-800 font-semibold">{searchParams.title}</p>
                          <p className="flex items-center my-2 text-xl"><span><i className='bx bxs-building-house mr-2 text-gray-700 text-2xl'></i></span>{searchParams.name}-{searchParams.location}</p>
                          <div className="text-lg flex space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-10">
                              <p className="flex items-center"><span><i className='bx bx-map text-blue-700 text-lg' ></i></span>On-site</p>
                              <p className="flex items-center"><span><i className='bx bxs-book-content text-gray-600 text-lg mr-2'></i></span>Internship</p>
                              <p className="flex items-center"><span><i className='bx bx-money text-green-700 text-lg mr-2' ></i></span>$400 allowance</p>
                          </div>
                          <p className="flex items-center my-5"><span><i className='bx bxs-calendar text-gray-600 text-lg mr-2' ></i></span>Posted: <span className="bg-gray-300 rounded-[30px] text-xs text-black p-2">25th August</span></p>
                      </div>
                      <div className="mr-auto">
                          {/* <button className="bg-primary hover:bg-secondary text-white px-8 py-2 rounded-md">Apply here.</button> */}
                          <Link className="bg-primary hover:bg-secondary text-white px-8 py-2 rounded-md" target='_blank' href={searchParams.link}>Apply here</Link>
                      </div>
                  </div>
                  
                  <div className="my-14 h-0.5 bg-gray-200"></div>
                  <div className=" text-gray-600">
                      <h2 className=" font-semibold text-black">Job Description</h2>
                      <p className="my-4">
                      {searchParams.description}
                      </p>
      
                      <h2 className="mt-16 font-semibold text-black">About Company</h2>
                      <p className="my-4">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta provident obcaecati odio, eligendi voluptate nemo ex molestiae dignissimos fugiat id eius saepe sunt tempora, qui consequuntur expedita eaque, ipsa incidunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quidem fuga et laboriosam natus, odio, vel, quasi sequi eveniet labore error corrupti voluptatum nulla libero veritatis atque explicabo minima earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nesciunt facere modi error dolorum laborum, omnis harum rerum nulla ab animi distinctio dolores alias illo ea nam obcaecati labore consectetur?
                      </p>
      
                      <h2 className="flex items-center mt-16 font-semibold text-black">Detailed Duties<span><i className='bx bxs-briefcase text-gray-500 text-lg mx-2' ></i></span></h2>
                      <div className="my-4">
                          <p className="flex"><span><i className='bx bx-check text-2xl text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
      
                      <h2 className="flex items-center mt-16 font-semibold text-black">Qualifications<span><i className='bx bxs-trophy text-yellow-400 text-2xl mx-2'></i></span></h2>
                      <div className="my-4">
                          <p className="flex my-2"><span><i className='bx bxs-badge-check mx-1 text-blue-700 text-2xl'></i></span>Must be in 3rd year in the university.</p>
                          <p className="flex my-2"><span><i className='bx bxs-badge-check mx-1 text-blue-700 text-2xl'></i></span>Must be pursing Bsc Computer Science, engineering or any related field. </p>
                          <p className="flex my-2"><span><i className='bx bxs-badge-check mx-1 text-2xl text-blue-700'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                      <h2 className="flex items-center mt-16 font-semibold text-black">Skills <Image width={20} height={20} src="/images/requirements.png" className="w-8 h-8 mx-2" alt=""/></h2>
                      <div className="my-4">
                          <p className="flex"><span><i className='bx bx-check text-2xl mx-1 text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl mx-1 text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl mx-1 text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <p className="flex"><span><i className='bx bx-check text-2xl mx-1 text-blue-600'></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
      
                  </div>
              </section>
          </div>
      </body>
      </section>
        )

    }else{
        return <h1>Loading...</h1>
    }
}
