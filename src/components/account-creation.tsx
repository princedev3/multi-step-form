"use client";
import React from "react";
import FormWrapper from "./form-wrapper";
type AccountCreationProps = {
  password: string;
  email: string;
};
const AccountCreation = ({
  password,
  email,
  updateUserData,
}: {
  password: string;
  email: string;
  updateUserData: (fields: Partial<AccountCreationProps>) => void;
}) => {
  return (
    <FormWrapper title="Create Account">
      <label htmlFor="email" className="capitalize">
        email:
      </label>
      <input
        onChange={(e) => updateUserData({ email: e.target.value })}
        type="text"
        id="email"
        required
        value={email}
        name="email"
        className="border outline-none p-1 rounded-md w-full"
      />
      <label htmlFor="password" className="capitalize">
        password:
      </label>
      <input
        onChange={(e) => updateUserData({ password: e.target.value })}
        type="password"
        id="password"
        value={password}
        required
        name="password"
        className="border outline-none p-1 rounded-md w-full"
      />
    </FormWrapper>
  );
};

export default AccountCreation;
