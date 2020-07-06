import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {
  @Input()id: number;
  myForm: FormGroup;
  closeResult = '';


  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal,private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      name: '',
      // email: '',
      // password: '',
      // role: ''
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
