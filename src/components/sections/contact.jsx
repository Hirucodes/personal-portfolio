import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

       
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
        .then((result) => {
            setSubmitStatus('success');
            form.current.reset();
        })
        .catch((error) => {
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-black">
            <div className="max-w-4xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Get In Touch 💬
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Have a question or want to work together? Feel free to reach out using the form below.
                </p>

                <form 
                    ref={form} 
                    onSubmit={sendEmail}
                    className="space-y-6 bg-blue-900/20 p-8 rounded-xl border-2 border-blue-500/30"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-blue-400 mb-2 text-sm">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-blue-400 mb-2 text-sm">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-blue-400 mb-2 text-sm">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                            placeholder="Subject of your message"
                        />
                    </div>

                    <div>
                        <label className="block text-blue-400 mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                <>
                                    Send Message
                                    <FaPaperPlane className="text-sm" />
                                </>
                            )}
                        </button>
                    </div>

                    {submitStatus === 'success' && (
                        <p className="text-green-500 text-center">
                            Message sent successfully!
                        </p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-500 text-center">
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};
