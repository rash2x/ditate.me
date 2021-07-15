import React from 'react';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Link from 'next/link';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const Name = styled(Typography)`
  font-size: 1.3rem;
  color: white;
  margin-top: 5px;
  text-align: center;
`;

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Teacher = ({ name, thumbnail, id, ...rest }) => (
  <Link style={{ textDecoration: 'none' }} href={`/${id}`}>
    <Base {...rest}>
      <Image src={thumbnail} alt={name} />
      <Name>{name}</Name>
    </Base>
  </Link>
);

export default Teacher;
