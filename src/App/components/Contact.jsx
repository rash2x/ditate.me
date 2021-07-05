import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Paper, Typography } from '@material-ui/core';
import getContactLink from '../helpers/getContactLink';

const Base = styled(Paper)`
  max-width: 480px;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > * + * {
    margin-top: 16px;
  }
`;

const ContactButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
})`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const DitateMeCopyright = styled(Typography).attrs({
  variant: 'body1',
})`
  span {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const Contact = ({ hands, contact, description, ...rest }) => {
  const [contactValue, setContactValue] = useState(null);

  const handleContact = useCallback(() => {
    setContactValue(contact.value);
  }, [contact]);

  return (
    <Base {...rest}>
      {hands && <img src={hands} alt="hands" />}
      <ContactButton onClick={handleContact}>
        {contactValue ? (
          <a
            href={getContactLink(contact.type, contact.value)}
            rel="noopener noreferrer"
            target="_blank"
          >
            👉 {contact.value}
          </a>
        ) : (
          'Связаться со мной'
        )}
      </ContactButton>
      <DitateMeCopyright>
        {description || (
          <>
            Сообщите, пожалуйста, что вы нашли практику на <span>ditate.me 🙏</span>
          </>
        )}
      </DitateMeCopyright>
    </Base>
  );
};

export default Contact;
