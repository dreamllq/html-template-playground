import { ref } from 'vue';

export const useBlockTabs = () => {
  
  const activeBlock = ref('style');

  const onBlockChange = (type) => {
    activeBlock.value = type;
  };

  return {
    activeBlock,
    onBlockChange
  };
};