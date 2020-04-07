//This is a review of my React Understanding about making apps.
class IndecisonAppParent extends React.Component {
    constructor(props){
        super(props);
       
        this.Pick = this.Pick.bind(this);
        this.DelAll = this.DelAll.bind(this);
        this.DellOne = this.DellOne.bind(this);
        this.MoreItems = this.MoreItems.bind(this);
     
        this.state = {
              title: props.title,
              subtl: 'Insha Allah Boussouriou you will Brilliand in Coding',
              txtcm: 'Just put your life onn the hands of computers',
              items: props.items
        }

    }
    
    componentDidUpdate(oldProps, oldSate){

     const json = JSON.stringify(this.state.items);
      localStorage.setItem('Items', json);
    }

    Pick(){
        let single = Math.floor(Math.random() * this.state.items.length);
        let choice = this.state.items[single]
        alert(choice);
    }
    
    //This is how to delete all the tems of the array
    DelAll(){
        this.setState(() => ({ items: []}))
    
    }

    DellOne(remove){
       this.setState((older) =>({
           items: older.items.filter((txt) =>{
               return remove !== txt;
           })
       }))
    }

    MoreItems(more){

        if(!more){
            return 'Please type something !';

        }else if(this.state.items.indexOf(more) > - 1 ){
            return 'This Item has been taken !';

        }else{ //but the else is not necessery
           
            this.setState((old) => ({items: old.items.concat([more])}))
    
        }
        
    }

    render(){
        return(
            <div>
                <Header titel={this.state.title}
                        subtl={this.state.subtl} 
                        txtcm={this.state.txtcm}
                />

                <Options
                     option={this.state.items}
                     mute ={this.state.items.length == 0}
                     Random ={this.Pick}
                     wipper ={this.DelAll}
                     RmvOne= {this.DellOne}
                />
                <AddItems Adder ={this.MoreItems}/>
            
            
            </div>

        )
    }
}
//this is how to set up the default for options 
IndecisonAppParent.defaultProps = {
    items:[]
}

//this one here replace the react component 
const Header = (props) => {
    return(
        <div> 
            <h1>{props.title}</h1>
            <h3>{props.subtl}</h3>
            <h4>{props.txtcm}</h4>
        </div>
    )
}
// this is when we wanna set up a default title if not provided
Header.defaultProps = {
    title: 'Indecision App'
}
// class Header extends React.Component{
//     render(){
//         return(
//             <div> 
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtl}</h3>
//                 <h4>{this.props.txtcm}</h4>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return(
        <div>
            <div>
               <h2>
               {props.option.length > 0 ? 'Here are your options' : 'No option available'}
               </h2>
            </div>

            <button disabled={props.mute} 
                    onClick={props.Random}
            >play</button>

            <button onClick={props.wipper}
                    disabled={props.mute}
            
            >delete all</button>
    
            <div>
             
               {
                props.option.map((all) => <Option 
                                       key={all} 
                                       TypItems={all} 
                                       RmvOne={props.RmvOne}
                                       />)
                      
              }

            </div>
            
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
        {props.TypItems}
        <button onClick={(e) =>{
            props.RmvOne(props.TypItems);
        }}>
         remove
        </button>
        </div>
        
    )
}

// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//                 <div>
//                    <h2>
//                    {this.props.option.length > 0 ? 'Here are your options' : 'No option available'}
//                    </h2>
//                 </div>

//                 <button disabled={this.props.mute} 
//                         onClick={this.props.Random}
//                 >play</button>

//                 <button onClick={this.props.wipper}
//                         disabled={this.props.mute}
                
//                 >delete all</button>
        
//                 <div>
//                    {
//                     this.props.option.map((all) =>  <ol key={all}>
//                                                             {all}
//                                                     </ol>   
//                     )
                         
//                   }

//                 </div>
                
//             </div>
//         )
//     }
// }

class AddItems extends React.Component{
   constructor(props){
       super(props);

       this.Controller = this.Controller.bind(this);

    this.state={
        error: undefined
    }

   }
   
   Controller(e){
       e.preventDefault();
        
       let holder = e.target.elements.txt.value.trim();
       let error =  this.props.Adder(holder);
      
       this.setState(() => ({ error}))

           
   }
   
    render(){
        return(
            <div>
                {this.state.error && (<p>{this.state.error}</p>)}
                <form onSubmit={this.Controller}>
                   <input type="text" name="txt"/>
                   <button>add</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisonAppParent/>, document.querySelector('#app'));