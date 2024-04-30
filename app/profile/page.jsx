"use client";
import LoadingPage from "@/components/user_components/common/loading";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/db/firebase_init";
import { useEffect, useLayoutEffect, useState } from "react";
import { GetOneUser } from "@/repository/users_repository";
import ProfielTableComp from "@/components/user_components/profile/profile_table_comp";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        GetOneUser(user.uid).then((profileData) => {
          setProfile(profileData);
          setLoading(false);
        });
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <main className="profile-page">
            <section className="relative block h-72">
              <div className="absolute top-0 w-full h-full bg-center bg-cover">
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute bg-MainBlueColor"
                ></span>
              </div>
            </section>
            <section className="relative py-10 bg-MainYellowColor">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded-lg -mt-64">
                  <div className="px-6 flex flex-col">
                    {/* ///////////////////// PROFILE Image /////////////////////// */}
                    <div className="w-full px-4  flex justify-center">
                      <Image
                        width={64}
                        height={64}
                        alt="profile"
                        src="./logo/logo.svg"
                        className="p-3 w-36 md:w-48 shadow-lg bg-white rounded-full h-36 md:h-48 align-middle border-none lg:mt-0 -mt-10"
                      />
                    </div>
                    {/* ///////////////////// PROFILE DATA /////////////////////// */}
                    <div className=" w-full text-center mt-5">
                      <h3 className="text-4xl font-semibold leading-normal uppercase text-MainBlueColor mb-2">
                        {profile.firstName + " " + profile.lastName}
                      </h3>
                      <div className="flex flex-row w-full justify-center items-center">
                        <div className="text-sm leading-normal text-gray-900 font-bold">
                          {profile.email}
                        </div>
                        <IoMdMail size={25} className=" mx-1 text-gray-900" />
                      </div>

                      <div className="flex flex-row w-full justify-center items-center mt-5 mb-5">
                        <div className=" text-gray-900">{profile.phone}</div>
                        <FaPhoneAlt size={20} className=" mx-2 text-gray-900" />
                      </div>

                      {/* <div className="flex flex-row w-full justify-center items-center mt-5">
                        <div className=" text-gray-600">Cairo, Egypt</div>
                        <MdLocationOn size={20} className=" mx-2 text-black" />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className=" mt-1 bg-white shadow-md rounded-lg">
                  {/* ///////////////////// DETAILS /////////////////////// */}
                  <div className="md:pt-10 pt-5 border-t border-blueGray-200 text-center">
                    {/* ///////////////////// TRANSACTIONS /////////////////////// */}
                    <h2 className=" text-3xl font-bold lg:mt-10 text-MainBlueColor">
                      Transactions
                    </h2>
                    {/* ///////////////////// DETAILS TRANSACTIONS /////////////////////// */}
                    <div className="w-full px-4 lg:order-1">
                      <div className="flex justify-center lg:pt-5 pt-3">
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
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            12
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Orders
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* ///////////////////// TRANSACTIONS TABLE /////////////////////// */}
                    <div className="flex flex-wrap justify-end">
                      <div className="w-full">
                        <ProfielTableComp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};
export default ProfilePage;
