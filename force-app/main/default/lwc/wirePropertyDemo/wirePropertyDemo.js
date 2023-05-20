import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountService.getAccounts';

export default class WirePropertyDemo extends LightningElement {

  @track accounts;
  @track err;

  changHandler(event){
    const searchKey = event.target.value;

    getAccounts({accountName: searchKey})
     .then(result => {
        this.accounts = result;
        this.err = undefined;

     }).catch(error=>{
        this. accounts = undefined;
        this. err = error;

     })

  }


}