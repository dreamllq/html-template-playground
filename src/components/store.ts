// useCounterStore.ts
import { Playground } from '@/models/playground';
import { createInjectionState } from '@vueuse/core';
import { computed, nextTick, ref, shallowRef } from 'vue';
import { Div } from '@/models/components/div';
import { Span } from '@/models/components/span';
import DivRender from './drawing-board/component/div-render.vue';
import SpanRender from './drawing-board/component/span-render.vue';
import { ComponentBlockItem } from '@/types/component-blocks';
import { useCellHover } from './drawing-board/tools/use-hover';
import { useCellSelected } from './drawing-board/tools/use-selected';
import { Cell } from '@/models/cell';
import { For } from '@/models/logics/for';
import ForRender from './drawing-board/logic/for-render.vue';
import { If } from '@/models/logics/if';
import IfRender from './drawing-board/logic/if-render.vue';
import { useDrag } from './drawing-board/use-drag';
import { useStorage } from './storage';
import { QrCode } from '@/models/components/qr-code';
import QrCodeRender from './drawing-board/component/qr-code-render.vue';
import { Table } from '@/models/components/table';
import TableRender from './drawing-board/component/table-render.vue';
import { Thead } from '@/models/components/thead';
import TheadRender from './drawing-board/component/thead-render.vue';
import { Tr } from '@/models/components/tr';
import TrRender from './drawing-board/component/tr-render.vue';
import { Th } from '@/models/components/th';
import ThRender from './drawing-board/component/th-render.vue';
import { Tbody } from '@/models/components/tbody';
import TbodyRender from './drawing-board/component/tbody-render.vue';
import { Td } from '@/models/components/td';
import TdRender from './drawing-board/component/td-render.vue';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const [useProvideStore, useStore] = createInjectionState(() => {

  const boardSize = ref('a4');
  const toolBar = ref('edit');

  const playground = new Playground();
  const drawingBoardId = ref('htp-db-kdk');
  const dragType = ref('');
  const dragCell = ref<Cell>();
  const dragBlock = ref<ComponentBlockItem | undefined>(undefined);
  const refreshFlag = ref(false);

  const refresh = async () => {
    refreshFlag.value = true;
    await nextTick();
    storage.save();
    refreshFlag.value = false;
    await nextTick();
    cellSelected.refresh();
    console.log(playground);
  };

  const drag = useDrag({
    playground,
    drawingBoardId,
    dragBlock,
    refresh,
    dragType,
    dragCell
  });
  const cellHover = useCellHover({
    playground,
    drawingBoardId 
  });
  const cellSelected = useCellSelected({
    playground,
    drawingBoardId 
  });
  const storage = useStorage({ playground });


  playground.componentBlocks.list.push({
    $class: Div,
    name: 'div',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: DivRender
  });

  // playground.componentBlocks.list.push({
  //   $class: Span,
  //   name: 'span',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: SpanRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Table,
  //   name: 'table',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: TableRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Thead,
  //   name: 'thead',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: TheadRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Tbody,
  //   name: 'tbody',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: TbodyRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Tr,
  //   name: 'tr',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: TrRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Th,
  //   name: 'th',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: ThRender
  // });

  // playground.componentBlocks.list.push({
  //   $class: Td,
  //   name: 'td',
  //   svg: `<svg viewBox="0 0 23 24">
  //       <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
  //       </svg>`,
  //   render: TdRender
  // });

  playground.componentBlocks.list.push({
    $class: QrCode,
    name: 'qrCode',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: QrCodeRender
  });

  playground.logicBlocks.list.push({
    $class: For,
    name: 'for',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: ForRender
  });

  playground.logicBlocks.list.push({
    $class: If,
    name: 'if',
    svg: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    render: IfRender
  });

  console.log(storage.config.value);
  
  playground.init(storage.config.value);
  // console.log(data);
  

  // const div1 = new Div();
  // div1.style = {
  //   minHeight: '30px',
  //   padding: '10px'
  // };

  // const span2 = new Span();
  // span2.style = { fontSize: '22px' };

  // const div2 = new Div();
  // div2.style = {
  //   minHeight: '30px',
  //   padding: '10px',
  //   marginTop: '30px'
  // };
  // div1.children.push(span2);
  // span2.parent = div1;

  // const span1 = new Span();
  // span1.style = {
  //   fontSize: '30px',
  //   color: 'red'
  // };

  // playground.drawingBoard.document.list.push(div1, div2, span1);

  console.log(playground);

  return {
    playground,
    toolBar,
    boardSize,
    drawingBoardId,
    dragType,
    dragBlock,
    dragCell,
    refresh,
    refreshFlag,
    cellHover,
    cellSelected,
    drag,
    storage
  };
});

export { useProvideStore };

// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useStore };

