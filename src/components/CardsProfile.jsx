import { Link } from "react-router-dom";
import { profileItems } from "../utils/profileData";
import { Card, Dropdown } from "react-bootstrap";
import gsap from "gsap";

const CardsProfile = () => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline.from(".anim", {
    keyframes: {
      y: [40, 80, -10, 30, 0],
      ease: "none",
      easeEach: "power2.inOut",
    },
    ease: "elastic",
    duration: 2,
    stagger: 0.2,
  });
  return (
    <div className="p-3 container ">
      <div className="flex justify-between p-3">
        <div className="">
          <div className="mx-auto shadow-lg">
            <Card>
              <Card.Header className="p-3">
                <Card.Title>My Profile</Card.Title>
              </Card.Header>

              <div className="flex p-3 justify-evenly flex-wrap items-center">
                <div className="">
                  <img className="w-52" src="./images/boy.png" alt="" />
                </div>
                <div className="">
                  <h5 className="mt-3 font-normal text-black text-xl">
                    Muhajir Ahmadh
                  </h5>

                  <h1 className="mt-3 text-xl font-normal text-black">
                    Age : 25
                  </h1>

                  <div className="mt-3 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cum in aspernatur nihil! Vel sit natus numquam
                    reprehenderit inventore porro quae voluptatem? Expedita
                    nulla exercitationem omnis quia quas doloremque.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className=" h-10 bg-transparent text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="flex gap-2 p-2">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div className="">Help</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="flex gap-2  p-2">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <div className="">Settings</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="flex gap-2  p-2">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <Link className="text-black no-underline" to={"/login"}>
                      Logout
                    </Link>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="text-3xl mt-3 ">Your profiles matches like :</div>
      <div className="flex gap-3 flex-wrap justify-center mt-4 ">
        {profileItems.map((profile) => (
          <div
            key={profile.id}
            className="w-96 h-76 bg-gray-200 border  rounded-lg anim shadow-md"
            data-animatetime="0"
            data-animatefrom="fade-up"
          >
            <Link>
              <img
                className="rounded-t-lg w-60 mx-auto mt-2"
                src={profile.avatar}
                alt=""
              />
            </Link>
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {profile.name}
              </h5>

              <h1 className="mb-3 text-lg font-normal text-gray-900  ">
                Age : {profile.age}
              </h1>

              <div className="text-gray-900 ">{profile.description}</div>
              <button className="inline-flex no-underline items-center px-3 py-2 mt-3 text-sm font-medium text-center text-black bg-gray-300 rounded-lg ">
                View more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsProfile;
