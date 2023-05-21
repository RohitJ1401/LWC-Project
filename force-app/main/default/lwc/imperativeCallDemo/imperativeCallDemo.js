import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountService.getAccountList';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ImperativeCallDemo extends LightningElement {

 @track noOfAccounts;
 @track accounts;
 @track err;
 
 changeHandler(event){
   this.noOfAccounts = event.target.value;
 }

onclickHandler(event){

    getAccountList({totalAccounts: this.noOfAccounts})
      .then(result=>{
            this.accounts = result;
              const eventConst = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.noOfAccounts + ' Accounts are loaded from the server',
                variant : 'Success',
              })
              this.dispatchEvent(eventConst);


            }).catch(error=>{
              console.error('Error in getting the accounts', error.body.message);

              const constEvent = new ShowToastEvent({
                title : 'Accounts Failed to Load',
                message : 'Error Occured',
                varient : 'Error',
              })
              this.dispatchEvent(eventConst);

      })



}


}