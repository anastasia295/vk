import React from 'react';
import { useState } from 'react';

import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Flexbox from '../../shared/Flexbox';
import Area from '../../shared/Area';
import Text from '../../shared/Text';
import Button from '../../shared/Button';
import Img from '../../shared/Img';

import Input from '../../shared/Input';

import avatar from './img/avatar.svg';

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 400 === 0 || year % 100 != 0);
}

const getDaysInMonth = (month: number, year: number): number => {
  const daysInMonths: Record<number, number> = {
    0: 30,
    1: 31,
    2: 30,
    3: 31,
    4: 31,
    5: isLeapYear(year) ? 29 : 28,
    6: 31,
    7: 30,
    8: 31,
    9: 30,
    10: 31,
    11: 31,
  };

  return daysInMonths[month];
};

const MONTHS = [
  { value: 0, label: 'Сентябрь' },
  { value: 1, label: 'Октябрь' },
  { value: 2, label: 'Ноябрь' },
  { value: 3, label: 'Декарь' },
  { value: 4, label: 'Январь' },
  { value: 5, label: 'Февраль' },
  { value: 6, label: 'Март' },
  { value: 7, label: 'Апрель' },
  { value: 8, label: 'Май' },
  { value: 9, label: 'Июнь' },
  { value: 10, label: 'Июль' },
  { value: 11, label: 'Август' },
];

function Settings() {
  const [month, setMonth] = useState<number>(0);
  const FIRST_YEAR = 1920;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years = currentYear - FIRST_YEAR;

  return (
    <LayoutWrapper>
      <Flexbox display='flex' direction='row'>
        <Flexbox>
          <Area ml='80' width='650' height='400' bcolor='white' border='1' bradius='15'>
            <Area ml='25' mt='35' height='60'>
              <Text font-size='18'>Профиль</Text>
            </Area>
            <Area height='140' bcolor='#f5fffa'></Area>
            <Flexbox display='flex' direction='row' justifyContent='space-around'>
              <Area mt='-66'>
                <Img bradius='100' height='126' width='136' src={avatar} alt='' />
              </Area>
              <Area mt='25'>
                <Text font-size='18' font-weight='bold'>
                  Петр Иванов
                </Text>
              </Area>
              <Area mt='25'>
                <Text color='#2271B3'>Изменить в VK ID</Text>
              </Area>
            </Flexbox>
            <Area mt='25' ml='20' width='610' bbottom='1'></Area>
            <Flexbox display='flex' direction='row' justifyContent='space-around'>
              <Area mt='28'>
                <Text>Никнейм</Text>
              </Area>
              <Area mt='28'>
                <Text>https://vk.com/id174982055</Text>
              </Area>
              <Area mt='28'>
                <Text color='#2271B3'>Изменить</Text>
              </Area>
            </Flexbox>
          </Area>
          <Area mt='25' ml='80' width='650' height='800' bcolor='white' border='1' bradius='15'>
            <Flexbox>
              <Area mt='30' ml='20'>
                <Flexbox display='flex' direction='row'>
                  <Area width='200'>
                    <Flexbox display='flex' justifyContent='flex-end'>
                      <Area mt='5' mr='20'>
                        <Text> Краткая информация:</Text>
                      </Area>
                    </Flexbox>
                  </Area>
                  <Area width='350'>
                    <Flexbox display='flex' justifyContent='flex-start'>
                      <Input
                        style={{ width: '345px', height: '100px' }}
                        placeholder='Расскажите о себе'
                      ></Input>
                    </Flexbox>
                  </Area>
                </Flexbox>
              </Area>
              <Area mt='30' ml='20'>
                <Flexbox display='flex' direction='row'>
                  <Area width='200'>
                    <Flexbox display='flex' justifyContent='flex-end'>
                      <Area mt='5' mr='20'>
                        <Text>Семейное положение:</Text>
                      </Area>
                    </Flexbox>
                  </Area>
                  <Area width='350'>
                    <Flexbox display='flex' justifyContent='flex-start'>
                      <select name='fstatus' style={{ width: '345px', height: '30px' }}>
                        <option value='не выбрано'>не выбрано</option>
                        <option value='не замужем'>не замужем</option>
                        <option value='влюблена'>влюблена</option>
                        <option value='в активном поиске'>в активном поиске</option>
                      </select>
                    </Flexbox>
                  </Area>
                </Flexbox>
              </Area>
              <Area mt='30' ml='20'>
                <Flexbox display='flex' direction='row'>
                  <Area width='200'>
                    <Flexbox display='flex' justifyContent='flex-end'>
                      <Area mt='5' mr='20'>
                        <Text>Родной город:</Text>
                      </Area>
                    </Flexbox>
                  </Area>
                  <Area width='345'>
                    <Flexbox display='flex' justifyContent='flex-end'>
                      <Input width='355' height='25'></Input>
                    </Flexbox>
                  </Area>
                </Flexbox>
              </Area>
              <Area mt='30' ml='20'>
                <Flexbox display='flex' direction='row'>
                  <Area width='200'>
                    <Flexbox display='flex' justifyContent='flex-end'>
                      <Area mt='5' mr='20'>
                        <Text>Дата рождения:</Text>
                      </Area>
                    </Flexbox>
                  </Area>
                  <Flexbox display='flex' justifyContent='flex-end'>
                    <Flexbox display='flex' direction='row'>
                      <Area mr='15'>
                        <select
                          style={{ width: '60px', height: '30px' }}
                          onChange={(e) => setMonth(+e.target.value)}
                        >
                          {new Array(getDaysInMonth(month, 2000))
                            .fill(0)
                            .map((val, index) => index + 1)
                            .map((day) => {
                              return (
                                <option key={day} value={day}>
                                  {day}
                                </option>
                              );
                            })}
                        </select>
                      </Area>
                      <Area mr='15'>
                        <select
                          style={{ width: '80px', height: '30px' }}
                          onChange={(e) => setMonth(+e.target.value)}
                        >
                          {MONTHS.map((month) => (
                            <option value={month.value} key={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>{' '}
                      </Area>
                      <Area>
                        <select style={{ width: '80px', height: '30px' }}>
                          {new Array(years).fill(0).map((calue, index) => (
                            <option key={calue.value}>{index + FIRST_YEAR}</option>
                          ))}
                        </select>
                      </Area>
                    </Flexbox>
                  </Flexbox>
                </Flexbox>
              </Area>
              <Area mt='45' ml='20' width='610' bbottom='1'></Area>

              <Area mt='30' ml='215'>
                <Button width='90' bcolor='#1E90FF'>
                  <Text color='white'>Сохранить</Text>
                </Button>
              </Area>
            </Flexbox>
          </Area>
        </Flexbox>

        <Flexbox>
          <Area ml='15' width='400' height='100' bcolor='white' border='1' bradius='10'>
            <Area mt='15' ml='15'>
              <Text font-size='17'>Личные данные</Text>
              <Text font-size='12'>Имя, фамилия, дата рождения, пол</Text>
            </Area>
            <Area mt='15' ml='15'>
              <Text font-size='17'>Профиль</Text>
            </Area>
          </Area>
        </Flexbox>
      </Flexbox>
    </LayoutWrapper>
  );
}

export default Settings;
