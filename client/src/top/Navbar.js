import React from 'react'

function Navbar() {
    return (
        <nav class="w-full fixed top-0 bg-red-400">
            <div class="container mx-auto py-5 flex justify-between">
                <div>
                    <img src="../img/logo.png" alt="logo" />
                </div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </nav>
    );
};

export default Navbar