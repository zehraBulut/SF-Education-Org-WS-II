import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts'
const sayi=3
export default class A20lifeCycleParent extends LightningElement {


@track accountList
@track apexError

flag = true
sayi=1
isim= 'huseyin'


constructor(){
    super()
    alert('PARENT Constructor')
  /*  getAllAccounts()
    .then(result=> {
this.accountList= result,
this.apexError= undefined
    })
    .catch(error => {
this.accountList= undefined,
this.apexError= error
    })  */
}

handleEkle(){
    this.flag = true
}
handleCikart(){
    this.flag = false
}


connectedCallback(){
   // alert('PARENT connectedCallback()')
   this.isim=this.isim.toUpperCase()

   getAllAccounts()
   .then(result=> {
this.accountList= result,
this.apexError= undefined
   })
   .catch(error => {
this.accountList= undefined,
this.apexError= error
   })
}

handleIsim(event){
    this.isim= event.target.value
}

renderedCallback(){
   /* if (this.sayi<5){
        this.sayi= this.sayi+1
    } */
 //alert('PARENT renderedCallback()' + this.sayi)
}


errorCallback(error, stack){
alert( error.message)
console.log('Burasi Stack' + stack)
 }

disconnectedCallback(){
}


}