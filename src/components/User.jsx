import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mycontext } from './Context'
import { Link } from 'react-router-dom'


function User() {
    const nav = useNavigate()
    const { user, setUser } = useContext(mycontext)


    const [pass, setpass] = useState("")
    const [email, setemail] = useState("")
    const handleLogin = () => {
        const loggeduser = user.find(item => item.email === email && item.pass === pass)
        if (loggeduser) {
            alert('Login successfull')
            nav('/newuser')
        } else {
            alert('Login Failed! please try again')
        }
    }

    return (
        <div className='full' style={{ backgroundColor: 'lightblue', height: '630px', width: '100%', position: "relative" }}>

            <div style={{ backgroundColor: 'white', height: '350px', width: '23%', marginLeft: '520px', paddingTop: '30px', position: "absolute", marginTop: '150px', borderRadius: '10px', boxShadow: '0px 0px 8px black' }}>
                <h3 style={{ marginTop: "-10px", fontSize: '26px',textAlign:'center' }}><u>LOGIN</u></h3> <br />

                <label htmlFor="" style={{ marginLeft:"28px" }}><b>Email:</b></label>
                <input type="text" style={{ marginLeft:'28px', borderRadius: '10px', border: 'none', border: '1px solid grey', marginTop: '10px', width: '85%' }} value={email} placeholder='email' onChange={e => setemail(e.target.value)} />

                <label htmlFor="" style={{ marginLeft:"28px", marginTop: '15px' }}><b>Password:</b></label>
                <input type="password" style={{ marginLeft: '28px', borderRadius: '10px', border: 'none', border: '1px solid grey', marginTop: '10px', width: '85%' }} value={pass}   placeholder='password'   onChange={e => setpass(e.target.value)} /> <br />

                <button style={{ marginTop: '20px', width: '150px', borderRadius: '7px', backgroundColor: 'blue', color: 'white', border: 'none', height: '38px',marginLeft:'80px'}} onClick={handleLogin}>submit</button>

              <Link to={'/regis'} style={{textDecoration:'NONE',marginLeft:'25px'}}> <h6 style={{marginLeft:'29px',marginTop:'20px',fontSize:'14px'}}>you don't have an account?</h6></Link> 
            </div>

        </div>
    )
}

export default User