import { showLoading, hideLoading } from "../utils/loadingService";
import { isLoggedIn } from "./authService";
import { AuthenticationError } from './errors.js';

const BASE_URL = import.meta.env.VITE_OPENAI_API_URL;
const GPT_KEY = import.meta.env.VITE_GPT_KEY;

export async function generateContent(campaign) {
  const prompt = `
      You are a professional social media copywriter.

      Please generate Instagram captions for a campaign with the following details:
      - **Brand Name**: ${campaign.brandName}
      - **Campaign Name**: ${campaign.campaignName}
      - **Campaign Description**: ${campaign.campaignDesc}
      - **Target Audience**: ${campaign.targetAudience}
      - **Post Topic**: ${campaign.postTopic}
      - **Tone**: ${campaign.postTone}

      Instructions:
      - Make the captions engaging, creative, and relevant to the brand and topic.
      - Use the specified tone of voice: ${campaign.postTone}.
      - End with a few relevant hashtags.
      - Use emojis sparingly (if appropriate).

      Output only caption in plain text, no extra explanation.
    `;

    const imagePrompt = `
      A high-quality, visually engaging Instagram-style image for a brand campaign.

      Brand: ${campaign.brandName}
      Campaign: ${campaign.campaignName}
      Theme: ${campaign.postTopic}
      Target Audience: ${campaign.targetAudience}
      Tone: ${campaign.postTone}
      Description: ${campaign.campaignDesc}

      Visual style should reflect the tone of voice: ${campaign.postTone}.
      Avoid using text in the image.
      Make the design social-media friendly, with clean composition and appealing colors.
    `;

  showLoading();


  try {
    
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    const [responseCaption, responseImage] = await Promise.all([
      generateCaption(prompt),
      generateImage(imagePrompt)
    ]);

    return {
      caption: responseCaption?.choices[0]?.message?.content || "No Caption Availble",
      image: responseImage?.data?.[0] || "https://example.com/default-image.jpg"
    };

  } catch (error) {
    console.error("Error when generate content", error);
    throw error; 
  } finally {
    hideLoading();
  }
}

export async function generateCaption(prompt) {
  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GPT_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: prompt }
        ],
      }),
    });

    return await response.json() 

  } catch (error) {
    console.error("OpenAI API error:", error);
    throw error;
  }
}

export async function generateImage(prompt) {
  try {
    const response = await fetch(`${BASE_URL}/images/generations`, {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GPT_KEY}`,
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt,
          size: "1024x1024",
          quality: "standard",
          n: 1
        }),
    });

    return await response.json() 

  } catch (error) {
    console.error("OpenAI API error:", error);
    throw error;
  }
}