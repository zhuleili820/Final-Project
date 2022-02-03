import React, {Component} from 'react';
import Name from "./names/name/Name";
import Names from "./names/Home";
import AddName from "./names/paymentCalculation/PaymentCal";
import Inventories from "./inventories/Inventories";
import Header from "./header/Header";


class App extends Component<any, any>{
    /*
    * parent to child communication:
    * in parent, pass data through attributes
    * */
    // names = ['fuck bitch', 'fire in the hole','gg']

    /*
    * Child to Parent communication:
    * in parent components, create a function and pass the reference to child
    * */
    // addName = (newName: string): void => {
    //     this.names.push(newName);
    //     this.forceUpdate();
    // };


    render() {
       // const name = 'fuck you 1000 times';
        return(
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                {/*<AddName addName = {this.addName}/>*/}
                {/*<Names names={this.names}/>*/}
                {/*<Inventories inventories={inventories}/>*/}
            </div>
        );
    }
}

export default App;





