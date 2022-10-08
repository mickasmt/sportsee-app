export const userDataFormat = (data) => {
  if (data.hasOwnProperty('score')) {
    data.todayScore = data.score;
  }

  if (!data.hasOwnProperty('todayScore')) {
    throw new Error('todayScore field missing !')
  }

  return data
}