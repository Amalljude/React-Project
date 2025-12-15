import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mycontext } from './Context'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Adminview() {

    const [productname, setpname] = useState('')
    const [category, setcat] = useState('')
    const [prize, setprize] = useState('')
    const [image, setimage] = useState('')
    const [adddetails, setadddetails] = useState([])
    const { product, setproduct } = useContext(mycontext)
    const nav = useNavigate();

    function add() {
        const existingproduct = adddetails.find(product => product.productname.toLowerCase() === productname.toLowerCase())
        if (existingproduct) {
            alert('Product already exists')
            setcat('')
            setprize('')
            setimage('')
            setpname('')
        }
        else {
            const newproduct = { productname, category, prize, image }
            setadddetails([...adddetails, newproduct])
            setproduct([...product, newproduct])

        }
    }
    return (
        <div>

            <header style={{ marginTop: '20px', width: '100%', height: '140px', display: 'flex', justifyContent: 'center', flexDirection: 'row', flex: 'wrap', backgroundColor: 'black', marginTop: '0', color: 'white' }}>


                <div style={{ marginLeft: '890px', display: 'flex', flexDirection: 'row', gap: '30px', color: 'white', alignItems: 'center' }}>
                    <Link to="/home" style={{ marginLeft: '80px', fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>HOME</Link>
                    <Link to="/about" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>ABOUT</Link>
                    <Link to="/help" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'white' }}>HELP</Link>
                    <Link to="/home" style={{ fontSize: '20px', marginTop: '70px', textDecoration: 'none', color: 'red' }}>LOGOUT</Link>


                </div>


            </header>










            <div style={{ width: '100%', height: '900px', padding: '50px' }}>
                <h2 style={{}}><u><b>Admin Panel - Add New Product</b></u></h2>
                <div style={{ backgroundColor: 'white', width: '60%', height: '400px', padding: '20px' }}>
                    <label style={{ marginLeft: '20px' }}><b>PRODUCT NAME:</b></label>
                    <input style={{ marginLeft: '20px', width: '60%', textDecoration: 'none', border: 'none', backgroundColor: 'lightgray' }} type="text" value={productname} onChange={(e) => setpname(e.target.value)} /><br /> <br />

                    <label style={{ marginLeft: '20px' }}><b>CATEGORY:</b></label>
                    <input style={{ marginLeft: '63px', width: '60%', textDecoration: 'none', border: 'none', backgroundColor: 'lightgray' }} type="text" value={category} onChange={(e) => setcat(e.target.value)} /><br /> <br />

                    <label style={{ marginLeft: '20px' }}  ><b>PRIZE:</b></label>
                    <input style={{ marginLeft: '96px', width: '60%', textDecoration: 'none', border: 'none', backgroundColor: 'lightgray' }} type="text" value={prize} onChange={(e) => setprize(e.target.value)} /><br /> <br />

                    <label style={{ marginLeft: '20px' }}><b>IMAGE URL:</b></label>
                    <input style={{ marginLeft: '55px', width: '60%', textDecoration: 'none', border: 'none', backgroundColor: 'lightgray' }} type="text" value={image} onChange={(e) => setimage(e.target.value)} /><br /> <br />

                    <button style={{marginTop:'5px', marginLeft: '20px',border:'none',boxShadow: '0 1px 5px 0 black',height:'35px' }} onClick={add}><b>Add Product</b></button>
                </div>

                <div style={{ width: '100%', height: '1000px', display: 'flex', flex: 'wrap', position: 'absolute' }}>
                    {
                        adddetails.map((item, index) => (
                            <div style={{ height: '40%', backgroundColor: 'lightgray', width: '23%', justifyContent: 'center', textAlign: 'center', margin: '10px', borderRadius: '10px', position: 'relative' }} key={index}>
                                <img src={item.image} alt={item.productname} style={{ width: '100px', height: '300px' }} /> <br />
                                <h4>{item.productname}</h4>
                                <h5 style={{ color: "green" }}>₹{item.prize}</h5>
                                <h4 style={{ color: "grey" }}>{item.category}</h4>
                            </div>
                        )
                        )}

                    <div style={{width:'100%',height:'500px',backgroundColor:'blue'}}>
                        <div style={{display:'flex',flexWrap:'wrap',width:'100%',height:'700px',position:'absolute',backgroundColor:"red"}}>
                           {
                            product.map((item,index)=>(
                              
                                
                                     <Link to={`/productdetails/${item.id}`}>
                                     <div style={{backgroundColor:'gray',width:'50%',height:'200px'}}>
                                        <img src={item.image} alt='' style={{objectFit:'cover',height:'300px',width:'50%'}}></img>
                                        <h4>{item.productname}</h4>
                                        <h5>PRIZE:{item.prize}</h5>
                                        <h5>CATEGORY:{item.category}</h5>
                                     </div>
                                      </Link>
                            ))
                           }

                        </div>
                    </div>


                </div>

            </div>


        </div>

    )
}

export default Adminview
