import { useState } from 'react';
import { Code } from './types';
import { defaultCodes } from './default-codes';

export const useCodes = () => {
  const [codes, setCodes] = useState<Code[]>(defaultCodes);

  const createCode = (code: Code) => {
    setCodes([...codes, code]);
  };

  const updateCode = (id: string, updatedCode: Partial<Code>) => {
    setCodes(codes.map(code => (code.id === id ? { ...code, ...updatedCode } : code)));
  };

  const deleteCode = (id: string) => {
    setCodes(codes.filter(code => code.id !== id));
  };

  return {
    codes,
    createCode,
    updateCode,
    deleteCode,
  };
};