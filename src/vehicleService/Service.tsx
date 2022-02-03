import React, {Component} from 'react';

class Service extends Component<any, any>{
    render(){
        return(
            <div style={{marginLeft:"auto", marginRight:"auto"}}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdf0DL2wUQMwiCRJ1PIawiEGnP4Szna2nise1WkhQbbz2A4aw/viewform?usp=sf_link"
                    width="100%" height="800" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…
                </iframe>
            </div>
        );
    }
}

export default Service;