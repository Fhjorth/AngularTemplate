import {AfterViewInit, Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  navElement: HTMLElement = null;

  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    this.navElement = null;
    this.isDrawerOpen = false;
  }


  ngAfterViewInit(): void {
    this.navElement = (document.getElementById('navbar') as HTMLElement);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    const scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;

    if (opacity <= 1) {
      this.navElement.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
    }

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add('navbar-shadow');
    } else {
      this.navElement.classList.remove('navbar-shadow');
    }
  }

  toggleNavDrawer(isDrawerOpen: boolean): void {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }
}
