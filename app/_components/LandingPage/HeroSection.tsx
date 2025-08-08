"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationContainer } from "@/utils";

export function HeroSection() {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.25,
		triggerOnce: true,
	});

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(true);

	// Scroll value
	const { scrollY } = useScroll();

	// Transform for parallax image
	const y = useTransform(scrollY, [200, 1000], ["-10%", "6%"]);

	// Transform padding and border-radius
	const paddingX = useTransform(scrollY, [380, 1100], ["0px", "6rem"]);   // px-24
	const borderRadius = useTransform(scrollY, [380, 1100], ["0px", "1.5rem"]); // rounded-3xl

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const handleTogglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
				setIsPlaying(false);
			} else {
				videoRef.current.play();
				setIsPlaying(true);
			}
		}
	};

	return (
		<>
			{/* Banner Top */}
			<div className="px-5 lg:px-24">
				<hr className="border-secondary/30" />
				<div className="flex justify-between lg:py-12 py-6 text-secondary/70 text-sm lg:text-lg">
					<p>Terima COD JABODETABEK</p>
					<p>Terpercaya dan Transparan</p>
				</div>
			</div>

			{/* Hero Section */}
			<motion.section
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={animationContainer}
				className="relative w-full h-[100vh]"
			>
				{/* Dynamic Padding Wrapper */}
				<motion.div
					style={{
						paddingLeft: paddingX,
						paddingRight: paddingX,
					}}
					className="w-full h-[80%]"
				>
					{/* Rounded Container */}
					<motion.div
						style={{ borderRadius }}
						className="relative w-full h-full overflow-hidden bg-black"
					>
						{/* Parallax Video */}
						<motion.div style={{ y }} className="absolute w-full h-[120%]">
							<video
								ref={videoRef}
								src="/videos/hero-video.mp4"
								className="object-cover w-full h-full brightness-90"
								autoPlay
								muted
								loop
								playsInline
							/>
						</motion.div>

						{/* Stop Button */}
						<div className="absolute bottom-4 right-4 z-20">
							<button
								onClick={handleTogglePlay}
								className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-red-600 hover:text-white transition"
							>
								{isPlaying ? "Stop Video" : "Play Video"}
							</button>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</>
	);
}
