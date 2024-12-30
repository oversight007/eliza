import OpenAI from "openai";

export class OpenAIClient {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async generateText(prompt: string): Promise<string | undefined> {
    try {
      const response = await this.client.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      });
      console.log("Generated Response:", response.choices[0].message?.content);
      return response.choices[0].message?.content;
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      return undefined;
    }
  }
}
