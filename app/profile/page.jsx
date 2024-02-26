"use client";
import Navbar from "@/components/user_components/common/Navbar";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ProfilePage = () => {
  return (
    <>
      <TopBarComponent />
      <Navbar />

      <main className="profile-page">
        <section className="relative block h-72">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-MainBlueColor"
            ></span>
          </div>
        </section>
        <section className="relative py-16 bg-MainYellowColor">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <img
                      alt="profile"
                      src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                      className=" w-36 md:w-48 shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                  {/* ///////////////////// BUTTONS /////////////////////// */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="sm:py-10 px-3 mt-32 sm:mt-0 flex flex-row justify-between ">
                      <button
                        className="w-full mx-5 bg-MainCoralColor active:bg-MainCoralColor uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                      <button
                        className="w-full bg-MainBlueColor active:bg-DarkBlueColor uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Profile
                      </button>
                    </div>
                  </div>
                  {/* ///////////////////// TRANSACTIONS /////////////////////// */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          2
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Pending
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Successfull
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          12
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Orders
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ///////////////////// DATA /////////////////////// */}
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="flex flex-row w-full justify-center items-center">
                    <div className="text-sm leading-normal text-gray-600 font-bold uppercase">
                      samerrr@samer.com
                    </div>
                    <IoMdMail size={25} className=" mx-1 text-MainBlueColor" />
                  </div>

                  <div className="flex flex-row w-full justify-center items-center mt-10">
                    <div className=" text-gray-600">+20 10 11 12345 345</div>
                    <FaPhoneAlt
                      size={20}
                      className=" mx-2 text-MainBlueColor"
                    />
                  </div>

                  <div className="flex flex-row w-full justify-center items-center mt-5">
                    <div className=" text-gray-600">Cairo, Egypt</div>
                    <MdLocationOn
                      size={20}
                      className=" mx-2 text-MainBlueColor"
                    />
                  </div>
                </div>
                {/* ///////////////////// DETAILS /////////////////////// */}
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default ProfilePage;
