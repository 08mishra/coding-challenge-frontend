 import './App.css';
 import React from 'react';

 const intialState = {
     title: '',
     body: '',
     userId: '',
     titleError: '',
     bodyError: '',
     useridError: ''
 };

 class FormControl extends React.Component {
     constructor(props) {
         super(props);
         this.state = intialState;
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         const value = event.target.value;
         this.setState({
             ...this.state,
             [event.target.name]: value
         });
     }

     validate() {


         if (this.state.title === '') {
             this.setState({
                 titleError: 'enter a valid title'
             })
             return false;
         }



         if (this.state.body === '') {
             this.setState({
                 bodyError: 'enter a valid body'
             })
             return false;
         }



         if (this.state.userId === '') {
             this.setState({
                 useridError: 'enter a valid Id'
             })
             return false;
         }
         return true;
     }

     handleSubmit(event) {
         event.preventDefault();
         let isValid = this.validate();
         if (isValid) {
             console.log(this.state);
             this.setState(intialState);
         }


     }

     render() {
         return (

             <
             >

             <
             div className = 'form-container' >

             <
             form className = 'form'
             onSubmit = { this.handleSubmit } >

             <
             label htmlFor = 'title' > title < /label> <
             input type = 'text'
             name = 'title'
             value = { this.state.title }
             onChange = { this.handleChange }
             placeholder = 'title' / >
             <
             span id = 'span'
             style = {
                 { color: 'red', fontSize: '15px', fontWeight: '400' }
             } > { this.state.titleError } < /span>

             <
             label htmlFor = 'body' > body < /label> <
             input type = 'text'
             name = 'body'
             value = { this.state.body }
             placeholder = 'enter body'
             onChange = { this.handleChange }
             />

             <
             span id = 'span'
             style = {
                 { color: 'red', fontSize: '15px', fontWeight: '400' }
             } > { this.state.bodyError } < /span> <
             label htmlFor = 'userId' > userId < /label> <
             input type = 'text'
             placeholder = 'userId'
             value = { this.state.userId }
             onChange = { this.handleChange }
             name = 'userId' / >
             <
             span id = 'span'
             style = {
                 { color: 'red', fontSize: '15px', fontWeight: '400' }
             } > { this.state.useridError } < /span> <
             button type = 'submit' > submit < /button> < /
             form >



             <
             /div>




             <
             />


         );
     }
 }


 export default FormControl;