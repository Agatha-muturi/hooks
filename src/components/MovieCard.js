const MovieCard =({movie})=>{
    return(
        <div className="Card">
            <img src={movie.posterURL} alt={movie.title} width='200'/>
            <h3>{movie.title}</h3><br/>
            {movie.description}<br/>
            ⭐{movie.rating}
        </div>
    );
};
export default MovieCard;