import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
 export const AppRoutes: Routes = [{
            path: '',
            component: AdminLayoutComponent,
            children: [{
              path: '',
              loadChildren: './dashboard/dashboard.module#DashboardModule'
            },{
              path: 'orders',
              loadChildren: './orders/orders.module#OrdersModule'
                     },
                     {
                      path: 'users',
                      loadChildren: './users/users.module#UsersModule'
                             },
                            
                                     {
                                      path: 'chats',
                                      loadChildren: './chats/chats.module#ChatsModule'
                                             },
                                             {
                                              path: 'offers',
                                              loadChildren: './offers/offers.module#OffersModule'
                                                     },
                                                    
                                                    
                                                            
                                                {
                                                path: 'coupens',
                                                loadChildren: './coupens/coupens.module#CoupensModule'
                                                        },
                                                        {
                                                          path: 'callbackmessage',
                                                          loadChildren: './callbackmessage/callbackmessage.module#CallbackmessageModule'
                                                                  },
                      {
                        path: 'payments',
                        loadChildren: './payments/payments.module#PaymentsModule'
                                } ,
                                {
                                  path: 'wallets',
                                  loadChildren: './wallets/wallets.module#WalletsModule'
                                          }              
                                
                                
                    ]
          }, {
            path: '',
            component: AuthLayoutComponent,
            children: [{
              path: 'session',
              loadChildren: './session/session.module#SessionModule'
            }]
          }, {
            path: '**',
            redirectTo: 'session/404'
                                  }];
