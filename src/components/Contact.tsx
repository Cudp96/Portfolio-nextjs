"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="sm:mt-52 md:mt-0 max-w-5xl mx-auto p-10 shadow-lg mb-[-31rem] md:mb-1 text-white z-10 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">Connect with me on social media.</p>
            {/* Social handles */}
            <ul className="flex gap-2 mb-2">
              <li>
                <a
                  href="https://www.instagram.com/itsme.sudeep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sudeep.shrestha.96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Cudp96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14123.899712653112!2d85.3078346083374!3d27.748919308608947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192b9cada64d%3A0xdf67e83763747500!2sGongabu%2C%2044600!5e0!3m2!1sen!2snp!4v1685021215555!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            {/* Contact form */}
            <form className="space-y-2">
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md py-2 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl focus:shadow-blue-400 bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full  rounded-md py-2 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl focus:shadow-blue-400 bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-md py-2 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl focus:shadow-blue-400 bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md py-2 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl focus:shadow-blue-400 bg-gray-700 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                value="send"
                className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400 text-white rounded-md transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
