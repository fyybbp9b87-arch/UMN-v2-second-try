const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: sk-proj-"3G4JiD7SvZKNwAiSr2PiCzcy61O9qZ0SuhlrcczVAXGgL5SOhxyTmc8saBZ3UxNx4nbRVaxpy1T3BlbkFJ6rL_6btSaj7Tcect4uhEKcRBXMb9lPueGSCExG0EXcN6fxyXYEqNPAFcFPNlu_SC2wVs6VJ-0A
});

app.post("/chat", async (req, res) => {

  try {

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: req.body.messages
    });

    res.json({
      reply: completion.choices[0].message.content
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
