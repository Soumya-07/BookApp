import { ThisReceiver } from '@angular/compiler';
import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { Booklist } from 'src/models/Booklist';
import { readlist } from 'src/models/readlist';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
showbook=false;
removebook=false;
readbook=false;
booktable=false
readtable=false
tbvshow=true
up=true
popup=false

totalbook=0
totalreadbook=0
totalvalue=0
lefttoread=0
tempval=0
currentprice=0
updatedprice:any

uc!:number
temp:any
temp1:any
rating=0
tag=true
totalbooks=0
bookid!:number
tableform:Booklist[]=[]
readform:readlist[]=[]
rlistform!:FormGroup


  constructor(private fb:FormBuilder,private userv:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    
    this.temp=sessionStorage.getItem("code")
    this.uc=parseInt(this.temp)

    this.rlistform=this.fb.group({
      rbname:['',Validators.required],
      bauthor:['',Validators.required],
      bpublisher:['',Validators.required]
      
    })

  }

  showbooks()
  {
    this.userv.showbook(this.uc).subscribe(data=>{
      this.tableform=data
      this.totalbooks=this.tableform.length
    })
    this.removebook=false
    this.tag=true
    this.showbook=true

    this.readbook=false
    this.booktable=true
    this.readtable=false
    this.tbvshow=false
    this.up=false

  }

 removeabook()
 {
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data
    this.totalbooks=this.tableform.length
  })
 this.removebook=true
this.tag=false
this.showbook=true
this.readbook=false
this.up=false

this.booktable=true
this.readtable=false
this.tbvshow=false
 }
remove(i:Booklist)
{
this.userv.delbook(i.bid).subscribe(data=>
  {
    alert(i.bname+" by "+i.author+" is deleted from your library");
    window.location.reload()
  })
}
close()
{
  this.showbook=false;
this.removebook=false;
this.readbook=false

this.booktable=false
this.readtable=false
this.tbvshow=false
this.up=false
}
sortbypub()
{
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data.sort((a, b) => a.publisher.localeCompare(b.publisher))
    this.showbook=true
    this.tag=false
  
    this.removebook=false
    this.readbook=false
    this.booktable=true
    this.readtable=false
    this.tbvshow=false
    this.up=false
  })
  
}
sortbyauth()
{
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data.sort((a, b) => a.author.localeCompare(b.author))
    this.showbook=true
    this.tag=false
  
    this.removebook=false
    this.readbook=false
    this.booktable=true
    this.readtable=false
    this.tbvshow=false
    this.up=false
  })
  
}
sortbygen()
{
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data.sort((a, b) => a.genre.localeCompare(b.genre))
    this.showbook=true
    this.tag=false
  
    this.removebook=false
    this.readbook=false
    this.booktable=true
    this.readtable=false
    this.tbvshow=false
    this.up=false
  })
  
}
sortbylan()
{
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data.sort((a, b) => a.language.localeCompare(b.language))
    this.showbook=true
    this.tag=false
  
    this.removebook=false
    this.readbook=false
    this.booktable=true
    this.readtable=false
    this.tbvshow=false
    this.up=false

  })
  
}
readlist()
{
  this.userv.showbook(this.uc).subscribe(data=>{
  this.tableform=data
 
})
this.showbook=true
this.removebook=false
this.readbook=true
this.tag=false
this.booktable=true
this.readtable=false
this.tbvshow=false
this.up=false
 
}
read(i:Booklist)
{
if(window.confirm("Are you sure to add "+i.bname+" to your readlist with a rating of "+this.rating))
{
this.rlistform.value.bauthor=i.author
this.rlistform.value.rbname=i.bname
this.rlistform.value.bpublisher=i.publisher
this.rlistform.value.rating=this.rating

this.userv.addreadbook(this.uc,this.rlistform.value).subscribe(data=>{
  if(data!=null)
    {
      alert("book succesfully added")
      this.router.navigate(['/userdash'])
    }
    else{
      alert("You have read this book previously")
      location.reload();
    }
}
  

  )


}
else{
  window.location.reload()
}


console.log(this.rlistform.value.bauthor)

console.log(this.rlistform.value.rating)
}



readbooklist()
{
  this.userv.showreadbook(this.uc).subscribe(data=>{
    

    this.readform=data
    this.readtable=true
    this.booktable=false

    this.showbook=true
    this.tbvshow=false
    this.up=false

 
  })
}

tbv()
{
  

  this.userv.showreadbook(this.uc).subscribe(data=>{
    

    this.readform=data
    this.totalreadbook=this.readform.length
    this.up=false
    this.readtable=false
    this.booktable=false
    this.readbook=false
    this.tbvshow=true
    this.showbook=true
 
 
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data
    this.totalbook=this.tableform.length
    this.lefttoread=this.totalbook-this.totalreadbook
    console.log(this.lefttoread)

    if(this.tempval==0)
    {
      for(let i=0;i<this.totalbook;i++)
  {
  this.totalvalue+= this.tableform[i].price
  
  }
  this.tempval=1 
  }

  })
  })}



upprice(b:Booklist)
{
  this.popup=true
  this.updatedprice=prompt("Enter Updated Price")
  b.price=this.updatedprice
  
this.userv.upprice(this.uc,b).subscribe(data=>{
  alert(b.bname+"'s price is changed to "+b.price);
  window.location.reload()
})


}
Update()
{
  
  this.userv.showbook(this.uc).subscribe(data=>{
    this.tableform=data
  })

 this.removebook=false
this.tag=true
this.showbook=true
this.up=true
this.booktable=true
this.readtable=false
this.tbvshow=false
this.readbook=false
}


one()
{
  this.rating=1
}
two()
{
  this.rating=2
}
three()
{
  this.rating=3
}
four()
{
  this.rating=4
}
five()
{
  this.rating=5
}
six()
{
  this.rating=6
}
seven()
{
  this.rating=7
}
eight()
{
  this.rating=8
}
nine()
{
  this.rating=9
}
ten()
{
  this.rating=10
  
}
pop_up()
{
this.popup=true
this.booktable=false
this.readtable=false
this.tbvshow=false
}
}
