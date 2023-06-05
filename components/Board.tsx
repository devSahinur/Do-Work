'use client'
import { useBoardStore } from '@/store/BorderStore';
import { stat } from 'fs';
import { useEffect } from 'react';
import { DragDropContext,Droppable } from 'react-beautiful-dnd';

const Board = () => {
    const getBoard = useBoardStore((state) => state.getBoard)

    useEffect(() =>{
        getBoard();
    },[getBoard])


  return (
    <h1>hello</h1>
    // <DragDropContext>
    //     <Droppable droppableId="board">
    //         {(provided) => (
    //             <div
    //                 ref={provided.innerRef}
    //                 {...provided.droppableProps}    
    //             >
    //                 <h1>Board</h1>
    //                 {provided.placeholder}
    //             </div>
    //         )}
    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board