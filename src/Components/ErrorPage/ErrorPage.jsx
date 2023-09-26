import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
       
             <div className="text-center items-center mt-8 lg:mt-32">
            <h1 className="text-7xl pb-8 ">Ooops!!</h1>
            <p className="text-3xl pb-12">Page Not Found</p>
            <Link to='/'><button className="btn btn-primary mb-4">Go Home</button></Link>
        </div>
       
    );
};

export default ErrorPage;