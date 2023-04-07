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
      <Area bcolor='#f5fffa' height='100vh' width='100%'>
        <Area bcolor='white' width='100%' height='55'>
          <Area maxWidth='1360' width='100%' mr='auto' ml='auto'>
            <Flexbox display='flex' justifyContent='space-between' aitems='center'>
              <Flexbox display='flex' direction='row'>
                <Area mt='3'>
                  <Img height='50' width='155' src={svgImage} alt='' />
                </Area>
                <Area margin='10' pl='15'>
                  <Input width='225' placeholder='Поиск' />
                  <Area ml='1' mt='-25'>
                    <Img height='16' width='21' src={lupa} alt='' />
                  </Area>
                </Area>
              </Flexbox>
              <Text fs='12' fw='bold'>
                Switch to English
              </Text>
            </Flexbox>
            <Flexbox>
              {ITEMS.map(({ name, route, img }) => {
                return (
                  <>
                    <Area mt='15' pl='38'>
                      <Text fs='15'>{name}</Text>
                    </Area>
                    <Area mt='-19' ml='7'>
                      <Img width='25' height='25' src={img} alt='' />
                    </Area>
                  </>
                );
              })}
            </Flexbox>

            <Flexbox>
              <Area
                mt='-195'
                ml='180'
                width='750'
                height='800'
                bcolor='white'
                border='1'
                bradius='15'
              >
                {' '}
                <Area>
                  <Input color='white' width='700' placeholder='Поиск' />
                  <Area ml='4' mt='-28'>
                    <Img height='16' width='21' src={lupa} alt='' />
                  </Area>
                </Area>
                {Friends.map(({ name, route, img, mes }) => {
                  return (
                    <>
                      <Area bbottom='0.01' mt='15' pl='75'>
                        <Text fs='21'>{name}</Text>
                        <Area mt='8' ml=''>
                          <Img bradius='50' width='25' height='25' src={img} alt='' />
                        </Area>
                        <Area mt='-23' ml='37'>
                          <Text fs='15'>{mes}</Text>
                        </Area>
                      </Area>
                      <Flexbox display='inline-block'>
                        <Area mt='-45' ml='7'>
                          <Img bradius='50' width='55' height='55' src={img} alt='' />
                        </Area>
                      </Flexbox>
                    </>
                  );
                })}
              </Area>
            </Flexbox>
            <Area
              mt='-800'
              ml='960'
              width='400'
              height='100'
              bcolor='white'
              border='1'
              bradius='10'
            >
              <Area mt='15' ml='15'>
                <Text fs='17'>Все чаты</Text>{' '}
              </Area>
              <Area mt='15' ml='15'>
                <Text fs='17'>Непрочитанные</Text>{' '}
              </Area>
            </Area>
          </Area>
        </Area>
      </Area>
    </LayoutWrapper>
  );
}

export default Message;
