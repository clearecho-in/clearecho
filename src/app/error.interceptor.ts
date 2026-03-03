import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { DialogService } from './utility/dialog/dialog.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const dialog = inject(DialogService);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 0) {
        dialog.show('Server is not available. Please try again later.', 'error');
      } else {
        dialog.show('Something went wrong. Please try again.', 'error');
      }

      return throwError(() => error);
    }),
  );
};
