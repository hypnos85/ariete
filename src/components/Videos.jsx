import React from 'react';
import '../styles/Videos.css';

const Videos = () => {
  return (
    <div className="centro">
      <h1>Muy pronto nuestros videos aquí</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ofmb_5CeERQ?si=TzWSXb05kTsU2Yip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4-VzNuoorjU?si=x1F71YEW7DgY778P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/soRFGnO8k9s?si=rGhcwcSk2U_H0fIq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default Videos;
