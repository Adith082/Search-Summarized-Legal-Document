
const isDocker = window.location.hostname !== "localhost";
const BASE_URL = isDocker
  ? "http://backend:8000"  // when running inside Docker network
  : "http://localhost:8000"; // when running locally

export async function fetchDocumentSummary(query){

    try {
        const response = await fetch(`${BASE_URL}/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData.result;
    } catch (error) {
        console.error("Error fetching document summary:", error);
        throw error;
    }
}