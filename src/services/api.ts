import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export async function getPositions() {
  try {
    const { data } = await axios.get("/positions");
    if ("positions" in data) {
      return data.positions;
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
}

export async function postUser(newUser: object) {
  try {
    const token = await getToken();
    return await axios.post("/users", newUser, {
      headers: {
        Token: token,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
}

export async function getToken() {
  try {
    const { data } = await axios.get("/token");
    if ("token" in data) {
      return data.token;
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error);
    }
  }
}

export async function getUsers(page = 1, count = 6) {
  try {
    const { data } = await axios.get(`/users?page=${page}&count=${count}`);
    if ("users" in data) {
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error);
    }
  }
}
