import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullScreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">40</div>
          </div>
          <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">30</div>
          </div>
          <div className="item">
            <ListOutLinedIcon className="icon" />
          </div>
          <div className="item">
           <img src="data:image/jpeg;base64,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" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
