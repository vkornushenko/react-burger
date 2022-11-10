import React from 'react';
/*
import logo from './logo.svg';
import './App.css';
*/

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import AppStyles from './AppStyles.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <main className={AppStyles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;