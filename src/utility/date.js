const getDateDaysAgo = daysAgo => {
  const DAYS_IN_A_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();

  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      DAYS_IN_A_MONTH[1] = 29;
    }
  }

  while (daysAgo > 0) {
    day -= daysAgo;
    daysAgo = day < 1 ? Math.abs(day) : 0;

    if (day < 1) {
      month -= 1;

      if (month === -1) {
        year -= 1;
        month = 11;
      }

      day = DAYS_IN_A_MONTH[month];
    }
  }

  if (day < 10) {
    day = `0${day.toString()}`;
  }

  month += 1;

  if (month < 10) {
    month = `0${month.toString()}`;
  }

  return ({
    string: `${year}-${month}-${day}`,
    yearString: year.toString(),
    monthString: month.toString(),
    dayString: day.toString(),
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    day: parseInt(day, 10),
  });
};

const parseDateString = dateString => ({
  year: parseInt(dateString.substring(0, dateString.indexOf('-')), 10),
  month: parseInt(dateString.substring(dateString.indexOf('-') + 1, dateString.lastIndexOf('-')), 10),
  day: parseInt(dateString.substring(dateString.lastIndexOf('-') + 1), 10),
});

const isFirstDateSmaller = (date1, date2) => {
  if (date1.year > date2.year) {
    return false;
  } if (date1.year === date2.year) {
    if (date1.month > date2.month) {
      return false;
    } if (date1.month === date2.month) {
      if (date1.day >= date2.day) {
        return false;
      }
    }
  }

  return true;
};

export { getDateDaysAgo, parseDateString, isFirstDateSmaller };
