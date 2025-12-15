import React, { useContext, useState } from 'react'
import { mycontext } from './Context'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {
    const nav = useNavigate()
    const { user, setUser } = useContext(mycontext)

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [num, setnum] = useState('')

    function alreadyregister() {
        return user.find(item => item.email === email)
    }
    function handleregister() {
        if (!name || !pass || !num || !email) {
            alert('All Fields are required')
            return
        }
        if (!alreadyregister()) {
            const userdata = { name, pass, num, email }
            setUser([...user, userdata])
        }
        else {
            alert('User already registered')
        }
        nav('/reg')
    }

    return (
        <div style={{ backgroundColor: "lightblue", height: '633px', width: "100%", position: 'relative' }}>

            <div style={{ backgroundColor: 'white', width: '25%',height: '430px', position: 'absolute', marginLeft: '500px', marginTop: '137px',borderRadius:'10px' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

                <h5 style={{ textAlign: 'center', marginTop: '10px' }}><u><b>CREATE ACCOUNT</b></u></h5> <br />

                <label htmlFor="" style={{ marginLeft:'36px'}}><b>Username:</b></label> <br />
                <input type="text" style={{marginLeft:'36px',marginTop:"8px",width:'75%',borderRadius:'10px',border:'1px solid grey'}} placeholder='username' value={name} onChange={(e) => setname(e.target.value)} /> <br />

                <label htmlFor="" style={{ marginLeft:'36px'}}><b>Email:</b></label> <br />
                <input type="text" style={{marginLeft:'36px',marginTop:"8px",width:'75%',borderRadius:'10px',border:'1px solid grey'}} placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} /> <br />

                <label htmlFor="" style={{ marginLeft:'36px '}}><b>Password:</b></label> <br />
                <input type="password" style={{marginLeft:'36px',marginTop:"8px",width:'75%',borderRadius:'10px',border:'1px solid grey'}} placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} /> <br />
                
                <label htmlFor="" style={{ marginLeft:'36px'}}><b>Phone number:</b></label> <br />
                <input type="text" style={{marginLeft:'36px',marginTop:"8px",width:'75%',borderRadius:'10px',border:'1px solid grey'}} placeholder='number' value={num} onChange={(e) => setnum(e.target.value)} /> <br />
                <button style={{marginLeft:'88px',marginTop:'13px',width:"150px",height:"40px",backgroundColor:"blue",color:"white",borderRadius:"10px",border:"none"}} onClick={handleregister}>Create Account</button>

                <h6 style={{marginLeft:"40px",color:'white',borderRadius:"15px",marginTop:'17px'}}> <Link to="/reg" style={{textDecoration:'none',fontSize:'14px',marginTop:'20px'}}>Already have  an Account!</Link></h6>

            </div>



        </div>
    )
}

export default Register
