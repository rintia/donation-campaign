import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className=" max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h1>This is root</h1>
        </div>
    );
};

export default Root;