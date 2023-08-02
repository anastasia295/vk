import React from 'react';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Button from '../../shared/Button';
import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Text from '../../shared/Text';
import Input from '../../shared/Input';
import Img from '../../shared/Img';
import Inputcheckbox from '../../shared/Inputcheckbox';
import svgImage from './img/svgImage.svg';
import lupa from './img/lupa.svg';
import mobile from './img/mobile.svg';
import vk from '../../images/vk.svg';

function SignIn() {
  return (
    <LayoutWrapper>
      <Area backgroundColor='#f5fffa' height='100vh' width='100%'>
        <Area backgroundColor='white' width='100%' height='55'>
          <Area maxWidth={960} width='100%' mr='auto' ml='auto'>
            <Flexbox display='flex' justifyContent='space-between' justifyItems='center'>
              <Flexbox display='flex' flexDirection='row'>
                <Area>
                  <Img height={50} width={155} src={svgImage} alt='' />
                </Area>
                <Area margin={10} pl={52}>
                  <Input
                    backgroundColor='#f5fffa'
                    width={225}
                    height={38}
                    fontSize={13}
                    placeholder='Поиск'
                    borderRadius={10}
                    border='1px solid'
                    borderColor='#E8E8E8'
                    marginBottom={0}
                    marginTop={0}
                    marginLeft='auto'
                    marginRight='auto'
                    paddingLeft={3}
                  />
                  <Area position='relative' top={-27}>
                    <Img height={16} width={21} src={lupa} alt='' />
                  </Area>
                </Area>
              </Flexbox>
              <Area mt={3}>
                <Text fontSize={12} fontWeight='bold'>
                  Switch to English
                </Text>
              </Area>
            </Flexbox>
            <Area maxWidth={960} width='100%' mr='auto' ml='auto'>
              <Area width={1100} height={900} backgroundColor='#f5fffa'>
                <Flexbox display='flex' justifyContent='space-around' alignItems='center'>
                  <Flexbox>
                    <Area width={590} mt={35}>
                      <Text fontSize={15} fontWeight='bold' textAlign='center'>
                        ВКонтакте для мобильных устройств
                      </Text>
                    </Area>
                    <Area width={590} mt={10}>
                      <Text fontSize={15} textAlign='center' color='#808080'>
                        Установите официальное мобильное приложение ВКонтакте и оставайтесь в курсе
                        новостей ваших друзей, где бы вы ни находились.
                      </Text>
                    </Area>
                    <Area width={590} mt={-120} textAlign='center'>
                      <Img height={780} width={400} src={mobile} alt='' />
                    </Area>
                  </Flexbox>

                  <Flexbox>
                    <Area
                      mt={-105}
                      width={340}
                      height={440}
                      backgroundColor='white'
                      border={1}
                      borderRadius={10}
                    >
                      <Flexbox>
                        <Area textAlign='center' pt={25}>
                          <Img height={70} width={50} src={vk} alt='' />
                        </Area>

                        <Text fontSize={19} fontWeight='bold' textAlign='center'>
                          Вход ВКонтакте
                        </Text>
                        <Area mt={20} ml='auto' mr='auto'>
                          <Input
                            backgroundColor='#f5fffa'
                            width={260}
                            borderRadius={10}
                            placeholder='Телефон или почта'
                            height={38}
                            fontSize={13}
                            border='1px solid'
                            borderColor='#E8E8E8'
                            marginLeft={28}
                            paddingLeft={3}
                          />
                        </Area>
                        <Area mt={10}>
                          <Text fontSize={18} color='#808080' textAlign='left'>
                            <Inputcheckbox
                              width={20}
                              height={20}
                              type='checkbox'
                              name='happy'
                              value='yes'
                              marginLeft={34}
                              marginTop={10}
                            />
                            Сохранить вход
                          </Text>
                        </Area>
                        <Area mt={40}>
                          {' '}
                          <Flexbox display='flex' justifyContent='center'>
                            <Button
                              width={280}
                              height={38}
                              ml='auto'
                              mr='auto'
                              backgroundColor='#0000ff'
                              color='white'
                              borderRadius={9}
                              border='1px solid'
                              borderColor='#0000ff'
                            >
                              <Text fontSize={15}> Войти </Text>
                            </Button>{' '}
                          </Flexbox>
                        </Area>
                        <Area mb={15} mt={25}>
                          <Text fontSize={15} textAlign='center' color='#808080'>
                            или
                          </Text>
                        </Area>
                        <Area mt={25}>
                          {' '}
                          <Flexbox display='flex' justifyContent='center'>
                            <Button
                              width={280}
                              height={38}
                              ml='auto'
                              mr='auto'
                              backgroundColor='white'
                              borderRadius={9}
                              border='1px solid'
                              borderColor='#E8E8E8'
                            >
                              <Text fontSize={15}>QR-код </Text>
                            </Button>{' '}
                          </Flexbox>
                        </Area>
                      </Flexbox>
                    </Area>
                    <Area
                      height={150}
                      width={340}
                      backgroundColor='white'
                      mt={20}
                      borderRadius={10}
                      border={1}
                    >
                      <Flexbox>
                        <Area pt={20}>
                          {' '}
                          <Flexbox display='flex' justifyContent='center'>
                            <Button
                              ml='auto'
                              mr='auto'
                              backgroundColor='green'
                              color='white'
                              borderRadius={9}
                              border='1px solid'
                              borderColor='green'
                              width={280}
                              height={38}
                            >
                              <Text fontSize={15}> Зарегистрироваться </Text>
                            </Button>{' '}
                          </Flexbox>
                        </Area>
                        <Area width={280} mt={17} ml={30}>
                          <Text fontSize={15} textAlign='center' color='#808080'>
                            После регистрации вы получите доступ ко всем возможностям VK ID Узнать
                            больше
                          </Text>
                        </Area>
                      </Flexbox>
                    </Area>
                  </Flexbox>
                </Flexbox>
              </Area>
            </Area>
          </Area>
        </Area>
      </Area>
    </LayoutWrapper>
  );
}
export default SignIn;
