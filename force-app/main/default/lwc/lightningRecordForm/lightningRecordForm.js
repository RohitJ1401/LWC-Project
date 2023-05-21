import { LightningElement, track} from 'lwc';

export default class LightningRecordForm extends LightningElement {

    fieldArrays = ['Name', 'Website', 'Phone'];

    @track recotdId;

    handleSucess(event){
      this.recordId= event.target.id;
    }

}