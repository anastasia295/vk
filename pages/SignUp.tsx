import React from 'react';
import styled from 'styled-components';
import vk from './vk.svg';
import account from './account.svg';
import entrance1 from './entrance1.svg';
import protection1 from './protection1.svg';

const Content =styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 220px;
`
;

const ContentID =styled.div`
width: 370px;
height: 430px;
background: #F5FFFA;
border: 1px solid #eee;
border-right: 0;
border-radius: 4px 0px 0px 4px;
`
;
const ContentNumber =styled.div`
width: 370px;
height: 430px;
background: white;
border: 1px solid #eee;
border-left: 0;
border-radius: 0px 4px 4px 0px;
`
;

const TextNumber =styled.div`
font-size: 22px;

`
; 
const TextVKID  =styled.div`
font-size: 19px;
text-align:left;
line-height: 25px;
width: 250px;
margin-top: 15px;
padding-left: 27px;

`
;
const TextVKID1 =styled.div`
font-size: 15px;
text-align:left;
margin-top: 139px;
color: #1E90FF;

`
;
const TextVK =styled.div`
color: #808080;
line-height: 21px;
text-align:left;
 margin-top: -30px;
 padding-left: 66px;
`
;
const Vk1=styled.img`
height: 25px;
width: 25px;
margin-top: 18px;
margin-left: -295px ;

`
;

const TextVK1=styled.div`
font-size: 20px;
margin-top: -27px;
margin-right: 250px;
`
;

const Vk =styled.img`
height: 80px;
width: 60px;

`

;
const TextАccount=styled.div`

color: #808080;
line-height: 20px;
width: 300px;
display: block;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15px;

`
;
const MyInput =styled.input`
background-color: #F5FFFA;
 font-size: 15px;
 width: 300px;
 height: 33px;
 border-radius: 6px;
 outline: none;
 border: 1px solid #eee;
 display: block;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15px;

`
;
const Mylabel =styled.div`
font-size: 18px;
color: #808080;
text-align:left;

margin-left: 30px;
margin-top: 5px;

`
;
const Mybutton =styled.button`
width: 300px;
 height: 38px;
 font-size: 14px;
 font-weight: bolder;
 background-color:  #0000ff;
 border: 1px solid #0000ff;
 border-radius: 6px;
 color: white;
 display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 75px;

`
;
const Inputcheckbox =styled.input`
width: 20px;
 height: 20px;



`
;
const Textagreement  =styled.div`
font-size: 12px;
color: #808080;
text-align: center;
line-height: 15px;
display: block;
  margin-left: auto;
    margin-right: auto;
    width: 300px;
    margin-top: 15px;
`
;
function SignUp() {
  return (
    <div className="App">
   <Content>
      <ContentID>
      <Vk1 src={ vk } alt=""/>
     <TextVK1>ID</TextVK1>
     
        <TextVKID> ВКонтакте можно войти через VK ID </TextVKID>
        <Vk1 src={account } alt=""/>
        <TextVK> Единый аккаунт для сервисов VK и партнёров </TextVK>
        <Vk1 src={entrance1 } alt=""/>
        <TextVK> Быстрый вход в одно нажатие</TextVK>
        <Vk1 src={protection1 } alt=""/>
        <TextVK> Надёжная защита с привязкой к телефону </TextVK>
        
        <TextVKID1> Подробнее о VK ID </TextVKID1>
        
      </ContentID>
      <ContentNumber>
<Vk src={ vk } alt=""/>
        <TextNumber> Введите номер </TextNumber>
        <TextАccount>Ваш номер телефона будет использоваться для входа в аккаунт</TextАccount>
         <MyInput placeholder="Введите номер телефона"/>
         <Mylabel>
         <Inputcheckbox type="checkbox" id="happy" name="happy" value="yes"/>  Сохранить вход </Mylabel>
         <Mybutton> Продолжить</Mybutton>
         <Textagreement> Нажимая «Продолжить», вы принимаете пользовательское соглашение и политику конфиденциальности</Textagreement>
      </ContentNumber>
      </Content>
    </div>
  );
}

export default SignUp;