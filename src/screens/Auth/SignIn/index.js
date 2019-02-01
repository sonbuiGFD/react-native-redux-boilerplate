import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
  Button, Item, Input, Icon,
} from 'native-base';
import { Text } from 'src/components';
import { common } from 'src/constants/assets';
import s from './style';

export default class SignIn extends PureComponent {
  toSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

  render() {
    return (
      <SafeAreaView style={s.saveView}>
        <View style={s.container}>
          <View style={s.form__wrapper}>
            <Image style={s.logo} source={common.logo} />
            <View style={s.form}>
              <Item inlineLabel={true}>
                <Icon name="phone-portrait" style={{ color: '#c4c4c4' }} />
                <Input />
              </Item>
            </View>
          </View>

          <Button onPress={this.toSignUp} transparent={true} style={s.footer__link}>
            <Text style={s.footer__link__text}>Bạn chưa có tài khoản?</Text>
            <Text style={s.footer__link__text__active}>Tạo tài khoản</Text>
          </Button>
          <Image style={s.authen__bg} source={common.authenBg} />
        </View>
      </SafeAreaView>
    );
  }
}
