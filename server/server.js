import express from "express";
import SpotifyWebApi from "spotify-web-api-node";

const app = express();
app.post("/login", async (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: "e96e718294f24aaabe006210624a2e34",
    clientSecret: "490c6f6ee03548fe8b8c1bfee10889d6",
    redirectUri: "http://localhost:3000",
  });

  const data = await spotifyApi.authorizationCodeGrant(code);
  res.json({
    accessToken: data.body.access_token,
    refreshToken: data.body.refresh_token,
    expiresIn: data.body.expires_in,
  });
});

app.listen();
