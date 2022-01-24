import React from "react";
import "./MovieDescription.css";
// import Like from "../../Container/Like";
// import MyNote from "../../Container/MyNote";
// import MovieDBNote from "../../Container/MovieDBNote";
import moment from "moment";

const MovieDescription = (props) => {
  const { movieData } = props;

  return (
    <div className="micro">
      <div className="marge">
        <h4 className="titre">{movieData.movieData.title}</h4>
        <div className="date">
          Date de sortie:{""}
          {moment(movieData.movieData.release_date).format("DD/MM/YYYY")}
        </div>
        <h4 className="resume">{movieData.movieData.overview}</h4>
        {/* <Like movieData={movieData} />

        <MyNote movieData={movieData} />
        <MovieDBNote movieData={movieData} /> */}
      </div>
    </div>
  );
};

export default MovieDescription;
