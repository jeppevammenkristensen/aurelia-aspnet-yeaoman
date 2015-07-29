export class App{
   created : Date;
   message : String;
   static inject = [];

   constructor(){
     this.created =  new Date();
     this.message = "Power to the hello world";
   }   
}
