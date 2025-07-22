import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
 
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(() => {
        // An error happened.
        
      });
  };

  const handleGptSearchClick =() => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())

  }
  // moved from the Body to Header so that Router work.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // we extract the uid ,  email ,displayName from user object
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); // if user logged  in redirect it to the Browse.
      } else {
        // User is signed out
        dispatch(removeUser());
         navigate("/"); 
         // if user not loggedin re direct it to the Login page.
      }
     
    });
   // unsubscribe when the component is unmount.
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute px-8 py-2   bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />

        {/*this is know as the Short circuit rendering */}
        {user && (
          <div className="flex ">
          <button className="py-2 px-4  m-2 bg-purple-800  text-white rounded-xl" onClick={handleGptSearchClick}>GPT Search</button>
            <img
              className="p-2 w-16 "
              alt="user-icon"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="p-2 font-bold text-white "
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
