"use client";
import React from "react";

const FormWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h2 className="text-center mb-4 text-lg font-semibold">{title} </h2>
      <div
        style={{ gridTemplateColumns: "auto minmax(auto,1fr)" }}
        className="grid justify-start gap-4 items-center"
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
