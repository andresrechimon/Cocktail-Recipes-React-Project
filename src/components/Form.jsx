import React, {useContext, useState} from 'react';
import {CategoriesContext} from '../context/CategoriesContext';
import {RecipesContext} from '../context/RecipesContext';

const Form = () => {

    const [search, setSearch] = useState({
        name:'',
        category:''
    });

    const {categories} = useContext(CategoriesContext);
    const {searchRecipe, setConsult} = useContext(RecipesContext);

    //Reading content
    const obtainRecipeData = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (  
        <form
        className="col-12"
        onSubmit={e => {
            e.preventDefault();
            searchRecipe(search);
            setConsult(true);
        }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente...</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    type="text"
                    name="name" 
                    className="form-control"
                    placeholder="¿Qué apetece?"
                    onChange={obtainRecipeData}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                    className="form-control"
                    name="category"
                    onChange={obtainRecipeData}
                    >
                        <option value="">--Selecciona una categoría--</option>
                        {categories.map(category => (
                            <option 
                            key={category.strCategory}
                            value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                    type="submit" 
                    className="btn btn-block btn-primary"
                    value="Buscar Cocktails"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Form;
