import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCategoryAction } from '../../../stores/slices/product.slice'

export default function CucHiem() {
    const productState = useSelector(state => state.product.productState)
	const dispatch = useDispatch()
    const navigate = useNavigate()

    const category = productState.category

    useEffect(() => {
        dispatch(fetchCategoryAction());
    }, []);

	const handleCoffeeDetail = (item) => {
		navigate(`/product-detail/${item.id}`, { state: { ...item } })
	}

    return (
        <>
            <div className='category__form'>
                <div className='list__category'>
                    {category?.map?.((item) => {
                        if(item.type === "Cực hiếm"){
                            return <div onClick={() => handleCoffeeDetail(item)} key={item.id} className="item__category">
                                        <img src={item.image} alt="" />
                                        <p>{item.productName}</p>
                                        <span>{item.price}.000đ</span>
                                        <button>+</button>
                                    </div>
                        }				
                    })}
                </div>
            </div>
        </>
    )
}