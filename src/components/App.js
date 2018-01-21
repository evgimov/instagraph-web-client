import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import TitleBar from './TitleBar';
import HeatmapContainer from '../containers/HeatmapContainer';
import UsernameFormContainer from '../containers/UsernameFormContainer';

// Define this component's style rules using regular CSS; since this
// component's style rules utilize media queries, which are not
// supported by inline styles.
//
import "./App.css";

const App = (props) => {
  const {setUsernameResetActiveYearAndGetPosts, username} = props;

  return (
    <div>
      <TitleBar
        title="Instagraph"
        icon={{
          name: "hashtag",
          color: "purple"
        }}
      />

      <Container textAlign="center" className="UsernameFormContainer-Container">
        <UsernameFormContainer
          autoFocus
          onSubmit={(values) => {
            setUsernameResetActiveYearAndGetPosts(values.username);
          }}
        />
      </Container>

      {
        username !== "" &&
        <HeatmapContainer />
      }
    </div>
  );
};

App.propTypes = {
  setUsernameResetActiveYearAndGetPosts: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default App;
