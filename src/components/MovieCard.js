const MovieCard =({movie})=>{
    return(
        <div className="Card">
            <img src={movie.posterURL} alt={movie.title} width='200'/>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>⭐{movie.rating}</p>
        </div>
    );
};
export default MovieCard;