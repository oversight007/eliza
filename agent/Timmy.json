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
    return `${this.name} says: "They called me paranoid, but here we are—teaching AI to make jokes! ${this.personality} helps unify the team to achieve ${this.goal}."`;
  }
}
