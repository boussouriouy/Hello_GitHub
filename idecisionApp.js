//This is the Indecision Application on my own way
class IndecisonAppParent extends React.Component {
    constructor(props){
        super(props);
       
        this.Pick = this.Pick.bind(this);
        this.DelAll = this.DelAll.bind(this);
        this.MoreItems = this.MoreItems.bind(this);

        this.state = {
              title: 'The Indecision App',
              subtl: 'Insha Allah Boussouriou you will Brilliand in Coding',
              txtcm: 'Just put your life onn the hands of computers',
              items: ['One', 'Two', 'Three']
        }

    }
     
    Pick(){
        let single = Math.floor(Math.random() * this.state.items.length);
        let choice = this.state.items[single]
        alert(choice);
    }

    DelAll(){
        this.setState(() =>{

            return{
                items: []
            }
        })
    }

    MoreItems(more){

        if(!more){
            return 'Please type something !';

        }else if(this.state.items.indexOf(more) > - 1 ){
            return 'This Item has been taken !';

        }else{ //but the else is not necessery
           
            this.setState((old) =>{
                return {
                    items: old.items.concat([more])
                }
   
           })
        }
        
    }

    render(){
        return(
            <div>
                <Header title={this.state.title} 
                        subtl={this.state.subtl} 
                        txtcm={this.state.txtcm}
                />

                <Options
                     option={this.state.items}
                     mute ={this.state.items.length == 0}
                     Random ={this.Pick}
                     wipper ={this.DelAll}
                />
                <AddItems Adder ={this.MoreItems}/>
            
            
            </div>

        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div> 
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtl}</h3>
                <h4>{this.props.txtcm}</h4>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <div>
                   <h2>
                   {this.props.option.length > 0 ? 'Here are your options' : 'No option available'}
                   </h2>
                </div>

                <button disabled={this.props.mute} 
                        onClick={this.props.Random}
                >play</button>

                <button onClick={this.props.wipper}
                        disabled={this.props.mute}
                
                >delete all</button>
        
                <div>
                   {
                    this.props.option.map((all) =>  <ol key={all}>
                                                            {all}
                                                    </ol>   
                    )
                         
                  }

                </div>
                
            </div>
        )
    }
}

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
      
       this.setState(() =>{

          return {
              error
          }
       })
           
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


// the udemy way



class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        this.delAll = this.delAll.bind(this);
        this.HndlPick = this.HndlPick.bind(this);
        this.MorItem = this.MorItem.bind(this);

        this.state ={
            title: 'The Indecision App',
            subtl: 'Please put your life on the hand of computers',
            option: [] 
        }
    }
    
    MorItem(added){

        if(!added){
            return 'Please enter a valid item';

        }else if(this.state.option.indexOf(added) > - 1){

            return 'This item is already exist';
        }

         // we dont need an else here because if the two returns up did go the setState will

        this.setState((old) =>{
        
            return{
                option: old.option.concat(added) // adding arrays
            }

        })
    }

    HndlPick(){
       let single = Math.floor(Math.random() * this.state.option.length);
       let choce = this.state.option[single];

       alert(choce)
    }

    delAll(){
        this.setState(() =>{
            return{option:[]}
        })
    }
    render(){
        return(
            <div>

             <Header title={this.state.title} subtl={this.state.subtl}/>

             <Action hasOptions={this.state.option.length > 0 }
                     getter = {this.HndlPick}
             />

             <Options option={this.state.option}
                      wipper={this.delAll}
             />
             <Add  adder={this.MorItem}/>

            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
           <div>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtl}</h2>
           </div>

        );
    }
}

class Action extends React.Component{

    render(){
        return(
           <div>
           <button 
                   disabled={!this.props.hasOptions} 
                   onClick={this.props.getter}
           >
           
           what's up?
           
           </button>
           
           </div>

        );
    }
}

class Options extends React.Component{
    render(){
        return(
         <div>

            <p>{ this.props.option.length > 0 ? 'Here are your options' : 'No option availabel'}</p>
             
            <button onClick={this.props.wipper}>remove all</button>

            {this.props.option.map((all) => <Option key={all} TypOption={all}/>)}

         </div>

        );
    }
}

class Option extends React.Component{
    render(){
        return(
           <div>
             <p>{this.props.TypOption}</p>
           </div>

        );
    }
}

class Add extends React.Component{

    constructor(props){
        super(props);
        
        this.Cntrllr = this.Cntrllr.bind(this);

        this.state ={
            error: undefined
        }
    }
       
    Cntrllr(e){
       e.preventDefault();

       let option = e.target.elements.option.value.trim();
           e.target.option.value = '';
       let error = this.props.adder(option);

       this.setState(() =>{

        return {
                error
            };
       });
    }


    render(){
        return(
           <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.Cntrllr}>
                <input type="text" name="option" />
                <button>add</button>
              </form>
           
           </div>

        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.querySelector('#app'));









