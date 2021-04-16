import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import styles from './Home.module.less'
import debounce from 'Utils/debounce'
import throttle from 'Utils/throttle'

const App = () => {
	const [position, setPosition] = useState<string>('')
	const [fontSize, setFontSize] = useState<number>(0)

	// const handleMove = (event: React.MouseEvent) => {
	// 	setPosition(`${event.pageX}, ${event.pageY}`)
	// }

    const handleMove = throttle((event: React.MouseEvent) => {
		setPosition(`${event.pageX}, ${event.pageY}`)
		setFontSize(Math.ceil(Math.min(Math.random() * 100, 100)))
	}, 3000, { leading: false, trailing: false,  })

    const handleClick = () => {
        // if(fontSize >= 18) {
        //     handleMove.cancel()
        // }
    }

	return (
		<div className={ styles.container }>
            <div className={ styles.content } onMouseMove={handleMove} style={{ fontSize }}>
                { position }
            </div>
            <button className={ styles.btn } onClick={handleClick}>{ fontSize }, 够大了</button>
        </div>
	)
}

export default hot(App)

// import React from 'react';
// export default class Life extends React.Component<any, any>{
//     constructor(props: any){
//         super(props);
//         this.state = {
//             count:4
//         };
//     }

    // handleAdd = () => {

    // }

// 	//此时this指向是当前实例对象
// 	handleClick(){
// 		console.log('====================================');
// 		console.log(this);
// 		console.log('====================================');
// 	}
//     render(){
//         var style = {
//             padding:'10px',
//             color:'red',
//             fontSize:'30px'
//         }
//         return (
//             <div style={style}>{/*注意js语法使用一个括号{}去表示,style使用两个括号,原因里面其实是一个对象*/}
//                 <p>React生命周期介绍</p>
//                 <button onClick={() => { console.log(this) }}>无bind点击一下</button>
//                 <button onClick={this.handleClick.bind(this)}>有bind点击一下</button>
//                 <p>{this.state.count}</p>
//             </div>
//         )
//     }
// }
