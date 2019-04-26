import React, { Component } from 'react'


class Categoria extends Component {

    //#REF

    eventName = React.createRef();
    category = React.createRef();
    subcategory = React.createRef();


    //Funciones

    showCategoriesOptions = (key) => {
        const category = this.props.categories[key];

        const  {id, name, name_localized} = category;
        
        if(!id || !name || !name_localized) return null;
 
            return (
                    <option key={id} value={id}>{name_localized}</option>
            )
    }

    showSubcategoriesOptions = (key) => {
        const subcategory = this.props.subcategories[key];

        const  {id, name, name_localized} = subcategory;
        
        if(!id || !name || !name_localized) return null;
 
            return (
                    <option key={id} value={id}>{name_localized}</option>      
                  
            )
    }
    
    getCategory = event => {
      
        const categoryId = event.target.value;
         
       if (!categoryId) {
        this.setState ({
            error:true
        })
       }else {
           this.props.addSubcategory(categoryId)
           
       }
         
    }

    searchEvent = (e)=>{
        e.preventDefault();

        //objeto

        const searchData ={
            name : this.eventName.current.value,
            category: this.category.current.value,
            subcategory: this.subcategory.current.value,
        }
            
        //props
       

          this.props.getEvents(searchData);

        }

    render() { 

        const categories = Object.keys(this.props.categories);
        const subcategories = Object.keys(this.props.subcategories);
       
        return ( 
            <div>
                <form onSubmit={this.searchEvent}>
                   <fieldset className="uk-fieldset uk-margin">
                        <legend className="uk-legend uk-text-center">
                            Busca tu evento por nombre o categoria
                        </legend>

                        <div className="uk-column-1-4@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input ref={this.eventName} className="uk-input" type="text" placeholder="Nombre de evento o ciudad"/>
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <select className="uk-select" ref={this.category} onChange={this.getCategory}>
                                    {categories.map(this.showCategoriesOptions)}
                                </select>
                            </div>
                                   {
                                       subcategories.length === 0 ? '' 
                                    : 
                                        <div className="uk-margin" uk-margin="true">
                                            <select className="uk-select" ref={this.subcategory}>
                                                {subcategories.map(this.showSubcategoriesOptions)}
                                            </select>
                                        </div>
                                    }
                            <div className="uk-margin" uk-margin="true">
                                <input className="uk-button uk-button-danger" type="submit" value="Buscar"/>
                            </div>
                        
                        </div>
                   
                   </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Categoria;