"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9255],{9255:(v,a,s)=>{s.r(a),s.d(a,{PerfilListPageModule:()=>T});var c=s(6814),u=s(95),n=s(3582),l=s(9964),f=s(5861),t=s(6689),d=s(6896),g=s(4414);const p=function(i){return["/perfil-edit/",i]},m=function(i){return["/perfil-detail",i]};function Z(i,U){if(1&i&&(t.TgZ(0,"ion-item"),t._UZ(1,"ion-icon",7),t.TgZ(2,"ion-label"),t._uU(3),t.qZA(),t._UZ(4,"ion-icon",8),t.TgZ(5,"ion-button",4),t._uU(6,"Edit"),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"ion-button",4),t._uU(9,"Detail"),t.qZA(),t._UZ(10,"br"),t.qZA()),2&i){const e=U.$implicit;t.xp6(3),t.Oqu(e.usuario),t.xp6(2),t.Q6J("routerLink",t.VKq(3,p,e.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(5,m,e.id))}}const h=function(){return["/perfil-add"]},P=[{path:"",component:(()=>{class i{constructor(e,o,r){this.restApi=e,this.loadingController=o,this.router=r,this.perfiles=[]}ngOnInit(){this.loadPerfiles()}ionViewWillEnter(){this.loadPerfiles()}loadPerfiles(){var e=this;return(0,f.Z)(function*(){const o=yield e.loadingController.create({message:"Loading..."});yield o.present(),e.restApi.getPerfils().subscribe({next:r=>{e.perfiles=r,o.dismiss()},complete:()=>{},error:r=>{console.log("Error:",r),o.dismiss()}})})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(d.H),t.Y36(g.HT),t.Y36(l.F0))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-perfil-list"]],decls:17,vars:3,consts:[["slot","start"],["slot","end"],["defaultHref","/"],["color","red"],[3,"routerLink"],["padding",""],[4,"ngFor","ngForOf"],["name","star","slot","start"],["name","information-circle","slot","end"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Perfil-list"),t.qZA(),t.TgZ(6,"ion-buttons",1),t._UZ(7,"ion-back-button",2),t.qZA()()(),t.TgZ(8,"ion-content")(9,"ion-item")(10,"ion-label")(11,"font",3),t._uU(12,"Utilizando un Accesador "),t.TgZ(13,"ion-button",4),t._uU(14,"Agregar"),t.qZA()()()(),t.TgZ(15,"ion-list",5),t.YNc(16,Z,11,7,"ion-item",6),t.qZA()()),2&o&&(t.xp6(13),t.Q6J("routerLink",t.DdM(2,h)),t.xp6(3),t.Q6J("ngForOf",r.perfiles))},dependencies:[c.sg,n.YG,n.Sm,n.W2,n.Gu,n.gu,n.Ie,n.Q$,n.q_,n.fG,n.wd,n.sr,n.oU,n.YI,l.rH]})}return i})()}];let A=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#i=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(P),l.Bz]})}return i})(),T=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#i=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[c.ez,u.u5,n.Pc,A]})}return i})()}}]);