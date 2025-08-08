const ballerina = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Ballerina",
};

const prettyPolly = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Pretty Polly",
};

const willowVale = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Willow Vale",
};

const hidcote = {
  commonName: "English lavender",
  scientificName: "Lavandula angustifolia",
  cultivar: "Hidcote",
};

const imperialGem = {
  commonName: "English lavender",
  scientificName: "Lavandula angustifolia",
  cultivar: "Imperial Gem",
};

const royalCrown = {
  commonName: "French lavender",
  scientificName: "Lavandula dentata",
  cultivar: "Royal Crown",
};

const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 12, medium: 3, large: 13 });
catalog.set(willowVale, { small: 31, medium: 14, large: 24 });
catalog.set(hidcote, { small: 31, medium: 14, large: 24 });
catalog.set(imperialGem, { small: 31, medium: 14, large: 24 });
catalog.set(royalCrown, { small: 31, medium: 14, large: 24 });

function sellPlants(plant, potSize, numPots) {
  if (numPots > plant[potSize]) {
    return `Not enough ${potSize} size pots for ${plant["scientificName"]} '${plant["cultivar"]}'. Only ${plant[potSize]} left.`;
  }
}
