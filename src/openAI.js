
require('dotenv').config();

const {OPENAI_API_KEY} = process.env;
const { Configuration, OpenAIApi } = require("openai");

const modles = {
    davinci: "text-davinci-003",
    curie: "text-curie-001",
    babbage: 'text-babbage-001',
    ada: 'text-ada-001'
}

const maxTokens = {
    davinci: 4000,
    curie: 2048,
    babbage: 2048,
    ada: 2048,
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function askDavinic(Qesution) {
    try {
        const completion = await openai.createCompletion({
            model: modles.davinci,
            prompt: Qesution,
            max_tokens: maxTokens.davinci,
            temperature: 0.1,
        });
        return completion
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data.error.message);
            return error.response.data.error.message
        } else {
            console.log(error.message);
        }
    }
}

module.exports = askDavinic
