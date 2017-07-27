import React from 'react';
import ReactDOM from 'react-dom';

/*Step 1: Create a new component, which produce some HTML.*/

const App = function(){
    return <div>hi</div>;
}

/* Step 2: Put the component's generated html into DOM.
*  render(what to put, where in dom to put)
*/
ReactDOM.render(<App />, document.querySelector('.container'));