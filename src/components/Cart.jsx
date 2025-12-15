import React, { useContext } from 'react'
import { mycontext } from './Context'

function Addedprd() {
    const { cart } = useContext(mycontext)

    return (
        <div style={{ pwidth:"100%",height:'1000px',padding: "26px", fontFamily: "sans-serif"}}>
            <h2 style={{ textAlign: "center", }} Liked Products></h2>

            <div style={{ display: 'flex', flex: "wrap", justifyContent: "center", gap: "20px" }}>

                {cart.length > 0 ? cart.map(item => (

                               <div style={{ width: "20%",height:'400px', border: "1px solid black", borderRadius: "10px", boxShadow: "1px 2px 6px black", padding: "10x", textAlign: "center", backgroundClip: "yellow",justifyContent:"center" }}>

                        <img src={item.image} alt={item.productname} style={{ width: "80%", height: "200px", objectFit: "cover", borderRadius: "10px",marginTop:"7px" }} />
                        <h4 style={{ marginTop: "10px" }}>{item.productname}</h4><br />
                        <h4 style={{color:"grey", fontSize:"20px",marginTop:'-20px',position:'relative'}}>{item.category}</h4>
                         <h5 style={{color:"green",marginTop:'10px'}}>{item.prize}</h5>
                          
                         
                         </div>
                        )) : ( 
                              <p style={{textAlign:"center",color:"black"}}>No Liked item to Display</p>
                        )}
                    </div>
                  

        </div>
    )
}
export default Addedprd