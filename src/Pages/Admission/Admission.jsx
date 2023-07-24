import Banner from "../../Component/Banner";

const Admission = () => {
    return (
        <div>
             <Banner></Banner>
          <div  className="max-w-screen-xl mx-auto my-20">
          <form>
                <div className="bg-blue-400 p-5">
                    <div className="flex mb-3">
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="Your Name"/>
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="email" placeholder="email"/>
                    </div>
                    <div className="flex mb-3">
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="Your Phone Number"/>
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="Address"/>
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="Image"/>
                    </div>
                    <div className="flex mb-3">
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="date" placeholder="Your Name"/>
                         <select className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none ">
                            <option value=""> Massachusetts Institute of Technology</option>
                            <option value="">  Harvard University</option>
                            <option value=""> Stanford University</option>
                            <option value="">Cornell University</option>
                            <option value="">University of California, Berkeley</option>
                         </select>
                         <select className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none ">
                            <option value="">Type of Education</option>
                            <option value="">  BSc</option>
                            <option value="">Diploma</option>
                            <option value="">Masters</option>
                            <option value="">Psd</option>
                         </select>
                         
                    </div>
                    <button className="w-full btn btn-primary bg-white text-blue-500">Submit</button>
                </div>
            </form>
          </div>
        </div>
    );
};

export default Admission;