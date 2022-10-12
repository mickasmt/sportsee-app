/**
 * @description Class to format user infos/stats
 * @param {Object} data
 * @returns {Object}
 */
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

/**
 * @description Class to format user activities data 
 * @param {Object} data
 * @returns {Object}
 */
export class userActivitiesFormat {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      ...session,
      day: parseInt(new Date(session.day).getDate()),
    }));
  }
}

/**
 * @description Class to format user average sessions data 
 * @param {Object} data
 * @returns {Object}
 */
export class userAverageSessionsFormat {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

/**
 * @description Class to format user performances data 
 * @param {Object} data
 * @returns {Object}
 */
export class userPerformancesFormat {
  constructor(data) {
    this.formatKindWordsFr(data.kind);

    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }

  
  /**
   * Translate the kind words list in french version
   * @param {Object} kind
   */
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
