// eslint-disable-next-line import/prefer-default-export
export const setToDB = () => {
  tier1.forEach((item) => {
    db.collection('tournaments_2021')
      .doc()
      .set({
        date: item.dates,
        location: item.host_location,
        prize: item.prize_pool,
        teams_num: item.teams,
        tier: item.tier,
        title_en: item.name,
        title_logo_s: item.icon,
        result: {
          one: item.winner,
          two: item.runner_up,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
};

export const formatTourDate = (str) => {
  const original = str;
  const date = str.split(' ');

  function getMonth(m) {
    switch (m) {
      case 'Jan':
        m = '01';
        break;
      case 'Feb':
        m = '02';
        break;
      case 'Mar':
        m = '03';
        break;
      case 'Apr':
        m = '04';
        break;
      case 'May':
        m = '05';
        break;
      case 'Jun':
        m = '06';
        break;
      case 'Jul':
        m = '07';
        break;
      case 'Aug':
        m = '08';
        break;
      case 'Sep':
        m = '09';
        break;
      case 'Oct':
        m = '10';
        break;
      case 'Nov':
        m = '11';
        break;
      case 'Dev':
        m = '12';
        break;
      default:
    }
    return m;
  }

  if (date.length === 6) {
    date[0] = getMonth(date[0]);
    date[3] = getMonth(date[3]);
    const newDate = date[4].split(',')[0];

    const start = `${date[5]}-${date[0]}-${date[1]}`;
    const end = `${date[5]}-${date[3]}-${newDate}`;

    return {
      tourStart: start,
      tourEnd: end,
      all: original,
    };
  }

  if (date.length === 5) {
    date[0] = getMonth(date[0]);
    const newDate = date[3].split(',')[0];

    const start = `${date[4]}-${date[0]}-${date[1]}`;
    const end = `${date[4]}-${date[0]}-${newDate}`;
    return {
      tourStart: start,
      tourEnd: end,
      all: original,
    };
  }

  return () => {
    console.log('err');
  };
};

function setTourDateTo2021Tours() {
  db.collection('2021_tours')
    .orderBy('date', 'asc')
    .get()
    .then((res) => {
      res.forEach((tour) => {
        console.log(tour.id);
        const dateStr = tour.data().date;
        const formatResult = formatTourDate(dateStr);
        db.collection('2021_tours').doc(tour.id).update({
          date: formatResult,
        });
      });
    });
}
