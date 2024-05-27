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
import './index.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css';
import parse, { HTMLReactParserOptions, DOMNode, Element, attributesToProps, domToReact } from 'html-react-parser';
import { common, createLowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'

const lowlight = createLowlight(common);

// ------------------------------ //
// ---- use it as a function ---- //
// ------------------------------ //
const getOptions = (language: string, codeContainerClassName?: string): HTMLReactParserOptions => {
  return {
    /**
     * Replace the `<code>` with the highlighted code snippet
     * the string content of the `<code>` tag is transformed to stringified html using the lowlight library
     * the stringified html is then highlighted using the `highlight` theme
     * for that to work with tailwindcss, we are use tailwindcss plugin `tailwind-highlightjs`
     * hast trees as returned by lowlight can be serialized to HTML using `hast-util-to-html`
     * finally the highlighted code snippet is parsed to react component using the `parse` function of `html-react-parser`
     * @param domProps
     * @returns
     */
    replace(domProps: DOMNode) {
      const { name, children, attribs } = domProps as Element;

      // replace only <code> elements
      if (name === 'code') {
        // Convert DOM attributes to React props
        const props = attributesToProps(attribs);
        // Replace the element children
        const options = getOptions(language, codeContainerClassName);
        const codeStr = domToReact(children as DOMNode[], options) as string;
        const tree = lowlight.highlight(language, codeStr);
        return (
          // editor container
          <code className={`hljs code-container ${codeContainerClassName}`} {...props}>
            {parse(toHtml(tree))}
          </code>
        );
      }
    },
  }
};

export type HtmlCodeParserOptions = {
  /*
  *
  * Specify the programming language of the code snippet that
  * will be displayed in the `ReadOnlyTextCodeEditor` component. By default, the `language` prop is set to
  * `'jsx'`, but it can be overridden when using the component by passing a different language value.
  *
  * for more language options, visit: https://github.com/wooorm/lowlight?tab=readme-ov-file#data
  */
  language?: string;
  codeContainerClassName?: string;
};

const parseHtml = (
  /**
   * The stringified html to be parsed (to HTML).
   * example: `<p><h1>Hello there</h1><code>console.log('Hello, World!')</code></p>`
   */
  text: string,
  options?: HtmlCodeParserOptions
) => {
  const { codeContainerClassName, language = 'javascript' } = options || {};

  /*
  * If the `<code>` tag is not found in the html string content
  * it means that there are no code snippets to be highlighted.
  */
  if (!text.includes('<code>')) {
    return parse(text);
  };

  /**
   * Parse the html string content and highlight the code snippets
   */
  return parse(text, getOptions(language, codeContainerClassName));
}

// ------------------------------ //
// ----- use it as component ---- //
// ------------------------------ //
type Props = {
  children: string;
} & HtmlCodeParserOptions;

export const HtmlCodeParser = ({ codeContainerClassName, language, children }: Props) => {
  return parseHtml(children, { codeContainerClassName, language })
}

export default parseHtml;
