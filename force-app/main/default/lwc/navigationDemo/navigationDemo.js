import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationDemo extends NavigationMixin(LightningElement) {


    navigateToGoogle(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'https://www.google.com/'
            }
        });

    }

    navigateToAccountHome(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
                
            }
        });

    }

    navigateToCreateContact(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        });

    }

    navigateToOpportnunities(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName : 'Opportunity',
                actionName : 'list'
            }
        });

    }
}