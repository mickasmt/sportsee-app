import mockData from "./mocks.json";

const baseUrl = "http://localhost:3000";

// get env variable & check if the string value is "true" or not
// if value is "true", the test return true (boolean)
const callMock = (/true/i).test(process.env.REACT_APP_TEST_MOCK) || false;


export const getUser = async (id) => {
  if (callMock) {
    const promise = new Promise((res) => res(mockData));
    return promise;
  } else {
    const res = await fetch(baseUrl + `/user/${id}`);

    if (!res.ok) throw new Error("User not found");

    const json = await res.json();
    return json;
  }
};

export const getUserActivities = async (id) => {
  if (callMock) {
    const promise = new Promise((res) => res(mockData.activity));
    return promise;
  } else {
    const res = await fetch(baseUrl + `/user/${id}/activity`);

    if (!res.ok) {
      throw Error("Activity not found");
    }

    const json = await res.json();

    return json;
  }
};

export const getUserAverageSessions = async (id) => {
  if (callMock) {
    const promise = new Promise((res) => res(mockData.averageSessions));
    return promise;
  } else {
    const res = await fetch(baseUrl + `/user/${id}/average-sessions`);

    if (!res.ok) {
      throw Error("Average session not found");
    }

    const json = await res.json();

    return json;
  }
};

export const getUserPerformances = async (id) => {
  if (callMock) {
    const promise = new Promise((res) => res(mockData.performance));
    return promise;
  } else {
    const res = await fetch(baseUrl + `/user/${id}/performance`);

    if (!res.ok) {
      throw Error("data not found");
    }

    const json = await res.json();

    return json;
  }
};
