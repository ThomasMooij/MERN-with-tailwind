import { useRef } from 'react';
import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const Protected = () => {

    const location = useLocation()
    const gert = useRef(location.state?.isAdmin)
    {gert.current ? localStorage.setItem("AdminUserToken" , true) : null } 
    const [admin, setAdmin] = useState(localStorage.getItem("AdminUserToken"))
    return admin ? <Outlet /> : <Navigate to="/login" />
}

export default Protected