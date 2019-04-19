import { trigger, style, transition, animate, query, group, animateChild, stagger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('GalleryPage <=> DetailPage', [
    //styling added so both views dont appear at the same time
    //host position relative, child position absolute
      style({ position: 'relative',
    height: '*' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      //query - Finds one or more inner elements within the current element that is being animated within a sequence. Use with animate().
      //query(":enter") statement returns the view that is being inserted
      //matches the view that is added and hides the newly added view by positioning it to the far left.
      query(':enter', [
        style({ left: '-100%'})
      ]),
      //query(":leave") returns the view that is being removed
      //calls animateChild() on the view that is leaving, to run its child animations.
      query(':leave', animateChild()),
      //group() function makes the inner animations run in parallel.
      group([
        //queries the view that is removed and animates it to slide far to the right.
        query(':leave', [
          animate('150ms ease-out', style({ left: '100%'}))
        ]),

        //Slides in the new view by animating the view with an easing function and duration.
        //This animation results in the detail view sliding from the left to right.
        query(':enter', [
          animate('150ms ease-out', style({ left: '0%'}))
        ])
      ]),
      //calls the animateChild() method on the new view to run its child animations after the main animation completes.
      query(':enter', animateChild()),
    ])
  ]);

  export const detailAnimation = 
  trigger('pageAnimations', [
    transition(':enter', [
      query(':self, .title > *, .images > *, .description > *', [
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
      query(':self, .logo > *, .name > *', [
        style({ opacity: 0 }),
        stagger(300, [
          animate('400ms ease-in-out', style({ opacity: 1 }))
        ])
      ])
    ])
  ]);
