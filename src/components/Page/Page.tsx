import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';

import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Text from '../../shared/Text';
import Input from '../../shared/Input';
import svgImage from '../../images/svgImage.svg';
import lupa from '../../images/lupa.svg';
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

const ITEMS = [
  { route: '/page', name: 'Моя страница', img: page },
  { route: '/news', name: 'Новости', img: news },
  { route: '/message', name: 'Мессенджер', img: message },
  { route: '/friends', name: 'Друзья', img: friends },
  { route: '/communities', name: 'Сообщества', img: communities },
];

const LISTS = [
  { route: '/mussic', name: 'Музыка', img: mussic },
  { route: '/foto', name: 'Фото', img: foto },
  { route: '/clip', name: 'Клипы', img: clip },
  { route: '/t', name: 'Статьи', img: t },
  { route: '/nft', name: 'NFT', img: nft },
];

function Page() {
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
                  <Input bcolor='#f5fffa' width='225' placeholder='Поиск' />
                  <Area ml='1' mt='-25'>
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
                {ITEMS.map(({ name, route, img }) => {
                  return (
                    <>
                      <Area mt='15' pl='38'>
                        <Text wspace='nowrap' fs='15'>
                          {name}
                        </Text>
                      </Area>
                      <Area mt='-19' ml='7'>
                        <Img width='25' height='25' src={img} alt='' />
                      </Area>
                    </>
                  );
                })}
              </Flexbox>

              <Area width='100%' mr='auto' ml='auto'>
                <Flexbox>
                  <Flexbox>
                    <Area
                      mt='15'
                      ml='80'
                      width='1000'
                      height='200'
                      bcolor='white'
                      border='1'
                      bradius='10'
                    >
                      <Area ml='20' mt='20'>
                        <Img bradius='200' height='160' width='160' src={avatar} alt='' />
                      </Area>
                      <Area ml='200' mt='-120'>
                        <Text fs='15' fw='bold'>
                          Петр Иванов
                        </Text>
                      </Area>
                      <Button bcolor='#f5fffa' width='220' height='28' mr='100' mt='-22'>
                        <Text> Редактировать профиль</Text>
                      </Button>
                      <Button bcolor='#f5fffa' width='75' height='28' mr='20' mt='-29'>
                        <Text> Еще </Text>
                        <Area mt='-12' ml='39'>
                          <Img height='10' width='10' src={str} alt='' />
                        </Area>
                      </Button>
                    </Area>
                  </Flexbox>
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
                              {LISTS.map(({ name, route, img }) => {
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
                              <Button bcolor='#f5fffa' width='100' height='28' mr='10' mt='15'>
                                <Text>Все записи</Text>
                              </Button>
                              <Button bcolor='#f5fffa' width='100' height='28' mr='10' mt='15'>
                                <Text> Мои записи</Text>
                              </Button>
                              <Button bcolor='#f5fffa' width='130' height='28' mr='200' mt='15'>
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
            </Flexbox>
          </Area>
        </Area>
      </Area>
    </LayoutWrapper>
  );
}

export default Page;
