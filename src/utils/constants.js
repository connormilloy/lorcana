export const obscureRegions = {
  inkCost: { x: 0, y: 0, width: 300, height: 300 },
  inkable: { x: 0, y: 0, width: 300, height: 300 },
  stats: { x: 1000, y: 1000, width: 500, height: 400 },
  rarity: { x: 660, y: 1900, width: 150, height: 150 },
  subtypes: { x: 0, y: 1250, width: 1500, height: 150 },
  lore: { x: 1200, y: 1300, width: 300, height: 650 },
  colors: { x: 0, y: 900, width: 1500, height: 600 },
};

export const validQuestionsPerCardType = {
  action: ['inkCost', 'colors', 'rarity', 'inkable'],
  character: [
    'inkCost',
    'colors',
    'rarity',
    'subtypes',
    'lore',
    'stats',
    'inkable',
  ],
  item: ['inkCost', 'colors', 'rarity', 'inkable'],
};
