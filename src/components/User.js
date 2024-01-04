import React from 'react'

function User({ name, location }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{location}</h3>
    </>
  )
}

export default User
