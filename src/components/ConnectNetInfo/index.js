import React, { Component } from 'react';
import { NetInfo, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateConnectionInfo } from 'src/Actions';
import s from './style';

class ConnectNetInfo extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { updateConnectionInfoAction } = this.props;
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      updateConnectionInfoAction(connectionInfo);
    });

    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = (connectionInfo) => {
    const { updateConnectionInfoAction } = this.props;
    updateConnectionInfoAction(connectionInfo);
  };

  render() {
    const { connectionInfo } = this.props;
    if (connectionInfo.type === 'none') {
      return (
        <View style={s.container}>
          <Text style={s.text}>YOU ARE OFFLINE</Text>
        </View>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ global }) => ({
  connectionInfo: global.ui.connectionInfo,
});

const mapDispatchToProps = {
  updateConnectionInfoAction: updateConnectionInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectNetInfo);
