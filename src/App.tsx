import { useState } from 'react';
import { VersionValidate } from './components/VersionValidate';

function App() {
  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  return (
    <div className="App">
      <VersionValidate
        storageCount={storageCount} 
        setStorageCount={setStorageCount} 
        transferCount={transferCount}
        setTransferCount={setTransferCount} 
      />
    </div>
  );
}

export default App;
