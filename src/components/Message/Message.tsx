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

const ITEMS = [
  { route: '/page', name: 'Моя страница', img: page },
  { route: '/news', name: 'Новости', img: news },
  { route: '/message', name: 'Мессенджер', img: message },
  { route: '/friends', name: 'Друзья', img: friends },
  { route: '/communities', name: 'Сообщества', img: communities },
];

const Friends = [
  { route: '/avatar', name: 'Настя', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Даша', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Маша', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Ксения', img: avatar, mes: 'привет' },
  { route: '/avatar', name: 'Алла', img: avatar, mes: 'привет' },
];

function Message() {
  return (
    <LayoutWrapper>
      <Flexbox display='flex' direction='row'>
        <Flexbox>
          <Area ml='80' width='750' height='800' bcolor='white' border='1' bradius='15'>
            <Area>
              <Input color='white' width='700' placeholder='Поиск' />
              <Area position='relative' top='-27' left='5'>
                <Img height='16' width='21' src={lupa} alt='' />
              </Area>
            </Area>
            {Friends.map(({ name, route, img, mes }) => {
              return (
                <>
                  <Flexbox display='flex' direction='row'>
                    <Area mt='7' ml='25'>
                      <Img bradius='50' width='55' height='55' src={img} alt='' />
                    </Area>
                    <Area bbottom='0.01' pl='13' width='100%'>
                      <Text font-size='21'>{name}</Text>
                      <Area mt='' ml=''>
                        <Img bradius='50' width='25' height='25' src={img} alt='' />
                      </Area>
                      <Area mt='-26' ml='37'>
                        <Text font-size='15'>{mes}</Text>
                      </Area>
                    </Area>
                  </Flexbox>
                </>
              );
            })}
          </Area>
        </Flexbox>

        <Flexbox>
          <Area ml='15' width='400' height='100' bcolor='white' border='1' bradius='10'>
            <Area mt='15' ml='15'>
              <Text font-size='17'>Все чаты</Text>
            </Area>
            <Area mt='15' ml='15'>
              <Text font-size='17'>Непрочитанные</Text>
            </Area>
          </Area>
        </Flexbox>
      </Flexbox>
    </LayoutWrapper>
  );
}

export default Message;
