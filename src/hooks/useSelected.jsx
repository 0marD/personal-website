import { useState } from 'react';

const useSelected = () => {
  const [selected, setSelected] = useState(0);
  return { selected, setSelected };
};

export { useSelected };
