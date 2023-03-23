
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()

  }, [])
  return (
    <div className='sidebar'>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" alt="" width={200} height={150} />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))
          }

        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar