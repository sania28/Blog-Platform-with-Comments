import React from 'react';
import LoginSignup from './Components/LoginSignup';
import DataProvider from './Components/context/dataProvider';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/home/Home';
import CreatePost from "./Components/create/createPost";
import { ErrorPage } from './Components/error/ErrorPage';
import { Full_Blog } from './Components/full-blog/FullBlog';
import MyBlogs from './Components/my-blogs.js/MyBlogs';
import UpdatePost from './Components/update/UpdateBlog';
function App() {


	return (
		<DataProvider>



			<Routes>
				<Route path='*' element={<ErrorPage />} />

				<Route path='/' element={<LoginSignup />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/update' element={<UpdatePost />}></Route>
				<Route path='/create' element={<CreatePost />}/>
				<Route path='/blog/:id' element={<Full_Blog />}></Route>
				<Route path='/myBlogs' element={<MyBlogs/>}/>
				




			</Routes>



		</DataProvider>
	)

}

export default App;