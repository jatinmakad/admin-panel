import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CustomModal from "./CustomModal";

const AddUser = ({show,setShow}) => {



  return (
    <CustomModal
      isOpen={show}
      title="Edit sub admin"
      submitText="Update"
      fields={[
        {
          name: "userName",
          label: "Username",
          type: "text",
          required: true,
          maxLength: 20,
          restriction: "noSpecialChars",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
          maxLength: 20,
          restriction: "noSpecialChars2",
        },
        {
          name: "fullName",
          label: "Full Name",
          type: "text",
          required: false,
          maxLength: 50,
          restriction: "noSpecialCharFN",
        },
      ]}
        onClose={() => setShow(false)}
      //   onSubmit={(data) => updateSubAdmin(data)}
    />
  );
};

export default AddUser;
