import { Component, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { Nft } from '../../models/nft';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  imports: [
    NftHeaderComponent,
    NftDualCardComponent,
    NftSingleCardComponent,
    NftChartCardComponent,
    NftAuctionsTableComponent,
  ],
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
        id: 1703,
        title: 'Le metier du developpeur',
        creator: 'Isaac',
        instant_price: "4.2",
        ending_in: '06h 52m 47s',
        last_bid: "585",
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Kotlin pour les débutants',
        last_bid: "746",
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Arduino, les bases',
        last_bid: "187",
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
