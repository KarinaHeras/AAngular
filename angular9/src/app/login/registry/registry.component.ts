import { Component, OnInit } from '@angular/core';
import { RegistryService } from 'src/app/service/registry.service';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
 registrys = [];
  constructor( private registry: RegistryService) { }

  ngOnInit() {
//
    this.registry.getRegistry()
    .subscribe(
      res => {
        console.log(res);
        this.registrys = res.registry;
      }

    );
}
  }


