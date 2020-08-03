import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy;2020 Startup Wharf Ltd.</li>
        <li>
          Credits: <a href="http://unsplash.com/">Unsplash</a>
        </li>
      </ul>
    </footer>
  );
}
