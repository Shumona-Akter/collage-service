import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import About from '../../Component/About';
import AdmissionAdivce from '../../Component/AdmissionAdivce';
import StudyFrom from '../../Component/StudyFrom';
import Banner from '../../Component/Banner';

const Home = () => {
    return (
        <>
        <Navber></Navber>
<Banner></Banner>
<About></About>
<AdmissionAdivce></AdmissionAdivce>
<StudyFrom></StudyFrom>
</>
    );
};

export default Home;