import React from "react";
import DashboardSideNav from "@/src/components/DashboardSideNav";
import DashboardHeader from "@/src/components/DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const Index = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <DashboardSideNav />

      <main className="md:ml-[250px]">
        <DashboardHeader />

        <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Index;