import React from 'react';
import { useState, useEffect } from 'react';

export const TestTwo = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>TestTwo
        <ol>
        {Users.map((item) => {
          return <li key={item._id}><p>{item.title} {item.description}</p> </li>
        })}
      </ol>
    </div>
  )
}
