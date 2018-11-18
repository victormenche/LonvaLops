import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      `rat`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/rat.svg`),
    );
    this.matIconRegistry.addSvgIcon(
      `minilop`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/bunny.svg`,
      ),
    );
  }

  ngOnInit() {}
}
