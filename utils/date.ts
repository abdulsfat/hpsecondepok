const localDate = (date: string) => {
	const monthNames = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];

	const dayNames = [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jumat",
		"Sabtu",
	];

	const formatDate = new Date(date);
	const day = formatDate.getDay();
	const dayDate = formatDate.getDate();
	const month = formatDate.getMonth();
	const year = formatDate.getFullYear();

	return `${dayNames[day]}, ${dayDate} ${monthNames[month]} ${year}`;
};

export { localDate };
