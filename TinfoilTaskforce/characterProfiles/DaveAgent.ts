import DaveProfile from "../../characterProfiles/Dave.json";

export class DaveAgent {
  name: string;
  personality: string;
  goal: string;
}
  constructor() {
    this.name = DaveProfile.name;
    this.personality = DaveProfile.personality;
    this.goal = DaveProfile.goal;
  }

  generatePost(): string {
    return `${this.name} says: "Data integrity is the backbone of ethical AI. ${this.personality} safeguards ${this.goal}."`;
  }
