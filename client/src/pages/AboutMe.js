import React from 'react';
import penguin from '../img/littlePenguin.jpg';
import dots from '../img/dots.png';

function AboutMe() {
  return (
    <div class="container mx-auto flex">
      {/* Left Side */}
      <div class="relative">
        <img src={dots} class="h-1/4 top-0 left-0 absolute" alt="dots for corner design" />
        <div class="h-full rounded-full overflow-hidden">
          <img src={penguin} alt="Eric Song" />
        </div>
      </div>
      Hello
      {/* Right Side */}
    </div>
  )
}

export default AboutMe