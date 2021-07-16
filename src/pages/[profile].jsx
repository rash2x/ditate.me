import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { Chip, Container, Fab, alpha, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { ArrowBack } from '@material-ui/icons';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import { AirtableContext } from '../App/airtable/context';
import InstagramIcon from '../../public/assets/instagram-icon.svg';
import VkIcon from '../../public/assets/vk-icon.svg';

import { getPracticeById, getTeacherById } from '../App/airtable/services';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  margin: 20px auto 0 auto;
`;

const PracticeChip = styled(Chip)`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  height: 24px;
  margin-left: 8px;
  margin-top: 8px;
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};

  span {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PracticeList = styled.div`
  margin-top: ${props => props.theme.spacing(2)}px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BackButton = styled(Fab).attrs({
  color: 'primary',
  size: 'medium',
})`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Info = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Name = styled(Typography).attrs({
  variant: 'h1',
})`
  font-size: 2rem;
  margin-top: 20px;
`;
const Description = styled(Typography).attrs({
  variant: 'body2',
})`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SocialLink = styled(Button).attrs({
  size: 'small',
})`
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightMedium};

  img {
    margin-right: 4px;
  }
`;

const Profile = () => {
  const [state, dispatch] = useContext(AirtableContext);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const router = useRouter();

  const teacherId = router.query.profile;

  console.log(router);
  useEffect(() => {
    setCurrentTeacher(getTeacherById(teacherId, state.teachers));
  }, [dispatch, state.teachers, teacherId]);

  const handleClick = () => {
    router.back();
    // if (router.history.length === 1) {
    //   router.push('/');
    // } else {
    //   router.back();
    // }
  };

  return currentTeacher ? (
    <Base>
      <BackButton onClick={handleClick}>
        <ArrowBack />
      </BackButton>
      <Info>
        <Image src={currentTeacher.image} alt="" />
        <Name>{currentTeacher.name}</Name>
        {currentTeacher.instagramUrl && (
          <SocialLink
            component="a"
            href={currentTeacher.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} width="24px" alt="In" />
            {currentTeacher.instagram}
          </SocialLink>
        )}
        {currentTeacher.vkUrl && (
          <SocialLink
            component="a"
            href={currentTeacher.vkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VkIcon} width="24px" alt="Vk" />
            {currentTeacher.vk}
          </SocialLink>
        )}

        <Description>{currentTeacher.description}</Description>
      </Info>

      <PracticeList>
        {currentTeacher.practiceIds.map(practiceId => {
          const practice = getPracticeById(practiceId, state.practices);

          return (
            practice && (
              <PracticeChip
                key={practiceId}
                style={{
                  color: practice.color,
                  backgroundColor: alpha(practice.color, 0.12),
                }}
                label={practice.name}
              />
            )
          );
        })}
      </PracticeList>

      <Helmet>
        <meta name="description" content={currentTeacher.description} />
        <title>
          {currentTeacher.name} (@{currentTeacher.instagram}) | ditate.me
        </title>
      </Helmet>
    </Base>
  ) : null;
};

export default Profile;