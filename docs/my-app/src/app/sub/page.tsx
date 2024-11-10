'use client'

import {AlertModalFooter, Btn, useConfirm } from "@easymean/ez-ui";
import React from "react";

export default function Sub() {
  const {confirm} = useConfirm()
  const handleDelete = async () => {
    console.log('clicked');
    const result = await confirm('Are you sure you want to delete this item?');
    if (result) {
      alert('awefawef')
      console.log("Confirmed");
    } else {
      console.log("Cancelled");
    }
  };
  return (
    <div>
      <AlertModalFooter>awefawef</AlertModalFooter>
        <Btn onClick={handleDelete}  className="bg-gray-200">awefawefggg</Btn>
    </div>
  );
}
