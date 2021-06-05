import React from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import {Link} from "react-router-dom"

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const Name = styled(Typography)`
  font-size: 1.3rem;
  color: white;
`;

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Teacher = ({name, thumbnail, id, ...rest}) => {
    return (
      <Link style={{textDecoration:"none"}} to={`/${id}`}>
          <Base {...rest}>
              <Image src={thumbnail} alt={name}/>
              <Name>{name}</Name>
          </Base>
        </Link>
    );
};

export default Teacher;
