
import React, { ReactNode } from "react";
import {Header, Footer } from "@/app/_components";

interface MainLayoutProps {
	children: ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = async ({ children }) => {

	return (
		<div>
				<Header />
				<main>{children}</main>
				<Footer />
		</div>
	);
};
