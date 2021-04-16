import 'Src/styles/style.less'
// const es6Promise = require('es6-promise')
// es6Promise.polyfill()
// import 'whatwg-fetch'

if (process.env.NODE_ENV !== 'production') {
	console.log('this is dev mode')
}

/*
	动态设置publicPath，在正式环境运行的时候为绝对路径，如果需要手动指定，可以直接设置
	__webpack_public_path__的值，如  __webpack_public_path__ = '/base/bundles/'

 */
let scripts = document.getElementsByTagName('script')
for (let i = scripts.length - 1; i >= 0; i--) {
	if (scripts[i].src.indexOf('.bundle.js') >= 0) {
		let src = scripts[i].getAttribute('src')
		if(src) {
			__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1)
			break
		}
	}
}



import * as React from 'react'
import {render} from 'react-dom'

import('../pages/home/Home').then((res)=>{
	const App = res.default
	const $root = document.querySelector('#root')
	
	if (process.env.NODE_ENV !== 'production') {
		console.log('this is dev mode')
	}

	// if (module && module.hot) {
	// 	module.hot.accept();
	// }
	
	render(<App/>, $root)
})