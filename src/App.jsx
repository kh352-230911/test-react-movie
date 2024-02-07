import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([
    {id : 1, title : '듄 part2', genre : 'Action', releaseDate : '2024-02-02'},
    {id : 2, title : '웡카', genre : 'Drama', releaseDate : '2024-01-01'},
    {id : 3, title : '외계+인 2부', genre : 'Comedy', releaseDate : '2023-12-12'}
  ]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  // Array#every 배열요소중 조건을 만족하지 않는 요소가 있다면 반복 중단하고 false를 반환 (모든 요소가 조건에 맞는지 검사)
  // Array#some 배열요소중 조건을 만족하는 요소가 있다면 반복을 중단하고 true를 반환 (조건에 맞는 요소가 있는지 검사)
  const isIdAvailable = (id) => !movies.some((movie) => movie.id === Number(id));
  const deleteMovie = (id) => {
    if(confirm(`${id}번 영화를 정말 삭제하시겠습니까?`))
      setMovies(movies.filter((movie) => movie.id !== id));
  };
  return (
    <>
      <nav>
        <Link to="/">List</Link>
        <Link to="/addMovie">Add New Movie</Link>
      </nav>
      <Routes>
        <Route path='/' element={<MovieList movies={movies} deleteMovie={deleteMovie} />}></Route>
        <Route path='/addMovie' element={<AddMovie addMovie={addMovie} isIdAvailable={isIdAvailable}/>}></Route>
      </Routes>
    </>
  )
}

export default App
