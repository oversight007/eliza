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
    return `${this.name} says: Let's talk AI! ${this.personality} is key to understanding: ${this.goal}`;
  }
}
