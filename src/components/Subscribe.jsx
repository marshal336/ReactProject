import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center
    max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[68px]
      lg:max-w-md font-palanquin font-bold'>Sign Up Form
        <span className='text-coral-red'> Updates </span> & Newslaters
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center
      max-sm:flex-col sm:border sm:border-slate-gray
      p-2.5 rounded-full'>
        <input 
          type='text'
          placeholder='Subscribe'
          className='input'
        />
        <div className='flex max-sm:justify-end max-sm:w-full
        items-center'>
          <Button
            label="Sign Up"
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
