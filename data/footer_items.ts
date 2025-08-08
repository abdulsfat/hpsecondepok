import { Youtube, Instagram } from "lucide-react";
import { TikTokIcon, WhatsAppIcon } from "@/data/icon";

export type FooterItem = {
	href: string;
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FooterSection = {
	title: string;
	items: FooterItem[];
};

export const footerItems: FooterSection[] = [
	{
		title: "Sitemap",
		items: [
			{ href: "/", title: "Beranda", icon: () => null },
			{ href: "/product", title: "Product", icon: () => null },
			{ href: "/tukar-tambah", title: "Tukar Tambah", icon: () => null },
			{ href: "/jual-hp", title: "Jual HP", icon: () => null },
		],
	},
	{
		title: "Ikuti Kami",
		items: [
			{
				icon: WhatsAppIcon,
				title: "0812-5888-5800",
				href: "https://wa.me/6281258885800?text=Halo%20kak%2C%20saya%20dari%20website%20hpsecondepok",
			},
			{
				icon: Youtube,
				title: "@hpsecondepokk",
				href: "https://www.youtube.com/@hpsecondepokk",
			},
			{
				icon: Instagram,
				title: "@hpsecondepok_",
				href: "https://www.instagram.com/hpsecondepok_",
			},
			{
				icon: TikTokIcon,
				title: "@hpsecondepok",
				href: "https://www.tiktok.com/@hpsecondepok",
			},
		],
	},
];
