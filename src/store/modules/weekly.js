import {
  parse,
  lastDayOfWeek,
  eachDayOfInterval,
  format,
} from 'date-fns';

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export default {
  namespaced: true,
  state: {
    weekly: [
      {
        afternoon: [],
        breakfast: [],
        lunch: [
          'Low Knead Pizza',
          'Tiramisu',
          'Tomatensuppe',
        ],
        dinner: [],
        date: '2019-07-22',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-23',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-24',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-25',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-26',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-27',
      },
      {
        afternoon: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        date: '2019-07-28',
      },
    ],
  },
  getters: {
    weekData: (state) => (weekYear) => {
      const firstDayOfTheWeek = parse(weekYear, "R'-W'I", new Date());

      return eachDayOfInterval({
        start: firstDayOfTheWeek,
        end: lastDayOfWeek(firstDayOfTheWeek, { weekStartsOn: 1 }),
      })
        .map((day) => state.weekly.find((item) => item.date === format(day, 'yyyy-MM-dd')) || {
          breakfast: [],
          lunch: [],
          dinner: [],
          date: day,
        });
    },
    dayData: (state) => (day) => deepCopy(state.weekly.find((item) => item.date === day) || {
      afternoon: [],
      breakfast: [],
      lunch: [],
      dinner: [],
      date: day,
    }),
  },
  mutations: {
    updateDay(state, payload) {
      const indexOfDay = state.weekly.findIndex((item) => item.date === payload.date);
      if (indexOfDay === -1) {
        state.weekly.push(payload.data);
      } else {
        state.weekly[indexOfDay] = payload.data;
      }
    },
  },
};
