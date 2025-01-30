"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Shrikant Sherkar",
                1000,
                "DevOps Engineer",
                1000,
                "AWS Cloud Engineer",
                1000,
                "S.R.E",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Cloud & DevOps Enthusiast | 2+ Years of Experience in L2 Support | Passionate About Cloud Automation, IaC, and CI/CD Pipelines, AWS enthusiast.
          </p>
            <div className="flex justify-center items-center space-x-6">
	    <Link href="https://github.com/ShrikantBS">
	      <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
	    </Link>
	    <Link href="https://www.linkedin.com/in/s-sherkar/">
	      <Image src={LinkedinIcon} alt="LinkedIn Icon" width={50} height={50} />
	    </Link>
	    {/* Contact Number */}
	      <a href="tel:+1234567890" className="text-white text-lg font-medium hover:underline">
	      +91 8999433794
	    </a>

	    {/* Email */}
	    <a href="mailto:yourmail@example.com" className="text-white text-lg font-medium hover:underline">
	      shrikantsherkar2022@gmail.com.com
	    </a>
	  </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
