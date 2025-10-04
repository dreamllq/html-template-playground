import { Playground } from '@/models/playground';
import { useStorage as useStorage1 } from '@vueuse/core';
export const useStorage = (options:{playground:Playground}) => {
  const { playground } = options;

  const config = useStorage1<any[]>('html-template', []);

  const save = () => {
    const data = playground.drawingBoard.document.toJson();
    config.value = data;
  };

  return {
    save,
    config 
  };
};