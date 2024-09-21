import { DefaultClient } from '<NPM_PACKAGE_NAME>/web';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './App.css';

const contractTxId = 'ilwT4ObFQ7cGPbW-8z-h7mvvWGt_yhWNlqxNjSUgiYY';


function App() {
  const [contract, setContract] = useState<string>('Loading...');

  useEffect(() => {
    const newClient = new DefaultClient();
  }, []);

  return (
    <div className="App">
      <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
       
      </Markdown>
    </div>
  );
}

export default App;
