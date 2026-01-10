const DAILY_LIMIT = 1000;

export function canUseAI(tokensUsedToday: number, newTokens: number) {
  return tokensUsedToday + newTokens <= DAILY_LIMIT;
}