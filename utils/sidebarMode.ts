const sidebarMode = (splittedPath: string) => {
	if (
		splittedPath.includes("news") &&
		(splittedPath.includes("create") || splittedPath.includes("edit"))
	) {
		if (splittedPath.includes("create") == true) {
			return {
				type: "create",
				page: "news",
			};
		} else {
			return {
				type: "edit",
				page: "news",
			};
		}
	} else if (
		splittedPath.includes("events") &&
		(splittedPath.includes("create") || splittedPath.includes("edit"))
	) {
		if (splittedPath.includes("create") == true) {
			return {
				type: "create",
				page: "events",
			};
		} else {
			return {
				type: "edit",
				page: "events",
			};
		}
	} else {
		return {
			type: "default",
			page: "all",
		};
	}
};

export default sidebarMode;
