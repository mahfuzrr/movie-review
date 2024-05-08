import { Toaster } from "react-hot-toast";
import Home from "../components/home/Home";
import Layout from "./Layout";

export default function HomePage(){
    return(
        <Layout>
            <Toaster/>
            <Home/>
        </Layout>
    );
};