import { LightningElement, wire, track } from 'lwc';
import getAllAccountWithContact from '@salesforce/apex/AccountContactWrapper2.getAllAccountWithContact';
export default class WrapperAccountContactDisplay extends LightningElement {
    @track accountsWithContacts;
    @track error;
    
    @wire(getAllAccountWithContact)
    wiredAccountsWithContacts({ error, data }) {
        if (data) {
            this.accountsWithContacts = data;
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
}