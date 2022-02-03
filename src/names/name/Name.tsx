import React from 'react';
import './Name.scss';


const Name = (props: NameProps) => {
    /*
    * parent to child communication
    * in child component, receive data through props
    * */
    return (
        <div>
            <p className="Name">
            {props.name}, <span>age is {props.children}</span>
            </p>


        </div>
    );

};

export default Name;

interface NameProps{
    name: String;
    children: number
}















