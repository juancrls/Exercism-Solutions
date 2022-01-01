/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  let [firstCard] = deck;
  return firstCard
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  let [, secondCard] = deck;
  return secondCard;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  let [firstCard, secondCard, ...rest] = deck;
  [firstCard, secondCard] = [secondCard, firstCard];

  return [firstCard, secondCard, ...rest];
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  let [topCard, ...rest] = deck;
  return [topCard, [...rest]];
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  let [topCard, ...rest] = deck;

  return [topCard, ...FACE_CARDS, ...rest];
}