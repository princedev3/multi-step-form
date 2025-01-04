"use client";
import React from "react";
import FormWrapper from "./form-wrapper";

type UserFormProps = {
  name: string;
  email: string;
  country: string;
};
const UserForm = ({
  name,
  email,
  country,
  updateUserData,
}: {
  name: string;
  email: string;
  country: string;
  updateUserData: (fields: Partial<UserFormProps>) => void;
}) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="name" className="capitalize">
        Name:
      </label>
      <input
        value={name}
        type="text"
        id="name"
        name="name"
        required
        className="border outline-none p-1 rounded-md w-full"
        onChange={(e) => updateUserData({ name: e.target.value })}
      />
      <label htmlFor="email" className="capitalize">
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        name="email"
        required
        onChange={(e) => updateUserData({ email: e.target.value })}
        className="border outline-none p-1 rounded-md w-full"
      />
      <label htmlFor="country" className="capitalize">
        Country:
      </label>
      <input
        onChange={(e) => updateUserData({ country: e.target.value })}
        value={country}
        type="text"
        id="country"
        name="country"
        required
        className="border outline-none p-1 rounded-md w-full"
      />
    </FormWrapper>
  );
};

export default UserForm;
