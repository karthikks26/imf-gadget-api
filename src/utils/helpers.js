exports.generateCodename = () => {
  const adjectives = ["Silent", "Invisible", "Quantum", "Sonic", "Cyber"];
  const nouns = ["Shadow", "Phoenix", "Viper", "Falcon", "Specter"];
  return `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
    nouns[Math.floor(Math.random() * nouns.length)]
  }`;
};

exports.generateConfirmationCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};
