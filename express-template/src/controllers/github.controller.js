import { asyncHandler } from "../utils/asyncHandler.js";

const exchangeGitHubToken = asyncHandler(async (req, res) => {
    const { code, client_id, redirect_uri } = req.body;

    if (!code || !client_id || !redirect_uri) {
        return res.status(400).json({ error: "Missing required parameters" });
    }

    const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET; // Store in env

    if (!CLIENT_SECRET) {
        return res.status(500).json({ error: "Server configuration error" });
    }

    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id,
                client_secret: CLIENT_SECRET,
                code,
                redirect_uri
            })
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            return res.status(400).json({ error: tokenData.error_description });
        }

        res.json(tokenData);
    } catch (error) {
        res.status(500).json({ error: "Failed to exchange token" });
    }
});

export { exchangeGitHubToken };