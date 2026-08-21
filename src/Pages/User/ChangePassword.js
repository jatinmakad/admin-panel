import React from "react";
import CustomModal from "./CustomModal";

const ChangePassword = ({ show, setShow }) => {
  return (
    <CustomModal
      isOpen={show}
      title="Change Password"
      submitText="Change"
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

export default ChangePassword;
