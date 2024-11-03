const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config/config');
const cors = require('cors');
app.use(cors());

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
      const text = result?.response?.text || result?.text || ''; 
      
      return text;
    } catch (error) {
      console.error('Error in generateText:', error.originalError || error);  
      throw new Error('Failed to generate text');
    }
  }
  
}

module.exports = new GeminiService();