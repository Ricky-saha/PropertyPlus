import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./profileUpdatePage.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";



function ProfileUpdatePage() {
  const {currentUser, updateUser} =useContext(AuthContext);
  const [error, setError]= useState("")
  const [avatar, setAvatar]= useState([])

  const navigate = useNavigate()

  const handleSubmit= async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password =formData.get("password");
    // const avatar = avatar;


    try{
      const res= await apiRequest.put(`/auth/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0]});

        updateUser(res.data);
        console.log(res.data);
        navigate("/profile");
    }catch(error){
      setError(error.response.data.message)
      console.log(error);
    }
  }


  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit ={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error&&<span> error while updating</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar ||  "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget uwConfig={{
          cloudName:"dq5gzcvm5",
          uploadPreset:"PropertyPlus",
          multiple:false,
          maxImageFileSize:2000000,
          folder:"codehelp"
        }}
        setState={setAvatar}/>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
