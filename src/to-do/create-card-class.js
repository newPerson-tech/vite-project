export function getClassPriority(taskPriority) {
  switch (taskPriority) {
    case "low":
      return "border-green-600";
    case "middle":
      return "border-blue-600";
    case "high":
      return "border-red-700";
    default:
      break;
  }
}
