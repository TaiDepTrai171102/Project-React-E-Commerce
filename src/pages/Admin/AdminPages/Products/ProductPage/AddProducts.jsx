
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductAction, PRODUCT_LIMIT } from "../../../../../stores/slices/admin.product.slice";
import "./styleAddProduct.scss"
import Sidebar from "../../../../../components/layouts/Sidebar";
import Navbar from "../../../../../components/layouts/Navbar";
function AddProducts() {
    const [selectImg, setSelectImg] = useState(null);
    const [newTodoValue, setNewTodoValue] = useState({
        productName:'',
        type:'',
        price:'',
        image: '',

        
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const listProduct = useSelector(state => state.adminProduct.productState);
    const totalPage = Math.ceil(listProduct.pagination.totalPage);
    const handleOnchange = (e) => {
        const value = e.target.value;
        setNewTodoValue({...newTodoValue, [e.target.name]: value});
    }
    const handleOnchangeFile = (e) =>{
        const file = e.target.files[0];
        // file.urlImage = URL.createObjectURL(file);
        function getBase64(file, onLoadCallback) {
            return new Promise(function(resolve, reject) {
                var reader = new FileReader();
                reader.onload = function() { resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        
        var promise = getBase64(file);
        promise.then(function(result) {
            setSelectImg(result)
        });
        console.log(selectImg)
    };
    const addTodoProduct = (container) => {
        if (container.productName === '' || container.type==='' || container.price === ""  ) return;
        const newTodoList = 
            {
          
                productName:container.productName,
                type: container.type,
                price: container.price,
                image: container.image,
             
            };
        
        
            dispatch(addProductAction(newTodoList));
    }
    const hanldeSubmitTodoValue = () => {               
        addTodoProduct({...newTodoValue,image:selectImg });
        setNewTodoValue({
            productName:'',
            type:'',
            price:'',
            image: '',
         
        });
        setSelectImg(''); 
        navigate(`/admin/products/?page=${totalPage}&limit=${PRODUCT_LIMIT}`)
    }
   
    return (
<div className="list">
            <Sidebar />
    <div className="listcontainer">
            <Navbar />
       
        <form className="cf">
            <h2>Add Products <span className="close-add" ></span></h2>
            <div className="half left cf">
                <input type="text" id="input-name" placeholder="Name" value = {newTodoValue.productName}
                       onChange = {handleOnchange} name="productName"/>
                <input type="email" id="input-email" placeholder="Price" value = {newTodoValue.price}
                        onChange = {handleOnchange} name="price" />
                <select value={newTodoValue.type} onChange= {handleOnchange} name="type">
                    <option value="normal">Normal</option>
                    <option value="rare">Rare</option>
                    <option value="extremely rare">Extremely Rare</option>
                </select>
            </div>
            <div className="half right cf">
                <label className="select-img" for = "input-img">Select File:</label><br></br>
                    <input id="input-img" hidden  type= "file" name="myImage" 
                        onChange = {handleOnchangeFile} placeholder="" />
                        {selectImg && <img width="125px" height="125px" style={{marginTop: "15px"}} className="image" src={selectImg} alt="" /> }  
            </div>  
            <button onClick={hanldeSubmitTodoValue} >Submit</button>
        </form>               
      
        
    </div>
</div>
     );
}

export default AddProducts ;