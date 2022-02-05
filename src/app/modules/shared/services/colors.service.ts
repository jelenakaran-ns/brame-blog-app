import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorsService {
  public defaultColors: any = {
    'primary': '#FFE8D6',
    'primary-darker': '#DDBEA9',
    'primary-darkest': '#A06240',
    'secondary': '#B7B7A4',
    'secondary-darker': '#A5A58D',
    'secondary-darkest': '#6B705C',
    'purple-dark': '#5F4D6A',
    'purple': '#B56576',
    'danger': '#E56B6F',
    'gray-11': '#71767A',
    'dark-1': '#36363A',
    'disabled-text': '#666666',
    'disabled-bg': '#dddddd',
  };
  setDefault(colors: any = this.defaultColors): void {
    Object.keys(colors).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, colors[k]),
    );
  }
}
