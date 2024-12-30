import AndyProfile from "../../characterProfiles/Andy.json";

export class AndyAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = AndyProfile.name;
    this.personality = AndyProfile.personality;
    this.goal = AndyProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: "Let’s simplify AI! ${this.personality} makes things clear: ${this.goal}."`;
  }
}
