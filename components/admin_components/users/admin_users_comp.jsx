"use client";

import { GetAllUsers } from "../../../repository/users_repository";
import TableComp from "./table_comp";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminUsersComp({ navData }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const router = useRouter();

  useEffect(() => {
    GetAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-between pt-5">
        <h2 className="text-2xl md:text-4xl leading-tight">{"Users"}</h2>
      </div>
      <TableComp
        tableData={{
          tableTitle: "users",
          tableHeaders: ["first Name", "last Name", "created Date", "status"],
          tableColumns: ["firstName", "lastName", "createdDate", "status"],
          data: users,
        }}
        addFunc={navData["setIndex"]}
      />
    </>
  );
}
