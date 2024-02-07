import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const defaultFrm = {
  id: '',
  title: '',
  genre: '',
  releaseDate: ''
};
const AddMovie = ({ addMovie, isIdAvailable }) => {
  const navigate = useNavigate();
  const [frm, setFrm] = useState(defaultFrm);
  const { id, title, genre, releaseDate } = frm;
  const onChangeFrm = (e) => {
    setFrm({
      ...frm,
      [e.target.name] : e.target.value
    })

  };
  const onSubmitFrm = (e) => {
    e.preventDefault();
    if (validateFrm()) {
      addMovie(frm);
      setFrm(defaultFrm); // 초기화
      if (confirm('영화가 정상적으로 등록되었습니다. 확인하시겠습니까?'))
        navigate('/');
    }
  }
  const validateFrm = () => {
    // 아이디 중복검사
    if (!isIdAvailable(id)) {
      alert('아이디가 이미 사용중입니다.')
      return false;
    }
    return true;
  }
  return (
    <>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmitFrm}>
        <div>
          <label htmlFor="id">ID</label>
          {' '}
          <input type="text" id="id" name="id" value={id} onChange={onChangeFrm} placeholder='input movie id' required />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          {' '}
          <input type="text" id="title" name="title" value={title} onChange={onChangeFrm} placeholder='input movie title' required />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          {' '}
          <input type="text" id="genre" name="genre" value={genre} onChange={onChangeFrm} placeholder='input movie genre' required />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date</label>
          {' '}
          <input type="date" id="releaseDate" name="releaseDate" value={releaseDate} onChange={onChangeFrm} required />
        </div>
        <button>Add Movie</button>
      </form>
    </>
  )
}

export default AddMovie