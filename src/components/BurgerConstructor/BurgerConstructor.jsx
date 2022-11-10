import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, LockIcon, DragIcon, DeleteIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsData from '../../utils/data';
import BurgerConstructorStyles from './BurgerConstructor.module.css';




class BurgerConstructor extends React.Component {
    render() {
        return (
            <div className={BurgerConstructorStyles.ingredients_col}>
                <ul className={BurgerConstructorStyles.ingredient_construct_list}>
                    {
                        BurgerIngredientsData.map((item) => {
                            if(item.type == 'bun'){
                                
                                return(
                                    <li className='pl-8' key={item._id}>
                                        <ConstructorElement
                                        type="top"
                                        isLocked={true}
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                        />
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                
                    <div className={BurgerConstructorStyles.scroll_block}>
                        <ul className={BurgerConstructorStyles.ingredient_construct_list}>
                        {
                            BurgerIngredientsData.map((item) => {
                                if(item.type != 'bun'){
                                    return(
                                        <li className={BurgerConstructorStyles.ingredient_item_row} key={item._id}>
                                            <DragIcon/>
                                            <ConstructorElement
                                                text={item.name}
                                                price={item.price}
                                                thumbnail={item.image}
                                                
                                            />
                                        </li>
                                    )
                                }
                                    
                            })
                        }
                        </ul>
                    </div>
                    <ul className={BurgerConstructorStyles.ingredient_construct_list}>
                    {
                        BurgerIngredientsData.map((item) => {
                            if(item.type == 'bun'){
                                return(
                                    <li className='pl-8' key={item._id}>
                                        <ConstructorElement
                                        type="bottom"
                                        isLocked={true}
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                        
                                        />
                                    </li>
                                    
                                )
                            }
                        })
                    }
                </ul>
                <div className={BurgerConstructorStyles.order_price_block}>
                    <div className={BurgerConstructorStyles.price_tag}>
                        <p className="text text_type_digits-medium pr-2">1250</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
            
        );
    }
}
export default BurgerConstructor;