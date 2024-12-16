import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CardsProfile from "./CardsProfile";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/content");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Header />

      <CardsProfile />
      <Footer />
    </div>
  );
};

export default Body;
