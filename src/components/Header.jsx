import React, { useState } from "react";

import MoodIcon from "@mui/icons-material/Mood";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import "./Photo.css";

import photo from "../img/Profile.jpg";
import "./footer.css";

import "./Header.css";

// _________________________________________________

function Header(props) {
  const { count, setCount } = props;

  const [like, setLike] = useState(true);

  function handletoggle() {
    if (like) {
      setLike(false);
      setCount(count + 1);
    } else {
      setLike(true);
      setCount(count - 1);
    }
  }

  return (
    <div className="header">
      <div className="top">
        <MoodIcon />
        <h3>Goat</h3>
      </div>

      <div>
        <img src={photo} alt="Profile" onDoubleClick={handletoggle} />
      </div>

      <div className="footer">
        <CommentIcon className="comment" />
        {!like ? (
          <FavoriteIcon className="fav-icon" onClick={handletoggle} />
        ) : (
          <FavoriteBorderIcon className="favorite" onClick={handletoggle} />
        )}
      </div>
    </div>
  );
}

export default Header;
