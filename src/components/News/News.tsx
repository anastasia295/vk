import React from 'react';
import Area from '../../shared/Area';
import Button from '../../shared/Button';
import Flexbox from '../../shared/Flexbox';
import Text from '../../shared/Text';

import { LayoutWrapper } from '../../shared/LayoutWrapper';
import Input from '../../shared/Input';
import Img from '../../shared/Img';
function News() {
  return (
    <Flexbox display='flex' flexDirection='row'>
      <Flexbox>
        <Area
          mt={3}
          ml={60}
          width={680}
          height={800}
          backgroundColor='white'
          border={1}
          borderRadius={15}
        >
          <Text>Новостей нет</Text>
        </Area>
      </Flexbox>

      <Flexbox>
        <Area ml={20} width={300} height={130} backgroundColor='white' border={1} borderRadius={10}>
          <Area mt={16} ml={15}></Area>
        </Area>
      </Flexbox>
    </Flexbox>
  );
}

export default News;
