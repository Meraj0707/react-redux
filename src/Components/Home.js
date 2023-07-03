import React from 'react'

 const Home = (props)=>{
    console.log(props);
    return (
        <div>
           <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="../../logo.svg"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>

                <div className="btn-wrapper item">
                    <button style={{backgroundColor:'blue'}}
                    onClick={
                        ()=>{props.removeToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

 export default Home;
