interface AnswerWithCondition {
  condition: boolean;
  answer: string;
}

class Bob {
  hey(phrase: string): string {
    const trimmedPhrase = phrase.trim();
    const isConsistingLetters = /[a-zA-Z]+/.test(trimmedPhrase);
    const isSilent = trimmedPhrase === '';
    const isYelling = (!isSilent && isConsistingLetters && trimmedPhrase.toUpperCase() === phrase);
    const isAsking = trimmedPhrase.endsWith('?');

    const answersWithConditions: AnswerWithCondition[] = [
      { condition: (isYelling && isAsking), answer: 'Calm down, I know what I\'m doing!' },
      { condition: isYelling, answer: 'Whoa, chill out!' },
      { condition: isAsking, answer: 'Sure.' },
      { condition: isSilent, answer: 'Fine. Be that way!' },
      { condition: true, answer: 'Whatever.' },
    ];

    const { answer } = answersWithConditions.find(candidate => candidate.condition) as AnswerWithCondition;

    return answer;
  }
}

export default Bob;
