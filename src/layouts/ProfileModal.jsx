import React, { useRef, useState } from "react";
import ImageUpload from "./ImageUpload";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoading } from "./LoadingContext";
import { Spinner } from "react-bootstrap";

const ProfileModal = () => {
  const [isSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const dobRef = useRef(null);
  const genderRef = useRef(null);
  const descriptionRef = useRef(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setLoading } = useLoading();
  const { loading } = useLoading();
  const handleButtonClick = async () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const dob = dobRef.current.value;
    const gender = genderRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const description = descriptionRef.current.value;

    const message = checkValidData(name, age, dob, gender, email, password, description);
    setErrorMessage(message);
    if (message) return;
    setLoading(true);
    if (!isSignInForm) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed up:", userCredential.user);
        navigate("/dashboard");
        setLoading(false);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`);
        console.error("Error during sign up:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="">
      <button
        className="inline-flex justify-center  items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-800"
        variant="primary"
        onClick={handleShow}
      >
        Create New Profile
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-gray-400">
          <ImageUpload />
          <form onSubmit={(e) => e.preventDefault()} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="name"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="age"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Age
                </label>
                <input
                  ref={ageRef}
                  type="number"
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Age"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="dob"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  DOB
                </label>
                <input
                  ref={dobRef}
                  type="date"
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Date of Birth"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="gender"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Gender
                </label>
                <select
                  ref={genderRef}
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your Email Address"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="password"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  autoComplete="on"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              <div className="text-red-800 col-span-2">{errorMessage}</div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="flex mb-2 text-sm font-medium text-gray-900"
                >
                  Profile Description
                </label>
                <textarea
                  ref={descriptionRef}
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border "
                  placeholder="Write your profile description here"
                  required=""
                ></textarea>
              </div>
            </div>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <Spinner className="w-10 h-10" animation="border" variant="light" />
                </div>
              )}
            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-gray-300 text-black font-medium p-2 w-24 rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProfileModal;
