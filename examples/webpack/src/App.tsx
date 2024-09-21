import { DefaultClient } from '<NPM_PACKAGE_NAME>/web';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './App.css';

const client = new DefaultClient();
function App() {
  const [contract, setContract] = useState<string>('Loading...');

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
    
      </Markdown>
    </div>
  );
}

export default App;
