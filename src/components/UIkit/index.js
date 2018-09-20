import React, { PureComponent } from 'react';
import { TouchableHighlight } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import s from './style';

class UIkit extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  renderNavigationItem(screen, text) {
    const { navigation } = this.props;

    return (
      <TouchableHighlight onPress={() => navigation.navigate(screen)} style={s.btnNavigate}>
        <Text style={s.textBtn}>{text}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent={true}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full={true}>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default UIkit;
