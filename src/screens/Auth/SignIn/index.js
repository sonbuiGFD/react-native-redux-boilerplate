import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
  Button, Item, Input, Icon,
} from 'native-base';
import { Text } from 'src/components';
import { common } from 'src/constants/assets';
import colors from 'src/constants/colors';

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
              <Text style={s.form__title} type="bold">
                Chào mừng đến với Steenify
              </Text>
              <Item inlineLabel={true} regular={true} style={s.form__item}>
                <Icon style={s.form__icon} name="phone-portrait" />
                <Input
                  style={s.form__input}
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor={colors.input__placeholder}
                />
              </Item>
              <Item inlineLabel={true} regular={true} style={s.form__item}>
                <Icon style={s.form__icon} name="lock" />
                <Input
                  style={s.form__input}
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor={colors.input__placeholder}
                />
                <Button transparent={true}>
                  <Icon style={s.form__icon__password} name="eye" />
                </Button>
              </Item>
              <View style={s.form__controls}>
                <TouchableOpacity style={s.form__remember}>
                  <Icon style={s.form__remember__checkbox} name="square-o" type="FontAwesome" />
                  <Text style={s.form__remember__label}>Nhớ mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.form__forgot}>
                  <Text type="bold" style={s.form__forgot__label}>Quên mật khẩu?</Text>
                </TouchableOpacity>
              </View>

              <Button block={true} style={s.form__cta}>
                <Text style={s.form__cta__label}>Đăng nhập</Text>
              </Button>
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
