import { async, TestBed } from '@angular/core/testing';
import { NotificacionesBusService } from './notificaciones-bus.service';

describe('Notificaciones bus service', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [NotificacionesBusService]
        });
    }));

    it('should enviar y obtener una notificacion', () => {
        const msg = 'Prueba';
        const service: NotificacionesBusService = TestBed.get(NotificacionesBusService);
        service.getNotificacion().subscribe(
            noti => {
                console.log(noti.detail);
                expect(noti.detail).toEqual(msg);
            },
            error => {
                fail(error);
            }
        );
        service.showError(msg);
        service.showSuccess(msg);
        service.showWarn(msg);
        service.showInfo(msg);
    });
});
