import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOverlay]',
  standalone: true,
})
export class OverlayDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showOverlay();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideOverlay();
  }

  private showOverlay() {
    const overlay = this.el.nativeElement.querySelector('.overlay-content');
    if (overlay) {
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
      overlay.style.fontSize = '16px'; // Example: setting font-size safely
    } else {
      console.error('Overlay content element not found.');
    }
  }

  private hideOverlay() {
    const overlay = this.el.nativeElement.querySelector('.overlay-content');
    if (overlay) {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
    } else {
      console.error('Overlay content element not found.');
    }
  }
}
