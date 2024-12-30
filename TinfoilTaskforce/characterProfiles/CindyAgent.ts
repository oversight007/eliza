import CindyProfile from "../../characterProfiles/Cindy.json";

export class CindyAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = CindyProfile.name;
    this.personality = CindyProfile.personality;
    this.goal = CindyProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: "AI taking over the world? Maybe. But hey, at least the robots are polite about it! ${this.personality} helps us tackle ${this.goal}."`;
  }
}
