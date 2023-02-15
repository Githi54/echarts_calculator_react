import { useState } from 'react';
import { DesktopVersion } from "./components/DesktopVersion";

function App() {
  const [storageCount, setStorageCount] = useState(100);
  const [transferCount, setTransferCount] = useState(100);

  return (
    <div className="App">
      < DesktopVersion 
        storageCount={storageCount} 
        setStorageCount={setStorageCount} 
        transferCount={transferCount}
        setTransferCount={setTransferCount} 
      />
    </div>
  );
}

export default App;
