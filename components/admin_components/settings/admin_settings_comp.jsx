import {
  GetOneSetingsInfo,
  UpdateStoreInfo,
} from "@/repository/settings_repository";
import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import LoadingPage from "@/components/user_components/common/loading";
import { GetOneSetingsUI, UpdateStoreUI } from "@/repository/ui_repository";

const AdminSettingsComp = ({ navData }) => {
  const [infoData, setInfoData] = useState();
  const [uiData, setUiData] = useState();
  const { toast } = useToast();

  useEffect(() => {
    GetOneSetingsInfo("storeinformation").then((infoData) => {
      setInfoData(infoData);
    });
    GetOneSetingsUI("storeui").then((uiData) => {
      setUiData(uiData);
    });
  }, []);

  return (
    <div className="container">
      {/*========================= STORE INFORMATION =========================*/}
      {infoData && (
        <div className="my-5 w-full overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-blue-100">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Store Information
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-900">
              Details and informations about XO store.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">Store Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="StoreName"
                    placeholder="Brand Name"
                    value={infoData.name ?? "Name"}
                    onChange={(event) => {
                      event.preventDefault();
                      setInfoData({ ...infoData, name: event.target.value });
                    }}
                  />
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900 flex flex-row">
                  <p>Social Media</p>
                  <FaPlusCircle
                    onClick={() => {
                      //  const newSocial = new socialModel(
                      //   value: "social Url",
                      //   title: "Social Name");
                      // infoData.socials.push(newSocial);
                      infoData.socials.push({
                        value: "social Url",
                        title: "Social Name",
                      });
                      setInfoData({ ...infoData });
                    }}
                    className="mx-3 w-5 h-5 text-green-600"
                  />
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoData.socials &&
                    infoData.socials.map((socialData, index) => {
                      // console.log(social["title"]);

                      return (
                        <div
                          key={index}
                          className="flex flex-wrap justify-start items-center"
                        >
                          <input
                            key={`${index}-${socialData}`}
                            type="text"
                            id="name-with-label"
                            className=" rounded-lg border-transparent  appearance-none border border-gray-400 m-4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                            name={socialData["title"]}
                            placeholder="Social"
                            value={socialData["title"] ?? "Social Name"}
                            onChange={(e) => {
                              infoData["socials"][index]["title"] =
                                e.target.value;
                              // infoData.socials[index].set(
                              //   "title",
                              //   e.target.value
                              // );
                              setInfoData({ ...infoData });
                            }}
                          />
                          <input
                            type="text"
                            id="name-with-label"
                            className=" rounded-lg border-transparent  appearance-none border border-gray-400 m-4 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                            name={socialData["title"] + " link"}
                            placeholder="Url link"
                            value={socialData["value"] ?? "Social Link"}
                            onChange={(e) => {
                              infoData.socials[index]["value"] = e.target.value;
                              // infoData.socials[index].set(
                              //   "value",
                              //   e.target.value
                              // );
                              setInfoData({ ...infoData });
                            }}
                          />
                          <FaMinusCircle
                            onClick={(event) => {
                              infoData.socials.splice(index, 1);
                              setInfoData({ ...infoData });
                            }}
                            className=" w-5 h-5 text-red-600"
                          />
                        </div>
                      );
                    })}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900 flex flex-row">
                  <p> Email address</p>
                  <FaPlusCircle
                    onClick={() => {
                      infoData.emails.push("example@email.com");
                      setInfoData({ ...infoData });
                    }}
                    className="mx-3 w-5 h-5 text-green-600"
                  />
                </dt>
                <dd className="flex flex-col justify-center  items-center mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoData.emails.map((email, index) => (
                    <div
                      key={index}
                      className=" flex flex-row justify-center items-center w-full"
                    >
                      <input
                        type="text"
                        id="name-with-label"
                        className="w-full my-2 rounded-lg border-transparent  appearance-none border border-gray-400 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                        name="StoreName"
                        placeholder="Brand Name"
                        value={email ?? "Email"}
                        onChange={(event) => {
                          event.preventDefault();
                          infoData.emails[index] = event.target.value;
                          setInfoData({ ...infoData });
                        }}
                      />
                      <FaMinusCircle
                        onClick={(event) => {
                          infoData.emails.splice(index, 1);
                          setInfoData({ ...infoData });
                        }}
                        className="mx-2 w-5 h-5 text-red-600"
                      />
                    </div>
                  ))}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">Telephone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoData.telephone.map((phone, index) => (
                    <div key={index} className=" relative py-2">
                      <input
                        key={index}
                        type="tel"
                        id="name-with-label"
                        className=" w-full rounded-lg border-transparent  appearance-none border border-gray-400 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                        name="phone"
                        placeholder="Your phone"
                        value={phone ?? "Phone"}
                        onChange={(event) => {
                          event.preventDefault();
                          infoData.telephone[index] = event.target.value;
                          setInfoData({ ...infoData });
                        }}
                      />
                    </div>
                  ))}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <textarea
                    // type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent w-full  appearance-none border border-gray-400 m-4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="About"
                    placeholder="About Store"
                    value={infoData.about ?? "About"}
                    onChange={(event) => {
                      event.preventDefault();
                      setInfoData({ ...infoData, about: event.target.value });
                    }}
                  />
                </dd>
              </div>

              <div className="w-full p-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    // console.log(infoData);
                    UpdateStoreInfo(infoData).then(() => {
                      toast({
                        variant: "default",
                        title: "حسنا",
                        description: "تم التعديل بنجاح",
                      });
                      navData["setIndex"]({ id: 0, navId: null });
                    });
                  }}
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-black focus:ring-black focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Update
                </button>
              </div>
            </dl>
          </div>
        </div>
      )}
      {infoData == null && <LoadingPage />}

      {/*========================= STORE INFORMATION =========================*/}
      {uiData && (
        <div className="my-5 w-full overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-green-100">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Sections
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-900">
              Details of Sections and HomePage store.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Notification Bar
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="notificationTxt"
                    placeholder="Notification Text"
                    value={uiData.notificationTxt ?? ""}
                    onChange={(event) => {
                      event.preventDefault();
                      setUiData({
                        ...uiData,
                        notificationTxt: event.target.value,
                      });
                    }}
                  />
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Today Offers title
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="todayTxt"
                    placeholder="Today Section Text"
                    value={uiData.todayTxt ?? ""}
                    onChange={(event) => {
                      event.preventDefault();
                      setUiData({
                        ...uiData,
                        todayTxt: event.target.value,
                      });
                    }}
                  />
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Today Offers Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <textarea
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="todayDesc"
                    placeholder="Today Section Description"
                    value={uiData.todayDesc ?? ""}
                    onChange={(event) => {
                      event.preventDefault();
                      setUiData({
                        ...uiData,
                        todayDesc: event.target.value,
                      });
                    }}
                  />
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Additional Section title
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="Additional Section Text"
                    placeholder="Additional Section Description"
                    value={uiData.AdditionalTxt ?? ""}
                    onChange={(event) => {
                      event.preventDefault();
                      setUiData({
                        ...uiData,
                        AdditionalTxt: event.target.value,
                      });
                    }}
                  />
                </dd>
              </div>
              
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Additional Section Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <textarea
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="Additional Section Text"
                    placeholder="Additional Section Description"
                    value={uiData.AdditionalDesc ?? ""}
                    onChange={(event) => {
                      event.preventDefault();
                      setUiData({
                        ...uiData,
                        AdditionalDesc: event.target.value,
                      });
                    }}
                  />
                </dd>
              </div>
              <div className="w-full p-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    // console.log(infoData);
                    UpdateStoreUI(uiData).then(() => {
                      toast({
                        variant: "default",
                        title: "حسنا",
                        description: "تم التعديل بنجاح",
                      });
                      navData["setIndex"]({ id: 7, navId: null });
                    });
                  }}
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-black focus:ring-black focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Update
                </button>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettingsComp;
