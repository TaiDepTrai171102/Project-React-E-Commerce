import React from 'react';
import Banner1 from '../../assets/banner1.png';
import Banner2 from '../../assets/banner5.png';
import Banner3 from '../../assets/banner3.png';
import Banner4 from '../../assets/banner4.png';
import Read from '../../assets/read-content.jpg'
import { Carousel , Col , Row , Divider } from 'antd';
import ListProduct from './ListProduct/ListProduct';


export default function HomePage() {
	
	return (
		<>
			<div className="banner">
				<Carousel autoplay>
					<div>
					<img src={Banner1} alt="" style={{height: 500, objectPosition: 'center', objectFit: 'cover'}} />
					</div>
					<div>
					<img src={Banner2} alt="" style={{height: 500, objectPosition: 'center', objectFit: 'cover'}}/>
					</div>
					<div>
					<img src={Banner3} alt="" style={{height: 500, objectPosition: 'center', objectFit: 'cover'}}/>
					</div>
					<div>
					<img src={Banner4} alt="" style={{height: 500, objectPosition: 'center', objectFit: 'cover'}}/>
					</div>
				</Carousel>
			</div>
			<div className='gutter-row'>
			<Row gutter={16}>
      			<Col className="gutter-col" span={6}>
				  	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{width: 100}}>
        				<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        				<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      				</svg>
					<div className='service-title'>GIAO HÀNG TẬN NƠI</div>
					<div className='service-content'>Tất cả sản phẩm đều được vận chuyển miễn phí khi Chuyển khoản trước</div>
      			</Col>
      			<Col className="gutter-col" span={6}>
				  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{width: 100}}>
        				<path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      				</svg>
					<div className='service-title'>ĐỔI TRẢ HÀNG</div>
					<div className='service-content'>Hàng chuẩn như hình thì nhận.Không chuẩn trả về cho shop không mất phí</div>
      			</Col>
      			<Col className="gutter-col" span={6}>
				   	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{width: 100}}>
        				<path strokeLinecap="round" strokeLinejoin="round" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      				</svg>
					<div className='service-title'>GIAO HÀNG NHẬN TIỀN</div>
					<div className='service-content'>Thanh toán đơn hàng bằng hình thức trực tiếp</div>
      			</Col>
      			<Col className="gutter-col" span={6}>
				  	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style={{width: 100}}>
  						<path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
					</svg>
					<div className='service-title'>LIÊN HỆ CSKH</div>
					<div className='service-content'> 0779438986</div>
      			</Col>
    		</Row>
			</div>
			
			<ListProduct/>
			
		</>
	)
}