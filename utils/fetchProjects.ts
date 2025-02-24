export const fetchProjects = async () => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
        throw new Error("⚠ ERROR: NEXT_PUBLIC_API_BASE_URL is not defined. Check your .env.local file.");
    }

    console.log("✅ API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL); // Debugging

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getProjects`);

    if (!res.ok) {
        throw new Error(`⚠ ERROR: Failed to fetch /api/getProjects - ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.projects;
};
