import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CardsProfile from "./CardsProfile";
import ProfileModal from "../layouts/ProfileModal";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/content");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
        // ...
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="flex justify-between p-4  mt-3">
        <div className=""></div>
        <div className="">
          <ProfileModal />
        </div>
      </div>
      <CardsProfile />
      <Footer />
    </div>
  );
};

export default Body;
