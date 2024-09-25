import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './Main'
import { Projects } from './components/Projects'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='*' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
