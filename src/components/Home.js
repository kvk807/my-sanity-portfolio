import React from 'react'
import image from '../irina-iriser-pines.jpg';

const Home = () => {
  return (
    <main>
      <img 
        src={image} 
        alt='pine forest road'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-62 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Hello, I'm Kirk!
        </h1>
      </section>
    </main>
  );
}

export default Home


// Photo by <a href="https://unsplash.com/@iriser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irina Iriser</a> on <a href="https://unsplash.com/s/photos/pine-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  