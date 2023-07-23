import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import About from '../../Component/About';

const Home = () => {
    return (
        <>
        <Navber></Navber>
        <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/airplane-sky_51195-1539.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?w=740&t=st=1690123655~exp=1690124255~hmac=f6e7ac1b0abe7d92717cec18d232a74ebdc237e56833eeb0e6c7de44f629f846" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/diversity-students-graduation-success-celebration-concept_53876-26400.jpg?w=740&t=st=1690123697~exp=1690124297~hmac=af50c358d22da8963e792a97a989fddde1b07e9ebc631488f03f6be98d16538b" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/students-work-green-lawn-before-library_8353-2154.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<About></About>
</>
    );
};

export default Home;