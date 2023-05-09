import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Message from '../Message/Message';
import Friends from '../Friends/Friends';
import Settings from '../Settings/Settings';
import Page from '../Page/Page';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Text from '../../shared/Text';
import Input from '../../shared/Input';
import svgImage from '../../images/svgImage.svg';
import lupa from '../../images/lupa.svg';
import Img from '../../shared/Img';
import page from './img/page.svg';

import news from './img/news.svg';

import message from './img/message.svg';

import friends from './img/friends.svg';
import communities from './img/communities.svg';

const ITEMS = [
  { to: '/page', name: 'Моя страница', img: page },
  { to: '/news', name: 'Новости', img: news },
  { to: '/message', name: 'Мессенджер', img: message },
  { to: '/friends', name: 'Друзья', img: friends },
  { to: '/communities', name: 'Сообщества', img: communities },
];

function MainPage() {
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
                <Area margin='10' pl='52'>
                  <Input bcolor='#f5fffa' width='225' placeholder='Поиск' />
                  <Area position='relative' top='-27' left='5'>
                    <Img height='16' width='21' src={lupa} alt='' />
                  </Area>
                </Area>
              </Flexbox>
              <Text fs='12' fw='bold'>
                Switch to English
              </Text>
            </Flexbox>
            <Flexbox display='flex'>
              <Flexbox>
                {ITEMS.map(({ name, to, img }) => {
                  return (
                    <>
                      <Area mt='15' pl='38'>
                        <Link to={to}>
                          <Text wspace='nowrap' fs='15'>
                            {name}
                          </Text>
                        </Link>
                      </Area>
                      <Area mt='-19' ml='7'>
                        <Img width='25' height='25' src={img} alt='' />
                      </Area>
                    </>
                  );
                })}
              </Flexbox>
              <Routes>
                <Route path='/Message' element={<Message />} />
                <Route path='/Friends' element={<Friends />} />
                <Route path='/Page' element={<Page />} />
                <Route path='/Settings' element={<Settings />} />
              </Routes>
            </Flexbox>
          </Area>
        </Area>
      </Area>
    </LayoutWrapper>
  );
}

export default MainPage;
