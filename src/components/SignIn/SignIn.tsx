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
      <Area bcolor='#f5fffa' height='100vh' width='100%'>
        <Area bcolor='white' width='100%' height='55'>
          <Area maxWidth='960' width='100%' mr='auto' ml='auto'>
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
              <Text font-size='12' font-weight='bold'>
                Switch to English
              </Text>
            </Flexbox>
            <Area maxWidth='960' width='100%' mr='auto' ml='auto'>
              <Area width='1100' height='900' bcolor='#f5fffa'>
                <Flexbox display='flex' justifyContent='space-around' aitems='center'>
                  <Flexbox>
                    <Area width='590' mt='35'>
                      <Text font-size='25' font-weight='bold' text-align='center'>
                        ВКонтакте для мобильных устройств
                      </Text>
                    </Area>
                    <Area width='590' mt='10'>
                      <Text font-size='15' text-align='center' color='#808080'>
                        Установите официальное мобильное приложение ВКонтакте и оставайтесь в курсе
                        новостей ваших друзей, где бы вы ни находились.
                      </Text>
                    </Area>
                    <Area width='590' mt='-120' ta='center'>
                      <Img height='780' width='400' src={mobile} alt='' />
                    </Area>
                  </Flexbox>

                  <Flexbox>
                    <Area mt='-105' width='340' height='440' bcolor='white' border='1' bradius='10'>
                      <Flexbox>
                        <Area ta='center' pt='25'>
                          <Img height='70' width='50' src={vk} alt='' />
                        </Area>

                        <Text font-size='19' font-weight='bold' text-align='center'>
                          Вход ВКонтакте
                        </Text>
                        <Area mt='20' ml='auto' mr='auto'>
                          <Input
                            bcolor='#f5fffa'
                            width='240'
                            bradius='10'
                            placeholder='Телефон или почта'
                          />
                        </Area>
                        <Area mt='10'>
                          <Text font-size='18' color='#808080' text-align='left'>
                            <Inputcheckbox
                              width='20'
                              height='20'
                              type='checkbox'
                              name='happy'
                              value='yes'
                            />
                            Сохранить вход
                          </Text>
                        </Area>
                        <Area mt='40'>
                          <Button ml='auto' mr='auto' bcolor='#0000ff' color='white'>
                            <Text font-size='15'> Войти </Text>
                          </Button>
                        </Area>
                        <Area mb='15' mt='25'>
                          <Text font-size='12' text-align='center' color='#808080'>
                            или
                          </Text>
                        </Area>
                        <Area mt='25'>
                          <Button ml='auto' mr='auto' bcolor='white'>
                            <Text font-size='15'>QR-код </Text>
                          </Button>
                        </Area>
                      </Flexbox>
                    </Area>
                    <Area height='150' width='340' bcolor='white' mt='20' bradius='10' border='1'>
                      <Flexbox>
                        <Area pt='20'>
                          <Button ml='auto' mr='auto' bcolor='green' color='white' border='1'>
                            <Text font-size='15'> Зарегистрироваться </Text>
                          </Button>
                        </Area>
                        <Area width='280' mt='17' ml='30'>
                          <Text font-size='15' text-align='center' color='#808080'>
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
