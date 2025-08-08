'use client'

import WhySection from "@/app/_components/LandingPage/WhySection";
import React from "react";
import TestimoniSection from "@/app/_components/LandingPage/TestimoniSection";
import FAQSection from "@/app/_components/LandingPage/FAQSection";
import FeatureSection from "@/app/_components/LandingPage/FeatureSection";
import {HeroSection} from "@/app/_components/LandingPage/HeroSection";

export default function Home() {

  return (
      <div className="main bg-white rounded-3xl pb-28" data-scroll-speed="0.5">
          <div className="px-5 lg:px-24 lg:pt-36 pt-12 text-3xl lg:text-[5rem] text-secondary tracking-tight uppercase flex justify-between items-center font-sf-pro mb-16">
              <div className=' leading-none'>
                  <h1 className="">jual
                      beli</h1>
                  <h1 className="">Tukar Tambah</h1>
              </div>
              <div className='text-end leading-none'>
              <h1 className="">Hp
                      secon</h1>
                  <h1 className="">Depok</h1>
              </div>
          </div>
          <HeroSection />

          <section className="px-5 lg:px-24">
              <div className="mb-12 lg:mb-28">
                  <p className="text-secondary/70 mb-3 text-xl">Mengenal lebih Hpsecondepok</p>
                  <h3 className="text-secondary font-sf-pro-regular text-2xl lg:text-4xl tracking-tight leading-tight pe-[23%]"
                      >Kami adalah platform profesional yang membantu kamu
                      yang sedang ingin membeli atau menjual HP bekas dengan mudah, cepat, dan aman. {" "}
                      <span className="bg-primary/30 text-secondary font-sf-pro-semibold">
                           Memfokuskan
                      pada
                      kepercayaan dan transparansi,
                      </span>  kami juga memastikan setiap perangkat yang kami tangani berkualitas
                      tinggi dan sesuai dengan kebutuhan Anda.</h3>
              </div>
          </section>

          <WhySection />
          <div >
              <FeatureSection/>
          </div>
          <TestimoniSection />

          <FAQSection/>

      </div>
  );
}






