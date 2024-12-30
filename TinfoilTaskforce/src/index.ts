import { OpenAIClient } from "./openaiClient";
import { CindyAgent } from "./agents/CindyAgent";
import { TimmyAgent } from "./agents/TimmyAgent";
import { DebbieAgent } from "./agents/DebbieAgent";
import { AndyAgent } from "./agents/AndyAgent";
import { BobAgent } from "./agents/BobAgent";
import { AnnieAgent } from "./agents/AnnieAgent";

// API key from GitHub Secrets
const apiKey = process.env.OPENAI_API_KEY || ""; 
const openAIClient = new OpenAIClient(apiKey);

// Initialize all agents
const agents = [
  new CindyAgent(),
  new TimmyAgent(),
  new DebbieAgent(),
  new AndyAgent(),
  new BobAgent(),
  new AnnieAgent(),
];

// Generate and log posts for each agent
(async () => {
  for (const agent of agents) {
    const prompt = agent.generatePost();
    console.log(`Generated Prompt for ${agent.constructor.name}:`, prompt);

    // Use OpenAI to generate AI response
    const response = await openAIClient.generateText(prompt);
    console.log(`Generated AI Response for ${agent.constructor.name}:`, response);
  }
})();
