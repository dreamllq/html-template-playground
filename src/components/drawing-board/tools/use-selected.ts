import { Cell } from '@/models/cell';
import { Playground } from '@/models/playground';
import { Ref, ref, watch } from 'vue';

export const useCellSelected = (options:{playground:Playground, drawingBoardId: Ref<string>}) => {
  const { playground, drawingBoardId } = options;
  const selected = ref({
    width: '0',
    height: '0',
    top: '0',
    left: '0',
    display: 'none'
  });

  const selectedCell = ref<Cell | undefined>();
  const selectedTag = ref({
    top: '0',
    left: '0'
  });

  watch(selectedCell, () => {
    calculate();
  });

  const calculate = () => {
    if (!selectedCell.value) {
      selected.value.display = 'none';
      return;
    }
    const target = document.querySelector(`[data-cid="${selectedCell.value.cId}"]`);
    const rect = target!.getBoundingClientRect() as DOMRect;
    const container = document.querySelector(`#${drawingBoardId.value}`)!;
    const containerRect = container.getBoundingClientRect() as DOMRect;
    
    selected.value.width = `${rect.width}px`;
    selected.value.height = `${rect.height}px`;
    selected.value.top = `${rect.top - containerRect.top}px`;
    selected.value.left = `${rect.left - containerRect.left}px`;
    selected.value.display = 'block';

    selectedTag.value.left = `${rect.left - containerRect.left + rect.width - 100}px`;
    if (rect.top - containerRect.top > 20) {
      selectedTag.value.top = `${rect.top - containerRect.top - 18}px`;
    } else {
      selectedTag.value.top = `${rect.top - containerRect.top + rect.height}px`;
    }
  };

  const refresh = () => {
    calculate();
    
  };


  const select = (cell:Cell) => {
    selectedCell.value = cell;
  };

  return {
    selected,
    select,
    selectedCell,
    selectedTag,
    refresh
  };
};