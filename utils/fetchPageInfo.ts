export const fetchPageInfo = async () => {
    try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        if (!apiBaseUrl) {
            console.error("❌ Error: `NEXT_PUBLIC_API_BASE_URL` is not set in .env.local");
            return null;
        }

        const res = await fetch(`${apiBaseUrl}/api/getPageInfo`);

        if (!res.ok) {
            console.error(`❌ API Error: Failed to fetch page info. Status: ${res.status}`);
            return null;
        }

        const data = await res.json();

        console.log("✅ Full API Response:", data); // Debugging

        if (!data.pageInfo || !data.pageInfo.profilePic) {
            console.warn("⚠ Warning: `profilePic` is missing in API response");
        }

        return data.pageInfo;

    } catch (error) {
        console.error("❌ Fetch Page Info Error:", error);
        return null;
    }
};
