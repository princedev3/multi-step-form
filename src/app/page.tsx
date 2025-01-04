"use client";
import AccountCreation from "@/components/account-creation";
import AddressForm from "@/components/address-form";
import { useMultiStepForm } from "@/components/hooks/useMultiStepForm";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/user-form";
import React, { useState } from "react";
type UserFormData = {
  name: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
};

const page = () => {
  const [userData, setUserData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: 0,
  });

  const updateUserData = (data: Partial<UserFormData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const {
    steps,
    next,
    currentStep,
    step,
    prev,
    goToStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <UserForm {...userData} updateUserData={updateUserData} />,
    <AddressForm {...userData} updateUserData={updateUserData} />,
    <AccountCreation {...userData} updateUserData={updateUserData} />,
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
      return;
    }
    alert(JSON.stringify(userData, null, 2));
  };
  return (
    <div className="w-full max-w-2xl mx-auto border p-7 rounded-lg relative">
      <form onSubmit={handleSubmit} className="">
        <div className="absolute top-3 right-3   ">
          {currentStep + 1}/{steps?.length}
        </div>
        <div className=" my-5">{step}</div>
        <div className="flex items-end w-full justify-end gap-5">
          {isFirstStep ? null : (
            <Button type="button" onClick={prev}>
              Prev
            </Button>
          )}
          <Button type="submit">{isLastStep ? "Submit" : "Next"} </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
