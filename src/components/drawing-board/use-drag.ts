import { Cell } from '@/models/cell';
import { useStore } from '../store';
import { ref } from 'vue';

export const useDrag = ({
  playground,
  drawingBoardId,
  dragBlock, refresh, dragType, dragCell
}) => {
  const placeholder = ref({
    left: '0',
    top: '0',
    width: '0',
    display: 'none'
  });

  const parentPlaceholder = ref({
    left: '0',
    top: '0',
    width: '0',
    height: '0',
    display: 'none'
  });

  const findAvailableTarget = (target : HTMLElement) => {
    const { cell } = target.dataset;
    if (cell) {
      return target;
    } else {
      const parent = target.parentElement;
      if (parent) {
        return findAvailableTarget(target.parentElement as HTMLElement);
      } else {
        return undefined;
      }
    }
  };

  const calculateDragCellInfo = (e:DragEvent) => {
    const availableTarget = findAvailableTarget(e.target as HTMLElement);
    let cid:string | undefined = undefined;
    let container:string | undefined = undefined;
    if (availableTarget) {
      const data = (e.target! as HTMLElement).dataset;
      cid = data.cid;
      container = data.container;
    }

    // const data = (e.target! as HTMLElement).dataset as DOMStringMap;
    // const { cid, container } = data;
    /**
     * 容器边界值，如果在距离上下左右边界值10px以内的话，则拖拽元素放在当前target对应的上下左右位置，否则放在容器里面
     */

    let targetCell: Cell | undefined = undefined;
    let referenceCell: Cell | undefined = undefined;
    let position = 'none';

    if (!container) {
      const cell = playground.drawingBoard.document.getByCId(cid!)!;
      const rect = (e.target! as Element).getBoundingClientRect() as DOMRect;

      if (e.offsetY > 0 && e.offsetY < 10) {
        position = 'up';
        targetCell = cell.parent;
        referenceCell = cell;
      } else if (e.offsetY < rect.height && e.offsetY > rect.height - 10) {
        position = 'down';
        targetCell = cell.parent;
        referenceCell = cell;
      } else {
        position = 'none';
        targetCell = cell;
        referenceCell = undefined;
      }
    }

    return {
      targetCell,
      referenceCell,
      position 
    };
  };

  const onDragenter = (e:DragEvent) => {
    console.log('onDragenter', e);
  
  };

  const onDragleave = (e:DragEvent) => {
    console.log('onDragleave', e);
  
  };

  const calculatePlaceholder = ({ targetCell, referenceCell, position }) => {
    const containerRef = document.querySelector(`#${drawingBoardId.value}`)!;
    const containerRect = containerRef.getBoundingClientRect() as DOMRect;

    if (referenceCell) {
      if (position === 'up') {
        const target = document.querySelector(`[data-cid="${referenceCell.cId}"]`);
        const rect = target!.getBoundingClientRect() as DOMRect;
        placeholder.value.left = `${rect.left - containerRect.left}px`;
        placeholder.value.top = `${rect.top - containerRect.top}px`;
        placeholder.value.width = `${rect.width}px`;
      } else if (position === 'down') {
        const target = document.querySelector(`[data-cid="${referenceCell.cId}"]`);
        const rect = target!.getBoundingClientRect() as DOMRect;
        placeholder.value.left = `${rect.left - containerRect.left}px`;
        placeholder.value.top = `${rect.top - containerRect.top + rect.height}px`;
        placeholder.value.width = `${rect.width}px`;
      }
    } else if (targetCell) {
      const target = document.querySelector(`[data-cid="${targetCell.cId}"]`);
      const rect = target!.getBoundingClientRect() as DOMRect;
      placeholder.value.left = `${rect.left - containerRect.left + 5}px`;
      placeholder.value.top = `${rect.top - containerRect.top + 5}px`;
      placeholder.value.width = `${rect.width - 10}px`;
    } else {
      const target = containerRef;
      const rect = target!.getBoundingClientRect() as DOMRect;
      placeholder.value.left = `${rect.left - containerRect.left}px`;
      placeholder.value.top = `${rect.top - containerRect.top}px`;
      placeholder.value.width = `${rect.width}px`;
      placeholder.value.display = 'block';
    };
    placeholder.value.display = 'block';
  };

  const calculateParentPlaceholder = ({ targetCell }) => {
    if (targetCell) {
      const containerRef = document.querySelector(`#${drawingBoardId.value}`)!;
      const containerRect = containerRef.getBoundingClientRect() as DOMRect;
      const target = document.querySelector(`[data-cid="${targetCell.cId}"]`);
      const rect = target!.getBoundingClientRect() as DOMRect;
      parentPlaceholder.value.width = `${rect.width}px`;
      parentPlaceholder.value.height = `${rect.height}px`;
      parentPlaceholder.value.top = `${rect.top - containerRect.top}px`;
      parentPlaceholder.value.left = `${rect.left - containerRect.left}px`;
      parentPlaceholder.value.display = 'block';
    } else {
      parentPlaceholder.value.display = 'none';
    }
  };

  const onDragover = (e:DragEvent) => {
    const { targetCell, referenceCell, position } = calculateDragCellInfo(e);
    calculatePlaceholder({
      targetCell,
      referenceCell,
      position 
    });
    calculateParentPlaceholder({ targetCell });
  };

  const onDrop = (e:DragEvent) => {
    console.log('onDrop', e);
    const { targetCell, referenceCell, position } = calculateDragCellInfo(e);
    console.log(targetCell, referenceCell, position);
    placeholder.value.display = 'none';
    parentPlaceholder.value.display = 'none';
    
    if (dragType.value === 'new') {
      const blockClass = dragBlock.value!.$class;
      const cell = new blockClass();
      console.log(cell);
      insertCell(cell, {
        targetCell,
        referenceCell,
        position 
      });
      refresh();
      dragType.value = '';
      dragBlock.value = undefined;
    } else if (dragType.value === 'move') {
      console.log(dragCell.value!.cId);
      
      playground.drawingBoard.document.removeById(dragCell.value!.cId);
      insertCell(dragCell.value!, {
        targetCell,
        referenceCell,
        position 
      });
      refresh();
      dragType.value = '';
      dragCell.value = undefined;
    }
    
  };

  const insertCell = (cell, options:{targetCell?:Cell, referenceCell?:Cell, position: string}) => {
    const { targetCell, referenceCell, position } = options;
    if (targetCell) {
      if (referenceCell) {
        if (position === 'up') {
          targetCell.insertBefore(cell, referenceCell);
        } else if (position === 'down') {
          targetCell.insertAfter(cell, referenceCell);
        }
      } else {
        targetCell.appendChild(cell);
      }

    } else {
      if (referenceCell) {
        if (position === 'up') {
          playground.drawingBoard.document.insertBefore(cell, referenceCell);
        } else if (position === 'down') {
          playground.drawingBoard.document.insertAfter(cell, referenceCell);
        }
      } else {
        playground.drawingBoard.document.appendChild(cell);
      }
    }
  };

  return {
    placeholder,
    parentPlaceholder,
    onDragenter,
    onDragleave,
    onDragover,
    onDrop
  };
};