import React, { useContext, useState } from 'react'
import { mycontext } from './Context';
import Header from './Header';
import Footer from './Footer';
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { products } from './List';

// 


function UserDash() {

    const [filtereddata, setfiltereddata] = useState(products);
    const [searchquery, setsearchquery] = React.useState("");
    console.log("hh", products);
    const { like, setlike, cart, setcart } = useContext(mycontext);


    function handlelike(prod) {
        if (like.includes(prod)) {
            setlike(like.filter(item => item !== prod))
        }
        else {
            setlike([...like, prod])
        }
    }
    console.log(like, "like")
    function handlecart(prod) {
        if (cart.includes(prod)) {
            setcart(cart.filter(item => item !==prod))
        }
        else {
           setcart([...cart, prod])
        }
    }



    function handlesearch(e) {
        const query = e.target.value
        setsearchquery(query)
        const filtered = products.filter(product => product.productname.toLowerCase().includes(query.toLowerCase()) ||
            product.prize.toString().includes(query) || product.category.toLowerCase().includes(query.toLowerCase()))
        setfiltereddata(filtered)
    }

    return (
        <div>

            <div>
                <header style={{ marginTop: '20px', width: '100%', height: '140px', display: 'flex', justifyContent: 'center', flexDirection: 'row', flex: 'wrap', backgroundColor: 'black', marginTop: '0', color: 'white' }}>
                    <input type="text" style={{ width: '40%', height: '38px', position: "absolute",marginTop:'86px' }} placeholder='search products' onChange={handlesearch} />&nbsp;

                    <div style={{ marginLeft: '890px', display: 'flex', flexDirection: 'row', gap: '30px', color: 'white', alignItems: 'center' }}>
                        <Link to="/home" style={{ marginLeft:'80px', fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to="/about" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>ABOUT</Link>
                        <Link to="/help" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>HELP</Link>
                        <Link to="/home" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'red' }}>LOGOUT</Link>


                    </div>


                </header>
                
                   <div>
                       <Link to="/like" style={{ marginLeft:'1180px', fontSize: '20px', marginTop: '-100px', textDecoration: 'none', color: 'white',position:'absolute',color:'green'}}>LIKED<h4 style={{marginTop:"-30px",marginLeft:'52px'}}>♡</h4></Link> 
                        <Link to="/add" style={{  marginLeft:'1280px',fontSize: '20px', marginTop: '-100px', textDecoration: 'none', color: 'white',position:'absolute',color:'green' }}>CART🛒</Link>
                       </div>

            </div>

            <div style={{ display: "flex", flexWrap: "wrap", width: "100%",marginLeft: "50px" }}>

                {
                    filtereddata.map((pdt) =>
                        <div style={{ borderShadow: "5px", borderRadius: "5px", padding: "10px", marginLeft: "15px", textAlign: "center", marginTop: "40px", backgroundColor: 'lightgrey', position: 'relative', width: "300px" }}>
                            <img src={pdt.image} alt="" style={{ width: '250px', height: '320px',marginTop:'5px',borderRadius:'7px' }} />  <br />
                            <h6 style={{ fontSize: "16px", marginTop: '10px', position: 'absolute',color: 'black',justifyContent:'center',textAlign:'center'}}>{pdt.productname}</h6> <br /> <br />
                            <div style={{ color: 'black' }}>  <b>{pdt.category}</b><br /> </div>
                            <div style={{ color: 'black' }}>  <b>{pdt.prize}</b><br /> </div>
                            <div style={{ color: 'black',fontFamily: "sans-serif"}}> <b>{pdt.size}</b><br /> </div>


                            <button onClick={() => handlelike(pdt)} style={{ width: "100px", height: "30px", backgroundColor: 'green', color: 'white', borderRadius: "5px",border:'none'}}>
                                {
                                    like.includes(pdt) ? "Unlike👎" : "Like👍"
                                }
                            </button>
                            <button onClick={() => handlecart(pdt)} style={{ width: "125px", height: "30px", margin: "4px", backgroundColor: 'green', color: 'white', borderRadius: "5px",border:"none" }}>
                                {cart.includes(pdt) ? "Added✔" : "Add to cart🛒"
                           }
                            </button>







                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default UserDash