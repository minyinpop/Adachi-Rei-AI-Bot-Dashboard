export async function ask_bot(message: string): Promise<string> {
  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  })

  const data = await response.json()

  return data.message
}
