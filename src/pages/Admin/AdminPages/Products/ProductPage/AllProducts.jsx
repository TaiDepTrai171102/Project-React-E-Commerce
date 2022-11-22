import React, { useEffect , useState } from "react";
import './style.scss';
import {  useNavigate, useSearchParams , Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { deleteProductAction, fetchProductAction, PRODUCT_LIMIT } from "../../../../../stores/slices/admin.product.slice";
import {  Pagination , notification  } from "antd";
import axios from "axios";
function AllProducts() {

    const [valuesearch,setValue] = useState("");
  
    const handleSubmit = async (e) =>{
      e.preventDefalt();
      return await axios.get(`http://localhost:3300/api/products?q=${valuesearch}`)
      .then((reponse) => 
      {
        listProduct(reponse.data);
        setValue("");
      })
      .catch((eer) => console.log(eer))
    }
    const listProduct = useSelector(state => state.adminProduct.productState)
    let [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();

    const defaultPage = 1;
    const _page = searchParams.get('page') ?? `${defaultPage}`;
    const _limit = searchParams.get('limit') ?? `${PRODUCT_LIMIT}`;
    const total = listProduct.pagination.total;
  

    useEffect(() => {
        dispatch(fetchProductAction({ page: _page ? _page : 1, limit: _limit }));
    }, [dispatch, _page, _limit, total])


   

    const handleDeleteProduct = (id) => {
        dispatch(deleteProductAction(id));
        notification.success({
            message: 'Xóa thành công!'
        })
      
    }
    const navigate = useNavigate();
    const gotoDetail = (item) => {
        navigate(`/admin/edit/${item.id}`, { state: { ...item } });

    }
    const onchangePagination = (page, limit) => {
        setSearchParams({ page, limit })
        
    }
    return (
        <div>
            <div className="datatableTitle">
                Add New Product

                <form action="" onSubmit={handleSubmit}>
                    <input  type="text"
                            placeholder="Search..."
                             onChange={(e) => setValue(e.target.value)}
                            value={valuesearch}
                    />
                    <button>Search</button>
                </form>     
            <Link to="/admin/products/add-product" className="link">
                Add New
            </Link>
        </div>
        <div className="container1">
        
        <div className="table">
            <div className="table-header">
                <div className="header__item" style={{ color: "white" , position:"relative" , right:"-5px" }}>Id</div>
                <div className="header__item" style={{ color: "white", position:"relative", right:"-15px" }}>Name</div>
                <div className="header__item" style={{ color: "white", position:"relative", right:"-30px"}}>Price</div>
                <div className="header__item" style={{ color: "white" ,  position:"relative", right:"-40px"}}>Type</div>
                <div className="header__item" style={{ color: "white" ,  position:"relative", right:"-50px"}}>Image</div>
                <div className="header__item" style={{ color: "white", position:"relative", right:"-25px" }}>Action</div>
            </div>
            {listProduct?.data?.map?.((item,index) => {
                  return (
                    <div className="table-content">	
                        <div className="table-row" key={index.productName}>		
                            <div className="table-data">{item.id+1}</div>
                            <div className="table-data">{item.productName}</div>
                            <div className="table-data">{item.price}.000d</div>
                            <div className="table-data">{item.type}</div>
                            <div className="table-data"><img src={item.image} alt="" width="100px" height="100px" /></div>
                            <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                            <button onClick={() => gotoDetail(item)}  style={{ marginLeft:"30px",padding:"10px"}}>Edit</button>

                        </div>
                    </div>	
                )
            })}
            
            <div className="pagination" style={{position: "relative",top:"-10px"}}>
            <Pagination
                    showSizeChanger
                    pageSize={+ _limit}
                    total={total}
                    current={+ _page}
                    onChange={onchangePagination}
                />
            </div>
           
          </div>
        </div>
      </div>
    );
}

export default AllProducts;