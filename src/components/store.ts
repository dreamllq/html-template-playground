// useCounterStore.ts
import { Playground } from '@/models/playground';
import { createInjectionState } from '@vueuse/core';
import { computed, nextTick, ref, shallowRef } from 'vue';
import { Div } from '@/models/components/div';
import { Span } from '@/models/components/span';
import DivRender from './drawing-board/div-render.vue';
import SpanRender from './drawing-board/span-render.vue';
import { ComponentBlockItem } from '@/types/component-blocks';
import { useCellHover } from './drawing-board/tools/use-hover';
import { useCellSelected } from './drawing-board/tools/use-selected';

const [useProvideStore, useStore] = createInjectionState(() => {

  const playground = new Playground();
  const drawingBoardId = ref('htp-db-kdk');
  const dragBlock = ref<ComponentBlockItem | undefined>(undefined);
  const refreshFlag = ref(false);
  const cellHover = useCellHover({ playground });
  const cellSelected = useCellSelected({
    playground,
    drawingBoardId 
  });


  playground.componentBlocks.list.push({
    $class: Div,
    name: 'div',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: DivRender
  });

  playground.componentBlocks.list.push({
    $class: Span,
    name: 'span',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: SpanRender
  });

  const div1 = new Div();
  div1.style = {
    minHeight: '30px',
    padding: '10px'
  };

  const span2 = new Span();
  span2.style = { fontSize: '22px' };

  const div2 = new Div();
  div2.style = {
    minHeight: '30px',
    padding: '10px',
    marginTop: '30px'
  };
  div1.children.push(span2);
  span2.parent = div1;

  const span1 = new Span();
  span1.style = {
    fontSize: '30px',
    color: 'red'
  };

  playground.drawingBoard.document.list.push(div1, div2, span1);

  console.log(playground);

  const refresh = async () => {
    refreshFlag.value = true;
    await nextTick();
    refreshFlag.value = false;
    await nextTick();
    cellSelected.refresh();
  };
  return {
    playground,
    drawingBoardId,
    dragBlock,
    refresh,
    refreshFlag,
    cellHover,
    cellSelected
  };
});

export { useProvideStore };

// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useStore };

