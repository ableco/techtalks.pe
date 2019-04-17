const meow = require("meow");
const puppeteer = require("puppeteer-core");
const { stringify } = require("qs");
const fs = require("fs");
const { promisify } = require("util");
const CHROME_PATH = require("local-chrome");

const writeFile = promisify(fs.writeFile);

async function main({ name, handle, title, path }) {
  const qs = stringify({ name, handle, title });
  const url = `https://techtalks.pe/_generators/twitter-card?${qs}`;
  const options = {
    args: [],
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width: 550, height: 200 }
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(url);
  const file = await page.screenshot({ type: "png" });
  await writeFile(path, file);
  await browser.close();
}

const cli = meow(
  `Usage
  $ node scripts/twitter-card.js [file path] [name] [handle] [title]
`
);

const [path, name, handle, title] = cli.input;

main({ path, name, handle, title }).catch(error => {
  console.error(error);
  process.exit(1);
});
