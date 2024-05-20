import { BackgroundContainer } from './components/BackgroundContainer';
import { CodeEditor } from './components/CodeEditor';

function App() {
  return (
    <BackgroundContainer>
      <CodeEditor language="tsx" />
    </BackgroundContainer>
  );
}

export default App;
