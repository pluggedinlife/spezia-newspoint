const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();
const token = process.env.BOT_TOKEN || "";

const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply("Welcome"));
bot.on(message("text"), (ctx) => ctx.reply("Available"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
