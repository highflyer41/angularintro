import { Injectable } from '@angular/core';
import { Person } from '../app/person'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterInput: string = "";
  private personArray: Person[] = [
    new Person("Joe", "Exotic"),
    new Person("Carol", "Baskin"),
    new Person("Meng", "Yang")
  ]

  constructor(private http: HttpClient) { }

  getPerson(): Person[] {
    return this.personArray.filter((person) => {
      return person.getFullName().toLowerCase().includes(this.filterInput.toLowerCase());
    });
  }

  setFilter(input: string): void {
    this.filterInput = input;
  }

  getTasks(): Observable<any> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
