"use client"

import React from "react";
import Navbar from "@/app/components/Navbar";
import Herosection from "@/app/components/Herosection";
import Project from "@/app/components/Project";
import Skills from "@/app/components/Skills";
import ContactForm from "@/app/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection/>
      <Project/>
      <Skills/>
      <ContactForm/>
    </>
  );
}
