import DebbieProfile from "../../characterProfiles/Debbie.json";

export class DebbieAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = DebbieProfile.name;
    this.personality = DebbieProfile.personality;
    this.goal = DebbieProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: Numbers don’t lie! ${this.personality} helps me explore: ${this.goal}`;
  }
}
