'use client'
import {Btn, useConfirm } from "@easymean/ez-ui";

export default function Sub() {
  const {confirm} = useConfirm()
  const clickHandler = () =>{
    confirm("awef")
  }
  return (
    <div>
        <Btn onClick={clickHandler}  className="bg-gray-200">awefawef</Btn>
    </div>
  );
}
