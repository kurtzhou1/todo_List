interface todos{
    no: number,
    toDoList:string
    done:boolean
}
interface input{
    text: string
}
export interface IState {
   todos:todos[],
   input: input,
}