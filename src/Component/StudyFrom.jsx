import { Link } from "react-router-dom";


const StudyFrom = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/education-day-arrangement-with-graduation-cap_23-2148721281.jpg?w=740&t=st=1690132935~exp=1690133535~hmac=ab45f69b0813753e08a3f66cb9be3eed6b67575242d6e8bac765b09d0ad76762)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-1/2 mx-auto">
      <h1 className=" text-4xl mb-5 font-bold">Study abroad from Bangladesh with the right scholarship</h1>
      <p className="mb-5">PFEC Global is proud to dedicatedly work in Bangladesh for international students and assist them in winning prestigious scholarships during a resourceful education journey.</p>
      <Link to={"/admission"}><button className="btn btn-primary">Admission</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default StudyFrom;