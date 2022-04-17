import { SystemMessages } from '../support/system-messages';

export class HandleErrorService {
  constructor(private _formName: any = '') { }

  handleError(err: any) {
    const errMsg: any = { result: null };
    switch (err.status) {
      case 400:
        errMsg.result = err.error;
        if(this._formName){
          const validationErrorDictionary = err.error;
          for (let fieldName in validationErrorDictionary) {
            fieldName === '0' && (errMsg.result = validationErrorDictionary);
            validationErrorDictionary.hasOwnProperty(fieldName) &&
                ( this._formName.controls[fieldName].setErrors({ invalid: true }) );
          }
         
        }
      
        break;

      case 401:
        errMsg.result = SystemMessages.unauthorized;
        break;

      case 404:
        errMsg.result = SystemMessages.recordNotFound;
        break;
      case 0:
        errMsg.result = SystemMessages.errorInConnectMessage;
        break;
      case 500:
        errMsg.result = SystemMessages.InternalServerError;
        break;
      case 502:
        errMsg.result = SystemMessages.errorBadGatewayMessage;
        break;
      default:
        errMsg.result = SystemMessages.unKnown;
        break;
    }

    return errMsg;
  }
}
