import { useState } from 'react';
import { SmallScreenVersion } from './components/SmallScreenVersion';

function App() {
  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  return (
    <div className="App">
      <SmallScreenVersion
        storageCount={storageCount} 
        setStorageCount={setStorageCount} 
        transferCount={transferCount}
        setTransferCount={setTransferCount} 
      />
    </div>
  );
}

export default App;
