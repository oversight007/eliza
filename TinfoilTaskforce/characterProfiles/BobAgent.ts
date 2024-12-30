import BobProfile from "../../characterProfiles/Bob.json";

export class BobAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = BobProfile.name;
    this.personality = BobProfile.personality;
    this.goal = BobProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: "AI fairness is non-negotiable. ${this.personality} drives us to achieve ${this.goal}."`;
  }
}
