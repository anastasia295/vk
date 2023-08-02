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
import News from '../News/News';
import Communities from '../Communities/Communities';

const ITEMS = [
  { to: '/page', name: 'Моя страница', img: page },
  { to: '/news', name: 'Новости', img: news },
  { to: '/message', name: 'Мессенджер', img: message },
  { to: '/friends', name: 'Друзья', img: friends },
  { to: '/communities', name: 'Сообщества', img: communities },
];

function MainPage() {
  return (
    <>
      <Area backgroundColor='white' width='100%' height={55}>
        <LayoutWrapper>
          <Flexbox display='flex' justifyContent='space-between' alignItems='center'>
            <Flexbox display='flex'>
              <Area ml='-5px'>
                <Img height={50} width={155} src={svgImage} alt='' />
              </Area>
              <Area position='relative' mt={10} ml={52}>
                <Input
                  backgroundColor='#f5fffa'
                  width={225}
                  height={32}
                  fontSize={13}
                  placeholder='Поиск'
                  borderRadius={10}
                  border='1px solid'
                  borderColor='#E8E8E8'
                  paddingLeft={33}
                />
                <Area position='absolute' top={9} left={2}>
                  <Img height={25} width={25} src={lupa} alt='' />
                </Area>
              </Area>
            </Flexbox>
            <Area>
              <Flexbox>
                <Text fontSize={12} fontWeight='bold'>
                  Switch to English
                </Text>
              </Flexbox>
            </Area>
          </Flexbox>
        </LayoutWrapper>
      </Area>
      <Area backgroundColor='#f5fffa' width='100%'>
        <LayoutWrapper>
          <Flexbox>
            <Flexbox display='flex' justifyContent='center'>
              <Flexbox>
                <Area mt={3}>
                  {ITEMS.map(({ name, to, img }) => {
                    return (
                      <>
                        <Area width={100} mt={15} pl={38}>
                          <Link to={to}>
                            <Text fontSize={15}>{name}</Text>
                          </Link>
                        </Area>
                        <Area mt={-19}>
                          <Img width={25} height={25} src={img} alt='' />
                        </Area>
                      </>
                    );
                  })}
                </Area>
              </Flexbox>
              <Flexbox>
                <Routes>
                  <Route path='/Message' element={<Message />} />
                  <Route path='/Friends' element={<Friends />} />
                  <Route path='/Page' element={<Page />} />
                  <Route path='/News' element={<News />} />
                  <Route path='/Communities' element={<Communities />} />
                </Routes>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </LayoutWrapper>
      </Area>
    </>
  );
}

export default MainPage;
