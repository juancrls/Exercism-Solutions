export class HighScores {
  constructor(output) { this.output = output }

  get scores() { return this.output }

  get latest() { return this.output.slice(-1)[0] }
    
  get personalBest() { return Math.max(...this.output) }

  get personalTopThree() { return this.output.sort((a, b) => b - a).slice(0, 3) }
}