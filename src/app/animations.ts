import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

  export const detailAnimation = 
  trigger('pageAnimations', [
    transition(':enter', [
      query(':self, .container, .title > *, .images > *, .description > *', [
        style({ opacity: 0 }),
        stagger(110, [
          animate('350ms ease-out', style({ opacity: 1 }))
        ]) 
      ])
    ])
  ]);
  
  export const galleryAnimation = 
  trigger('pageAnimations', [
    transition(':enter', [
      query(':self, .row > *', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('350ms ease-in-out', style({ opacity: 1 }))
        ])
      ])
    ])
  ]);

  export const coverAnimation = 
  trigger('pageAnimations', [
    transition(':enter', [
      query('.logo > *, .name > *', [
        style({ opacity: 0 }),
        stagger(300, [
          animate('400ms 700ms ease-in-out', style({ opacity: 1 }))
        ])
      ]),
    ])
  ]);
