async function loadMessages()
{
    const response =
        await fetch(`${window.CONFIG}/messages`);

    const messages =
        await response.json();

    const list =
        document.getElementById("messages");

    list.innerHTML = "";

    messages.forEach(m =>
    {
        const li =
            document.createElement("li");

        li.textContent = m.text;

        list.appendChild(li);
    });
}

async function sendMessage()
{
    const text =
        document.getElementById("messageBox").value;
	
    await fetch(`${window.CONFIG}/messages`,
    {
        method: "POST",
        headers:
        {
            "Content-Type":
            "application/json"
        },
        body: JSON.stringify({ text })
    });

    loadMessages();
}