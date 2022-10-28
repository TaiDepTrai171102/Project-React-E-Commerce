import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAction, PRODUCT_LIMIT } from '../../../stores/slices/product.slice';
import { Pagination } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import newicon from '../../../assets/new-board-icon.svg';
export default function ListProduct() {
	const productState = useSelector(state => state.product.productState)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams();

	const total = productState?.pagination?.total
	const loading = productState?.loading

	const defaultPage = 1;

	const _page = searchParams.get("page") ?? `${defaultPage}`;
	const _limit = searchParams.get("limit") ?? `${PRODUCT_LIMIT}`;

	useEffect(() => {
		dispatch(fetchProductAction({ page: _page, limit: _limit }));
	}, [dispatch, _page, _limit]);

	const onPaginationChange = (page, limit) => {
		dispatch(fetchProductAction(page))
		setSearchParams({ page, limit });
	}

	const handleDetail = (item) => {
		navigate(`/product-detail/${item.id}`, { state: { ...item } })
	}

	return (
		<>
			<h2 className='title__product'>NHỮNG SẢN PHẨM MỚI NHẤT THỊ TRƯỜNG</h2>
			<div className='list__product'>
				{productState?.data?.map?.((item) => (
					<div onClick={() => handleDetail(item)}  className="item">
						<img src={item.image} alt="" />
						<p>{item.productName}</p>
						<span>{item.price}.000đ</span>
						<img src={newicon} style={{width: 50, height: 50 , position: 'relative', top: -10, left: 40}}/> 
			
					</div>
				))}
			</div>
		
			<button className='button' style={{color: 'white',borderRadius: 20, padding: 10}}>Xem Tất Cả </button>
			<h2 className='title__product'>NHỮNG SẢN PHẨM DRAGON BALL</h2>
			<div className='list__product'>
				{productState?.data?.map?.((item) => (
					<div onClick={() => handleDetail(item)}  className="item">
						<img src={item.image} alt="" />
						<p>{item.productName}</p>
						<span>{item.price}.000đ</span>
						
			
					</div>
				))}
			</div>
		</>
	)
}