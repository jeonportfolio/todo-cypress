import { Todo } from "../types";

export const getTodos = () => {
    return new Promise<Todo[]>((resolve) => {
         setTimeout(() => {
                return resolve([
                    {
                        id: 1,
                        text: 'title1',
                        done: true
                    },
                    {
                        id:2,
                        text: 'title2',
                        done: false
                    },
                ]);
         }, 1000)
    })
   
}