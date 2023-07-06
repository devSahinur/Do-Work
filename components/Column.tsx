import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { type } from "os"
import { Draggable } from "react-beautiful-dnd"
import TodoCard from "./TodoCard"

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

const idToColumnText: {
    [key in TypedColumn]: string
} = {
    'todo': 'To Do',
    'inprogress': 'In Progress',
    'done': 'Done'
}

function Column({ id, todos, index }: Props) {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                >
                    {/* Render droppable todos in the column */}
                    <Draggable draggableId={index.toString()} type="card">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={`p-2 rounded-2xl shadow-sm ${snapshot.draggingOver ? 'bg-green-300' : 'bg-white/50'}`}
                            >
                                <h2 className="flex justify-between font-bold text-xl p-2">{idToColumnText[id]}
                                    <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm">{todos.length}</span>
                                </h2>

                                <div className="space-y-2">
                                    {todos.map((todo, index) => (
                                        <Draggable draggableId={todo.$id} index={index} key={todo.$id}>
                                            {(provided) => (
                                                <TodoCard
                                                    todo={todo}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}

                                    <div className="flex items-end justify-end">
                                        <button className="text-green-500 hover:text-green-600">
                                            <PlusCircleIcon
                                                className="h-10 w-10"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Draggable>
                </div>
            )}
        </Draggable>
    )
}

export default Column