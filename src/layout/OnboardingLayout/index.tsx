import React from "react";
import MiniHeader from "@/src/components/MiniHeader";

const Index = ({ children }: any) => {
  return (
    <>
      <MiniHeader />
      <main>{children}</main>
    </>
  );
};

export default Index;
