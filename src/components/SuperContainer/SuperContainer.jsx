/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import {
  Tooltip,
  Avatar,
  Button,
  Autocomplete,
  TextField,
  SvgIcon,
  Alert,
  Link,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import Avatar1Image from 'src/assets/images/SuperContainer_Avatar.png';
import { ReactComponent as StarFilled1 } from 'src/assets/images/_StarFilled.svg';
import { styled } from '@mui/material/styles';

const SuperContainer1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `1px 24px`,
  boxSizing: `border-box`,
  height: '100%',
  width: '100%',
});

const Frame12 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `197px`,
  height: `243px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Title = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Components']['Button Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Large'].fontSize,
  letterSpacing: theme.typography['Components']['Button Large'].letterSpacing,
  textDecoration: theme.typography['Components']['Button Large'].textDecoration,
  lineHeight: theme.typography['Components']['Button Large'].lineHeight,
  textTransform: theme.typography['Components']['Button Large'].textTransform,
  width: `154px`,
  height: `24px`,
  position: `absolute`,
  left: `17px`,
  top: `26px`,
}));

const Description = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  width: `158px`,
  height: `164px`,
  position: `absolute`,
  left: `13px`,
  top: `62px`,
});

const Frame11 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `26px 35px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 13px`,
});

const Avatar1 = styled(Avatar)({
  margin: `0px`,
  width: `40px`,
  height: `40px`,
});

const ButtonContained = styled(Button)({
  margin: `15px 0px 0px 0px`,
});

const Autocomplete1 = styled(Autocomplete)({
  width: `220px`,
  margin: `15px 0px 0px 0px`,
});

const Icon1 = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette['Action']['Active (54p)'],
  margin: `15px 0px 0px 0px`,
}));

const AlertFilled = styled(Alert)({
  width: `320px`,
  margin: `15px 0px 0px 0px`,
});

const Link1 = styled(Link)(({ theme }) => ({
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `15px 0px 0px 0px`,
}));

const FormControlLabel1 = styled(FormControlLabel)({
  margin: `0px 0px 0px 13px`,
});

function SuperContainer(props) {
  return (
    <SuperContainer1>
      <Helmet>
        <title>SuperContainer</title>
      </Helmet>
      <Frame12>
        <Title>{`TITLE HERE`}</Title>
        <Description>
          {`Description here lorem ipsum lorem ipsum lorem ipsum Description here lorem ipsum lorem ipsum lorem ipsum `}
        </Description>
      </Frame12>
      <Tooltip arrow={true} placement={'top'} title={undefined}>
        <Frame11>
          <Avatar1 variant="circular" src={Avatar1Image} alt={'Avatar'} />
          <ButtonContained
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => alert('You Clicked me')}
          >
            {' '}
            Large{' '}
          </ButtonContained>
          <Autocomplete1
            autoHighlight
            disableClearable
            openOnFocus
            blurOnSelect
            renderInput={(params) => (
              <TextField
                variant="outlined"
                {...params}
                fullWidth
                label={`Label`}
              />
            )}
          />
          <Icon1 fontSize={'large'} component={StarFilled1} />
          <AlertFilled variant="filled" severity={'success'}>
            {' '}
            Description{' '}
          </AlertFilled>
          <Link1 href="#" underline="always">
            Link
          </Link1>
        </Frame11>
      </Tooltip>
      <FormControlLabel1
        control={
          <Checkbox defaultChecked={false} size="medium" color="primary" />
        }
        label={`Label`}
      />
    </SuperContainer1>
  );
}

export default SuperContainer;