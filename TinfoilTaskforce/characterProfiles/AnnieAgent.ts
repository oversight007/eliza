import AnnieProfile from "../../characterProfiles/Annie.json";

export class AnnieAgent {
  name: string;
  personality: string;
  goal: string;

  constructor() {
    this.name = AnnieProfile.name;
    this.personality = AnnieProfile.personality;
    this.goal = AnnieProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: "Automation isn’t about replacement—it’s about liberation. ${this.personality} ensures ${this.goal}."`;
  }
}
