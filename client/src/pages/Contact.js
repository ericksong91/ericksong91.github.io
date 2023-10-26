import React from 'react';

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <div id="contact-me" className="dark:bg-slate-900 py-28 transition-color duration-1000">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold dark:text-white">CONTACT ME</h1>
                    <h1 className="text-3xl dark:text-white">Have a Question?</h1>
                    <p className="w-1/2 text-center text-gray-400">
                        Engineer Ipsem Lorem Engineer Ipsem Lorem Engineer Ipsem Lorem?
                    </p>
                </div>
            </div>
            <form id="contact-form" className="mt-5 p-8 flex flex-col gap-5 items-center">
                <input className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" type="text" placeholder="Full Name" />
                <input className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" type="email" placeholder="Email" />
                <textarea className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" cols="30" rows="10" placeholder="Message..."></textarea>
                <button onClick={(e) => handleSubmit(e)} className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default Contact;