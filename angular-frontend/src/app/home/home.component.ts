
import { Component , NgZone} from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeComponent {
  current = 0;
  img_list = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbBYKqvrBCiUekmJF4ICnVqfWE3B1E1FF5w&usqp=CAU',
    'https://www.toledofoodbank.org/wp-content/uploads/2020/06/Food-Drive-Clip-art.jpeg',
    'https://thumbs.dreamstime.com/b/sharing-food-to-people-foos-donation-concept-man-hand-holding-box-full-flat-design-vector-illustration-white-backg-196293154.jpg',
    'https://png.pngtree.com/png-clipart/20221012/original/pngtree-donate-food-to-people-isolated-cartoon-vector-illustrations-png-image_8678223.png',
  
  ];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }
  login() {
        this.router.navigate(['/phone']);
  }
  about() {
    this.router.navigate(['/home']);
}
home() {
  this.router.navigate(['/home']);
}
}
