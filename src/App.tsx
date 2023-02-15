import { useState } from 'react';
import { DesktopVersion } from "./components/DesktopVersion";

function App() {
  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

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
