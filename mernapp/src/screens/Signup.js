import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
    const [credentials, setcredentials] = useState({name: "", location: "", email: "", password: ""})
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, location:credentials.location, email:credentials.email, password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentials")
        }
    }
    const onChange=(event)=>{
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" name='location' value={credentials.location} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email Id</label>
                        <input type="email" className="form-control" id="exampleInputEmail" name='email' value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-warning">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </>
    )
}
