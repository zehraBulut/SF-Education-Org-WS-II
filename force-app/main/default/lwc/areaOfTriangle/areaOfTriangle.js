import { LightningElement } from 'lwc';
export default class AreaOfTriangle extends LightningElement {

height;
base;
result;


heightHandler(event){
    this.height=event.target.value
}

BaseHandler(x){
    this.base=x.target.value
}

resultHandler(){
const  h= parseInt(this.height);
const b= parseInt(this.base);

this.result=h*b/2;
}

}