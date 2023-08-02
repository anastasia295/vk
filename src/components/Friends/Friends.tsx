import React from 'react';
import avatar from './img/avatar.svg';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Text from '../../shared/Text';
import Img from '../../shared/Img';

import Input from '../../shared/Input';

import lupa from '../../images/lupa.svg';
import Button from '../../shared/Button';

const Pieceofinformation = [
  { route: '/avatar', name: 'Настя', img: avatar, communication: 'Написать сообщение' },
  { route: '/avatar', name: 'Даша', img: avatar, communication: 'Написать сообщение' },
  { route: '/avatar', name: 'Маша', img: avatar, communication: 'Написать сообщение' },
  { route: '/avatar', name: 'Ксения', img: avatar, communication: 'Написать сообщение' },
  { route: '/avatar', name: 'Алла', img: avatar, communication: 'Написать сообщение' },
];

function Friends() {
  return (
    <Flexbox display='flex' flexDirection='row'>
      <Flexbox>
        <Area
          mt={3}
          ml={60}
          width={680}
          height={800}
          backgroundColor='white'
          border={1}
          borderRadius={15}
        >
          <Flexbox display='flex' flexDirection='row'>
            <Area width={500}>
              <Flexbox display='flex' justifyContent='flex-start'>
                <Button
                  borderRadius={10}
                  backgroundColor='white'
                  border='1px solid'
                  borderColor='#808080'
                  height={33}
                  ml={25}
                  mt={15}
                >
                  <Text color='#2271B3' fontWeight='bold'>
                    Все друзья
                  </Text>
                </Button>
                <Button
                  borderRadius={10}
                  backgroundColor='white'
                  border='1px solid'
                  borderColor='#808080 '
                  height={33}
                  ml={10}
                  mt={15}
                >
                  <Text color='#2271B3' fontWeight='bold'>
                    Друзья онлайн
                  </Text>
                </Button>
              </Flexbox>
            </Area>
            <Area width={300}>
              <Flexbox display='flex' justifyContent='flex-end'>
                <Button
                  borderRadius={10}
                  border='1px solid'
                  borderColor='#2271B3'
                  backgroundColor='#2271B3'
                  height={33}
                  mt={15}
                  mr={25}
                >
                  <Text fontSize={12} fontWeight='bold' color='white'>
                    Найти друзей
                  </Text>
                </Button>
              </Flexbox>
            </Area>
          </Flexbox>
          <Area mt={15} ml={25}>
            <Input
              border='1px solid'
              borderColor='#808080'
              borderRadius={8}
              color='black'
              width={610}
              height={38}
              placeholder='Поиск друзей'
              fontSize={15}
              paddingLeft={3}
            />

            <Area
              position='relative'
              top={-40}
              right={-573}
              backgroundColor='#f5fffa'
              width={55}
              height={39}
              borderRadius={4}
            >
              <Area position='absolute' top={9} right={15}>
                <Img height={19} width={24} src={lupa} alt='' />
              </Area>
            </Area>
          </Area>
          {Pieceofinformation.map(({ name, route, img, communication }) => {
            return (
              <>
                <Flexbox display='flex' flexDirection='row'>
                  <Area ml={25}>
                    <Img borderRadius={500} width={95} height={95} src={img} alt='' />
                  </Area>
                  <Area borderBottom='1px solid' borderColor='#E0E0E0' pl={13} width={580}>
                    <Text font-size='21'>{name}</Text>

                    <Area mt={25}>
                      <Text fontSize={15}>{communication}</Text>
                    </Area>
                  </Area>
                </Flexbox>
              </>
            );
          })}
        </Area>
      </Flexbox>

      <Flexbox>
        <Area ml={20} width={300} height={130} backgroundColor='white' border={1} borderRadius={10}>
          <Area mt={16} ml={15}>
            <Text fontSize={17}>Мои друзья</Text>
          </Area>
          <Area mt={16} ml={15}>
            <Text fontSize={17}>Заявки в друзья</Text>
          </Area>
          <Area mt={16} ml={15}>
            <Text fontSize={17}>Поиск друзей</Text>
          </Area>
        </Area>
      </Flexbox>
    </Flexbox>
  );
}

export default Friends;
