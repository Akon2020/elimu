import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NftAuctionsTableItemComponent } from '../nft-auctions-table-item/nft-auctions-table-item.component';

@Component({
  selector: '[nft-auctions-table]',
  templateUrl: './nft-auctions-table.component.html',
  imports: [NgFor, NftAuctionsTableItemComponent],
})
export class NftAuctionsTableComponent implements OnInit {
  public activeAuction: Nft[] = [];

  constructor() {
    this.activeAuction = [
      {
        id: 1346771,
        title: 'Apprendre Flutter',
        creator: 'Bendedict Lubembela',
        image:
          'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '1h 43m 52s',
        last_bid: "Publique",
        instant_price: "Flutter",
      },
      {
        id: 1346772,
        title: 'Les Fondamentaux du Web',
        creator: 'Marie Reine Bigabwa',
        image:
          'https://lh3.googleusercontent.com/k95IQpeYutx-lYXwgTZw0kXZl9GAkIOc4Yz3Dr06rndWphZ25kSWyF64aTqT3W4cOxz0eB5LfAss5i9WAR-ZPWVaifijsABLqzEYwHY=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '2h 00m 02s',
        last_bid: "Publique",
        instant_price: "Web",
      },
      {
        id: 1346780,
        title: 'Vivre Dangereusement',
        creator: 'Imani Bahati',
        image:
          'https://lh3.googleusercontent.com/iYNxP1eXG3C6ujTY4REQ9rBea19Z46oKtKkaDS1XA-ED5iFhFmPrvQPzwx8ZwACydCS2wbZ7K1P89XIED3s8JRcT6Pn0M1-sMifeyQ=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '1h 05m 00s',
        last_bid: "Privé",
        instant_price: "AI/ML",
      },
      {
        id: 1346792,
        title: 'Android, le native',
        creator: 'Christian Aganze',
        image:
          'https://lh3.googleusercontent.com/ujFwzDIXN64mJAHZwZ0OgNupowe5jlJPmV8OIrgSDjUAeb3SZRuhsuyPKAw6S2TkUknZvErVVKbzD-rEcs-augb6_LzUE5NVtPxj_w=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '1h 05m 00s',
        last_bid: "Privé",
        instant_price: "Kotlin",
      },
      {
        id: 1346792,
        title: 'Montage d\'une porte automatique',
        creator: 'Barnabé Kajabika',
        image:
          'https://lh3.googleusercontent.com/pwjA4CWS9nto8fCis6JzlWwzQgtHUvLlUWcd501LsGQoVUPL5euwhir-2fjPmsJLJ_ovJ7flH_OgDEaALeZrhSXv8Puq85-lZYWuqto=h500',
        avatar: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        ending_in: '1h 05m 00s',
        last_bid: "Publique",
        instant_price: "Arduino",
      },
    ];
  }

  ngOnInit(): void {}
}
