import React from 'react';
import Flexbox from '../../shared/Flexbox';
import AreA from '../../shared/Area';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import Input from '../../shared/Input';
import {
  Header,
  Main,
  Div2,
  Div4,
  Div3,
  MyInput,
  HeaderInp,
  Inputcheckbox,
  MagnifyingGlass,
  Mobile,
  Mybutton,
  Mybutton2,
  Mybutton3,
  MyInput2,
  Mylabel,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Vk,
  Wrapper,
  Text7,
  MyImage,
} from './styles';
import svgImage from './img/svgImage.svg';
import lupa from './img/lupa.svg';
import mobile from './img/mobile.svg';
import vk from '../../images/vk.svg';

function SignIn() {
  return (
    <div>
      <Wrapper>
        <Header>
          <HeaderInp>
            <MyImage src={svgImage} alt='' />
            <MyInput placeholder='Поиск' /> <MagnifyingGlass src={lupa} alt='' />
          </HeaderInp>
          <Text7>Switch to English</Text7>
        </Header>
        <Main>
          <Div2>
            <Text2>ВКонтакте для мобильных устройств</Text2>
            <Text3>
              Установите официальное мобильное приложение ВКонтакте и оставайтесь в курсе новостей
              ваших друзей, где бы вы ни находились.
            </Text3>
            <Mobile src={mobile} alt='' />
          </Div2>
          <Div3>
            <Vk src={vk} alt='' />
            <Text4>Вход ВКонтакте</Text4>
            <MyInput2 placeholder='Телефон или почта' />
            <Mylabel>
              <Inputcheckbox type='checkbox' id='happy' name='happy' value='yes' />
              Сохранить вход
            </Mylabel>
            <Mybutton>Войти</Mybutton>
            <Text5>или</Text5>
            <Mybutton2>QR-код</Mybutton2>
            <Div4>
              <Mybutton3>Зарегистрироваться</Mybutton3>
              <Text6>
                После регистрации вы получите доступ ко всем возможностям VK ID Узнать больше
              </Text6>
            </Div4>
          </Div3>
        </Main>
      </Wrapper>
    </div>
  );
}
export default SignIn;
