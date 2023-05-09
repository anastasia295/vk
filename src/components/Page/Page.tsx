import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Text from '../../shared/Text';
import Img from '../../shared/Img';
import page from './img/page.svg';
import news from './img/news.svg';
import foto from './img/foto.svg';
import mussic from './img/mussic.svg';
import t from './img/t.svg';
import clip from './img/clip.svg';
import nft from './img/nft.svg';
import message from './img/message.svg';
import str from './img/str.svg';
import friends from './img/friends.svg';
import communities from './img/communities.svg';
import avatar from './img/avatar.svg';
import Button from '../../shared/Button';
import Settings from '../Settings/Settings';

const LISTS = [
  { to: '/mussic', name: 'Музыка', img: mussic },
  { to: '/foto', name: 'Фото', img: foto },
  { to: '/clip', name: 'Клипы', img: clip },
  { to: '/t', name: 'Статьи', img: t },
  { to: '/nft', name: 'NFT', img: nft },
];

function Page() {
  return (
    <LayoutWrapper>
      <Area width='100%' mr='auto' ml='auto'>
        <Flexbox>
          <Flexbox>
            <Area mt='15' ml='80' width='1000' height='200' bcolor='white' border='1' bradius='10'>
              <Area ml='20' mt='20'>
                <Img bradius='200' height='160' width='160' src={avatar} alt='' />
              </Area>
              <Area ml='200' mt='-120'>
                <Text fs='15' fw='bold'>
                  Петр Иванов
                </Text>
              </Area>
              <Flexbox display='flex' direction='row' justifyContent='flex-end'>
                <Button bcolor='#f5fffa' width='220' height='28' mr='10' mt='-15'>
                  <Link to='/Settings'>
                    <Text fw='bold' color='#2271B3'>
                      Редактировать профиль
                    </Text>
                  </Link>
                </Button>
                <Button bcolor='#f5fffa' width='75' height='28' mr='25' mt='-15'>
                  <Text fw='bold' color='#2271B3'>
                    Еще
                  </Text>
                  <Area mt='-12' ml='39'>
                    <Img height='10' width='10' src={str} alt='' />
                  </Area>
                </Button>
              </Flexbox>
            </Area>
          </Flexbox>
          <Routes>
            <Route path='/Settings' element={<Settings />} />
          </Routes>
          <Area height=''>
            <Flexbox display='flex' fwrap='wrap'>
              <Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='80'
                    width='600'
                    height='400'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  >
                    <Flexbox display='flex' justifyContent='space-evenly'>
                      {LISTS.map(({ name, to, img }) => {
                        return (
                          <>
                            <Area mt='15'>
                              <Img width='25' height='25' src={img} alt='' />
                            </Area>
                            <Area ml='-25' mt='17'>
                              <nav>{name}</nav>
                            </Area>
                          </>
                        );
                      })}
                    </Flexbox>
                  </Area>
                </Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='80'
                    width='600'
                    height='60'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  ></Area>
                </Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='80'
                    width='600'
                    height='200'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  >
                    <Flexbox display='flex'>
                      <Button bcolor='white' width='100' height='28' ml='25' mt='15'>
                        <Text>Все записи</Text>
                      </Button>
                      <Button bcolor='white' width='100' height='28' ml='15' mt='15'>
                        <Text> Мои записи</Text>
                      </Button>
                      <Button bcolor='white' width='130' height='28' ml='10' mt='15'>
                        <Text> Архив записей</Text>
                      </Button>
                    </Flexbox>
                  </Area>
                </Flexbox>
              </Flexbox>
              <Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='15'
                    width='382'
                    height='350'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  ></Area>
                </Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='15'
                    width='382'
                    height='150'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  ></Area>
                </Flexbox>
                <Flexbox>
                  <Area
                    mt='15'
                    ml='15'
                    width='382'
                    height='400'
                    bcolor='white'
                    border='1'
                    bradius='10'
                  ></Area>
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Area>
        </Flexbox>
      </Area>
    </LayoutWrapper>
  );
}

export default Page;
