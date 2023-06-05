import { database } from "@/appwrite"

export const getTodosGroupedByColumn = async () => {
    const data = await database.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID!, process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!);
    
    const todos = data.documents

    const columns = todos.reduce((acc, todo) => {
        
        if(!acc.get(todo.status)){
            acc.set(todo.status,{
                id: todo.status,
                todos: []
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createAt: todo.$createAt,
            title: todo.title,
            status: todo.status,
            ...(todo.image && { image: JSON.parse(todo.image) })
        });

        return acc;

    }, new Map<TypedColumn, Column>)

    console.log(todos);
}