import events from "../data/events.json";
import closesIndexTo from "date-fns/closest_index_to";
import isFuture from "date-fns/is_future";

export function getFutureEvents() {
  return events.filter(event => isFuture(event.date));
}

function getNextEvent(currentDate) {
  const futureEvent = getFutureEvents(events);
  const index = closesIndexTo(
    currentDate,
    futureEvent.map(({ date }) => new Date(date))
  );

  return futureEvent[index];
}

export default getNextEvent;
