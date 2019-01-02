import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,Validators} from '@angular/forms'; 

@Component({
    selector:'add-profile',
    templateUrl:'./addprofile.component.html',
    
})
export class AddProfileComponent implements OnInit{

    @Input() user:any;
    
    constructor(public activeModal: NgbActiveModal){

    }

    //Initialize the form when there is user data received from Parent Component(App Component)
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

    //close the modal when user clicks the close icon
    close() {
        this.activeModal.close('Modal Closed');
      }

    //form configuration
    addUserForm:FormGroup=new FormGroup({
        userName:new FormControl('',[Validators.required]),
        userDesignation:new FormControl('',[Validators.required]),
        userMobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
        userFbLink:new FormControl(''),
        userTwitLink:new FormControl(''),
        userLinkedLink:new FormControl('')
    })
    
    //send the form data through modal when user submits
    submitForm(){
        this.activeModal.close(this.addUserForm.value);
    }

    
}