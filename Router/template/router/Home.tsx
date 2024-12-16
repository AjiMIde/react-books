import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Home () {
  useEffect(() => {
  }, [])
  return (
    <div>
      <h1>
        Home
      </h1>
      <a href="#/about">about</a>
      <br />
      <a href="#/home1">home1</a>
      <br />
      <a href="#/home2">home2</a>
      <br />
      <a href="#/home3">home3</a>
      <br />
      <Outlet />
    </div>
  )
}
