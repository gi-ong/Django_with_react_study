import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Root from "pages";

function AccountRoutes({match}){
    return(
        <div>accounts/index</div>
        // <Root> router-dom 버전 6 미만 일때
        //     <Routes>
        //         <Route path={match.url + "/profile"} element={<Profile/>} />
        //         <Route path={match.url + "/login"} element={<Login/>}/>
        //     </Routes>
        // </Root>
    )
}

export default AccountRoutes;