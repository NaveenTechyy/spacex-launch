import { format } from "date-fns";

export const formattedDate = item =>
  format(new Date(item), "MMMM dd, yyyy hh:mm a");
