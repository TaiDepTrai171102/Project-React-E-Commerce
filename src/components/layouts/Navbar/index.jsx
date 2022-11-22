import "./style.scss";
import React, { useState } from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { searchProductAction } from "../../../stores/slices/product.slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function Navbar() {
  const dispatch = useDispatch();
  const [valuesearch,setValue] = useState("");
  
  const handleSubmit = async (e) =>{
    e.preventDefalt();
    return await axios.get(`http://localhost:3300/api/products?q=${valuesearch}`)
    .then((reponse) => setValue)
  }

  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="search">
      
      <form action="" onSubmit={handleSubmit}>
      <input  type="text"
              placeholder="Search..."
              onChange={(e) => setValue(e.target.value)}
             value={valuesearch}
      />
      <button>Search</button>
       </form> 
       
      </div>
      <div className="items">
        
        <div className="item">
          <ShoppingCartOutlined className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
