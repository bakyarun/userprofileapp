import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl} from '@angular/forms'; 

@Component({
    selector:'add-profile',
    templateUrl:'./addprofile.component.html',
    
})
export class AddProfileComponent{

    @Input() user:any;
    
    constructor(public activeModal: NgbActiveModal){

    }

    ngOnInit(){
        if(this.user!=null){
            this.addUserForm.setValue({userName:this.user["userName"],
            userDesignation:this.user["userDesignation"],
            userMobile:this.user["userMobile"],
            userFbLink:this.user["userFbLink"],
            userTwitLink:this.user["userTwitLink"],
            userLinkedLink:this.user["userLinkedLink"]
        })
        }
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