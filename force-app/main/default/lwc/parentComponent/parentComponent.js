import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    onkeyUpHandler(event){
      
        this.template.querySelector('c-child-component').resetHandler();

    }


}