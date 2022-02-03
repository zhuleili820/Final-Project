import React, {Component} from 'react';

class AboutUs extends Component<any, any>{
    render(){
        return(
            <div style={{marginLeft:"auto", marginRight:"auto"}}>
                <div style={{display:"flex"}}>
                <div style={{width:"50%"}}>
                <section>
                <h2 style={{width:"100%", textAlign:"center"}}>HandsomeBoy Auto</h2>
                    </section>
                    <table style={{marginLeft:"auto", marginRight:"auto"}}>
                        <tr>
                            <td>Sales: </td>
                            <td>Kyy</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>917-582-4760</td>
                        </tr>
                        <tr>
                            <td>fax: </td>
                            <td>917-582-4760</td>
                        </tr>
                        <tr>
                            <td>email: </td>
                            <td>zhuleili1218@gmail.com</td>
                        </tr>

                    </table>
                </div>

                <div style={{marginLeft: "auto", width:"50%"}}>
                <section>
                    <h2 style={{width:"100%", textAlign:"center"}}>Daily Operation Hours</h2>
                </section>
                <table style={{marginLeft:"auto", marginRight:"auto"}}>
                    <tr>
                        <td>Monday: </td>
                        <td>9:30am---7:00pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday: </td>
                        <td>9:30am---7:00pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday: </td>
                        <td>9:30am---7:00pm</td>
                    </tr>
                    <tr>
                        <td>Thursday: </td>
                        <td>9:30am---7:00pm</td>
                    </tr>
                    <tr>
                        <td>Friday: </td>
                        <td>9:30am---7:00pm</td>
                    </tr>
                    <tr>
                        <td>Saturday: </td>
                        <td>11:00am---5pm</td>
                    </tr>
                    <tr>
                        <td>Sunday: </td>
                        <td>11:00am---5pm</td>
                    </tr>
                </table>
                </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48463.199852672704!2d-74.03605952089845!3d40.608927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245faab070e09%3A0x217efddf38045d30!2sLuxury%20Leasing!5e0!3m2!1sen!2sus!4v1642132776785!5m2!1sen!2sus"
                    width="100%" height="450" loading="lazy" ></iframe>
            </div>
        );
    }
}

export default AboutUs;