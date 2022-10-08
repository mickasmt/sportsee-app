export const userDataFormat = (data) => {
  if (data.hasOwnProperty("score")) {
    data.todayScore = data.score;
  }

  if (!data.hasOwnProperty("todayScore")) {
    throw new Error("todayScore field missing !");
  }

  return data;
};

// kind is object
export const kindDataFormat = (kindNumber, kind) => {
  const kindWordsFr = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  if (typeof kindNumber === "number") {
    return kindWordsFr[kind[kindNumber]];
  }
};
