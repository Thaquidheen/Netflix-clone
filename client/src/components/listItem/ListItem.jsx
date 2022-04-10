import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined, } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ListItem({ index, items }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + items, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExOGI3ZmIyYTRhMzVjNWJjYjBhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMyMDgwOSwiZXhwIjoxNjQ5NzUyODA5fQ.4yux9IJNCTgWVOcTfvkVbfTIcRUaje6L4wodpf9MGws"
          }
        })
        setMovie(res.data)
      } catch (err) {
        console.log(err)
      }

    }
    getMovie();
  }, [items]);
  const toWatch = () => {
    navigate('/watch', { state: { movie } })
  }
  return (

    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="image" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <a onClick={() => { toWatch() }} >
                <PlayArrow className="icon" />
              </a>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.title}</span>
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>

  );

}
