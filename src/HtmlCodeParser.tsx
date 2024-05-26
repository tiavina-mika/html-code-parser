/**
 *
 * documentations:
 * https://www.npmjs.com/package/html-react-parser
 * https://github.com/wooorm/lowlight?tab=readme-ov-file
 * https://github.com/GeoffSelby/tailwind-highlightjs
 * https://highlightjs.org/examples (list of all available themes)
 * https://medium.com/@hizacharylee/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509 (custom css theme, not used here)
 *
 */

import parseHtml from "./Parse";
import { HtmlCodeParserProps } from "./type";

// ------------------------------ //
// ----- use it as component ---- //
// ------------------------------ //

const HtmlCodeParser = ({ codeContainerClassName, language, children }: HtmlCodeParserProps) => {
  return parseHtml(children, { codeContainerClassName, language })
}

export default HtmlCodeParser;
