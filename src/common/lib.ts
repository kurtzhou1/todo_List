export interface todos{
    id: number,
    toDoList:string
    done:boolean
}
export interface input{
    text: string
}
export interface IState {
   todos:todos[],
   input: input,
}