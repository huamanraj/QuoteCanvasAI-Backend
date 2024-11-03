const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config/config');


class GeminiService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(config.apiKey);
    this.model = this.genAI.getGenerativeModel({ model: config.model });
  }

  async generateText(topic) {
    try {
      const prompt = `Generate a single, short quote related to the topic: ${topic}. 
                      The quote should be inspiring, humorous, or thought-provoking, with no hashtags, explanations, or extra content.`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return text;
    } catch (error) {
      console.error('Error in generateText:', error.originalError || error);
      throw new Error('Failed to generate text');
    }
  }

}

module.exports = new GeminiService();