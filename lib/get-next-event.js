import events from "../data/events.json";
import closesIndexTo from "date-fns/closest_index_to";
import isAfter from "date-fns/is_after";

function getNextEvent(currentDate) {
  const dates = events
    .map(({ date }) => date)
    .filter(date => date !== "tbd")
    .map(date => new Date(date))
    .filter(date => isAfter(date, currentDate));

  const index = closesIndexTo(currentDate, dates);

  return events[index];
}

export default getNextEvent;
