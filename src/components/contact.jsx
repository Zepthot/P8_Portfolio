import '../styles/contact.scss';
import Titles from './titles';
import Line from './title-line';

// Contact function for the fourth section of the page
function Contact() {
    return (
        <section id='contact' className="contact-section">
            {/* Call Title component with 2 props */}
            <Titles title='Contact' btitle= "N'hésitez pas" />
            {/* Split line */}
            <Line />
            <form id='contact-form' action='#' method='POST' className='contact-form'>
                <label htmlFor='name_id'></label>
                <input id='name_id' type="text" name="name" placeholder="Nom" required className='form-element form-input' />
                <label htmlFor='email_id'></label>
                <input id='email_id' type="email" name="email" placeholder="Adresse mél" required className='form-element form-input' />
                <label htmlFor='message_id'></label>
			    <textarea name="message" id="message_id" cols="30" rows="10" placeholder="Votre message" required className='form-element'></textarea>
                <button type="submit" className='form-element form-button'>Envoyer</button>
            </form>
        </section>
    )
}

// Export to use it elsewhere
export default Contact