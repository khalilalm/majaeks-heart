import React from 'react';
import useState from 'react-hook-use-state';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Mailchimp from 'react-mailchimp-form'
const StayInformedForm = () => {

    return (
        <Mailchimp
        action='https://gmail.us6.list-manage.com/subscribe/post?u=6b3c63f2cca79d20c5c2cf25b&amp;id=8522e97855'
        fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            },
           
          ]}
          // Change predetermined language
          messages = {
            {
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Subscribe!"
            }
          }
        />
    );
};

export default StayInformedForm;





























//    // Declare a new state variable, which we'll call "count"
//    const [state, setState] = useState({
//     email: ""
//   });

//   const handleChange = e => {
//     setState({ email: e.target.value.trim() });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (state.email) {
//       fetch(`/api/addMember?email=${state.email}`)
//         .then(res => res.json()
//         .then(data => ({status: res.status, body: data}))
        
       
//         )
     
//       setState({ email: "" });
//     }
//   };
 // <Form onSubmit={handleSubmit(onSubmit)}>
        //     <div className="input-container">
        //         <div className="input-group">
        //             <FormGroup>
        //                 <Input type="email" id="email" {...register('email', {
        //                         pattern: {
        //                             value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        //                             message: 'Email is not valid.'
        //                         }
        //                     })} placeholder="Sign up for updates"/>
        //             </FormGroup>
        //             <span className="input-group-btn">
        //                 <Button color="danger" className="ml-2 center-informed button"><i class="fa fa-envelope"></i></Button>
        //             </span>
        //         </div>
        //     </div>
        // </Form>
    //     <form className="subscribe" onSubmit={handleSubmit}>
    //     <input
    //       className="subscribe-email"
    //       name="email"
    //       type="email"
    //       placeholder="Type Email"
    //       onChange={handleChange}
    //       value={state.email}
    //       aria-label="Email Address"
    //     />
    //     <button className="subscribe-button" type="submit">
    //      Submit
    //     </button>
    //   </form