import React from 'react';
import logo1 from '../Assests/globe-free-img.png';
import logo2 from '../Assests/quality-free-img.png';
import logo3 from '../Assests/tag-free-img.png';
import logo4 from '../Assests/lock-free-img.png';

const About = () => {
  const logos = [
    {
      logo: logo1,
      heading: "Worldwide Shipping",
      desc1: "It elit tellus, luctus nec ullamcorper",
      desc2: "mattis, pulvinar dapibus leo."
    },
    {
      logo: logo2,
      heading: "Best Quality",
      desc1: "It elit tellus, luctus nec ullamcorper",
      desc2: "mattis, pulvinar dapibus leo."
    },
    {
      logo: logo3,
      heading: "Best Offers",
      desc1: "It elit tellus, luctus nec ullamcorper",
      desc2: "mattis, pulvinar dapibus leo."
    },
    {
      logo: logo4,
      heading: "Secure Payments",
      desc1: "It elit tellus, luctus nec ullamcorper",
      desc2: "mattis, pulvinar dapibus leo."
    }
  ];

  return (
    <>
      <div className='w-full min-h-96 px-16 py-5 bg-gray-200 flex max-sm:flex-col gap-2 justify-center'>
        {logos.map((item) => {
          return (
            
            <div key={item.heading} className='h-96 w-72 max-sm:h-60'>
              <div className="img w-full h-44 max-sm:h-20 flex flex-col items-center justify-center">
                <img className='w-20 h-20' src={item.logo} alt="" />
              </div>
              <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-2xl font-semibold'>{item.heading}</h1>
                <div className='flex flex-col gap-2 justify-center'>
                  <h1>{item.desc1}</h1>
                  <h1 className='text-center'>{item.desc2}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default About;
