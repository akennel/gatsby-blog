import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ website, twitter, github, linkedin }) {
  return (
    <Wrapper>
      {website && (
        <SocialLink href={website} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Website
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          Twitter
        </SocialLink>
      )}
      {github && (
        <SocialLink href={github} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Github
        </SocialLink>
      )}
      {linkedin && (
        <SocialLink href={linkedin} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </SocialLink>
      )}
      {train && (
        <SocialLink href={train} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M403.193,384.596c25.886-5.3,45.418-28.253,45.418-55.683V56.835C448.61,25.496,423.115,0,391.776,0h-271.55
			C88.886,0,63.39,25.496,63.39,56.835v272.079c0,27.43,19.532,50.383,45.418,55.683L61.542,512h31.978l20.7-55.797h283.56
			l20.7,55.797h31.977L403.193,384.596z M125.342,426.223l15.015-40.474h231.285l15.015,40.474H125.342z M391.776,355.768h-271.55
			c-14.808,0-26.855-12.047-26.855-26.855V56.835c0-14.808,12.047-26.854,26.855-26.854h271.551
			c14.808,0,26.855,12.047,26.855,26.854v272.079C418.63,343.722,406.583,355.768,391.776,355.768z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          Train
        </SocialLink>
      )}    </Wrapper>
  );
}

export default Social;
