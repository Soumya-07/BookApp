import { User } from "./User"

export class Booklist{
    bid:number=0
    bname:string=''
    author:string=''
    publisher:string=''
    genre:string=''
    price:number=0
    language:string=''
    user:User=new User()
}