import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl} from '@angular/forms'; 

@Component({
    selector:'add-profile',
    templateUrl:'./addprofile.component.html',
    
})
export class AddProfileComponent{
    
    constructor(public activeModal: NgbActiveModal){

    }
    close() {
        this.activeModal.close('Modal Closed');
      }

    addUserForm:FormGroup=new FormGroup({
        userName:new FormControl(''),
        userDesignation:new FormControl(''),
        userMobile:new FormControl(''),
        userFbLink:new FormControl(''),
        userTwitLink:new FormControl(''),
        userLinkedLink:new FormControl('')
    })
    

    submitForm(){
        this.activeModal.close(this.addUserForm.value);
    }

    
}