export type servicesItem = {
	title: string;
	sub_title: string;
	desc: string;
	image: string;
};

export const servicesItems: servicesItem[] = [
	{
		title: "Hidup Sehat",
		sub_title: "Memulai Hidup Lebih Baik, Lebih Sehat",
		desc: "Bergabung dengan komunitas sobat sehat, ikuti berbagai kegiatan yang dibagikan oleh komunitas secara luas.",
		image: "/assets/img/hero.png",
	},
	{
		title: "Komunitas",
		sub_title: "Langsung dari Komunitas, untuk Komunitas",
		desc: "Informasi kegiatan olahraga diberikan dan diliput langsung dari komunitas dan instansi olahraga, untuk dibagikan dengan masyarakat luas.",
		image: "/assets/img/hero-2.png",
	},
	{
		title: "Kegiatan",
		sub_title: "Kegiatan Menarik dan Acara Terbaru",
		desc: "Ikuti kegiatan menarik dan acara terbaru yang diselenggarakan oleh komunitas dan mitra, serta jadilah bagian dari berbagai aktivitas sosial dan olahraga yang bermanfaat.",
		image: "/assets/img/hero.png", // Ganti dengan gambar kegiatan yang sesuai
	},
	{
		title: "Berita",
		sub_title: "Berita Terkini dan Informasi Penting",
		desc: "Dapatkan berita terbaru dan informasi penting tentang kesehatan, kegiatan komunitas, dan perkembangan terbaru dari berbagai sumber terpercaya.",
		image: "/assets/img/hero-2.png", // Ganti dengan gambar berita yang sesuai
	},
];
