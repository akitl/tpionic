import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  notifs: string[] = [];
  
   add(notif: string) {
     this.notifs.push(notif);
   }
  
   clear() {
     this.notifs = [];
   }

}
