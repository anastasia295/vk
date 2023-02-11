import React from 'react';
import styled from 'styled-components';
import svgImage from './svgImage.svg';
import lupa from './lupa.svg';
import mobile from './mobile.svg';
import vk from './vk.svg';








const Header = styled.div`
width: 100%;
height: 50px;
background: white;
display: flex;
justify-content: space-around;
align-items: center;
/*position: fixed; */
`;

const Main = styled.div`
width: 100%;
height: 1000px;
background-color: #F5FFFA;
display: flex;
justify-content: space-around;





`;

const MyInput = styled.input`
background-color: #F5FFFA;
font-size: 12px;
width: 225px;
height: 30px;
border-radius: 4px;
outline: none;
border: 1px solid #eee;
margin: 10px;
padding-left: 19px;


`;

const Image = styled.img`
height: 35px;
width: 150px;
margin-top: 5px;

`;
 const HeaderInp =styled.div`
 display: flex;
 flex-direction: row;
 `;

 const Text =styled.div`
 font-size: 12px;
 font-weight: bold;
 `;



 const MagnifyingGlass = styled.img`
 height: 13px;
 width: 18px;
 margin-left: -255px;
 margin-top: 20px;
 `;

 const Div2 =styled.div`

 

 `;
 const Wrapper=styled.div`
 
 `;
 const Div3 =styled.div`
 height: 360px;
 width: 300px;
 background: white;
 margin-top: 50px;
 margin-left: -600px;
 border-radius: 10px;
 
 `;

 const Div4 =styled.div`
 height: 150px;
 width: 300px;
 background: white;
 border-radius: 10px;
 margin-top: 65px;

 `;

 const Mobile = styled.img`
 height: 750px;
 width: 350px;
 display: block;
 margin-left: auto;
 margin-right: auto ;
 margin-top: -140px;
 

 `;

 const Vk = styled.img`
 height: 70px;
 width: 50px;
 display: block;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15px;
 margin-bottom: 15px;

 `;
 
 const Text2 =styled.div`
 width: 560px;
 font-size: 25px;
 font-weight: bold;
 margin-top: 50px;
 text-align: center;

 `;

 const Text3 =styled.div`
 font-size: 15px;
color: #808080;
width: 560px;
text-align: center;
margin-top: 10px;

 `;
 const Text4 =styled.div`
 text-align: center;
 font-size: 19px;
 font-weight: bold;
 `;
 const MyInput2 = styled.input`
 background-color: #F5FFFA;
 font-size: 12px;
 width: 240px;
 height: 30px;
 border-radius: 4px;
 outline: none;
 border: 1px solid #eee;
 display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`;

const Mybutton = styled.button`

width: 245px;
 height: 30px;
 font-size: 12px;
 background-color:  #0000ff;
 border: 1px solid #0000ff;
 border-radius: 4px;
 color: white;
 display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`;
const Mylabel =styled.div`

font-size: 12px;
color: #808080;
text-align:left;
margin-left: 25px;
margin-top: 5px;




`;
const Inputcheckbox= styled.input`


 
`;

const Mybutton2 = styled.button`

width: 245px;
 height: 30px;
 font-size: 12px;
 background-color:   white;
 border: 1px solid #eee;
 border-radius: 4px;
 display: block;
    margin-left: auto;
    margin-right: auto;
`;
const Mybutton3 = styled.button`

width: 245px;
 height: 30px;
 font-size: 12px;
 background-color:  green;
 border: 1px solid green;
 border-radius: 4px;
 color: white;
 display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`;
const Text5 =styled.div`
font-size: 12px;
color: #808080;
text-align: center;
margin-top: 15px;
margin-bottom: 15px;

`;

const Text6 =styled.div`
font-size: 15px;
color: #808080;
text-align: center;
margin-top: 17px;
margin-bottom: 15px;

`;

function SignIn () {
  return (
    <div>
      <Wrapper>
       <Header>
       <HeaderInp> <Image src={ svgImage } alt=""/> 
        <MyInput  placeholder="Поиск"/> <MagnifyingGlass src={ lupa } alt=""/>   </HeaderInp>
        <Text> Switch to English </Text>
       </Header>
       <Main> <Div2>
         <Text2>ВКонтакте для мобильных устройств</Text2>
         <Text3>Установите официальное мобильное приложение ВКонтакте и оставайтесь в курсе новостей ваших друзей, где бы вы ни находились.
</Text3>
<Mobile src={ mobile } alt=""/>
 </Div2>
<Div3>
<Vk src={ vk } alt=""/>
        <Text4> Вход ВКонтакте </Text4>
         <MyInput2  placeholder="Телефон или почта"/>
         <Mylabel>
         <Inputcheckbox type="checkbox" id="happy" name="happy" value="yes"/>  Сохранить вход </Mylabel>
         <Mybutton> Войти</Mybutton>
         <Text5> или </Text5>
         <Mybutton2> QR-код </Mybutton2>
          <Div4>
          <Mybutton3> Зарегистрироваться </Mybutton3>
          <Text6> После регистрации вы получите доступ ко всем возможностям VK ID
Узнать больше </Text6>
             </Div4>
 </Div3>



        </Main>
        </Wrapper>
    </div>
  );
}

export default SignIn;