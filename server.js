const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const messages = [];

app.get("/messages", (req, res) => {
	res.json(messages);
});

app.post("/messages", (req, res) => {
	const message = {
		text:req.body.text,
		time: new Date()
	};
	
	messages.push(message);
	
	res.json({
		success: true
	});
});

app.listen(3000, () => {
	console.log("API running on port 3000");
});