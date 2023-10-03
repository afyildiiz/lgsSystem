import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationModalComponent } from 'src/app/views/components/confirmation-modal/confirmation-modal/confirmation-modal.component';
import { TextModalComponent } from 'src/app/views/components/text-modal/text-modal/text-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private nbdialogService: NbDialogService) { }

  openModal(component: ComponentType<any>, hasBackdrop: boolean, hasScroll: boolean, customclassName?: string, data?: any) {
    const dialogRef = this.nbdialogService.open(component, {
      hasBackdrop: hasBackdrop,
      hasScroll: hasScroll,
      dialogClass: customclassName,
      context: { data: data }
    });
    return dialogRef
  }

  openConfirmationModal(lesson_id: string, ogrenci_numarasi: string) {
    const dialogRef = this.nbdialogService.open(ConfirmationModalComponent, {
      hasBackdrop: true,
      hasScroll: true,
      context: {
        lesson_id: lesson_id,
        student_id: ogrenci_numarasi
      },
    })
    return dialogRef;
  }

  openTextModal(data: any, customclassName?: string,) {
    const dialogRef = this.nbdialogService.open(TextModalComponent, {
      hasBackdrop: true,
      hasScroll: true,
      dialogClass: customclassName,
      context: {
        formValues: data,
      }
    })
    return dialogRef;
  }

}