#!/use/bi/env node
import * as commander from "commander";
import { translate } from "./main";

const program = new commander.Command();

program
  .version("0.0.1")
  .name("trns")
  .usage("<English/Chinese>")
  .argument("<English/Chinese>")
  .action((word) => {
    translate(word)
  });

program.parse(process.argv);
