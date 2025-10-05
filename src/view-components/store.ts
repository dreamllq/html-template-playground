// useCounterStore.ts
import { Div } from '@/models/components/div';
import { Span } from '@/models/components/span';
import { For } from '@/models/logics/for';
import { If } from '@/models/logics/if';
import { Playground } from '@/models/playground';
import { createInjectionState } from '@vueuse/core';
import { computed, ref, shallowRef } from 'vue';
import ForRender from './logic/for-render.vue';
import IfRender from './logic/if-render.vue';
import DivRender from './component/div-render.vue';
import SpanRender from './component/span-render.vue';
import { QrCode } from '@/models/components/qr-code';
import QrCodeRender from './component/qr-code-render.vue';
import { Table } from '@/models/components/table';
import TableRender from './component/table-render.vue';
import { Thead } from '@/models/components/thead';
import TheadRender from './component/thead-render.vue';
import { Tr } from '@/models/components/tr';
import TrRender from './component/tr-render.vue';
import { Th } from '@/models/components/th';
import ThRender from './component/th-render.vue';
import { Tbody } from '@/models/components/tbody';
import TbodyRender from './component/tbody-render.vue';
import { Td } from '@/models/components/td';
import TdRender from './component/td-render.vue';

const [useProvideViewStore, useViewStore] = createInjectionState((options:{data:any, config:any[]}) => {
  const data = ref(options.data);
  // const data = ref();
  const config = ref(options.config);

  const playground = new Playground();
  
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

  
  playground.init(config.value);
  return {
    data,
    config,
    playground
  };
});

export { useProvideViewStore };

// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useViewStore };

