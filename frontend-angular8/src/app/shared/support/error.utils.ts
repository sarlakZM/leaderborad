import { HttpErrorResponse } from '@angular/common/http';


export class ErrorUtils {
  public static getMessage(error: any): string {
    if (error instanceof HttpErrorResponse) {
      if(error.message.includes('Http failure response')  || error.error.message.includes('Http failure response') ){
        return error.error.message + Error_Handler.InternalServerError
      }
      return error.error.message || error.message;
    } else {
      return error.message || 'Unknown error';
    }
  }
}

const Error_Handler = {
  InternalServerError :'Internal Server Error!'

}
