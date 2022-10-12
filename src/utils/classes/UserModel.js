export class userDataFormat {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.keyData = data.keyData;

    if (data.hasOwnProperty("score")) {
      this.todayScore = data.score;
    } else {
      this.todayScore = data.todayScore;
    }
  }
}

export class userActivitiesFormat {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      ...session,
      day: parseInt(new Date(session.day).getDate()),
    }));
  }
}

export class userAverageSessionsFormat {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export class userPerformancesFormat {
  constructor(data) {
    this.formatKindWordsFr(data.kind);

    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }

  formatKindWordsFr(kind) {
    const kindWordsFr = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    Object.keys(kind).forEach((key) => {
      const name = kind[key];
      kind[key] = kindWordsFr[name];
    });
  }
}
