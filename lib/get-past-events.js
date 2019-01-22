import events from "../data/events.json";
import isFuture from "date-fns/is_future";

export default function getPastEvents() {
  return events.filter(event => !isFuture(event.date));
}
