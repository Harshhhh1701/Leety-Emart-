import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-yellow-200'>
      <div>
        <h1 className='w-full text-3xl font-serif font-bold text-white'>Leety</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='text-yellow-200 font-semibold'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm hover:cursor-pointer'>Analytics</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Marketing</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Commerce</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold text-yellow-200'>Support</h6>
        <ul>
            <li className='py-2 text-sm hover:cursor-pointer'>Pricing</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Documentation</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Guides</li>
            <li className='py-2 text-sm hover:cursor-pointer'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold text-yellow-200'>Company</h6>
        <ul>
            <li className='py-2 text-sm hover:cursor-pointer'>About</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Blog</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Jobs</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Press</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold text-yellow-200 hover:cursor-pointer'>Legal</h6>
        <ul>
            <li className='py-2 text-sm hover:cursor-pointer'>Claim</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Policy</li>
            <li className='py-2 text-sm hover:cursor-pointer'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;