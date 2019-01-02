import { Component, OnInit, NgModuleRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from './User';
import { AddProfileComponent } from './addprofile.component';

import '../assets/scss/styles.scss'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    //users list
    users: User[] = [{ userId: 1, userName: "Mike", userDesignation: "software developer", userMobile: 6482157868, userFbLink: "facebook.com/mike", userTwitLink: "twitter.com/mike", userLinkedLink: "linkedin.com/mike" },
    { userId: 2, userName: "John", userDesignation: "manager", userMobile: 8987765768, userFbLink: "facebook.com/john", userTwitLink: "twitter.com/john", userLinkedLink: "linkedin.com/john" },
    { userId: 3, userName: "sita", userDesignation: "manager", userMobile: 8987678968, userFbLink: "facebook.com/sita", userTwitLink: "twitter.com/sita", userLinkedLink: "linkedin.com/sita" },
    { userId: 4, userName: "ria", userDesignation: "analyst", userMobile: 9763678968, userFbLink: "facebook.com/ria", userTwitLink: "twitter.com/ria", userLinkedLink: "linkedin.com/ria" }
    ];

    //injecting Modal service
    constructor(private modalService: NgbModal) {
    }

    //function to open modal when user clicks button 
    //receive data when user submits the form inside modal
    open() {
        const modalData = this.modalService.open(AddProfileComponent);
        modalData.result.then((result) => {
            let data = { ...result };
            data["userId"] = this.users.length;
            this.users.push(data);
        });
    }

    //initialize the modal with user data which User wants to edit
    //recieve the revised data
    editProfile(value: number) {
        const modalRef = this.modalService.open(AddProfileComponent);
        modalRef.componentInstance.user = this.users[value];
        modalRef.result.then((result) => {
            this.users[value].userName = result["userName"];
            this.users[value].userDesignation = result["userDesignation"];
            this.users[value].userMobile = result["userMobile"];
            this.users[value].userFbLink = result["userFbLink"];
            this.users[value].userTwitLink = result["userTwitLink"];
            this.users[value].userLinkedLink = result["userLinkedLink"];

        })
    }
}