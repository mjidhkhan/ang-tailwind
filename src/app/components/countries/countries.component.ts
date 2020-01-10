import { Component, OnInit } from '@angular/core';


import {Country} from '../../classes/country'
import {CountryService} from '../../service/country.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  selectedCountry: Country;

  countries : Country[];

  constructor(private countryService: CountryService) {
    
  }
  
  

  ngOnInit() {
    this.getCountries();
  }

  onClick(country: Country): void {
    console.log(country)
    this.selectedCountry = country;
  }
  getCountries():void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries)
  }

}
