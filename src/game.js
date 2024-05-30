import { Player } from "./player";

export function initializeGame() {
  const player = new Player("Jaggu");
  const computer = new Player("Bot", true);

  return { player, computer };
}
