import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import Input from '../../shared/Input';
import {
  Content,
  ContentID,
  ContentNumber,
  Inputcheckbox,
  Mybutton,
  MyInput,
  Mylabel,
  Textagreement,
  TextNumber,
  TextVK,
  TextVKID,
  TextVKID1,
  TextАccount,
  Vk,
  Vk1,
} from './styles';
import vk from '../../images/vk.svg';
import account from './img/account.svg';
import entrance1 from './img/entrance1.svg';
import protection1 from './img/protection1.svg';

function SignUp() {
  return (
    <div className='App'>
      <Content>
        <ContentID>
          <Vk1 src={vk} alt='' />
          <Area mt='-27' mr='250'>
            <Text fs='20'>ID</Text>
          </Area>
          <TextVKID>ВКонтакте можно войти через VK ID</TextVKID>
          <Vk1 src={account} alt='' />
          <TextVK>Единый аккаунт для сервисов VK и партнёров</TextVK>
          <Vk1 src={entrance1} alt='' />
          <TextVK>Быстрый вход в одно нажатие</TextVK>
          <Vk1 src={protection1} alt='' />
          <TextVK>Надёжная защита с привязкой к телефону</TextVK>
          <TextVKID1>Подробнее о VK ID</TextVKID1>
        </ContentID>
        <ContentNumber>
          <Vk src={vk} alt='' />
          <TextNumber>Введите номер</TextNumber>
          <TextАccount>Ваш номер телефона будет использоваться для входа в аккаунт</TextАccount>
          <MyInput placeholder='Введите номер телефона' />
          <Mylabel>
            <Inputcheckbox type='checkbox' id='happy' name='happy' value='yes' /> Сохранить вход
          </Mylabel>
          <Mybutton>Продолжить</Mybutton>
          <Textagreement>
            Нажимая «Продолжить», вы принимаете пользовательское соглашение и политику
            конфиденциальности
          </Textagreement>
        </ContentNumber>
      </Content>
    </div>
  );
}
export default SignUp;
