import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { SignInButton, useSession } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, session } = useSession();
  const navigate = useNavigate()
  if (!isLoaded) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
  if (session && !session.user) {
    navigate()
  }
  return <>{children}</>;
};
export default ProtectedRoute;
