import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Text from '../../shared/Text';
import Img from '../../shared/Img';
import foto from './img/foto.svg';
import mussic from './img/mussic.svg';
import t from './img/t.svg';
import clip from './img/clip.svg';
import nft from './img/nft.svg';
import str from './img/str.svg';
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
    <Area width='100%'>
      <Flexbox>
        <Flexbox>
          <Area
            mt={3}
            ml={60}
            width={1000}
            height={200}
            backgroundColor='white'
            border={1}
            borderRadius={10}
          >
            <Area padding={3}>
              <Img borderRadius={200} height={160} width={160} src={avatar} alt='' />
            </Area>
            <Area ml={200} mt={-120}>
              <Text fontSize={20} fontWeight='bold'>
                Петр Иванов
              </Text>
            </Area>
            <Flexbox display='flex' flexDirection='row' justifyContent='flex-end'>
              <Button
                borderRadius={8}
                backgroundColor='#f5fffa'
                border='1px solid'
                borderColor='#E8E8E8'
                width={220}
                height={32}
                mr={10}
                mt={-15}
              >
                <Link to='/Settings'>
                  <Text fontWeight='bold' color='#4682B4'>
                    Редактировать профиль
                  </Text>
                </Link>
              </Button>
              <Button
                borderRadius={8}
                backgroundColor='#f5fffa'
                border='1px solid'
                borderColor='#E8E8E8'
                width={75}
                height={32}
                mr={25}
                mt={-15}
              >
                <Area ml={-2}>
                  <Text fontWeight='bold' color='#4682B4'>
                    Еще
                  </Text>
                </Area>
                <Area mt={-12} ml={39}>
                  <Img height={10} width={10} src={str} alt='' />
                </Area>
              </Button>
            </Flexbox>
          </Area>
        </Flexbox>
        <Routes>
          <Route path='/Settings' element={<Settings />} />
        </Routes>
        <Area height=''>
          <Flexbox display='flex' flexWrap='wrap'>
            <Flexbox>
              <Flexbox>
                <Area
                  mt={15}
                  ml={60}
                  width={600}
                  height={400}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                >
                  <Flexbox display='flex' justifyContent='space-evenly'>
                    {LISTS.map(({ name, to, img }) => {
                      return (
                        <>
                          <Area mt={15}>
                            <Img width={25} height={25} src={img} alt='' />
                          </Area>
                          <Area ml={-25} mt={17}>
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
                  mt={15}
                  ml={60}
                  width={600}
                  height={60}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                ></Area>
              </Flexbox>
              <Flexbox>
                <Area
                  mt={15}
                  ml={60}
                  width={600}
                  height={200}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                >
                  <Flexbox display='flex'>
                    <Button
                      borderRadius={10}
                      backgroundColor='white'
                      border='1px solid'
                      borderColor='#E8E8E8'
                      width={100}
                      height={28}
                      ml={25}
                      mt={15}
                    >
                      <Text>Все записи</Text>
                    </Button>
                    <Button
                      borderRadius={10}
                      backgroundColor='white'
                      border='1px solid'
                      borderColor='#E8E8E8'
                      width={100}
                      height={28}
                      ml={15}
                      mt={15}
                    >
                      <Text> Мои записи</Text>
                    </Button>
                    <Button
                      borderRadius={10}
                      backgroundColor='white'
                      border='1px solid'
                      borderColor='#E8E8E8'
                      width={130}
                      height={28}
                      ml={10}
                      mt={15}
                    >
                      <Text> Архив записей</Text>
                    </Button>
                  </Flexbox>
                </Area>
              </Flexbox>
            </Flexbox>
            <Flexbox>
              <Flexbox>
                <Area
                  mt={15}
                  ml={15}
                  width={382}
                  height={350}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                ></Area>
              </Flexbox>
              <Flexbox>
                <Area
                  mt={15}
                  ml={15}
                  width={382}
                  height={150}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                ></Area>
              </Flexbox>
              <Flexbox>
                <Area
                  mt={15}
                  ml={15}
                  width={382}
                  height={400}
                  backgroundColor='white'
                  border={1}
                  borderRadius={10}
                ></Area>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Area>
      </Flexbox>
    </Area>
  );
}

export default Page;
