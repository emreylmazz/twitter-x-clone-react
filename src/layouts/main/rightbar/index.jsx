import React from 'react'
import Search from './search'
import Premium from '../../../components/premium'
import Topics from '../../../components/topics'
import WhoFollow from './who-follow'
import Footer from './footer'

const RightBar = () => {
  return (
    <aside className='w-[350px] mr-2.5'>
<Search/>
<Premium/>
<Topics/>
<WhoFollow/>
<Footer/>
    </aside>
  )
}

export default RightBar