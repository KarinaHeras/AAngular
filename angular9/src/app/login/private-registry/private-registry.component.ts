import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistryService } from 'src/app/service/registry.service';

@Component({
  selector: 'app-private-registry',
  templateUrl: './private-registry.component.html',
  styleUrls: ['./private-registry.component.css']
})
export class PrivateRegistryComponent implements OnInit {
  privateRegy = [];
  constructor(private registryService: RegistryService, private router: Router) { }
// este metodo
  ngOnInit(): void {
    this.registryService.getRegistry()
    .subscribe(
      res => this.privateRegy = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
}
}
