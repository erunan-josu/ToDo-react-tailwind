export const getTasks = async () => {
  const res = await fetch('http://localhost:3000/tasks')
  const resJSON = await res.json()
  return resJSON
}

export const postTask = async (task) => {
  const res = fetch(`http://localhost:3000/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  return res
}
