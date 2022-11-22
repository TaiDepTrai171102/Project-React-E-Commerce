import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from '../pages/Admin/AdminPages/Edit/Edit';
import AddProducts from '../pages/Admin/AdminPages/Products/ProductPage/AddProducts';
import Products from '../pages/Admin/AdminPages/Products/Products';

import NavBarAdmin from './layouts/NabarAdmin-Layout/components/NabarAdmin';

export function Figure() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<NavBarAdmin />}></Route>
					<Route path="/admin/products" element = {<Products/>}></Route>
                    <Route path="/admin/products/add-product" element = {<AddProducts/>}></Route>
                    <Route path="/admin/edit/:id" element = {<Edit/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}