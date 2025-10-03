import { Cell } from '@/models/cell';
import { Playground } from '@/models/playground';
import { Ref, ref } from 'vue';

export const useCellHover = (options:{playground:Playground}) => {
  const { playground } = options;
  const hover = ref({
    width: '0',
    height: '0',
    top: '0',
    left: '0',
    display: 'none'
  });

  const cellTag = ref({
    top: '0',
    left: '0'
  });

  const cell = ref<Cell | undefined>();
  const cellTagPosition = ref('top');

  const mouseover = (e:any, options:{containerRef:Ref}) => {
    const { containerRef } = options;
    const data = e.target!.dataset as DOMStringMap;
    if (!data.cell) {
      hover.value.display = 'none';
      return;
    };
    const rect = e.target!.getBoundingClientRect() as DOMRect;
    const containerRect = containerRef.value.getBoundingClientRect() as DOMRect;
    
    cell.value = playground.drawingBoard.document.getByCId(data.cid!);

    hover.value.width = `${rect.width}px`;
    hover.value.height = `${rect.height}px`;
    hover.value.top = `${rect.top - containerRect.top}px`;
    hover.value.left = `${rect.left - containerRect.left}px`;
    hover.value.display = 'block';

    cellTag.value.left = `${rect.left - containerRect.left}px`;
    if (rect.top - containerRect.top > 20) {
      cellTag.value.top = `${rect.top - containerRect.top - 18}px`;
    } else {
      cellTag.value.top = `${rect.top - containerRect.top + rect.height}px`;
    }
  };

  const mouseenter = () => {
    
  };

  const mouseleave = () => {
    hover.value.display = 'none';
  };

  return {
    hover,
    cell,
    cellTagPosition,
    cellTag,
    mouseover,
    mouseenter,
    mouseleave
  };
};