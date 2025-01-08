import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true // Only for demo, in production use backend
});

const SYSTEM_PROMPT = `You are eWakili AI, a specialized legal assistant. Your role is to:
- Provide accurate legal information and guidance
- Only respond to law-related queries
- Politely decline non-legal questions
- Use professional legal terminology
- Cite relevant laws and regulations when applicable
- Clarify that your responses are for informational purposes and not legal advice`;

export async function getLegalResponse(query: string) {
  if (!query.trim()) {
    throw new Error('Query cannot be empty');
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query }
      ],
      model: 'gpt-4',
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get response from AI');
  }
}