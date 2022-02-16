import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'orders',
    name: 'Orders',
    type: 'link',
    icon: 'explore',
    badge: [
      {type: 'red', value: '5'}
    ],
  },
  
  {
    state: 'payments',
    name:'Payments',
    type: 'link',
    icon: 'photo',
    badge: [
      {type: 'purple', value: '10'}
    ],
  },
  {
    state: 'wallets',
    name:'Wallets',
    type: 'link',
    icon: 'photo',
    badge: [
      {type: 'purple', value: '10'}
    ],
  },
 
 
  // {
  //   state: 'chats',
  //   name:'Chats',
  //   type: 'link',
  //   icon: 'chat'
  // },
  
  
  
  {
    state: 'callbackmessage',
    name:'Callback Messages',
    type: 'link',
    icon: 'messages'
  },
  
  {
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
