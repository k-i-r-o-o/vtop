import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect , useState } from "react";
import axios from "axios";

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  // const [user ,setUser] = useState({});
  // useEffect(() =>
  // {
  //   const fetchUser = async () =>{
  //   const res=await axios.get(`http://localhost:8800/users?username=ameya`)
  //   };
  //   fetchUser();
  // },[])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}post/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">ameya</h4>
                <span className="profileInfoDesc">hey there</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed  username="ameya"/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
