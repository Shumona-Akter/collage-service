import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
            <div className="hero min-h-screen bg-[url('https://img.freepik.com/free-photo/group-active-kids-cheerful-girls-dancing-isolated-green-background-neon-light_155003-46334.jpg?w=740&t=st=1686104601~exp=1686105201~hmac=6f9fc993b063b28f2d3179c32b5b17f8921e5d7ef53bc0597daf68de0804307a')]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{error.status} {error.statusText || error.message}</h1>
                                    <p className="mb-5">{error.data}</p>
                                    <Link to="/"><button className="btn btn-primary">Go Home</button></Link>
                            </div>
                    </div>
            </div>
    );
};

export default ErrorPage;