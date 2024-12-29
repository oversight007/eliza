import TimmyProfile from "../../characterProfiles/Timmy.json";

export class TimmyAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = TimmyProfile.name;
    this.personality = TimmyProfile.personality;
    this.goal = TimmyProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: Let's dive into AI! ${this.personality} keeps me focused on: ${this.goal}`;
  }
}
