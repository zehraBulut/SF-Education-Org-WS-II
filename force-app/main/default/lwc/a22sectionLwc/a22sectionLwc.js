import { LightningElement } from 'lwc';

export default class A22sectionLwc extends LightningElement {

    isListReady=false
    handleClick(){
        this.isListReady=true
        }
    
    isListReady=false
    
    handleCancel(){
        this.isListReady=false
     
    }
    
    handleFinalSave() {
        this.handleCancel()
    }
    
}