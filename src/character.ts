import { Character, Clients, defaultCharacter, ModelProviderName, stringToUuid } from "@elizaos/core";
import fs from "fs";
import path from "path";

// Function to load a character from a file
export async function loadCharacter(characterPath: string, runtime: any): Promise<Character> {
  const characterData = JSON.parse(fs.readFileSync(characterPath, 'utf-8'));
  return characterData as Character;
}

export const character: Character = {
    ...defaultCharacter,
    // Character definition remains the same
};
