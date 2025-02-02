import { useState } from 'react';

const useModal = (): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const open = (): void => setIsOpen(true);
  const close = (): void => setIsOpen(false);

  return [isOpen, open, close];
};

export default useModal;
