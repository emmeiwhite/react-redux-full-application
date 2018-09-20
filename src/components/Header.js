// import React, { Component } from 'react';

// import Title from './Title';
// export default class Header extends Component{
//     constructor(props){
//         super(props);
//         this.changeTitle = this.changeTitle.bind(this);
//         this.state = {
//             title:this.props.title
//         }
//     }

//     changeTitle(title){
//         this.setState(
//             {title:title}  // ES6 Syntax title:title
//         )
//     }


//     render(){
//         // setTimeout(()=>{ 
//         //     // Note that setTimeout() works Aysnchronously. So, all the other components and nodes will get rendered
//         //       this.setState({
//         //           title:"EMMEI_SOFT IS DESTINED TO GROW LIKE NEVER BEFORE !!!"
//         //       })
//         // },5000);

//         // Let's change our title onEvent some event

      
        

//         return(
//             <div>
//                 <Title  onChangeTitle = {this.changeTitle}></Title> 
//                 <h2>AutoBiography</h2>
//                 <p>Throughtout my life, i have been looking for the purpose in life.</p>
//                 <p>Even though it is work, passion, and many other related topics that hit brain first.</p>
//                 <p>But they cannot be a purpose for they are also temporary.</p>
//                 <p>QUR'AN has the Answer. "And We have created the Jinns and the humans to worship me"</p>
//             </div>
               
//         );
//     }
// }