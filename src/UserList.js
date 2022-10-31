import React from 'react'

const UserList = ({kaskrout}) => {
    console.log('v',kaskrout)
  return (
    <div>{kaskrout.name}</div>
  )
}

export default UserList