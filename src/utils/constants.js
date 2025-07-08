export const obscureRegions = {
  inkCost: { x: 0, y: 0, width: 100, height: 100 },
  inkable: { x: 0, y: 0, width: 100, height: 100 },
  stats: { x: 200, y: 240, width: 150, height: 100 },
  rarity: { x: 150, y: 450, width: 50, height: 50 },
  subtypes: { x: 0, y: 290, width: 1500, height: 50 },
  lore: { x: 275, y: 315, width: 75, height: 150 },
  colors: { x: 0, y: 230, width: 1500, height: 100 },
};

export const validQuestionsPerCardType = {
  action: ['inkCost', 'rarity', 'inkable'],
  character: ['inkCost', 'rarity', 'subtypes', 'lore', 'stats', 'inkable'],
  item: ['inkCost', 'rarity', 'inkable'],
};
