export const fetchSkills = async () => {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
        throw new Error("Environment variable NEXT_PUBLIC_API_BASE_URL is not defined. Check your .env.local file.");
    }

    console.log("Using API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL); // Debugging

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getSkills`);

    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.skills;
};
