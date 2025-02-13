import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error,setError]= useState();
  const [loading, setLoading] = useState(false);
  const {updateUser} = useContext(AuthContext);


  const navigate = useNavigate();

  const handleSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const username =formData.get("username");
    const password = formData.get("password");

    
    try {
      const res =  await apiRequest.post("/auth/login", {
        username,
        password
      })
      

      // for storage in local storage 
      //localStorage.setItem("user", JSON.stringify(res.data));
      

      // now we are using context
      updateUser(res.data)

      navigate("/")

      console.log(res.data);
      console.log(res);

    }catch(error){
      setError(error.response.data.message);
      console.log(error);

    }finally{
      setLoading(false);
    }

  }

  return (
    <div className="login">
      <div className="formContainer">
      <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled ={loading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
