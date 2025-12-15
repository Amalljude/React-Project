import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Admin() {

    const nav = useNavigate();
    const [uname, setuname] = useState('')
    const [pass, setpass] = useState('')
    const [email, setemail] = useState('')

    function adsubmit() {
        if (uname === 'admin' && pass === 'admin123') {
            alert('Login Successful')
            nav('/adminview')
        }
        else {
            alert('username or password is incorrect')
            
        }
    }
    return (

        <div className='full' style={{ backgroundColor: 'lightblue', height: '630px', width: '100%', position: "relative" }}>

            <div style={{ backgroundColor: 'white', height: '370px', width: '23%', marginLeft: '520px', paddingTop: '30px', position: "absolute", marginTop: '150px', borderRadius: '10px', boxShadow: '0px 0px 8px black' }}>
                <h3 style={{ marginTop: "-10px", fontSize: '26px', textAlign: 'center' }}><u>LOGIN</u></h3> <br />


                <label htmlFor="" style={{ marginLeft: "28px" }}><b>Email:</b></label>
                <input type="text" style={{ marginLeft: '28px', borderRadius: '10px', border: 'none', border: '1px solid grey', marginTop: '10px', width: '85%' }} value={email} placeholder='email' onChange={e => setemail(e.target.value)} />

                <label htmlFor="" style={{ marginLeft: "28px",marginTop:'10px',position:'relative' }}><b>username:</b></label>
                <input type="text" style={{ marginLeft: '28px', borderRadius: '10px', border: 'none', border: '1px solid grey', marginTop: '10px', width: '85%' }} value={uname} placeholder='email' onChange={e => setuname(e.target.value)} />

                <label htmlFor="" style={{ marginLeft: "28px", marginTop: '15px' }}><b>Password:</b></label>
                <input type="password" style={{ marginLeft: '28px', borderRadius: '10px', border: 'none', border: '1px solid grey', marginTop: '10px', width: '85%' }} value={pass} placeholder='password' onChange={e => setpass(e.target.value)} /> <br />

                <button style={{ marginTop: '20px', width: '150px', borderRadius: '7px', backgroundColor: 'blue', color: 'white', border: 'none', height: '38px', marginLeft: '80px' }} onClick={adsubmit}>LOGIN</button>

            </div>

        </div>
    )
}

export default Admin
