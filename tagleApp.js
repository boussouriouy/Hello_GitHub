//This is how to make an app with JSX show and hide text on a button
class VisibilityButton extends React.Component{
    constructor(props){
          super(props);

          this.Flipper = this.Flipper.bind(this);

          this.state = {
              title: 'The Visibility Button App',
              subtl: 'Insha Allah Boussouriou you will be Brilliant in programming',
              txtcm: 'Put your life on the hands of the computers',
              visible: false
          }
          
    }
    
    Flipper(){
        this.setState((old) => {
          
            return{
               visible: !old.visible
            }
        })
    }

    render(){


        return(
          <div>
             
          <h1>{this.state.title}</h1>
          <h3>{this.state.subtl}</h3>
          <h4>{this.state.txtcm}</h4>
          <button onClick={this.Flipper}>{this.state.visible ? 'hide details' : 'show details'}</button>
          {
            this.state.visible && (<p>Hey. Dude now you can see my information here</p>)
          }
          </div>

        );
    }
}

ReactDOM.render(<VisibilityButton/>, document.querySelector('#app'));