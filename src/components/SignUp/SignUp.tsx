import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import Img from '../../shared/Img';
import Inputcheckbox from '../../shared/Inputcheckbox';
import Input from '../../shared/Input';
import Content from '../../shared/Content';
import vk from '../../images/vk.svg';
import account from './img/account.svg';
import entrance1 from './img/entrance1.svg';
import protection1 from './img/protection1.svg';

function SignUp() {
  return (
    <Area mt='220'>
      <Flexbox display='flex' direction='row' justifyContent='center'>
        <Content bcolor='#f5fffa'>
          <Area mt='-27' mr='290'>
            <Img width='25' height='35' src={vk} alt=''></Img>
          </Area>
          <Area mt='-30' mr='240'>
            <Text fs='20'>ID</Text>
          </Area>
          <Area width='250' mt='15' pl='20'>
            <Text fs='19' ta='left' lheight=''>
              ВКонтакте можно войти через VK ID
            </Text>
          </Area>
          <Area mt='18' ml='-295'>
            <Img width='25' height='25' src={account} alt='' />
          </Area>
          <Area mt='-25' pl='66'>
            <Text fs='15' color='#808080' lheight='' ta='left'>
              Единый аккаунт для сервисов VK и партнёров
            </Text>
          </Area>
          <Area mt='18' ml='-295'>
            <Img width='25' height='25' src={entrance1} alt='' />
          </Area>

          <Area mt='-25' pl='66'>
            <Text fs='15' color='#808080' lheight='' ta='left'>
              Быстрый вход в одно нажатие
            </Text>
          </Area>
          <Area mt='18' ml='-295'>
            <Img width='25' height='25' src={protection1} alt='' />
          </Area>
          <Area mt='-30' pl='66'>
            <Text fs='15' color='#808080' lheight='' ta='left'>
              Надёжная защита с привязкой к телефону
            </Text>
          </Area>
          <Area mt='139' pl='27'>
            <Text color='#1e90ff' ta='left' fs='15'>
              Подробнее о VK ID
            </Text>
          </Area>
        </Content>
        <Content bcolor='white'>
          <Img width='60' height='80' src={vk} alt=''></Img>
          <Text fs='22'>Введите номер</Text>
          <Flexbox display='block'>
            <Area width='300' ml='auto' mr='auto' mt='15'>
              <Text color='#808080' fs='15'>
                Ваш номер телефона будет использоваться для входа в аккаунт
              </Text>
            </Area>
          </Flexbox>
          <Flexbox display='block'>
            <Area mt='15'>
              <Input bcolor='#f5fffa' width='237' placeholder='Введите номер телефона' />
            </Area>
          </Flexbox>
          <Area mt='10' ml='10'>
            <Text fs='18' color='#808080' ta='left'>
              <Inputcheckbox width='20' height='20' type='checkbox' name='happy' value='yes' />
              Сохранить вход
            </Text>
          </Area>

          <Area mt='30' width='100%'>
            <Button bcolor='#0000ff' color='white' border='#0000ff'>
              Продолжить
            </Button>
          </Area>

          <Flexbox display='block'>
            <Area mt='40' pl='30' mr='' width='300'>
              <Text color='#808080' fs='12'>
                Нажимая «Продолжить», вы принимаете пользовательское соглашение и политику
                конфиденциальности
              </Text>
            </Area>
          </Flexbox>
        </Content>
      </Flexbox>
    </Area>
  );
}
export default SignUp;
