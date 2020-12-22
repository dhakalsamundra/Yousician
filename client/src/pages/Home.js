import React from 'react'
import Contacts from '../components/Contacts'
import ContactFilter from '../components/ContactFilter'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}

export default Home