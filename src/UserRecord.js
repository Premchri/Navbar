import React from 'react'
import { useParams } from 'react-router-dom'

function UserRecord() {
    const {id} = useParams()
  return (
    <div>
      <h3>User Record</h3>
      <h6>User ID is {id}</h6>
    </div>
  )
}

export default UserRecord
