import React , {Component} from 'react';
import Header from './components/Header';
import Categoria from './components/Categories';
import Events from './components/Events';

class App extends Component {


  token = 'FDPHTQSVCXNHC2VMHRFI';

  state = {
    categories :[],
    category:'',
    subcategory:'',
    subcategories :[],
    events: [],

  }

  componentDidMount() {

    this.getCategories();
  }

  getCategories = async ( ) => {
    const url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_MX`;

    await fetch (url)
        .then(response => {
         return response.json();
        })
        .then( categories => {
          this.setState({
            categories: categories.categories
          })
        })
  };

  addSubcategory =  async (newCategory)=> {
    
    
    const url =`https://www.eventbriteapi.com/v3/categories/${newCategory}/?token=${this.token}&locale=es_MX`;
    console.log(url);
            await fetch (url)
                .then(response => {
                return response.json();
                })
                .then( subcategories => {
                  this.setState({
                    subcategories: subcategories.subcategories
                  }) 
                })

}



  getEvents= async (searchData) => {
    
    const {name, category,subcategory} = searchData;

    const url =`https://www.eventbriteapi.com/v3/events/search/?q=${name}&sort_by=date&subcategories=${subcategory}&categories=${category}&token=${this.token}&location.address=mexico+city&locale=es_MX`;
  

    await fetch (url)
        .then(response => {
         return response.json();
        })
        .then( events => {
            if(events.events.length === 0 ){
              let url=`https://www.eventbriteapi.com/v3/events/search/?q=${name}&sort_by=date&categories=${category}&token=${this.token}&location.address=mexico+city&locale=es_MX`;
               fetch (url)
                  .then(response => {
                  return response.json();
                  })
                  .then( events => {
                    this.setState({
                      events: events.events
                    })
                  })
            }else {     
          this.setState({
            events: events.events
          })
        }
        })
  }

render (){

      return (
        <div className="App">
          <Header
          titulo ='Eventos de la CDMX'/>
          <Categoria
            categories = {this.state.categories}
            addSubcategory = {this.addSubcategory}
            subcategories = {this.state.subcategories}
            getEvents = {this.getEvents}
          />
          <Events
          events = {this.state.events}/>

        </div>
      );
    }

}
export default App;
