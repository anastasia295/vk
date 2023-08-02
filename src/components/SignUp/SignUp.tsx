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
    <Area mt={220}>
      <Flexbox display='flex' flexDirection='row' justifyContent='center'>
        <Area
          backgroundColor='#f5fffa'
          borderRadius={4}
          border='1px solid'
          borderColor='#E8E8E8'
          borderRight={0}
          width={370}
          height={430}
        >
          <Flexbox display='flex' flexDirection='row'>
            <Area ml={4} mt={3}>
              <Img width={28} height={26} src={vk} alt=''></Img>
            </Area>
            <Area mt={3}>
              <Text fontSize={20}>ID</Text>
            </Area>
          </Flexbox>
          <Area width={250} mt={15} pl={30}>
            <Text fontSize={19} textAlign='left'>
              ВКонтакте можно войти через VK ID
            </Text>
          </Area>
          <Area mt={18} ml={4}>
            <Img width={25} height={25} src={account} alt='' />
          </Area>
          <Area mt={-25} pl={75}>
            <Text fontSize={15} color='#808080' textAlign='left'>
              Единый аккаунт для сервисов VK и партнёров
            </Text>
          </Area>
          <Area mt={18} ml={4}>
            <Img width={25} height={25} src={entrance1} alt='' />
          </Area>

          <Area mt={-25} pl={75}>
            <Text fontSize={15} color='#808080' textAlign='left'>
              Быстрый вход в одно нажатие
            </Text>
          </Area>
          <Area mt={18} ml={4}>
            <Img width={25} height={25} src={protection1} alt='' />
          </Area>
          <Area mt={-30} pl={75}>
            <Text fontSize={15} color='#808080' textAlign='left'>
              Надёжная защита с привязкой к телефону
            </Text>
          </Area>
          <Area mt={139} pl={27}>
            <Text color='#1e90ff' textAlign='left' fontSize={15}>
              Подробнее о VK ID
            </Text>
          </Area>
        </Area>
        <Area
          backgroundColor='white'
          borderRadius={4}
          border='1px solid'
          borderColor='#E8E8E8'
          borderLeft={0}
          width={370}
          height={430}
        >
          {' '}
          <Flexbox display='flex' justifyContent='center'>
            <Img width={60} height={80} src={vk} alt=''></Img>{' '}
          </Flexbox>
          <Text textAlign='center' fontSize={22}>
            Введите номер
          </Text>
          <Flexbox display='block'>
            <Area width={300} ml='auto' mr='auto' mt={15}>
              <Text textAlign='center' color='#808080' fontSize={15}>
                Ваш номер телефона будет использоваться для входа в аккаунт
              </Text>
            </Area>
          </Flexbox>
          <Flexbox>
            <Area mt={15} ml={33}>
              <Input
                backgroundColor='#f5fffa'
                width={260}
                height={38}
                fontSize={13}
                borderRadius={10}
                border='1px solid'
                borderColor='#E8E8E8'
                placeholder='Введите номер телефона'
                marginBottom={0}
                marginTop={0}
                marginLeft={10}
                paddingLeft={3}
              />
            </Area>
          </Flexbox>
          <Area mt={10} ml={10}>
            <Text fontSize={18} color='#808080' textAlign='left'>
              <Inputcheckbox
                width={20}
                height={20}
                type='checkbox'
                name='happy'
                value='yes'
                marginLeft={37}
                marginTop={10}
              />
              Сохранить вход
            </Text>
          </Area>
          <Area mt={30}>
            <Flexbox display='flex' justifyContent='center'>
              <Button
                width={280}
                height={38}
                borderRadius={10}
                border='1px solid'
                borderColor='#0000ff'
                borderX='auto'
                backgroundColor='#0000ff'
              >
                <Text color='white' fontWeight='bold'>
                  Продолжить
                </Text>
              </Button>
            </Flexbox>
          </Area>
          <Flexbox display='block'>
            <Area mt={40} pl={30} mr='' width={300}>
              <Text textAlign='center' color='#808080' fontSize={12}>
                Нажимая «Продолжить», вы принимаете пользовательское соглашение и политику
                конфиденциальности
              </Text>
            </Area>
          </Flexbox>
        </Area>
      </Flexbox>
    </Area>
  );
}
export default SignUp;
