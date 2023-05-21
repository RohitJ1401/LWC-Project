import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationDemo extends NavigationMixin(LightningElement) {


    navigateToGoogle(event){
        this[NavigationMixin.Navigate]({
            type : 'Standard__webPage',
            attributes : {
                url : 'https://sfdcfacts.com'
            }
        });

    }
}