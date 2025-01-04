"use client";
import React from "react";
import FormWrapper from "./form-wrapper";

type AddressFormProps = {
  street: string;
  city: string;
  zipcode: number;
};

const AddressForm = ({
  street,
  city,
  zipcode,
  updateUserData,
}: {
  street: string;
  city: string;
  zipcode: number;
  updateUserData: (fields: Partial<AddressFormProps>) => void;
}) => {
  return (
    <FormWrapper title="User Address">
      <label htmlFor="street" className="capitalize">
        street:
      </label>
      <input
        onChange={(e) => updateUserData({ street: e.target.value })}
        type="text"
        id="street"
        value={street}
        name="street"
        required
        className="border outline-none p-1 rounded-md w-full"
      />
      <label htmlFor="city" className="capitalize">
        city:
      </label>
      <input
        onChange={(e) => updateUserData({ city: e.target.value })}
        type="city"
        value={city}
        id="city"
        name="city"
        required
        className="border outline-none p-1 rounded-md w-full"
      />
      <label htmlFor="zipcode" className="capitalize">
        zipcode:
      </label>
      <input
        onChange={(e) => updateUserData({ zipcode: parseInt(e.target.value) })}
        required
        type="number"
        value={zipcode}
        id="zipcode"
        name="zipcode"
        className="border outline-none p-1 rounded-md w-full"
      />
    </FormWrapper>
  );
};

export default AddressForm;
