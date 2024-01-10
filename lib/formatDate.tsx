export default function formatDate(dateStr: string): string {
  const dateParts = dateStr.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  // Ensure month is within valid range (1-12)
  if (month < 1 || month > 12) {
    throw new Error("Invalid month value");
  }

  // Get month name using Intl.DateTimeFormat for localization
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(year, month - 1)
  );

  // Apply correct ordinal suffix for the day
  const daySuffix = ["st", "nd", "rd"][(day % 10) - 1] || "th";
  const formattedDay = day + daySuffix;

  return `${formattedDay} ${monthName}, ${year}`;
}
