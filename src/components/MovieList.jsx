import React from 'react'

const MovieList = ({ movies, deleteMovie }) => {

  return (
    <>
      <h1>MovieList</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({id, title, genre, releaseDate}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{genre}</td>
              <td>{releaseDate}</td>
              <td>
                <button onClick={() => deleteMovie(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MovieList