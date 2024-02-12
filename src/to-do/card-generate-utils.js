const generateId = () => Date.now() * Math.random();

export function createTask(title, desc, priority) {
  return {
    id: generateId().toString(),
    title,
    description: desc,
    priority,
    date: Date.now(),
  };
}
