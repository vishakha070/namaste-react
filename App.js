/**
 * <div id="parent">
 *   <div id="child1">
 *      <h1> I'm H1 tag </h1>
 *      <h2> I'm H2 tag </h2>
 *   </div>
 *   <div id="child2">
 *      <h1> I'm H1 tag </h1>
 *      <h2> I'm H2 tag </h2>
 *   </div>
 * </div>
 * 
 * ReractElement(Object) => HTML(Browser Understands)
 */

/*
* createElement is api.
*/
const parent = React.createElement( 
    'div',
    { id: 'parent'},
    [ React.createElement(
        'div',
        { id: 'child1'},
        [ React.createElement(
            'h1',
            {},
            'I\'m H1 tag'
        ),
        React.createElement(
            'h2',
            {},
            'I\'m H2 tag'
        )
        ]    
    ),
    React.createElement(
        'div',
        { id: 'child2'},
        [ React.createElement(
            'h1',
            {},
            'I\'m H1 tag'
        ),
        React.createElement(
            'h2',
            {},
            'I\'m H2 tag'
        )
        ]    
     )
    ]
);

// const heading = React.createElement(
//     'h1',
//     { id: 'heading' },
//     'Hello World by React'
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);