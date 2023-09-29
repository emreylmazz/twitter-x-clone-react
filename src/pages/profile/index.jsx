import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {slug} = useParams()
  return (
    <div>
      profile page - {slug}
    </div>
  )
}

export default Profile