import { LightningElement, wire, track} from 'lwc';
import getAccountInTable from '@salesforce/apex/AccountService.getAccountInTable';

//Commited to GitHub
//Pull Request
const columns=[
    
        {label:  'Name',    fieldName: 'Name'  , editable: 'true'},
        {label:  'Website',   fieldName: 'Website'  , editable: 'true'},
        {label:  'Industry',  fieldName: 'Industry'  , editable: 'true'},
        {label:  'Phone',   fieldName: 'Phone'  , editable: 'true'},

];


export default class LightningDataTable extends LightningElement {

 @track accounts;
 columns = columns;
 error;

 @wire (getAccountInTable)
 cons(result){
     this.accounts = result;
     if(result.error){
        this.accounts = undefined; 

     } 
 };


}