
import React from "react";
import {  useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation, useNavigate, useParams,  } from "react-router-dom";
import Navbar from "../../../../components/layouts/Navbar";
import Sidebar from "../../../../components/layouts/Sidebar";
import { updateProductAction } from "../../../../stores/slices/admin.product.slice";
import "./style.scss"

export const LIST_ITEM = 'ITEM-PRODUCT';


function Edit() {
    const location = useLocation();
    const [newValueEdit,setNewValueEdit] = useState(location.state);
    const [urlImage, setUrlImage] = useState(null);
    const [showImg, setShowImg] = useState(null);
    
    const listProduct = useSelector(state => state.adminProduct.productState);
    const page_ = listProduct.pagination.page;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const param = useParams();
    const handleOnchangeEdit = (e) => {
        const valueEdit = e.target.value;
        setNewValueEdit({...newValueEdit,[e.target.name]: valueEdit})
    }

    // useEffect(() =>{ return () =>{ urlImage && URL.revokeObjectURL(urlImage.urlImage)} },[urlImage]);

    // const handleOnchangeEditFile = (e) => {
    //     const file = e.target.files[0];
    //     file.urlImage = URL.createObjectURL(file);
    //     setUrlImage(file);
    // }
    const handleOnchangeEditFile = (e) =>{
        const file = e.target.files[0];
        // file.urlImage = URL.createObjectURL(file);
        function getBase64(file) {
            return new Promise(function(resolve, reject) {
                var reader = new FileReader();
                reader.onload = function() { resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        
        var promise = getBase64(file);
        promise.then(function(result) {
            setUrlImage(result)
        });
         
    };
    const hanldeSubmitEditValue = (e) => {
        const list = {...newValueEdit, id:param.id, image:urlImage? urlImage: location.state.image}
        dispatch(updateProductAction(list));

        navigate(`/admin/products?page=${page_}&limit=5`)    
    }    
    const toggleImg = () => setShowImg(true);
    return (
        <>
        <div className="list">
            <Sidebar />
        <div className="listcontainer">
            <Navbar />
            <form className="cf">
            <h2>Edit Products <span className="close-add" ></span></h2>
            <div className="half left cf">
                <input type="text" id="input-name" placeholder="Name" value = {newValueEdit.productName}
                       onChange = {handleOnchangeEdit} name="productName"/>
                <input type="text" id="input-email" placeholder="Price" value = {newValueEdit.price}
                        onChange = {handleOnchangeEdit} name="price" />
               <select value={newValueEdit.type} onChange= {handleOnchangeEdit} name="type">
                    <option value="normal">Normal</option>
                    <option value="rare">Rare</option>
                    <option value="extremely rare">Extremely Rare</option>
                </select>
            </div>
            <div className="half right cf">
                <label className="select-img" for = "input-img" onClick={toggleImg}>Select File:</label>
                        {showImg ?? <span><img width={'200px'} height={'125px'}  style={{marginTop: "35px"}} src={location.state.image} alt=""/></span>}
                        <input id="input-img" hidden  type= "file" name="myImage" 
                        onChange = {handleOnchangeEditFile} placeholder="" />
                        {urlImage && <img width={'200px'} height={'125px'} className="image" src={urlImage}  style={{marginTop: "35px"}} alt=""/> }  
            </div>  
            <button onClick={hanldeSubmitEditValue} >Save</button>
      
        </form>               
        </div>
        </div>
        </>
    )
}

export default Edit;