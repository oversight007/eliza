import { CindyAgent } from "./agents/CindyAgent";
import { TimmyAgent } from "./agents/TimmyAgent";
import { DebbieAgent } from "./agents/DebbieAgent";
import { AndyAgent } from "./agents/AndyAgent";
import { BobAgent } from "./agents/BobAgent";
import { AnnieAgent } from "./agents/AnnieAgent";

const agents = [
  new CindyAgent(),
  new TimmyAgent(),
  new DebbieAgent(),
  new AndyAgent(),
  new BobAgent(),
  new AnnieAgent()
];

agents.forEach(agent => {
  console.log(agent.generatePost());
});
