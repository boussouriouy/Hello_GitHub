//this an counter app with JSX React classes
class Counter extends React.Component{
    constructor(props){
        super(props);

       this.Plus = this.Plus.bind(this);
       this.Reset = this.Reset.bind(this);
       this.Minus = this.Minus.bind(this);

        this.state = {
            title: 'The Counter App',
            subtl: 'Insha Allah Boussouriou you will be Brilliant in coding',
            count: 0
        }

    }

   Plus(){
      this.setState(() => {

        return{
            count: this.state.count + 1
        }

      })
   }

   Reset(){
       this.setState(() => {
         
          return{
              count:0
          }

       })
   }

   Minus(){
    this.setState(() => {
         
        if(this.state.count > 0){
            return{
               count: this.state.count - 1
            }
        }
    })

   }

    render(){
        return(
           <div>

              <h1>{this.state.title}</h1>
              <h3>{this.state.subtl}</h3>
              <h2>Count: {this.state.count}</h2>
              <button onClick={this.Plus}>+</button>
              <button onClick={this.Reset} disabled={this.state.count == 0}>reset</button>
              <button onClick={this.Minus} disabled={this.state.count == 0}>-</button>

           </div>

        );
    }
}

ReactDOM.render(<Counter/>, document.querySelector('#app'));


