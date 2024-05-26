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

export type HtmlCodeParserProps = {
  children: string;
} & HtmlCodeParserOptions;
