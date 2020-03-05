import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, social } = config;
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <Container>
      <Wrapper>
        <div style={headerStyle}>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <div>
          <H1><Link to="/">{author}</Link></H1>
          <P>{description}</P>
        </div>
        </div>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
            train={social.train}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;
