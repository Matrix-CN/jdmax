/*
PDD转赚红包助力

入口：京东APP——玩一玩——转赚红包
链接：https://pro.m.jd.com/mall/active/3BwUqhLsJYrHP4qgAgDDJGrSVngK/index.html

环境变量：
JD_PDD1_InviterId // 指定助力码 非必须，不填默认助力账号一
JD_PDD1_NUM // 指定人数  非必须，不填默认跑全部账号

cron:1 1 1 1 *

*/

const $ = new Env('PDD转赚红包助力')
var iｉl='jsjiami.com.v7';const lilIi=iii1II;(function(ii1l1,lIIill,I11iIi,I1ilII,I11iIl,l1l11l,IilIil){return ii1l1=ii1l1>>0x7,l1l11l='hs',IilIil='hs',function(l1iIi,l1l11i,l1iIl,illIll,iIli1I){const l1iIIi=iii1II;illIll='tfi',l1l11l=illIll+l1l11l,iIli1I='up',IilIil+=iIli1I,l1l11l=l1iIl(l1l11l),IilIil=l1iIl(IilIil),l1iIl=0x0;const Iiil1=l1iIi();while(!![]&&--I1ilII+l1l11i){try{illIll=parseInt(l1iIIi(0x151,'Uav]'))/0x1*(-parseInt(l1iIIi(0x14a,'$xd!'))/0x2)+parseInt(l1iIIi(0x1c8,'1rac'))/0x3+-parseInt(l1iIIi(0x198,'PB5a'))/0x4*(parseInt(l1iIIi(0x12c,'^0WQ'))/0x5)+-parseInt(l1iIIi(0x182,'PB5a'))/0x6*(-parseInt(l1iIIi(0x13c,'1qkX'))/0x7)+parseInt(l1iIIi(0x101,'Kfc7'))/0x8*(-parseInt(l1iIIi(0x1d1,'z!1@'))/0x9)+-parseInt(l1iIIi(0x148,'op!*'))/0xa+parseInt(l1iIIi(0x1e1,'1rac'))/0xb;}catch(iiilli){illIll=l1iIl;}finally{iIli1I=Iiil1[l1l11l]();if(ii1l1<=I1ilII)l1iIl?I11iIl?illIll=iIli1I:I11iIl=iIli1I:l1iIl=iIli1I;else{if(l1iIl==I11iIl['replace'](/[SlLfCHXJOIdWQqwnThY=]/g,'')){if(illIll===l1l11i){Iiil1['un'+l1l11l](iIli1I);break;}Iiil1[IilIil](iIli1I);}}}}}(I11iIi,lIIill,function(l1iIIl,iiilll,lI11Il,lIII1i,l11i11,IilIl1,lIII1l){return iiilll='\x73\x70\x6c\x69\x74',l1iIIl=arguments[0x0],l1iIIl=l1iIIl[iiilll](''),lI11Il=`\x72\x65\x76\x65\x72\x73\x65`,l1iIIl=l1iIIl[lI11Il]('\x76'),lIII1i=`\x6a\x6f\x69\x6e`,(0x169bda,l1iIIl[lIII1i](''));});}(0x6580,0x5f81f,Iii11l,0xcd),Iii11l)&&(iｉl=0x597);const notify=require('./utils/Rebels_sendJDNotify'),jdCookie=require(lilIi(0xe4,'mKZ*')),common=require('./utils/Rebels_jdCommon'),{H5st}=require('./utils/Rebels_H'),isNotify=process['env'][lilIi(0x103,'PB5a')]===lilIi(0x1ec,'39dl'),pddcode=process['env']['JD_PDD1_InviterId']||'',pddnum=process[lilIi(0x137,'b#Lv')][lilIi(0x163,'1qkX')],linkId=lilIi(0x1c2,'Qh]('),PDD_WAIT='1';let waitTimes=parseInt(PDD_WAIT)*0x3e8;$[lilIi(0x132,'hR!r')]=0x0,$[lilIi(0x108,'$3NP')]=![];let cookie='';const cookiesArr=Object[lilIi(0x160,'(Xd!')](jdCookie)[lilIi(0x1d0,'t)%x')](i1IIi=>jdCookie[i1IIi])[lilIi(0x165,'nXp@')](IIII1I=>IIII1I);!cookiesArr[0x0]&&($['msg']($[lilIi(0xf3,'Qh](')],lilIi(0x1a1,'1rac')),process[lilIi(0x196,'Ajh3')](0x1));!(async()=>{const l1l11I=lilIi,Iii111={'OtISh':l1l11I(0x143,'1qkX'),'QwKvO':function(l1l1II,Iil1I1,Ii1iII){return l1l1II(Iil1I1,Ii1iII);},'xbfrh':l1l11I(0x1d9,'Az^g'),'EZCNY':l1l11I(0x1bf,'xICm'),'VleSk':l1l11I(0xfa,'RlNo'),'rgnfg':function(l1i11I,II11II){return l1i11I<II11II;},'gaNuk':function(Ii1iI1,lilIli){return Ii1iI1+lilIli;},'YJvkS':function(Iliili,Iliill){return Iliili(Iliill);},'XpeUU':'pt_pin','wHmnw':function(IIII11,i1illi){return IIII11*i1illi;},'RjNpy':function(i1illl,I1llil){return i1illl+I1llil;},'nRlBn':function(I1llii,lilIll){return I1llii*lilIll;}};authorCodeList=await getAuthorCodeList('http://code.257999.xyz/yqlxj.json');if(authorCodeList)console['log'](Iii111['OtISh']),$[l1l11I(0x1a0,'1rac')]=authorCodeList[Iii111[l1l11I(0x16e,'Uav]')](random,0x0,authorCodeList['length'])];else{let l1i111=[Iii111[l1l11I(0x10b,'6(Ro')],'XDG-p9i7Z_8OKNbN_0YtP459s9TDLKqgoADgakmXaaw',Iii111[l1l11I(0x14b,'(Xd!')],l1l11I(0x1d4,'Mga5')];$[l1l11I(0x1a0,'1rac')]=l1i111[random(0x0,l1i111[l1l11I(0x1e7,'ru!W')])],console[l1l11I(0x194,'KjKV')](Iii111[l1l11I(0xfc,'PB5a')]);}if(pddnum)console['log']('❖\x20已填写指定人数变量，指定人数\x20['+pddnum+']');pddcode?console['log'](l1l11I(0xde,'&NQb')+pddcode+']'):console[l1l11I(0x1a2,'HWyP')](l1l11I(0x10f,'HW[I'));notify[l1l11I(0x1ae,'z!1@')]({'title':$['name']});for(let iliII1=0x0;Iii111[l1l11I(0x1bb,'t)%x')](iliII1,cookiesArr[l1l11I(0x17b,'Uav]')]);iliII1++){$['index']=Iii111['gaNuk'](iliII1,0x1),cookie=cookiesArr[iliII1],common['setCookie'](cookie),$[l1l11I(0x1c6,'6(Ro')]=Iii111[l1l11I(0x13f,'meu0')](decodeURIComponent,common[l1l11I(0x179,'Az^g')](cookie,Iii111[l1l11I(0x114,'ru!W')])),$['UA']=common[l1l11I(0x1d2,'1qkX')]($['UserName']),$[l1l11I(0x10a,'HW[I')]=notify[l1l11I(0x1f1,'^0WQ')]($['index'],$[l1l11I(0x16d,'$xd!')]),$['nickName']='',console['log'](l1l11I(0x13a,'hR!r')+$[l1l11I(0x119,'KsBe')]+'】'+($[l1l11I(0xe3,'!RC$')]||$[l1l11I(0x14d,'x1B)')])+l1l11I(0x1b7,'Vyr%')),$['hash']=gen_jda_cookie(),$[l1l11I(0x1a8,'EFFe')]='__jda='+$['hash'][l1l11I(0x1e6,'$xd!')]+l1l11I(0x1d6,'Y!^H')+$[l1l11I(0x124,'Ajh3')]['jdb']+l1l11I(0xfe,'bnv@')+$[l1l11I(0x126,'39dl')][l1l11I(0x13d,'es6o')]+l1l11I(0x106,'x1B)')+$[l1l11I(0x10d,'ru!W')][l1l11I(0x1e5,'m%j[')]+';;',$[l1l11I(0x1c4,'bnv@')]=Iii111[l1l11I(0x18b,'6(Ro')](new Date()[l1l11I(0x195,'$xd!')]()+'',parseInt(Iii111['wHmnw'](0x7fffffff,Math[l1l11I(0x1b1,'Uav]')]()))),await Main(),common['unsetCookie']();if($[l1l11I(0x13b,'JvOC')]||$['runEnd'])break;await $[l1l11I(0x16c,'DulC')](parseInt(Iii111[l1l11I(0xe1,'I$l^')](Iii111['nRlBn'](waitTimes,0x1),0x64),0xa));}isNotify&&notify[l1l11I(0x197,'EFFe')]()&&(notify[l1l11I(0x1ce,'x1B)')]('\x0a'),await notify[l1l11I(0x164,'!RC$')]());})()[lilIi(0x13e,'ru!W')](II11I1=>$[lilIi(0x17d,'^0WQ')](II11I1))[lilIi(0xdb,'Kfc7')](()=>$[lilIi(0x1ad,'!RC$')]());async function Main(){const lilIl=lilIi,Iii11I={'LfKbm':function(Iil1II,iIIl1I){return Iil1II==iIIl1I;},'IWzec':lilIl(0xfb,'EFFe'),'rUDIB':function(I1iIli,lI1Ill){return I1iIli(lI1Ill);},'EyyoK':function(lI1Ili,IliilI){return lI1Ili(IliilI);},'cpqMR':function(i1II1,iIIl11){return i1II1(iIIl11);}};$[lilIl(0x1eb,'&NQb')]=!![];try{if(pddcode)Iii11I['LfKbm']($['index'],0x1)?(console['log'](Iii11I[lilIl(0x1cd,'Vyr%')]),await Iii11I[lilIl(0x1aa,'jHQ)')](inviteFissionhelp,$[lilIl(0x1ea,'Ajh3')])):await Iii11I[lilIl(0x141,'$3NP')](inviteFissionhelp,pddcode);else{if($[lilIl(0x119,'KsBe')]==0x1){console[lilIl(0xec,'@V3I')](lilIl(0xe7,'ru!W')),await inviteFissionHome();if($[lilIl(0x178,'$xd!')])return;await Iii11I[lilIl(0x11f,'Y!^H')](inviteFissionhelp,$[lilIl(0x1ea,'Ajh3')]);}else await Iii11I[lilIl(0x1ba,'6(Ro')](inviteFissionhelp,$[lilIl(0x136,'es6o')]);}}catch(l1l1I1){console[lilIl(0x122,'xICm')](lilIl(0x192,'HWyP')+l1l1I1);}}async function inviteFissionHome(){const IilIlI=lilIi,I1iIll={'MhxzW':function(I1lliI,llIllI){return I1lliI(llIllI);},'lbmgO':IilIlI(0x12f,'Kfc7'),'vIRPU':function(I1ilI1,iillll){return I1ilI1+iillll;},'TNwwq':IilIlI(0x18a,'t)%x'),'yBSja':function(lIIilI,II1li1,l1lIlI){return lIIilI(II1li1,l1lIlI);},'EEJHk':function(IiiIl1,lIIil1){return IiiIl1*lIIil1;}};await I1iIll[IilIlI(0x169,'HW[I')](sendRequest,I1iIll['lbmgO']);if($['runEnd'])return;await $['wait'](parseInt(I1iIll[IilIlI(0xf0,'Qh](')](waitTimes*0x1,0x64),0xa)),await sendRequest(I1iIll[IilIlI(0x12d,'y]Y6')]),await $[IilIlI(0xdf,'6(Ro')](I1iIll[IilIlI(0x16a,'HW[I')](parseInt,I1iIll[IilIlI(0xe5,'JvOC')](waitTimes,0x1)+0x64,0xa));if($['inviteFissionHome']?.[IilIlI(0x1ca,'b#Lv')]){$[IilIlI(0xe9,'RlNo')]=$[IilIlI(0x100,'T)^F')]?.['inviter'];const IIli1=new Date()[IilIlI(0x159,'1qkX')](),II1liI=$[IilIlI(0x19f,'$xd!')]?.['countDownTime']+IIli1,IlI1i1=$[IilIlI(0x1e2,'Mga5')](IilIlI(0x17c,'hR!r'),II1liI);console['log'](IilIlI(0x1ed,'&NQb')+IlI1i1+IilIlI(0x1e0,'xICm')+$[IilIlI(0x19d,'$3NP')]);}else console[IilIlI(0x1dc,'bnv@')]('⏺️\x20未能正确获取到助力码，退出执行！'),$[IilIlI(0x193,'1rac')]=!![];}async function inviteFissionhelp(l1lIl1){const iIli11=lilIi,IiiIlI={'slTwH':function(Iilli1,I1l1Il){return Iilli1(I1l1Il);}};$['inviter']=l1lIl1,await IiiIlI[iIli11(0x1a9,'&NQb')](sendRequest,iIli11(0x14c,'DulC'));}async function handleResponse(llIll1,Illl1l){const Iiiil=lilIi,Illl1i={'rLarm':Iiiil(0x1b2,'(tAR'),'CputF':function(lIIiil,l1lIii){return lIIiil===l1lIii;},'nuNuI':function(I11iI1,l1lIil){return I11iI1==l1lIil;},'vQpgT':function(IiiIli,iillli){return IiiIli<=iillli;},'cnUWk':function(I1l1Ii,I1i11i){return I1l1Ii===I1i11i;},'MUiii':Iiiil(0xed,'b#Lv'),'ylUdm':function(I1i11l,llIlii){return I1i11l===llIlii;}};try{switch(llIll1){case Illl1i[Iiiil(0x1ab,'$3NP')]:if(Illl1i['CputF'](Illl1l?.[Iiiil(0x19e,'es6o')],0x0)&&Illl1i['CputF'](Illl1l?.[Iiiil(0x152,'Ajh3')],!![])){$['inviteFissionhelp']=Illl1l['data'];switch($[Iiiil(0x11e,'Uav]')]?.[Iiiil(0x1d7,'Az^g')]){case null:console[Iiiil(0xf5,'(Xd!')]('❌\x20助力码未填写');break;case 0x0:console[Iiiil(0x1dc,'bnv@')]('❌\x20不能自己助力自己');break;case 0x1:if(Illl1i[Iiiil(0xdd,'^0WQ')]($[Iiiil(0xef,'(Xd!')],0x1))console[Iiiil(0x1b4,'t)%x')](Iiiil(0x123,'b#Lv'));else{$[Iiiil(0x117,'KjKV')]++,console[Iiiil(0x155,'EFFe')]('✅\x20助力成功\x20['+$[Iiiil(0x121,'@V3I')]+']');if(pddnum){if(Illl1i[Iiiil(0xe8,'meu0')](pddnum,$[Iiiil(0x1e8,'ru!W')])){console[Iiiil(0x12a,'6(Ro')]('✅\x20当前助力已达到指定助力人数，退出！'),$[Iiiil(0x1c0,'Y!^H')]=!![];return;}}}break;case 0x2:console[Iiiil(0x107,'HW[I')]('❌\x20活动火爆');break;case 0x3:console[Iiiil(0x115,'DulC')](Iiiil(0x128,'I$l^'));break;case 0x6:console[Iiiil(0x1d5,'meu0')]('❌\x20已助力过了');break;case 0x8:if(Illl1i['nuNuI']($[Iiiil(0x199,'b#Lv')],0x1)){console['log'](Iiiil(0x16f,'@V3I'));break;}else{console['log'](Iiiil(0x113,'(tAR'));return;}default:{console[Iiiil(0x158,'Mga5')](Iiiil(0x11b,'T)^F')+helpResult+']');break;}}}else{if(Illl1l[Iiiil(0x18e,'Mga5')]?.[Iiiil(0x15e,'xICm')])console['log']('>\x20'+Illl1l[Iiiil(0x175,'Qh](')]);else{if(Illl1l['errMsg'])console['log']('>\x20'+Illl1l[Iiiil(0xee,'Vyr%')]);else Illl1l[Iiiil(0x130,'(Xd!')]?console[Iiiil(0x158,'Mga5')]('>\x20'+Illl1l[Iiiil(0x1d8,'KjKV')]):console[Iiiil(0x1e3,'x1B)')]('❓'+llIll1+'\x20'+JSON['stringify'](Illl1l));}}break;case Iiiil(0x1c9,'DulC'):if(Illl1i[Iiiil(0x1be,'aVEl')](Illl1l?.[Iiiil(0x180,'$3NP')],0x0)&&Illl1i['cnUWk'](Illl1l?.['success'],!![]))$['inviteFissionBeforeHome']=Illl1l['data'];else{if(Illl1l['data']?.[Iiiil(0x11c,'meu0')])console[Iiiil(0xe2,'hR!r')]('>\x20'+Illl1l[Iiiil(0x1b8,'@V3I')]?.[Iiiil(0x1dd,'DulC')]+'}');else{if(Illl1l['errMsg'])$[Iiiil(0x1a5,'Az^g')]=!![],console[Iiiil(0x15a,'op!*')]('>\x20'+Illl1l[Iiiil(0x129,'Uav]')]);else Illl1l[Iiiil(0x1c7,'@V3I')]?console[Iiiil(0x1ef,'^0WQ')]('>\x20'+Illl1l[Iiiil(0x176,'$xd!')]):console['log']('❓'+llIll1+'\x20'+JSON['stringify'](Illl1l));}}break;case Illl1i[Iiiil(0x147,'$xd!')]:if(Illl1i[Iiiil(0x1e4,'jHQ)')](Illl1l?.[Iiiil(0xf8,'t)%x')],0x0)&&Illl1i['ylUdm'](Illl1l?.['success'],!![]))$[Iiiil(0x1c5,'es6o')]=Illl1l[Iiiil(0xdc,'hR!r')];else{if(Illl1l[Iiiil(0x191,'Vyr%')]?.['bizMsg'])console[Iiiil(0x154,'1rac')]('>\x20'+Illl1l['data']?.[Iiiil(0x172,'RlNo')]);else{if(Illl1l[Iiiil(0x175,'Qh](')])$[Iiiil(0x120,'Qh](')]=!![],console['log']('>\x20'+Illl1l[Iiiil(0xf7,'&NQb')]);else Illl1l['msg']?console[Iiiil(0xfd,'Y!^H')]('>\x20'+Illl1l['msg']):console['log']('❓'+llIll1+'\x20'+JSON['stringify'](Illl1l));}}break;}}catch(llIlil){console[Iiiil(0xfd,'Y!^H')](Iiiil(0x1f3,'mKZ*')+llIll1+Iiiil(0xf9,'t)%x')+(llIlil[Iiiil(0x145,'mKZ*')]||llIlil));}}async function sendRequest(IIlil){const Iiiii=lilIi,ilI1lI={'VQbCT':'POST','RsnAG':'inviteFissionhelp','KsaUr':'c5389','QwtLB':'4.7','KACVJ':Iiiii(0x185,'m5qP'),'MnBbk':'inviteFissionBeforeHome','rKdEC':Iiiii(0x1cc,'DulC'),'RBZgR':Iiiii(0x135,'Kfc7'),'QVIar':Iiiii(0x100,'T)^F'),'DtGbt':Iiiii(0x1de,'mKZ*'),'CLOTT':Iiiii(0x1da,'JvOC'),'NpBeG':Iiiii(0x1c3,'T)^F'),'BuffM':Iiiii(0x1a3,'PB5a'),'fLpVA':'keep-alive','vmRSS':'application/x-www-form-urlencoded','TNFVh':'XMLHttpRequest','AJInC':function(I1i11I,llIliI){return I1i11I+llIliI;},'RxQtG':'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html','peffr':Iiiii(0x131,'aVEl'),'EKiCS':function(I1l1I1,I1i111){return I1l1I1===I1i111;},'PBOzI':function(ilI1li,IIliI){return ilI1li<IIliI;},'YYzPO':function(ilI1ll,Iillii){return ilI1ll>Iillii;},'snbde':function(IlI1iI,Iillil){return IlI1iI>=Iillil;}};if($[Iiiii(0x18f,'es6o')])return;let IiiIll='',IIlii=null,IlI1il=null,IilliI=ilI1lI[Iiiii(0x1cb,'6(Ro')],IlI1ii={},lIIiii={};switch(IIlil){case ilI1lI[Iiiii(0x181,'ru!W')]:lIIiii={'appId':ilI1lI[Iiiii(0x19b,'bnv@')],'functionId':Iiiii(0xf4,'b#Lv'),'appid':Iiiii(0x105,'I$l^'),'clientVersion':common[Iiiii(0xf6,'1qkX')](),'client':Iiiii(0x146,'!RC$'),'body':{'linkId':linkId,'isJdApp':!![],'inviter':$[Iiiii(0x153,'6(Ro')]},'version':ilI1lI[Iiiii(0x1e9,'eCn3')],'ua':$['UA'],'t':!![]},IlI1ii=await H5st[Iiiii(0x1d3,'&NQb')](lIIiii),IiiIll=ilI1lI[Iiiii(0x109,'ru!W')],IIlii=IlI1ii['paramsData'];break;case ilI1lI[Iiiii(0x1f5,'m%j[')]:lIIiii={'appId':ilI1lI['rKdEC'],'functionId':Iiiii(0x1f4,'hR!r'),'appid':'activities_platform','clientVersion':common[Iiiii(0x134,'ru!W')](),'client':ilI1lI[Iiiii(0xe0,'x1B)')],'body':{'linkId':linkId,'isJdApp':!![],'inviter':''},'version':'4.7','ua':$['UA'],'t':!![]},IlI1ii=await H5st['getH5st'](lIIiii),IiiIll=ilI1lI['KACVJ'],IIlii=IlI1ii[Iiiii(0x186,'T)^F')];break;case ilI1lI['QVIar']:lIIiii={'appId':ilI1lI[Iiiii(0x1ee,'aVEl')],'functionId':ilI1lI[Iiiii(0x116,'Uav]')],'appid':Iiiii(0x1db,'EFFe'),'clientVersion':common[Iiiii(0x183,'Qh](')](),'client':ilI1lI[Iiiii(0x166,'KsBe')],'body':{'linkId':linkId,'inviter':''},'version':ilI1lI['QwtLB'],'ua':$['UA'],'t':!![]},IlI1ii=await H5st['getH5st'](lIIiii),IiiIll=ilI1lI[Iiiii(0x162,'m5qP')],IIlii=IlI1ii[Iiiii(0x190,'1rac')];break;default:console[Iiiii(0xec,'@V3I')](Iiiii(0x14e,'x1B)')+IIlil);return;}const iI1lli={};IIlii&&(IIlii={...IIlii,...iI1lli});IlI1il&&(IlI1il={...IlI1il,...iI1lli});const ll1iI={'url':IiiIll,'method':IilliI,'headers':{'Accept':ilI1lI['CLOTT'],'Accept-Encoding':ilI1lI['NpBeG'],'Accept-Language':ilI1lI[Iiiii(0x15d,'^0WQ')],'Connection':ilI1lI[Iiiii(0x171,'bnv@')],'Content-Type':ilI1lI['vmRSS'],'X-Requested-With':ilI1lI['TNFVh'],'Cookie':ilI1lI[Iiiii(0xf1,'@V3I')](cookie,$['strList']),'Referer':ilI1lI[Iiiii(0x1b6,'meu0')],'X-Referer-Page':ilI1lI['RxQtG'],'Origin':ilI1lI[Iiiii(0x18d,'aVEl')],'x-rp-client':Iiiii(0x1b9,'JvOC'),'User-Agent':$['UA']},'params':IlI1il,'data':IIlii,'timeout':0x4e20};ilI1lI[Iiiii(0x144,'PB5a')](IilliI,'GET')&&(delete ll1iI[Iiiii(0x15c,'z!1@')],delete ll1iI[Iiiii(0xeb,'JvOC')]['Content-Type']);const iI1lll=0x1;let l1lIll=0x0,I1l1II=null,IIli1I=![];while(ilI1lI[Iiiii(0x1a6,'HW[I')](l1lIll,iI1lll)){ilI1lI['YYzPO'](l1lIll,0x0)&&await $[Iiiii(0x16c,'DulC')](0x3e8);const l1lIli=await common['request'](ll1iI);if(!l1lIli['success']){I1l1II=Iiiii(0xe6,'es6o')+IIlil+'\x20请求失败\x20➜\x20'+l1lIli[Iiiii(0x12e,'(tAR')],l1lIll++;continue;}if(!l1lIli?.[Iiiii(0x184,'PB5a')]){I1l1II=Iiiii(0x112,'JvOC')+IIlil+Iiiii(0x14f,'PB5a'),l1lIll++;continue;}handleResponse(IIlil,l1lIli['data']),IIli1I=![];break;}ilI1lI[Iiiii(0xff,'y]Y6')](l1lIll,iI1lll)&&(console[Iiiii(0x1f0,'$xd!')](I1l1II),IIli1I&&($[Iiiii(0x1f2,'39dl')]=!![],$[Iiiii(0x17e,'!RC$')]&&$[Iiiii(0x174,'Vyr%')][Iiiii(0x1bc,'Kfc7')](I1l1II)));}function getAuthorCodeList(lIIiiI){const l11i1I=lilIi,II1lil={'WDgor':l11i1I(0x110,'op!*')};return new Promise(IIli1l=>{const IiII=l11i1I,II1lii={'DcBHK':II1lil['WDgor'],'wMQbl':function(ll1i1,IIli1i){return ll1i1(IIli1i);}},lIIii1={'url':''+lIIiiI,'timeout':0x2710,'headers':{'User-Agent':IiII(0x156,'Qh](')}};$[IiII(0x170,'Mga5')](lIIii1,async(I1iIi1,lliil1,IIllI)=>{const llIIli=IiII;try{if(I1iIi1){}else IIllI?IIllI=JSON[llIIli(0x1b3,'39dl')](IIllI):console[llIIli(0x149,'m%j[')](II1lii[llIIli(0x104,'Y!^H')]);}catch(lliilI){$[llIIli(0x10c,'$3NP')](lliilI,lliil1),IIllI=null;}finally{II1lii[llIIli(0x125,'^0WQ')](IIli1l,IIllI);}});});}function gen_jda_cookie(){const lIII1I=lilIi,lili1={'FQSBI':function(IllIII,ii1li){return IllIII*ii1li;},'xHtpj':function(IIll1,ll1il){return IIll1-ll1il;},'Vpmpp':function(IiiIiI,lilii){return IiiIiI+lilii;},'bjypR':function(l1iiI,ll1li){return l1iiI*ll1li;},'MtLBa':function(Illl1I,lliiiI){return Illl1I*lliiiI;},'ZVoSp':lIII1I(0x10e,'eCn3'),'kUDIJ':lIII1I(0x127,'@V3I'),'tldBs':lIII1I(0x189,'!RC$'),'nXqrr':function(lilil,ll1ll){return lilil(ll1ll);}},ll1l1='3';let IllIIi=Math[lIII1I(0xea,'(Xd!')](lili1['FQSBI'](0x8ca6bff,Math[lIII1I(0x11d,'op!*')]()))['toString'](),IllIIl=[...Array(0xc)][lIII1I(0x19c,'T)^F')](()=>Math[lIII1I(0x188,'PB5a')](Math['random']()*0xa))[lIII1I(0x1df,'!RC$')](''),IiiIi1=lili1[lIII1I(0x1cf,'hR!r')](timestamp(),0x30d40),l1ii1=lili1[lIII1I(0x15b,'bnv@')](IiiIi1,Math['floor'](lili1[lIII1I(0x168,'6(Ro')](Math[lIII1I(0x102,'meu0')](),0x186a0))),ii1ll=lili1[lIII1I(0x11a,'$xd!')](l1ii1,Math[lIII1I(0x1bd,'KsBe')](lili1['bjypR'](Math['random'](),0x2710))),IliI1l=IiiIi1+Math[lIII1I(0x157,'aVEl')](lili1[lIII1I(0x1ac,'JvOC')](Math[lIII1I(0x16b,'aVEl')](),0x186a0)),lliiil=[IllIIi,''+IiiIi1+IllIIl,IiiIi1[lIII1I(0x12b,'^0WQ')](),l1ii1['toString'](),ii1ll['toString'](),ll1l1][lIII1I(0x150,'$3NP')]('.'),lliiii=[IllIIi,IllIIl[lIII1I(0x17f,'RlNo')](-0x2),''+IiiIi1+IllIIl+'|'+ll1l1,ii1ll[lIII1I(0x161,'t)%x')]()][lIII1I(0x19a,'hR!r')]('.'),IliI1i=IllIIi,ll1ii=[IllIIi,lili1[lIII1I(0x111,'hR!r')],lili1[lIII1I(0x1b0,'eCn3')],'tuiguang',lili1[lIII1I(0x1c1,'(tAR')],IliI1l[lIII1I(0x139,'eCn3')]()],IIli11=lili1[lIII1I(0x133,'y]Y6')](encodeURIComponent,ll1ii[lIII1I(0x15f,'y]Y6')]('|'));return{'jda':lliiil,'jdb':lliiii,'jdc':IliI1i,'jdv':IIli11};}function timestamp(){const illIlI=lilIi,Illl11={'cafyF':function(ii1lI,I1ilIl){return ii1lI/I1ilIl;}};return Math[illIlI(0x1b5,'KjKV')](Illl11['cafyF'](Date[illIlI(0xf2,'HW[I')](),0x3e8));}function iii1II(_0x1163f2,_0x10aa40){const _0x1685c2=Iii11l();return iii1II=function(_0x488b41,_0x31c9a2){_0x488b41=_0x488b41-0xdb;let _0x2b04a3=_0x1685c2[_0x488b41];if(iii1II['DjXbjb']===undefined){var _0x4a74d2=function(_0x48af97){const _0xced541='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xba5b3a='',_0x2db620='';for(let _0x2e343=0x0,_0x51210c,_0x4eaf4d,_0x595869=0x0;_0x4eaf4d=_0x48af97['charAt'](_0x595869++);~_0x4eaf4d&&(_0x51210c=_0x2e343%0x4?_0x51210c*0x40+_0x4eaf4d:_0x4eaf4d,_0x2e343++%0x4)?_0xba5b3a+=String['fromCharCode'](0xff&_0x51210c>>(-0x2*_0x2e343&0x6)):0x0){_0x4eaf4d=_0xced541['indexOf'](_0x4eaf4d);}for(let _0x1849b0=0x0,_0x106d3b=_0xba5b3a['length'];_0x1849b0<_0x106d3b;_0x1849b0++){_0x2db620+='%'+('00'+_0xba5b3a['charCodeAt'](_0x1849b0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2db620);};const _0x3afb83=function(_0x17d6ce,_0x2e73bc){let _0x57c6e9=[],_0x5f0e53=0x0,_0x58ef07,_0x309897='';_0x17d6ce=_0x4a74d2(_0x17d6ce);let _0x24e5b4;for(_0x24e5b4=0x0;_0x24e5b4<0x100;_0x24e5b4++){_0x57c6e9[_0x24e5b4]=_0x24e5b4;}for(_0x24e5b4=0x0;_0x24e5b4<0x100;_0x24e5b4++){_0x5f0e53=(_0x5f0e53+_0x57c6e9[_0x24e5b4]+_0x2e73bc['charCodeAt'](_0x24e5b4%_0x2e73bc['length']))%0x100,_0x58ef07=_0x57c6e9[_0x24e5b4],_0x57c6e9[_0x24e5b4]=_0x57c6e9[_0x5f0e53],_0x57c6e9[_0x5f0e53]=_0x58ef07;}_0x24e5b4=0x0,_0x5f0e53=0x0;for(let _0x4f2e52=0x0;_0x4f2e52<_0x17d6ce['length'];_0x4f2e52++){_0x24e5b4=(_0x24e5b4+0x1)%0x100,_0x5f0e53=(_0x5f0e53+_0x57c6e9[_0x24e5b4])%0x100,_0x58ef07=_0x57c6e9[_0x24e5b4],_0x57c6e9[_0x24e5b4]=_0x57c6e9[_0x5f0e53],_0x57c6e9[_0x5f0e53]=_0x58ef07,_0x309897+=String['fromCharCode'](_0x17d6ce['charCodeAt'](_0x4f2e52)^_0x57c6e9[(_0x57c6e9[_0x24e5b4]+_0x57c6e9[_0x5f0e53])%0x100]);}return _0x309897;};iii1II['qaIiOS']=_0x3afb83,_0x1163f2=arguments,iii1II['DjXbjb']=!![];}const _0x1531ea=_0x1685c2[0x0],_0x2c7e50=_0x488b41+_0x1531ea,_0x1b7095=_0x1163f2[_0x2c7e50];return!_0x1b7095?(iii1II['geIrfg']===undefined&&(iii1II['geIrfg']=!![]),_0x2b04a3=iii1II['qaIiOS'](_0x2b04a3,_0x31c9a2),_0x1163f2[_0x2c7e50]=_0x2b04a3):_0x2b04a3=_0x1b7095,_0x2b04a3;},iii1II(_0x1163f2,_0x10aa40);}function Iii11l(){const l1il1I=(function(){return[...[iｉl,'flqQjTsfOjwidOanHmJSiOf.YcJXXoWmhIT.LCv7==','cbHSW5O','s+IUGoAXIUwrSUw7QbG','4P+XoEwfIEwLTUwZQ+E7OZylnmoV','4O2b77UdW4FOTi7LJO9oW41m6BQR6kYl5y6t5yUl5yQG5l+w6icA','W454zmoxWRS','WRiPW7C','fmohWRlcP8kEW41y','fvm0WQtdUW','W5DVW49LodC7W4nDWRhcVCk1fCocxmokaq','WR7dGCoJWOtcPSkIEw1oWOW6','WPBcISkQaXpdIG','W5jqxSouWPtdTentWP7dQYhcSmomWRC','WPOLW5jLW5W','kSoKqKvqW4/dI8oondnuW7ONbGpdUmoqWPBdSa','W7JdM0SlyehdRG','W4RcPx4','WPaAgG3cVSoL','WRGpW6r1va','W4VcR2O/vSkfca','W79dWQ9AW6e','WQWXoq3cOSoZ','WPSVW5rl','WRZdJGqr','4P+WW6RMNlpLOkFLHQ7MJ6xLR7FLIR/LIQhLJABPHBpVVB7LV5RLPypLI5/LI4hOTRlLJARdH17dTq','5P6k6iYQ5y2R5yMH5PAZ5OYRW7hOR6VPHApMLAtOViBOOAG','qmkqWQlcRCk0','8jUQKKW','4P+aW6NLIRpLIORNO5RLPP/MLP/VVytORiVLHOpLJytLV6RLKAhMLQNKUQBOVABMTkNLIkFLKldLH5pOVi3OO5FLKO/VV5W','WQS+W4j2sW','WQ/cG1K','mg09yIG','W5jHu8kekSkDyG','xrTKdtNdN3ZcOJqPEa','WPdcH0y8W7m','W71ieYhdPq','W6xMNkVNNzZLIQxLI5FNI6tMGBZdTXtcMq','WOBcGSk+kG/dGa','W5ldVmotnCkSka','cfucAI58p8oUj8o9W4qpu1iEvSkK','WR02W6fGW4u','rJxdRNNdJmkL','W6VdMmk3W4XrW6xcNq','WQlcPCou','4P6HW7xLIi3LI5hMIQZLIiZdTmkN5OwH6lo2WQy','W7FcJmorW50','j8keWQyNWRC','r8k+lCke','W7FdOSoQWOWpWQpdHJxcH8oJzLSr','4PYhWQFMSPFMNkxLIO/LIl3MRP7ML5C','beKgtIL+','W6ToWQ4','jmkMWQqXWQKkWOKf','zmoWW4r3W64QWOqNW58sWPm','mNmHWRFdRW','W6NcU2H+WQK','W6BcMCkNW5VdPSkWAhjmWQW3W5f+WR/dQmkBWOLVW4FdS8kfuri','v8kusa','lMWUrSkyW5hcJtHAB8kLc8k6W6FcNCkBi8kmpCkl','CSkJWQhcJSkQW5yK','cguNWRldRa','WPqRW5nVF8oEW488WO/dHSoCgConumoPWQ3dK8kcla','W6BcMmkI','xxnXW6lcOCoJWRJcVwXNyCow','W4hcU8os','WPJdNSo3DXf1WQq7WPrG','WQpdJJKci27dT8k1','emoSW6FdLmoUWOLJ5B2I5AAr44oS5lQd5lI+6lsv5y6q','q30OWRBdL8km','et7cPxZdTaxdMCoccsq','rh9Z','WPaVW5naDG','WR3cOCkYdc8','W5FdNCoWuu3cK0FcQSkmW6VdVCkD','WOuNjYFcMW','uaKyqaPZoSov','4P2YjUA3NUIUMUI9I+MbMUAcREs6JLjHWRldT+kCKCoR5P+f5yUZ54UG5OkX5Q+O5BU+Bgj1qq','W51FAmohWOm','WOFcRSoHlSofWR5s','lKpcLa','W6zTfZJdVa','WPpcQ8kpyCo6CCoTx8ohWPZcO0y7','WQtdK0i','WPmpswJcRsGQW7tcT0zx','F8k9BdhdQW','WQRcGKG4tLhdLmouWQ/cMbFdJK/dLIK8WPO','WPBdT3etsLBcVNC','4P6pWQtMNl7NNOtOR7pMSBxdSW','WRJOR6pMSypLPRxOT7xcKokFRIZMLldLKyNLU4hMLQNMJ4q','WQOXnYy','ufyfAr1Xaa','W6ZcMmobW5BcPSkoWPS','W65pWR9bW73dLmo1','WO1Qca','W5FcO8ka'],...(function(){return[...['Es/dULxdJSkTgmkMdCogWP9NWO3cRKGECCoTESofWOjtWPvmW43dMmoiW455W6FcH8oWW77dK1TTgfNdHsaBWQGPwCoHWO0SbM0FWRtcVCorWODJWPRcQSo4W6RcTexcJa0PW47dHSoLWQ1zW5VdLc3cPfZcLLdcUCobWOFcI3HRu8oPW5iLaCo+W73cONBdTaFcMmoUgaZcIbScWOLTW6BdUSkojCo3W6XDtL7dOYTWW5fMW6BdHSkCy8oAWRLEWQVcGN3dTCk1W7W5xglcVWJcTcbeWRZcMJVdTSkwcfuAWQXNdvBcN8kTWQ44cYBcUG','ihq1wCkz','aeiX','uMFdUtRdSa/dRa','W4ZdSSoA','ECoOWOdcVCkk','amoKAd4','eSk8WPeJWPy','WQZcO8ojDYxcRa','dfi/WQ4','uCkcvGW','hXHBW4SouwXz','j0FdJ8kbW4m','BKldIH/dKqtcU8o8mHRdKq','n1NcLmkj','W5lcTNTttwm','WQVcQ3G+W5K','xeC5WOPpddTMWOTYjIbg','W4fWWPPQW4a','W6VcOMe2ya','W5/cIeOMvG','nhK0uSkeWOy','WRtcJvCL','W75lgYpdMX4oW6C','meW/Dru','4P+pWP3LIBlLIkFNOl7LPQhMLRJVVi3KV6lOG5/MNBZLVANLKAhMTABLIQtVViq','c0GI','sCouWP3cM8k7','W4vWW7u8WQLU','W7nnW6KIWOm','W7mzbCkSicnI','utldSNhdKCkM','W4zlgq','W7VdSSkdctFcJIPbphW','W5LnebtdUXS','nKzsWRddG8kLkdtdJmo8WO3cQComWQi','W5v4W6evWRvK','dv4Azc5X','y8k/WRtcH8oPW64etZ7cMa9QE13cNabbfmon','pmkMWPaaWQKr','kKNcLmksW6T/fa','W5r1W6ysWR8','WQmXoI0','WQe9W4LIwq','WQSSnmk8WOtdVbTaWR7dRG','uYxdThddG8k1hmo6tmkPW583W7pcOMOfD8oSCq','W7X1DCoL','bhldUmkNW7RdMmo2W7xdNhi8WQjmWQhcTmkbW6K3jCoiwSkRWO0GebpcKmoDEstcRuxdGSkt','W45GW4TTise5W4TAWQm','WPFdO8kwESkfWQFdPmk/f8kCWO7cTH8','W754BSoRWQi','DrZdLCorWR8SeZBcOZ7dJ8orphtcO8kOWPNdVSk7tSkvnSo1sruXBCoUW7b2WORdMq','aHL+W5yixurxWRbjoqrlWQJdJ24P','W6baWODDW6i','gIiJWQldSCodWRxcJLnvtq','nN08umkz','ceWIwG','xg5+W5xcQSoU','WPfKhqhcHWzGi27dPq','W7ODaSk+','4PYPW5BOH5ZMN47OVOFOOPtPGjRLIzpKUldPLjJOR6RcOq','WPnWasxcHbe','W5zRwa','W4XDcGxdVbig','W7RcLColW4e','W5ZcQCktzr1MWO9Wfmok','WQKMBCohWOddMJfE','W43cU8oal8oe','CmkPWQtcKa','zmoRWOZcMmki','W5nGW4K','WRm2pZRcTCoOWQqgl8kkW5RdIq','txr0W7u','W4jwcdJdOrOLW6VcHu1yWOhdQaPMgSkF','WObWgWJcHqDNlx7dOq','44oX5O+v56wv44gX6kYD5ys96i6t5y6uwCoRW5zQW6ZcSa','cCkzWQe','W6j8lmoNWR4','uIZdR1pdKa','i1ziWRBdGSkU','W7BcIfy2FG','W6tcMv9obuVdSmkEc8os','W4JcUmkvzbfMWOG','bNpcU0i3','W5JcU8kfdZS','WRispZRcVq','xK0GWRhdMa','i0pcICke','b8oQCJLkW7m','dhFcTWxcMSkwmmo/ECkqW4K','WRZdTc4/gW','e1OAzZv0','W6xcP2X4WQ/dI8kriCkpWRJcLSkfihhdG2rI','x8k+lmkFW5q','bXHV','W5XOumkBnG'],...(function(){return['WRBcK8kveZS','WRrwxmo1A24n','W6FdNmkVW50','EWWZW4lcL8oyx8kD','W6rrWRHLW5S','grbMW5KB','W6NcNSkP','WP/cHu02W7K','jxypyCka','WQ/cHmklvXdcKW8tkMmJWPGHWOZcTmoIW4XvWQddTKJcOG','WO4cW5rOW7NcGq','W7JcPx5tWQG','bY/dSNVdHmkPsmoqu8kFW6elW47cTga5FConj8keW7vb','W5L7W5b8yhizW49iWQ7cTCkUhSkMe8offG','wSoTWOtcQq','r3vMW7NcSmoVWPdcONzGBColdSkeBMRdPW','W5jsWQXAW4FdKmoQma','W67dJSk8','W5iZw1BdM0fwg0/dSSo9va','WQRcGKG4tLhdLmouWQ/cMbFdJK/dVcK2WOxdKCkGBCoFW4lcTa','W43cU8osi8oiW7BcPG','W5fWWQTRW50','W7pdNLHPxG','W5CRdmk6iG','WQldTgqeALpcKh3cRmk7W6tdGHS','ySkoWRNcJSkU','bHz4','vSk1kM5lW5yOWOVcICki','q2pdUXRdLa','eNRcM31ka8kO','pu4rcfFdKx/cRsrdrhRdNSoMWOupEMRcIYpdICoX','WOJcHmkJ','W6uzW49hW7pcH1W','ouzkWOpdVSkVmcJdHCoE','W5D3wa','g2fJWOhdS8k+lrhdHmopWRNcJmorWPBdOYVcQZhdPmoxaSooWRtcULPuWPO+pSkPWQ8Ypv/cRdNdQfpdGHtcSYRdIq','CKKCWP/dKmklemozWP5MdmoOW4dcJ8o2jLjGW6ZcSmkqWOtdKSodeCkxiqy1lSo0Bmk1','W5RcR8ktqq58WOH4fSoCDXjxW6TRh8oht8ks','q8o3WOO','WQhcHuqCsvm','WO/cQCkKASog','lupcJSkp','W4tIJldVURWA5yU/5yMq56g477Y6','W5y1xLxdMueDgLldJmopsSoM','geq7xG','WQ/dQ3m','W5pcGSkuiHq','WQldMfm','W4fChW','WP8RW4LeASoc','WPSRW4TtCmoFW4C','WOBdLH46eW','W77cMmowW53cRmkpWQVcGuG5','fN7cGwiEbmk5WR/dVbDc','w8kTk8kj','4O6p77IqW4/LT4FLVB/LKz/MT6FLIAxVVPNLIyNMNlRMLyhPLlBVVAK','aMWDvmkF','pmkMWPa','W4Dxgq','m8k7WPiKWQ8g','qmkQkSkQW51oWRa','4P6MW6VMNRJOGQdMR4FNORFLPlpNK5tcQa','C8kOWRVcL8kWW4ypcYNcJ0znxsxcLaSufCoBkhHPWPG','WOxdKMFdVeW','W6NcNSk/W5pdVSk5vW','FSkNWRNcNW','pSk8WRKWWPi','4PYJp+w0NEwHNUwhPUAnT+wTHUwjPowiJUwoOEMhQU++U+w/GUwMUowlJUwkVNpdGW','W7baWQbC','WPhdHK4gvG','gCoTEfXF','DSkPWQO','kuxcHmkkW4r5hgO','W4tdPmo4oCoNWRzyWRNdOxS','vNWMWRVdKG','8js6Sda','4OYj77MbWOFOTixLJ6NdSCkBeUM4O+ISO+wmL+wlGowiGos9QEIcNG','WPlcUSk0acG','W5rXW64dWR9GDLnZWPhdL2q','xmklqbddGa','E1WnWPFdNmkAaG','W6/dKSk8','W43cU8osi8oiW7BcKSkvdCkNWPlcUWKYF8osW5O','W7SobmksmIm','u8kjsXRdIG','qGNdKMZdTW','W4ldT8ksW5j8','W4JcPw4','wIhdRvK','W43cU8osi8oiW7BcKSkvdCkNWPlcUWKsDCotW48','vSkisa','q2pdOqpdTdtdR8oqca7dRmkneCkUWROHp8oFW6u','eg3cNxGmfW'];}())];}())];}());Iii11l=function(){return l1il1I;};return Iii11l();};function random(I11iII,I1ilIi){const liIiI=lilIi,IiiiI={'TTfSY':function(llIlli,llIlll){return llIlli+llIlll;}};return IiiiI[liIiI(0x173,'RlNo')](Math[liIiI(0x1a4,'Qh](')](Math[liIiI(0x17a,'RlNo')]()*(I1ilIi-I11iII)),I11iII);}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
