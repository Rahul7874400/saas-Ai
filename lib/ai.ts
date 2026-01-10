export async function generateMockAI(prompt: string) {
  return {
    text: `Mock AI Response for: "${prompt}"`,
    tokensUsed: Math.floor(Math.random() * 200) + 50
  };
}
