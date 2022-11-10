import React from 'react';


import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeaderStyles from './AppHeader.module.css';


class AppHeader extends React.Component {
    render() {
      return (
        <div className={AppHeaderStyles.header}>
          <div className={AppHeaderStyles.content}>
            <nav>
              <ul className={AppHeaderStyles.nav_list}>
                <li className={AppHeaderStyles.nav_item}>
                  <BurgerIcon type="primary" />
                  <p className={`${AppHeaderStyles.nav_item_name} text text_type_main-default`}>Конструктор</p>
                </li>
                <li className={AppHeaderStyles.nav_item}>
                  <ListIcon type="secondary"/>
                  <p className={`${AppHeaderStyles.nav_item_name} text text_type_main-default text_color_inactive`}>Лента заказов</p>
                </li>
              </ul>
            </nav>
            <Logo />
            <div className={AppHeaderStyles.nav_item}>
              <ProfileIcon type="secondary" />
              <p className={`${AppHeaderStyles.nav_item_name} text text_type_main-default text_color_inactive`}>Личный кабинет</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default AppHeader;