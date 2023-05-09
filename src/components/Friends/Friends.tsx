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
    <LayoutWrapper>
      <Flexbox display='flex' direction='row'>
        <Flexbox>
          <Area mt='' ml='80' width='750' height='800' bcolor='white' border='1' bradius='15'>
            <Flexbox display='flex' direction='row'>
              <Button bcolor='white' width='110' height='28' ml='25' mt='15'>
                <Text color='#2271B3' fw='bold'>
                  Все друзья
                </Text>
              </Button>
              <Button bcolor='white' width='115' height='28' ml='10' mt='15'>
                <Text color='	#787878' fw='bold'>
                  Друзья онлайн
                </Text>
              </Button>
              <Button bcolor='#2271B3' width='99' height='31' ml='367' mt='15'>
                <Text fw='bold' color='white'>
                  Найти друзей
                </Text>
              </Button>
            </Flexbox>
            <Area mt='15' ml='25'>
              <Input color='white' width='650' placeholder='Поиск друзей' />

              <Area
                position='relative'
                top='-40'
                right='-646'
                bcolor='#f5fffa'
                width='55'
                height='39'
                bradius='4'
              >
                <Area position='absolute' top='9' right='15'>
                  <Img height='19' width='24' src={lupa} alt='' />
                </Area>
              </Area>
            </Area>
            {Pieceofinformation.map(({ name, route, img, communication }) => {
              return (
                <>
                  <Flexbox display='flex' direction='row'>
                    <Area mt='7' ml='25'>
                      <Img bradius='500' width='95' height='95' src={img} alt='' />
                    </Area>
                    <Area bbottom='0.01' pl='13' width='100%'>
                      <Text fs='21'>{name}</Text>

                      <Area mt='25'>
                        <Text fs='15'>{communication}</Text>
                      </Area>
                    </Area>
                  </Flexbox>
                </>
              );
            })}
          </Area>
        </Flexbox>

        <Flexbox>
          <Area ml='15' width='400' height='130' bcolor='white' border='1' bradius='10'>
            <Area mt='16' ml='15'>
              <Text fs='17'>Мои друзья</Text>
            </Area>
            <Area mt='16' ml='15'>
              <Text fs='17'>Заявки в друзья</Text>
            </Area>
            <Area mt='16' ml='15'>
              <Text fs='17'>Поиск друзей</Text>
            </Area>
          </Area>
        </Flexbox>
      </Flexbox>
    </LayoutWrapper>
  );
}

export default Friends;
