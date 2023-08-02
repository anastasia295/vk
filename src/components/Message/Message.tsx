import React from 'react';
import avatar from './img/avatar.svg';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Text from '../../shared/Text';
import Img from '../../shared/Img';
import message from './img/message.svg';
import page from './img/page.svg';
import news from './img/news.svg';
import friends from './img/friends.svg';
import communities from './img/communities.svg';
import Input from '../../shared/Input';
import svgImage from '../../images/svgImage.svg';
import lupa from '../../images/lupa.svg';

const Friends = [
  { route: '/avatar', name: 'Настя', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Даша', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Маша', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Ксения', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Алла', img: avatar, mes: 'привет' },
];

function Message() {
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
          <Area>
            <Input
              color='black'
              width={645}
              height={35}
              borderTopRightRadius={9}
              borderTopLeftRadius={9}
              paddingLeft={4}
              placeholder='Поиск'
              border='1px solid'
              borderColor='white'
              borderBottomColor='#E0E0E0'
            />
            <Area position='relative' top={-27} left={1}>
              <Img height={16} width={21} src={lupa} alt='' />
            </Area>
          </Area>
          {Friends.map(({ name, route, img, mes }) => {
            return (
              <>
                <Flexbox display='flex' flexDirection='row'>
                  <Area mt={2} ml={4}>
                    <Img borderRadius={50} width={55} height={55} src={img} alt='' />
                  </Area>
                  <Area mt={2} borderBottom='1px solid' borderColor='#E0E0E0' pl={13} width={600}>
                    <Text fontSize={21}>{name}</Text>
                    <Area>
                      <Img borderRadius={50} width={25} height={25} src={img} alt='' />
                    </Area>
                    <Area>
                      <Text fontSize={15}>{mes}</Text>
                    </Area>
                  </Area>
                </Flexbox>
              </>
            );
          })}
        </Area>
      </Flexbox>

      <Flexbox>
        <Area ml={20} width={300} height={100} backgroundColor='white' border={1} borderRadius={10}>
          <Area mt={15} ml={15}>
            <Text fontSize={17}>Все чаты</Text>
          </Area>
          <Area mt={15} ml={15}>
            <Text fontSize={17}>Непрочитанные</Text>
          </Area>
        </Area>
      </Flexbox>
    </Flexbox>
  );
}

export default Message;
