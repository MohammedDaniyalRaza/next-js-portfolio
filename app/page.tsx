"use client"
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ProjectSection from "./components/Project";
import Skills from "./components/Skills";
import ContactForm from "./components/Contact";
import { ChildProcess } from "child_process";



export default function Home(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <ProjectSection/>
            <Skills/>
            <ContactForm/>
        </>
    )
}
