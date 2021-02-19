import React from 'react';

const Form = props => {
    return ( 
        <form>
            <input 
                type="text" 
                value={props.value}
                placeholder="Wpisz miasto"
                onChange={props.inputChange}
            />
            
        </form>
     );
}
 
export default Form;