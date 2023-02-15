import { useState, useEffect } from "react";
import { DesktopVersion } from "../DesktopVersion";
import { SmallScreenVersion } from "../SmallScreenVersion";

type Props = {
  storageCount: number;
  setStorageCount: (val: number) => void;
  transferCount: number;
  setTransferCount: (val: number) => void;
};

export const VersionValidate: React.FC<Props> = ({
  storageCount,
  setStorageCount,
  transferCount,
  setTransferCount,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      {width >= 1200 ? (
        <DesktopVersion
          storageCount={storageCount}
          setStorageCount={setStorageCount}
          transferCount={transferCount}
          setTransferCount={setTransferCount}
        />
      ) : (
        <SmallScreenVersion
          storageCount={storageCount}
          setStorageCount={setStorageCount}
          transferCount={transferCount}
          setTransferCount={setTransferCount}
        />
      )}
    </>
  );
};
