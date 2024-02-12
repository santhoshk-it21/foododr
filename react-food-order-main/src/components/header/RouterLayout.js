import {Navigation} from "./Navigation";
import {Outlet} from "react-router-dom";

export const RouterLayout =() => {
    return <>
        <Navigation/>
        <Outlet/>
    </>
}