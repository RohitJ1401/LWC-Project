import { LightningElement, api} from 'lwc';

export default class ChildComponent extends LightningElement {

    barChartValue=80;

    @api resetHandler(event){
       this.barChartValue = 20;
    }
   

}