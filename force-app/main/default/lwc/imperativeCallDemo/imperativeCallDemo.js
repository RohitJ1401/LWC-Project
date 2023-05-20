import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountService.getAccountList';

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
        this.err = undefined;

      }).catch(error=>{
        this.accounts = undefined;
        this.err = error;

      })



}


}