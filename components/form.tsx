'use client'
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvykdy");
  if (state.succeeded) {
      return <p>Thanks for reaching out! We will get back to you as soon as we can.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="formWrap">
            <div className="formGroup">
                <label htmlFor="name">
                Name
                </label>
                <input
                    id="name"
                    type="name" 
                    name="name"
                    className="w-1/2"
                    placeholder="Name"
                />
                <ValidationError 
                    prefix="name" 
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="companyName">
                Company
                </label>
                <input
                    id="companyName"
                    type="companyName" 
                    name="companyName"
                    className="w-1/2"
                    placeholder="Company Name"
                />
                <ValidationError 
                    prefix="companyName" 
                    field="companyName"
                    errors={state.errors}
                />
            </div>
            
        </div>
        <div className="formWrap">
            <div className="formGroup">
                <label htmlFor="email">
                Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="w-1/2"
                    placeholder="Email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="website">
                Website
                </label>
                <input
                    id="website"
                    type="website" 
                    name="website"
                    className="w-1/2"
                    placeholder="Website"
                />
                <ValidationError 
                    prefix="website" 
                    field="website"
                    errors={state.errors}
                />
            </div>
           
            
        </div>
        <label htmlFor="message">
            Messaage
        </label>
        <textarea
            id="message"
            name="message"
            className="w-full"
            placeholder="How can we help you?"
            
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button className="button-nav buttonGreen relative" type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;