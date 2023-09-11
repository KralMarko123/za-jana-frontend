import ENDPOINTS from "../constants/ENDPOINTS";

const UsersService = {
	async authenticate(jwtRequest) {
		return await fetch(ENDPOINTS.AUTHENTICATE, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jwtRequest),
		}).then(async (response) => {
			const jwtToken = await response.json();
			return jwtToken;
		});
	},
};

export default UsersService;
