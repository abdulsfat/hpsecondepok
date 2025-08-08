const appUrl: any = process.env.NEXT_PUBLIC_API_BACKEND_URL;

const ENDPOINTS = {
	NEWS: {
		GET: `${appUrl}/news`,
		GET_BY_ID: (id: string) => `${appUrl}/news/${id}`,
		GET_BY_SLUG: (slug: string) => `${appUrl}/news/show/${slug}`,
		GET_FEATURED: (slug: string) => `${appUrl}/news/on/featured`,
		GET_RECENTLY: (slug: string) => `${appUrl}/news-recently`,
		POST: `${appUrl}/news`,
		PUT: (id: string) => `${appUrl}/news/${id}`,
		DELETE: (id: string) => `${appUrl}/news/${id}`,
	},
	CATEGORIES: {
		GET: `${appUrl}/categories`,
		POST: `${appUrl}/categories`,
		PUT: (id: string) => `${appUrl}/categories/${id}`,
		DELETE: (id: string) => `${appUrl}/categories/${id}`,
	},
	EVENTS: {
		GET: `${appUrl}/events`,
		GET_BY_ID: (id: string) => `${appUrl}/events/${id}`,
		GET_BY_CONTRIBUTOR: `${appUrl}/events/contributor`,
		POST: `${appUrl}/events`,
		PUT: (id: string) => `${appUrl}/events/${id}`,
		DELETE: (id: string) => `${appUrl}/events/${id}`,
		OWN: `${appUrl}/registered/own`,
	},
	CONTRIBUTORS: {
		GET: `${appUrl}/approvals`,
		GET_BY_ID: (id: string) => `${appUrl}/approvals/${id}`,
		POST: `${appUrl}/approvals`,
		APPROVE: (id: number) => `${appUrl}/approvals/action/approve/${id}`,
		REJECT: (id: number) => `${appUrl}/approvals/action/reject/${id}`,
		REQUEST: `${appUrl}/approvals/member/request`,
		STATUS: `${appUrl}/approvals/member/status`,
	},
	USERS: {
		GET: `${appUrl}/users`,
		GET_BY_ID: (id: string) => `${appUrl}/users/${id}`,
		POST: `${appUrl}/users`,
		PUT: (id: any) => `${appUrl}/users/${id}`,
		DELETE: (id: string) => `${appUrl}/users/${id}`,
	},
	ANALYTICS: {
		GET: `${appUrl}/analytics`,
		SUBSCRIBERS_TOTAL: `${appUrl}/analytics/subscribers`,
		EVENTS_TOTAL: `${appUrl}/analytics/events`,
		NEWS_TOTAL: `${appUrl}/analytics/news`,
		USERS_TYPE_TOTAL: `${appUrl}/analytics/user-type`,
		EVENT_RECENT: `${appUrl}/analytics/event/recent`,
		EVENT_MONTH: `${appUrl}/analytics/event/month`,
	},
	AUTH: {
		LOGIN: `${appUrl}/auth/login`,
		LOGOUT: `${appUrl}/auth/logout`,
		REGISTER: `${appUrl}/auth/register`,
		ME: `${appUrl}/auth/me`,
		RESET_PASSWORD: `${appUrl}/auth/reset-password`,
		UPDATE_PASSWORD: `${appUrl}/auth/update-password`,
		VERIFY_TOKEN: (token: string, email: string) =>
			`${appUrl}/auth/verify-token?token=${token}&email=${email}`,
	},
	SUBSCRIBERS: {
		SUBSCRIBE: `${appUrl}/subscribers`,
	},
};
export default ENDPOINTS;
