import './App.css';
import React,{useState} from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MoneyTalks from'./images/mt.jpeg';
import Friday from './images/friday.jpeg';
import RushHour from './images/rushhour.jpeg';
import HangOver from './images/hangover.jpeg';

function App() {
  const[movies, setMovies]=useState([
    {
      title:'Money Talks',
      description:'Action, Comedy, Crime, Thriller ',
      posterURL:MoneyTalks,
      rating: 9
    },
    {
      title:'Friday',
      description:' Comedy, Drama ',
      posterURL: Friday,
      rating:8.5
    },
    {
      title:'Rush Hour',
      description:'Action, Comedy, Crime, Thriller',
      posterURL:RushHour ,
      rating:9.5
    },
    {
      title:'The Hangover',
      description:'Comedy, Crime',
      posterURL:HangOver ,
      rating:7.5
    }
  ]);
  const[filterTitle, setFilterTitle]=useState('');
  const[filterRate,setFilterRate]=useState(0);
  const addMovie=(movie)=>{
    setMovies([...movies,movie]);
  };
  const filteredMovies=movies.filter(
    (movie)=>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())&&
  movie.rating>=filterRate
);
  return (
    <div className="App">
     <h1>🎬 My Favorite Movies</h1> 
     <Filter
     filterTitle={filterTitle}
     setFilterTitle={setFilterTitle}
     filterRate={filterRate}
      setFilterRate={setFilterRate}
      />
      <AddMovie addMovie={addMovie}/>
      <MovieList movies={filteredMovies}/>
     

    </div>
  );
};

export default App;
