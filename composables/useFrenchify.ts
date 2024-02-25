export const useFrenchify = (rawText: string) => {
  const chars = rawText.split('');
  const colourMapping = [
    'blue',
    'red',
    'white'
  ];
  let lastIndex = -1;
  
  const randomColour = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * colourMapping.length);
    }
    while(lastIndex === randomIndex);

    lastIndex = randomIndex;

    return colourMapping[randomIndex];
  };

  return chars?.map((char) => {
    const colour = char !== ' ' ? randomColour(): '';
    return `<span class="${colour}">${char}</span>`;
  }).join('');
}