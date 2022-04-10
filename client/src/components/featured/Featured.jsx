import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./featured.scss";

export default function Featured({ type, setGenre }) {

  const [content, setContent] = useState({})

  useEffect(() => {
    const randomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExOGI3ZmIyYTRhMzVjNWJjYjBhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMyMDgwOSwiZXhwIjoxNjQ5NzUyODA5fQ.4yux9IJNCTgWVOcTfvkVbfTIcRUaje6L4wodpf9MGws"
          }
        });
        setContent(res.data[0])

      } catch (err) {
        console.log(err);
      }

    }
    randomContent();
  }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "series" ? "Series" : "Movies"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt="image"
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt="image"
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
