import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google"; // Import GoogleLogin
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import  { client } from "../client";

const LogIn = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    try {
      const decoded = jwtDecode(response.credential); // Decode the credential
      localStorage.setItem("user", JSON.stringify(decoded));
      
      const { name, picture, sub } = decoded; // Extract necessary fields
      
      const doc = {
        _id: sub, // Use 'sub' as Google user ID
        _type: "user",
        userName: name,
        image: picture,
      };

      client.createIfNotExists(doc).then(() => {
        navigate("/", { replace: true });
      });
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/* Add Google Login button here */}
            <GoogleLogin
              clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                >
                  <FcGoogle className="mr-4" /> Login with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
