import { formatDistance } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

export const getDistance = (timestamp: string) =>
	formatDistance(zonedTimeToUtc(timestamp, "UTC"), new Date(), {
		addSuffix: true,
	});
