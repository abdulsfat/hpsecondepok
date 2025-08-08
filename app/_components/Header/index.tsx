"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavItem, navItems } from "@/data";
import { animationContainer, randomId, slideUp } from "@/utils";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: [0.25],
	});

	/**
	 * Check if current url is on admin/dashboard
	 */
	const isAdminPage = pathname.split("/").find((item) => {
		switch (item) {
			case "admin":
				return true;
				break;
			case "auth":
				return true;
				break;
			case "editor":
				return true;
				break;

			default:
				return false;
				break;
		}
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return !isAdminPage ? (
		<>
			<motion.nav
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={animationContainer}
				className={`w-full transition-colors duration-300 
				${isMobileMenuOpen ? "bg-black/40 backdrop-blur-sm" : ""}
				${isScrolled ? "" : ""}`}
			>
				<div className="pt-8 px-5 lg:px-14 flex items-center overflow-hidden justify-between py-5 bg-gray-100 text-secondary">
					<div className="group flex cursor-pointer overflow-hidden">
						<motion.div className="block" variants={slideUp}>
							<Link href="/">
								<Image
									width={70}
									height={0}
									src="/images/logo-blue.svg"
									className="text-primary h-10 w-auto"
									alt="hpsecondepok logo"
								/>
							</Link>
						</motion.div>
					</div>

					{/* Desktop Menu */}
					<motion.div
						className="hidden lg:flex items-center justify-center"
						variants={slideUp}
					>
						<ul className="flex justify-center py-1 items-center ">
							{navItems.map(({ href, title }: NavItem) => {
								const isActive = pathname === href;
								const id = randomId();
								return (
									<li key={id}>
										<Link href={href} passHref>
											<div className="flex items-center px-1">
												<span
													className={`font-sf-pro-regular text-md py-1 px-4 rounded-full transition-colors duration-300
													${
														isActive
															? "border border-secondary/30 hover:bg-primary "
															: "hover:text-secondary hover:bg-primary "
													}`}
												>
													{title}
												</span>
											</div>
										</Link>
									</li>
								);
							})}
						</ul>
					</motion.div>

					{/* Mobile Menu Toggle Button */}
					<div className="lg:hidden">
						<button
							onClick={handleMenuToggle}
							className="focus:outline-none text-secondary"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>

					<div className="hidden overflow-hidden lg:flex items-center justify-center">
							<motion.div className="block" variants={slideUp}>
								<button
									className="uppercase tracking-tight font-sf-pro-semibold py-2 px-5 border border-secondary/30 rounded-full text-secondary hover:bg-primary transition-colors duration-300">
										CONTACT
								</button>
							</motion.div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="lg:hidden  py-4 px-8 text-white">
						<ul className="flex flex-col space-y-4">
							{navItems.map(({href, title}: NavItem) => {
								const id = randomId();
								return (
									<li key={id}>
										<Link
											href={href}
											passHref
											onClick={handleCloseMobileMenu}
										>
											<span
												className="font-normal text-base capitalize hover:text-gray-400 transition-colors duration-300">
												{title}
											</span>
										</Link>
									</li>
								);
							})}
							<button
								className="uppercase tracking-tight font-sf-pro-semibold py-2 px-5 border border-primary/30  rounded-full text-primary hover:bg-secondary transition-colors duration-300">
								CONTACT
							</button>
						</ul>

					</div>
				)}
			</motion.nav>
		</>
	) : (
		<></>
	);
}
