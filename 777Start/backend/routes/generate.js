import express from "express";
import OpenAI from "openai";
import Project from "../models/Project.js";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const { name, product, audience, style } = req.body;

  try {
    const prompt = `Создай продающий текст для продукта "${product}" бренда "${name}" для аудитории "${audience}" в стиле "${style}"`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });

    const generatedText = response.choices[0].message.content;

    const project = new Project({ name, product, audience, style, generatedText });
    await project.save();

    res.json({ generatedText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка генерации" });
  }
});

export default router;
