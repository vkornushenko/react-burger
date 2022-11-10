import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';

import BurgerIngredientsData from '../../utils/data';

const BurgerIngredient = ({ BurgerIngredientData }) => {
    return(
        
            <div className={BurgerIngredientsStyles.burger_ingredient}>
                <Counter count={1} size="default" />
                <img src={BurgerIngredientData.image} className="pl-4 pr-4 pb-2" />
                <span className={BurgerIngredientsStyles.price_tag}>
                    <p className="text text_type_digits-default pr-2">{BurgerIngredientData.price}</p>
                    <CurrencyIcon type="primary" />
                </span>
                <p className={`${BurgerIngredientsStyles.name} text text_type_main-default pt-2`}>{BurgerIngredientData.name}</p>
            </div>
    )
}

class BurgerIngredients extends React.Component {
    render() {
        //const [current, setCurrent] = React.useState('one');
        return (
            <div className={BurgerIngredientsStyles.col}>
                <div style={{ display: 'flex' }}>
                    <Tab value="one" /*active={current === 'one'} onClick={setCurrent}*/>
                        Булки
                    </Tab>
                    <Tab value="two" /*active={current === 'two'} onClick={setCurrent}*/>
                        Соусы
                    </Tab>
                    <Tab value="three" /*active={current === 'three'} onClick={setCurrent}*/>
                        Начинки
                    </Tab>
                </div>
                

                <div className={`${BurgerIngredientsStyles.scroll_block} mt-10`}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <section className={BurgerIngredientsStyles.burger_ingredient_section}>
                        {
                            BurgerIngredientsData.map((item) => {
                                if(item.type == 'bun'){
                                    return(
                                        <BurgerIngredient BurgerIngredientData={item} key={item._id}/>
                                    )
                                }
                                
                            })
                        }
                    </section>
                    <h2 className="text text_type_main-medium mt-10">Соусы</h2>
                    <section className={BurgerIngredientsStyles.burger_ingredient_section}>
                        {
                            BurgerIngredientsData.map((item) => {
                                if(item.type == 'sauce'){
                                    return(
                                        <BurgerIngredient BurgerIngredientData={item} key={item._id}/>
                                    )
                                }
                                
                            })
                        }
                    </section>
                    <h2 className="text text_type_main-medium mt-10">Начинки</h2>
                    <section className={BurgerIngredientsStyles.burger_ingredient_section}>
                        {
                            BurgerIngredientsData.map((item) => {
                                if(item.type == 'main'){
                                    return(
                                        <BurgerIngredient BurgerIngredientData={item} key={item._id}/>
                                    )
                                }
                                
                            })
                        }
                    </section>
                </div>
            </div>
        );
    }
}
export default BurgerIngredients;