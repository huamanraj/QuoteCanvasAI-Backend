const geminiService = require('../services/geminiService');
const config = require('../config/config');

exports.generateText = async (req, res, next) => {
  try {
    const { topic } = req.body;
    const generatedText = await geminiService.generateText(topic);

    res.json({ 
      success: true,
      data: {
        text: generatedText,
        topic: topic
      }
    });
  } catch (error) {
    console.error("Error in generateText controller:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate text. Please try again later.",
      error: error.message || "Unknown error"
    });
  }
};


exports.getFonts = (req, res) => {
  res.json({ 
    success: true, 
    data: { fonts: config.fonts } 
  });
};