import * as commander from "commander";
import { translate } from "./main";

const program = new commander.Command();

program
  .version("0.0.1")
  .name("trns")
  .usage("<English>")
  .argument("<English>")
  .action((English) => {
    console.log(English);
    translate(English)
  });

program.parse(process.argv);
