import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import About from '../../Component/About';
import AdmissionAdivce from '../../Component/AdmissionAdivce';
import StudyFrom from '../../Component/StudyFrom';
import Banner from '../../Component/Banner';
import Collage from '../../Component/Collage';

const Home = () => {
    return (
        <>
        <Navber></Navber>
<Banner></Banner>
<About></About>
<Collage></Collage>
<AdmissionAdivce></AdmissionAdivce>
<StudyFrom></StudyFrom>
</>
    );
};

export default Home;