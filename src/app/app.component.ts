import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Coinexpress';
  text = 'Lorem Ipsum description';
  coins = [
    'bitcoin',
    'ethereum',
    'litecoin'
  ];
  images = [
    '../../assets/images/coins/bitcoin.jpg',
    '../../assets/images/coins/ethereum.jpg',
    '../../assets/images/coins/litecoin.jpg'
  ]

}
