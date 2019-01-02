import {Component,OnInit} from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {User} from './User';
import{AddProfileComponent} from './addprofile.component';

import '../assets/scss/styles.scss'

@Component({
    selector:'app-root',
    
    templateUrl:'./app.component.html'
})
export class AppComponent{
    title:string="Angular Start";
    users:User[]=[{userName:"Mike",userDesignation:"software developer",userMobile:6482157868,userFbLink:"facebook.com/mike",userTwitLink:"twitter.com/mike",userLinkedLink:"linkedin.com/mike"},
{userName:"John",userDesignation:"manager",userMobile:8987765768,userFbLink:"facebook.com/john",userTwitLink:"twitter.com/john",userLinkedLink:"linkedin.com/john"},
{userName:"sita",userDesignation:"manager",userMobile:8987678968,userFbLink:"facebook.com/sita",userTwitLink:"twitter.com/sita",userLinkedLink:"linkedin.com/sita"},
{userName:"ria",userDesignation:"analyst",userMobile:9763678968,userFbLink:"facebook.com/ria",userTwitLink:"twitter.com/ria",userLinkedLink:"linkedin.com/ria"}
];

    constructor(private modalService:NgbModal){
    }

    open(){
        const modalData=this.modalService.open(AddProfileComponent);
        modalData.result.then((result)=>{
            this.users.push(result);
        });
    }
}