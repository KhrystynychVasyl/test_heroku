import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule, BsDropdownModule.forRoot(), ModalModule.forRoot()],
  exports: [BsDropdownModule]
})
export class AppBootstrapModule {}
