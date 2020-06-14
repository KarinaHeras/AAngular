import { FormControl } from '@angular/forms';

export class TokenValidator {

    static startWithNumber(control: FormControl) {
        const firstChar = control.value.charAt(0);
        if (firstChar && !isNaN(firstChar)) {
            return {startWithNumber: true};
        } else {
            return null;
        }
    }

    static tokenUsuario(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'bbdd') {
                    resolve({userTaken: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

}
