import React from 'react';

function Contact() {
    return (
        <div id="contact-me">
            <div class="container mx-auto">
                <div class="flex flex-col gap-3 items-center">
                    <h1 class="text-indigo-600 font-bold">CONTACT ME</h1>
                    <h1 class="text-3xl">Have a Question?</h1>
                    <p class="w-1/2 text-center text-gray-400">
                        Engineer Ipsem Lorem Engineer Ipsem Lorem Engineer Ipsem Lorem? 
                    </p>
                </div>
            </div>
            <form id="contact-form" class="mt-5 p-8 flex flex-col gap-5 items-center">
                <input class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm" type="text" placeholder="Full Name" />
                <input class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm" type="email" placeholder="Email" />
                <textarea class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm" cols="30" rows="10" placeholder="Message..."></textarea>
                <button class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default Contact;