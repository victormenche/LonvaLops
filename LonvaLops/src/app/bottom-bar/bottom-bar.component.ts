import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/iconmonstr-facebook-6.svg`,
      ),
    );
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/iconmonstr-instagram-14.svg`,
      ),
    );
  }

  ngOnInit() {}
}
