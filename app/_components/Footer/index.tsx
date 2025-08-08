"use client";

import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { footerItems} from "@/data";
import {MapPin} from "lucide-react";

export function Footer() {
	const { scrollYProgress } = useScroll();
	useTransform(scrollYProgress, [0.9, 1], ["-40%", "0%"]);
	// const pathname = usePathname();

	return  (
		<>
			<motion.section
				className="relative mb-14 bg-gray-100 w-full px-4 lg:px-28 pb-12 pt-14 z-10 rounded-b-3xl overflow-hidden"
			>
				<div className="flex flex-col sm:flex-row sm:items-start py-14 justify-between gap-7 lg:gap-0">
					<div className="flex flex-col items-start flex-shrink-0 w-full lg:w-auto">
						<Image
							width={50}
							height={50}
							src="images/logo-blue.svg"
							alt="Logo"
						/>
						<h1 className="text-sm lg:text-2xl font-sf-pro-semibold text-secondary tracking-tight mt-2">
							hpsecondepok
						</h1>
						<div className="flex items-center mt-8 justify-center ">
							<MapPin strokeWidth={1.5} className="w-6 h-6 text-secondary" />
							<span className="text-secondary/70 text-sm lg:text-md font-sf-pro-regular ml-2">
								Kelapa Dua Depok, Jawa Barat
							</span>
						</div>
						{/*<p className="text-md text-secondary/80 font-sf-pro-regular mt-2 max-w-md">*/}
						{/*	Kami adalah platform profesional yang membantu kamu yang sedang ingin membeli atau menjual HP bekas dengan mudah, cepat, dan aman.*/}
						{/*</p>*/}
					</div>
					<div className="flex flex-wrap gap-4 lg:gap-28 w-full sm:w-auto justify-between">
						{footerItems.map((section) => (
							<div key={section.title} className="flex-shrink-0">
								<h3 className="text-secondary/50 font-sf-pro-regular text-lg mb-3">
									{section.title}
								</h3>

								{section.title !== "Ikuti Kami" ? (
									<ul className="space-y-2">
										{section.items.map((item) => (
											<li key={item.href}>
												<Link
													href={item.href}
													className="text-secondary hover:text-secondary/50 font-sf-pro-regular  text-lg transition-colors duration-300"
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								) : (
									// Custom 2-column layout for "Ikuti Kami"
									<div className="grid lg:grid-cols-2 gap-4">
										{section.items.map((item, idx) => {
											const Icon = item.icon;
											return (
												<div key={idx} className="flex items-start gap-3">
													<div className="bg-primary/50 rounded-full mt-1 p-1 ">
														<Icon strokeWidth={1.5} className="w-5 h-5 text-secondary/70"/>
													</div>
													<a
														href={item.href}
														className="text-secondary text-lg font-sf-pro-regular mt-1 hover:text-secondary/70 transition-colors duration-300"
													>
														{item.title}
													</a>
												</div>
											);
										})}
									</div>
								)}
							</div>
						))}


						{/*{footerContactItems.map((group, groupIdx) => (*/}
						{/*	<div key={groupIdx} className="space-y-3">*/}
						{/*		/!*<h3 className="text-secondary/50 font-sf-pro-regular text-lg mb-3">*!/*/}
						{/*		/!*	Ikuti Kami*!/*/}
						{/*		/!*</h3>*!/*/}
						{/*		{group.map((item, idx) => {*/}
						{/*			const Icon = item.icon;*/}
						{/*			return (*/}
						{/*				<div key={idx} className="flex items-start gap-3">*/}
						{/*					<div className="bg-primary/50 rounded-full mt-1 p-1">*/}
						{/*						<Icon strokeWidth={1.5} className="w-5 h-5 text-secondary/70"/>*/}
						{/*					</div>*/}
						{/*					<div>*/}
						{/*						<a href={item.href || "#"}*/}
						{/*						   className="font-sf-pro-regular text-lg text-secondary hover:text-secondary/70 transition-colors duration-300">{item.title}</a>*/}
						{/*					</div>*/}
						{/*				</div>*/}
						{/*			);*/}
						{/*		})}*/}
						{/*	</div>*/}
						{/*))}*/}

					</div>
				</div>
			</motion.section>
			<section className="relative">
				<div className="bg-secondary h-96 lg:h-56 lg:pt-40 pt-80 absolute bottom-0 w-full">
					<div className="flex font-sf-pro-regular justify-between items-center mx-8 lg:mx-14 h-full">
						<div className="text-[0.60rem] text-gray-100 lg:text-sm">
							Copyright © 2025 hpsecondepok. All rights reserved.
						</div>
						<div className="text-[0.60rem] text-gray-100 lg:text-sm">
							Kota Depok, Indonesian
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
