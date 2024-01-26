import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";



const ProtectedRoute: React.FC<{  isSignedIn: boolean,children:React.ReactNode}> = ({ isSignedIn,children }) => {
  const navigate = useNavigate();

 
  useEffect(() => {
    let isMounted = true

    if (isMounted && !isSignedIn) {
        navigate("/")
    }

    return () => {isMounted = false}
}, [isSignedIn,navigate])
  return <>{children}</>;
};
export default ProtectedRoute;
