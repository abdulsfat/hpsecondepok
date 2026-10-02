// crypto.randomUUID cuma jalan di HTTPS (secure context) & browser modern.
// Fallback ini biar nggak crash kalau dipanggil di HTTP / browser lama.
export function randomId() {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
		return crypto.randomUUID();
	}
	return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
