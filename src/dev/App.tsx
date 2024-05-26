import parseHtml, { HtmlCodeParser } from '../Parse'

const html = `<p><h1>Hello there</h1><code>console.log("Using it as a component")</code></p>`;

const App = () => {
  return (
    <div>
      {parseHtml(html)}
      <HtmlCodeParser language="typescript" codeContainerClassName="custom-class">
        {html}
      </HtmlCodeParser>
    </div>
  )
}

export default App;
