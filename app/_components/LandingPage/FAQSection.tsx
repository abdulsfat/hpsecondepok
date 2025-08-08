"use client";

import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Minus, Plus} from "lucide-react";
import {FAQItem, faqItems} from "@/data/faqItems";
import ReactMarkdown from "react-markdown";


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" px-5 lg:px-24">
            <div className="mt-12 lg:mt-24 mb-12 lg:mb-20 flex justify-between items-center ">
                <div>
                    <h1 className="text-secondary font-sf-pro-semibold text-4xl lg:text-[3.3rem]">
                        FAQs: Your Questions <br/> Answered
                    </h1>
                </div>
            </div>

            <div className="space-y-4">
                {faqItems.map((faq: FAQItem, index: number) => (
                    <div key={index} className="bg-gray-100 rounded-2xl p-10">
                        <button
                            className="flex justify-between items-center w-full text-left"
                            onClick={() => toggle(index)}
                        >
              <span className="text-xl font-sf-pro-regular text-gray-800">
                {faq.question}
              </span>
                            {openIndex === index ? (
                                <div className="bg-primary rounded-full">
                                    <Minus className="text-secondary h-10 w-10 p-2"/>
                                </div>
                            ) : (
                                <div className="bg-primary rounded-full">
                                    <Plus className="text-secondary h-10 w-10 p-2"/>
                                </div>
                            )}
                        </button>

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{height: 0, opacity: 0}}
                                    animate={{height: "auto", opacity: 1}}
                                    exit={{height: 0, opacity: 0}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="mt-4 font-sf-pro-light text-gray-600">
                                        <ReactMarkdown>
                                            {faq.answer}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
