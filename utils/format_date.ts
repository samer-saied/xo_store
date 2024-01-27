import { Timestamp } from "@/node_modules2/firebase/firestore/dist/firestore";

export function FormatDate(getSeconds: any, getNanoSeconds: any) {
  let convertDate = new Timestamp(getSeconds, getNanoSeconds);
  const jsDate: Date = convertDate.toDate();
  // return jsDate.toString();

  return (
    jsDate.getDate().toString() +
    "/" +
    (jsDate.getMonth() + 1).toString() +
    "/" +
    jsDate.getFullYear().toString() +
    " - " +
    jsDate.getHours().toString() +
    " : " +
    jsDate.getMinutes().toString() +
    " : " +
    jsDate.getSeconds().toString()
  );
}
