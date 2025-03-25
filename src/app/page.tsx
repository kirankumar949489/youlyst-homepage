"use client";

import React, { useState } from "react";
import Header from "./Shared/Header";
import HomePage from "./home-page/HomePage";

export default function Page() {
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [isHomeSearchVisible, setIsHomeSearchVisible] = useState(true);

  return (
    <div className="min-h-screen font-open">
      <Header
        isHomeSearchVisible={isHomeSearchVisible}
        headerSearchQuery={headerSearchQuery}
        setHeaderSearchQuery={setHeaderSearchQuery}
        setActiveSearchQuery={setActiveSearchQuery}
      />
      <main className="flex flex-col lg:px-[40px] pt-[60px] pb-[20px]">
        <HomePage />
      </main>
      <Footer/>
    </div>
  );
}
