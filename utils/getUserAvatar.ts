import sha256 from "crypto-js/sha256";

export default function getUserAvatar(email: string) {
	return `https://www.gravatar.com/avatar/${sha256(email).toString()}`;
}
