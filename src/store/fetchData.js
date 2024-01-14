const fetchData = async (url) => {
	const baseUrl = 'http://localhost:3000/';
	const apiEndpoint = `${baseUrl}${url}`;
	try {
		const response = await fetch(apiEndpoint);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		   }
		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error; // Propagate the error to the caller
	}
};

export default fetchData;

