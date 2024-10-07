const tagsSwitch = (tag: string) => {
  switch (tag) {
    case "Marksman":
      return "원거리 딜러";
    case "Mage":
      return "마법사";
    case "Support":
      return "서포터";
    case "Assassin":
      return "암살자";
    case "Tank":
      return "탱커";
    case "Fighter":
      return "전사";
    default:
      return "NONE";
  }
};

export default tagsSwitch;
