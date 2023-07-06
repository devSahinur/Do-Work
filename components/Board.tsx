'use client'
import { useBoardStore } from '@/store/BorderStore';
import { stat } from 'fs';
import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

const Board = () => {
  const [getBoard, board, setBoardState] = useBoardStore((state) => [state.getBoard, state.board, state.setBoardState])

  useEffect(() => {
    getBoard();
  }, [getBoard])

  console.log(board)

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    // check if there is a destination
    if (!destination) return;
    if (type === 'column') {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction='horizontal' type='column'>
        {(provided) => (
          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} todos={column.todos} id={id} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board