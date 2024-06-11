import { LightningElement ,track} from 'lwc';
export default class TodoSecondList extends LightningElement {

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