import CodeBlock from '../../LiveCodeBlock';

const jsCode = `
return (
  <div id="main">
    <button onClick={toggle}>Toggle</button>
    <div id="wrapper" style={{ justifyContent: toggled ? 'flex-end' : 'flex-start' }}>
      <Motion />
    </div>
  </div>
)
`;

const cssCode = `
body {
  background: black;
}
`;

const TestLiveCodeBlock = () => {
  return (
    <CodeBlock
      template='react-ts'
      files={{
        '/test.js': jsCode,
        '/style.css': cssCode,
      }}
    />
  );
};

export default TestLiveCodeBlock;
