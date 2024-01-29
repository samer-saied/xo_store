"use client";
import {  useEffect, useState } from "react";

import { Category } from "../../models/category_model";

// import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import { Timestamp } from "firebase/firestore";
import {
  AddOneCategory,
  GetAllCategories,
  DeleteOneCategory,
  UpdateOneCategory,
} from "@/repository/category_repository";
import { FormatDate } from "@/utils/format_date";

const Data = () => {
  const [cities, setCategory] = useState<Category[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAdd = async (e: any) => {
    e.preventDefault();
    setButtonClicked(!buttonClicked);
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // let category: Category = new Category(
    //   null,
    //   `Los CAiro${randomNumber * 100}`,
    //   `LE ${randomNumber * 100}`,
    //   `EGP ${randomNumber * 100}`,
    //   Timestamp.now()
    // );
    // Add a new document in collection "cities"
    // await AddOneCategory(category);
  };

  // const handleGet = async () => {
  //   // GET a  document in collection "cities"

  //   const docRef = doc(db, "cities", "LA");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  function handleStart() {
    GetAllCategories().then((cities) => {
      setCategory(cities);
    });
  }

  useEffect(() => {
    handleStart();
  }, [buttonClicked]);

  const yaha = new Date();
  return (
    <div className="text-center custom-container">
      {cities.map((element: Category, index) => (
        <div className=" flex flex-row p-2 m-2" key={index}>
          <div className="defaultClass">{index + 1} :</div>
          <div className="defaultClass">{element.id}</div>
          <div className="defaultClass">{element.image}</div>
          {/* <div className="defaultClass">{element.sectionId}</div> */}
          <div className="defaultClass">{element.title}</div>
          <div className="defaultClass">
            {FormatDate(element.date.seconds, element.date.nanoseconds)}
          </div>
          <button className=" rounded-full bg-red-500 text-white px-5 hover:bg-red-400 shadow-md " type="button"
            onClick={async (e) => {
              e.preventDefault()
              setButtonClicked(!buttonClicked);
             await DeleteOneCategory(element);
            }}
          >
            Delete X
          </button>
          <button className=" rounded-full bg-blue-500 text-white px-5 hover:bg-blue-400 shadow-md " type="button"
            onClick={async (e) => {
              e.preventDefault()
              setButtonClicked(!buttonClicked);
             await UpdateOneCategory(element);
            }}
          >
            Edit
          </button>
        </div>
      ))}
      <button className=" rounded-full bg-teal-500 text-white px-5 hover:bg-teal-400 shadow-md " onClick={handleAdd} type="button">
        Add
      </button>
    </div>
  );
};

export default Data;
