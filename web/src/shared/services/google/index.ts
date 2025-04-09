import axios from "axios";

export const GoogleService = {
  getUser: async (accessToken: string) => {
    const userResponse = await axios({
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
      method: "get",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (userResponse.status != 200) throw new Error("Falha ao realizar login com o google!")

    const { name, email, picture } = userResponse.data

    return { name, email, picture }
  }
}