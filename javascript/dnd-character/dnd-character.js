export const abilityModifier = (num) => {
  if(num < 3){throw new Error('Ability scores must be at least 3')}
  if(num > 18){throw new Error('Ability scores can be at most 18')}
  return Math.floor((num - 10) / 2)
};

export class Character {
  constructor(){
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility();
  }

  static rollAbility() {
    return Math.floor((Math.random() * ((18 - 3) + 1)) + 3) // chose a random number in a range of 3-18
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution)
  }
}
