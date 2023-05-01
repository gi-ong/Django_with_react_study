import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import About from './About';
import Home from './Home';
// import AccountsRoutes from "./accounts";
import Login from './accounts/Login';
import Profile from './accounts/Profile';

function Root(){
    return (
        <>
            <AppLayout>
                최상위 컴포넌트
                {/* route-dom 6버전이후 */}
                <Outlet/>
                
            {/* <Routes> route-dom 6버전 미만 코드
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/accounts">
                    <Route path="login" element={<Login/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes> */}
            </AppLayout>
        </>
    )
}

export default Root;