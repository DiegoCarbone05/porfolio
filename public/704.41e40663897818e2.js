"use strict";(self.webpackChunkdiego_carbone_pf=self.webpackChunkdiego_carbone_pf||[]).push([[704],{6950:(y,u,c)=>{c.d(u,{A:()=>C});var e=c(7779),a=c(4006),n=c(4650),s=c(4859),l=c(3238),v=c(4144),b=c(9549);const Z=["file"];class _{constructor(o,t){this.dialogRef=o,this.data=t,this.fileAttr="Choose File",this.editCardForm=new a.cw({picture:new a.NI(this.data.currentCardsData?.picture??"assets/resources/pictures/img-404-card.svg"),title:new a.NI(this.data.currentCardsData?.title??"Titulo"),desc:new a.NI(this.data.currentCardsData?.desc??"Descripci\xf3n"),url:new a.NI(this.data.currentCardsData?.url??"")})}ngOnInit(){this.currentData=this.data.currentCardsData,this.editCardForm.valueChanges.subscribe(o=>{this.currentData={...this.currentData,picture:o.picture,title:o.title,desc:o.desc,url:o.url}})}submit(){console.log(this.currentData),this.dialogRef.close(this.currentData)}onNoClick(){this.dialogRef.close()}}_.\u0275fac=function(o){return new(o||_)(n.Y36(e.so),n.Y36(e.WI))},_.\u0275cmp=n.Xpm({type:_,selectors:[["app-card-edit-dialog"]],viewQuery:function(o,t){if(1&o&&n.Gf(Z,5),2&o){let r;n.iGM(r=n.CRH())&&(t.fileInput=r.first)}},decls:38,vars:8,consts:[[1,"dialog-container"],[1,"mobile-preview-image",3,"src","alt"],[1,"content"],[1,"wrap",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","picture"],["matInput","","placeholder","My cart title","formControlName","title"],["matInput","","placeholder","My cart description","formControlName","desc",2,"height","150px"],["matInput","","formControlName","url"],[1,"wrap"],["mat-ripple",""],[3,"src","alt"],[1,"warp-buttons"],["mat-flat-button","","color","primary",1,"primary",3,"mat-dialog-close","click"],["mat-button","",1,"secondary",3,"click"]],template:function(o,t){if(1&o&&(n.TgZ(0,"div",0)(1,"h2"),n._uU(2,"Editar tarjeta"),n.qZA(),n._UZ(3,"br")(4,"img",1)(5,"br")(6,"br"),n.TgZ(7,"div",2)(8,"form",3)(9,"mat-form-field",4)(10,"mat-label"),n._uU(11,"Picture URL"),n.qZA(),n._UZ(12,"input",5),n.qZA(),n.TgZ(13,"mat-form-field",4)(14,"mat-label"),n._uU(15,"T\xedtulo de tarjeta"),n.qZA(),n._UZ(16,"input",6),n.qZA(),n.TgZ(17,"mat-form-field",4)(18,"mat-label"),n._uU(19,"Descripci\xf3n"),n.qZA(),n._UZ(20,"textarea",7),n.qZA(),n.TgZ(21,"mat-form-field",4)(22,"mat-label"),n._uU(23,"Ruta"),n.qZA(),n._UZ(24,"input",8),n.qZA()(),n.TgZ(25,"div",9)(26,"article",10),n._UZ(27,"img",11),n.TgZ(28,"span")(29,"h3"),n._uU(30),n.qZA(),n.TgZ(31,"p"),n._uU(32),n.qZA()()()()(),n.TgZ(33,"div",12)(34,"button",13),n.NdJ("click",function(){return t.submit()}),n._uU(35," GUARDAR "),n.qZA(),n.TgZ(36,"button",14),n.NdJ("click",function(){return t.onNoClick()}),n._uU(37,"CANCELAR"),n.qZA()()()),2&o){let r,i,g,d;n.xp6(4),n.Q6J("src",null!==(r=null==t.currentData?null:t.currentData.picture)&&void 0!==r?r:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.currentData?null:t.currentData.title),n.xp6(4),n.Q6J("formGroup",t.editCardForm),n.xp6(19),n.Q6J("src",null!==(i=null==t.currentData?null:t.currentData.picture)&&void 0!==i?i:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.currentData?null:t.currentData.title),n.xp6(3),n.Oqu(null!==(g=null==t.currentData?null:t.currentData.title)&&void 0!==g?g:"Titulo"),n.xp6(2),n.Oqu(null!==(d=null==t.currentData?null:t.currentData.desc)&&void 0!==d?d:"Descripci\xf3n"),n.xp6(2),n.Q6J("mat-dialog-close",t.currentData)}},dependencies:[s.lW,l.wG,v.Nt,b.KE,b.hX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,e.ZT],styles:["mat-form-field[_ngcontent-%COMP%]{width:100vw;max-width:100%}img[_ngcontent-%COMP%]{width:100%;border-radius:8px;border:2px dashed white}.dialog-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;padding:24px;box-sizing:border-box}.dialog-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;margin:0;color:var(--foreground-color)}.dialog-container[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:none}.dialog-container[_ngcontent-%COMP%]   .warp-buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:right;margin-top:20px;gap:12px}.dialog-container[_ngcontent-%COMP%]   .warp-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:600;letter-spacing:1.3px}.dialog-container[_ngcontent-%COMP%]   .warp-buttons[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]{color:#fff}@media screen and (min-width: 940px){mat-form-field[_ngcontent-%COMP%]{width:100%}.mobile-preview-image[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%]{display:flex;gap:40px}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{width:100%;max-width:380px}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{width:100%;transition:all .1s;overflow:hidden;display:flex;flex-direction:column;border-radius:8px;max-width:380px}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{width:10}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:8px;border:none}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;padding:20px 0;margin-left:30px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--foreground-color)}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;margin-top:1rem;margin-bottom:1rem;font-size:1rem;color:#0067b8;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;align-items:center;cursor:pointer}.content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}}"]});var T=c(8996);class C{constructor(o,t){this.router=o,this.dialog=t,this.saveNewCard=new n.vpe}ngOnChanges(o){this.cards=o.data.currentValue}ngOnInit(){this.cards=this.data}editCard(o){this.editMode?this.dialog.open(_,{data:{currentCardsData:this.cards[o]}}).afterClosed().subscribe(r=>{if(!r)return;const i=this.cards.findIndex(g=>g.id==r.id);-1!=i&&(this.cards[i]=r,this.saveNewCard.emit(this.cards))}):window.open(this.cards[o].url,"_blank")}}C.\u0275fac=function(o){return new(o||C)(n.Y36(T.F0),n.Y36(e.uw))},C.\u0275cmp=n.Xpm({type:C,selectors:[["app-card"]],inputs:{data:"data",editMode:"editMode"},outputs:{saveNewCard:"saveNewCard"},features:[n.TTD],decls:31,vars:16,consts:[[1,"card-container"],[1,"card-group"],["mat-ripple","",3,"click"],[3,"src","alt"]],template:function(o,t){if(1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"article",2),n.NdJ("click",function(){return t.editCard(0)}),n._UZ(3,"img",3),n.TgZ(4,"span")(5,"h3"),n._uU(6),n.qZA(),n.TgZ(7,"p"),n._uU(8),n.qZA()()(),n.TgZ(9,"article",2),n.NdJ("click",function(){return t.editCard(1)}),n._UZ(10,"img",3),n.TgZ(11,"span")(12,"h3"),n._uU(13),n.qZA(),n.TgZ(14,"p"),n._uU(15),n.qZA()()()(),n.TgZ(16,"div",1)(17,"article",2),n.NdJ("click",function(){return t.editCard(2)}),n._UZ(18,"img",3),n.TgZ(19,"span")(20,"h3"),n._uU(21),n.qZA(),n.TgZ(22,"p"),n._uU(23),n.qZA()()(),n.TgZ(24,"article",2),n.NdJ("click",function(){return t.editCard(3)}),n._UZ(25,"img",3),n.TgZ(26,"span")(27,"h3"),n._uU(28),n.qZA(),n.TgZ(29,"p"),n._uU(30),n.qZA()()()()()),2&o){let r,i,g,d,O,M,P,h,m,f,w,x;n.xp6(3),n.Q6J("src",null!==(r=null==t.cards[0]?null:t.cards[0].picture)&&void 0!==r?r:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.cards[0]?null:t.cards[0].title),n.xp6(3),n.Oqu(null!==(i=null==t.cards[0]?null:t.cards[0].title)&&void 0!==i?i:"Titulo"),n.xp6(2),n.Oqu(null!==(g=null==t.cards[0]?null:t.cards[0].desc)&&void 0!==g?g:"Descripci\xf3n"),n.xp6(2),n.Q6J("src",null!==(d=null==t.cards[1]?null:t.cards[1].picture)&&void 0!==d?d:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.cards[1]?null:t.cards[1].title),n.xp6(3),n.Oqu(null!==(O=null==t.cards[1]?null:t.cards[1].title)&&void 0!==O?O:"Titulo"),n.xp6(2),n.Oqu(null!==(M=null==t.cards[1]?null:t.cards[1].desc)&&void 0!==M?M:"Descripci\xf3n"),n.xp6(3),n.Q6J("src",null!==(P=null==t.cards[2]?null:t.cards[2].picture)&&void 0!==P?P:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.cards[2]?null:t.cards[2].title),n.xp6(3),n.Oqu(null!==(h=null==t.cards[2]?null:t.cards[2].title)&&void 0!==h?h:"Titulo"),n.xp6(2),n.Oqu(null!==(m=null==t.cards[2]?null:t.cards[2].desc)&&void 0!==m?m:"Descripci\xf3n"),n.xp6(2),n.Q6J("src",null!==(f=null==t.cards[3]?null:t.cards[3].picture)&&void 0!==f?f:"assets/resources/pictures/img-404-card.svg",n.LSH)("alt",null==t.cards[3]?null:t.cards[3].title),n.xp6(3),n.Oqu(null!==(w=null==t.cards[3]?null:t.cards[3].title)&&void 0!==w?w:"Titulo"),n.xp6(2),n.Oqu(null!==(x=null==t.cards[3]?null:t.cards[3].desc)&&void 0!==x?x:"Descripci\xf3n")}},dependencies:[l.wG],styles:[".card-container[_ngcontent-%COMP%]{flex-direction:column}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]{display:flex;width:90%;margin:auto;flex-direction:column;align-items:center;justify-content:center}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{width:100%;transition:all .1s;overflow:hidden;display:flex;flex-direction:column;border-radius:8px;max-width:380px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{width:10}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:8px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;padding:20px 0;margin-left:30px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--foreground-color)}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5;word-wrap:break-word}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;margin-top:1rem;margin-bottom:1rem;font-size:1rem;color:#0067b8;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;align-items:center;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (min-width: 512px){.card-container[_ngcontent-%COMP%]{flex-direction:column;display:flex;width:90%;margin:auto;gap:20px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-start;margin:0;flex-direction:row;justify-content:space-between;gap:20px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{transition:all .1s;overflow:hidden;display:flex;flex-direction:column;max-width:50%}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;padding:20px 0;margin-left:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;margin-top:1rem;margin-bottom:1rem;font-size:1rem;color:#0067b8;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;align-items:center;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}}@media only screen and (min-width: 1200px){.card-container[_ngcontent-%COMP%]{width:95%;max-width:1630px;height:-moz-fit-content;height:fit-content;display:flex;margin:auto;flex-direction:row;align-items:flex-start}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:space-around;flex-direction:row;gap:20px}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{transition:all .1s;overflow:hidden;display:flex;flex-direction:column}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .wrap-img[_ngcontent-%COMP%]{width:100%;height:200px;border-radius:8px;background-size:cover!important}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;padding:20px 0;margin-left:30px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;margin-top:1rem;margin-bottom:1rem;font-size:1rem;color:#0067b8;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;align-items:center;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-group[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}}"]})},1784:(y,u,c)=>{c.d(u,{x:()=>a});var e=c(4650);class a{constructor(){}}a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-hero"]],inputs:{heroData:"heroData"},decls:13,vars:6,consts:[[1,"wrap-hero"],[1,"content"],[1,"wrap-image"],[1,"image"],[1,"solid-box"],["src","assets/resources/form 1.svg","alt","",1,"form"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"img",5),e.qZA()(),e.TgZ(6,"span")(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"h1"),e._uU(10),e.qZA(),e.TgZ(11,"h2"),e._uU(12),e.qZA()()()()),2&s&&(e.xp6(3),e.Jzz("\n          background: url('",l.heroData.imgSrc,"');\n        "),e.xp6(5),e.Oqu(l.heroData.firstText),e.xp6(2),e.Oqu(l.heroData.secondText),e.xp6(2),e.Oqu(l.heroData.thirdText))},styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0%;transform:translateY(20px)}50%{transform:translateY(0)}to{opacity:100%}}.wrap-hero[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;align-items:center;justify-content:center}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;display:flex;height:100%;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;margin-top:-10px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:350px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]{width:100%;height:300px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .solid-box[_ngcontent-%COMP%]{width:100%;height:50%;background-color:var(--color-primary);top:0;position:absolute}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .solid-box[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:none}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;position:absolute;background-size:cover!important;z-index:2}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;gap:15px;display:flex;flex-direction:column;align-items:center;color:var(--foreground-color);animation:_ngcontent-%COMP%_fadeIn 1s}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;width:-moz-fit-content;width:fit-content}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:31px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;width:100%;text-align:center}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-family:Product Sans Light Regular}@media only screen and (min-width: 576px){.wrap-hero[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;align-items:center}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;margin:auto;gap:20px;justify-content:unset}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48vw;height:-moz-fit-content;height:fit-content}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;gap:15px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:31px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:31px;font-family:Product Sans Light Regular}}@media only screen and (min-width: 1200px){.wrap-hero[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 64px);display:flex;align-items:center}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;margin:auto;position:relative}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40vw;height:-moz-fit-content;height:fit-content}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]{width:40vw;height:100%;position:relative}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .solid-box[_ngcontent-%COMP%]{width:100%;height:100%;background-color:var(--color-primary);position:relative;border-bottom-left-radius:50px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .solid-box[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:unset}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:450px;height:450px;border:10px solid var(--color-primary);outline:15px solid var(--body-surface);left:-100px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;gap:15px;margin-left:100px;align-items:baseline}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:31px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;text-align:start}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:31px;font-family:Product Sans Light Regular}}@media only screen and (min-width: 1400px){.wrap-hero[_ngcontent-%COMP%]{width:100%}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;transition:all .5s}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:40px}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:55px;text-align:start}.wrap-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;font-family:Product Sans Light Regular}}"]})}}]);