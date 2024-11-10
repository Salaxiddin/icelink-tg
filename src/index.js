const TelegramApi = require("node-telegram-bot-api");
const {
  Button,
  InfoButton,
  ProjectsButton,
} = require("./options");
const {InfoText,ProjText,Hello}= require("./texts/text")

const token = "7192727584:AAH6nb-2h4RnLUCUM-BVyPNJ5vkmkpndNm0";

const bot = new TelegramApi(token, { polling: true });



const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Начать" },
    { command: "/info", description: "Получить информацию" },
    { command: "/projects", description: "Проекты" },
  ]);

  bot.on("message", async (msg) => {
    const data = msg.data;
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
      if (text === "/start") {
        // await bot.sendSticker(chatId, '')
        return bot.sendMessage(chatId, Hello, Button);
      }
      if (text === "/info") {
        return bot.sendMessage(chatId, InfoText, InfoButton);
      }
      if (text === "/projects") {
        return bot.sendMessage(chatId, ProjText, ProjectsButton);
      }
      return bot.sendMessage(chatId, "Я тебя не понимаю, попробуй еще раз!)");
    } catch (e) {
      return bot.sendMessage(chatId, "Произошла какая то ошибочка!)");
    }
  });
  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data === "/projects") {
      return bot.sendMessage(chatId, ProjText, ProjectsButton);
    }
    if (data === "/info") {
      return bot.sendMessage(chatId, InfoText, InfoButton);
    }
  });
};

start();
