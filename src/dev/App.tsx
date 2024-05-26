import parseHtml, { HtmlCodeParser } from '../Parse'

const App = () => {
  return (
    <div>
      {parseHtml('<p><h1>Hello there</h1><code>console.log("Hello, World!")</code></p>')}
      <HtmlCodeParser language="typescript" codeContainerClassName="custom-class">
        {`<p><h1>Hello there</h1><code>console.log("Using it as a component")</code></p>`}
      </HtmlCodeParser>
    </div>
  )
}

export default App
