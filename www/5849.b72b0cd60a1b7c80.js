"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5849],{5849:(P,m,a)=>{a.r(m),a.d(m,{PerfilEditPageModule:()=>Z});var c=a(6814),l=a(95),t=a(3582),u=a(9964),f=a(5861),e=a(6689),d=a(6896),p=a(4414);const g=[{path:"",component:(()=>{class o{constructor(i,r,n,s,v,b){this.restApi=i,this.loadingController=r,this.alertController=n,this.route=s,this.router=v,this.formBuilder=b,this.perfil={id:0,usuario:"",correo:"",clave:"",fechanacimiento:new Date},this.id=0}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.id&&this.getPerfil(this.id)}),this.perfilForm=this.formBuilder.group({perfil_username:[null,l.kI.required],perfil_mail:[null,l.kI.required],perfil_password:[null,l.kI.required],perfil_fechanacimiento:[null,l.kI.required]})}onFormSubmit(){var i=this;return(0,f.Z)(function*(){console.log("onFormSubmit ID:"+i.id),i.perfilForm.valid&&(i.perfil.id=i.id,i.perfil.usuario=i.perfilForm.value.perfil_username,i.perfil.correo=i.perfilForm.value.perfil_mail,i.perfil.clave=i.perfilForm.value.perfil_password,i.perfil.fechanacimiento=i.perfilForm.value.perfil_fechanacimiento,yield i.restApi.updatePerfil(i.id,i.perfil).subscribe({next:r=>{i.router.navigate(["/perfil-list/"])},complete:()=>{},error:r=>{console.log(r)}}))})()}getPerfil(i){var r=this;return(0,f.Z)(function*(){const n=yield r.loadingController.create({message:"Loading..."});yield n.present(),yield r.restApi.getPerfil(Number(i)).subscribe({next:s=>{console.log("getProductID data****"),console.log(s),r.id=s.id,r.perfilForm.setValue({perfil_username:s.usuario,perfil_mail:s.correo,perfil_password:s.clave,perfil_fechanacimiento:s.fechanacimiento}),n.dismiss()},complete:()=>{},error:s=>{console.log("getPerfilID Errr****+"),console.log(s),n.dismiss()}})})()}presentAlertConfirm(i){var r=this;return(0,f.Z)(function*(){yield(yield r.alertController.create({header:"Warning!",message:i,buttons:[{text:"Okay",handler:()=>{r.router.navigate(["/perfil-list/"])}}]})).present()})()}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(d.H),e.Y36(p.HT),e.Y36(p.Br),e.Y36(u.gz),e.Y36(u.F0),e.Y36(l.qu))};static#i=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-perfil-edit"]],decls:28,vars:3,consts:[[3,"translucent"],["slot","start"],["slot","end"],["defaultHref","/"],["padding",""],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","perfil_username"],["type","email","formControlName","perfil_mail"],["type","password","formControlName","perfil_password"],["displayFormat","DD/MM/YYYY","formControlName","perfil_fechanacimiento"],["type","submit","shape","round","color","primary","expand","block",3,"disabled"]],template:function(r,n){1&r&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"perfil-edit"),e.qZA(),e.TgZ(6,"ion-buttons",2),e._UZ(7,"ion-back-button",3),e.qZA()()(),e.TgZ(8,"ion-content",4)(9,"form",5),e.NdJ("ngSubmit",function(){return n.onFormSubmit()}),e.TgZ(10,"ion-item")(11,"ion-label",6),e._uU(12,"Nombre de Usuario"),e.qZA(),e._UZ(13,"ion-input",7),e.qZA(),e.TgZ(14,"ion-item")(15,"ion-label",6),e._uU(16,"Correo"),e.qZA(),e._UZ(17,"ion-input",8),e.qZA(),e.TgZ(18,"ion-item")(19,"ion-label",6),e._uU(20,"Clave"),e.qZA(),e._UZ(21,"ion-input",9),e.qZA(),e.TgZ(22,"ion-item")(23,"ion-label",6),e._uU(24,"Fecha de Nacimiento"),e.qZA(),e._UZ(25,"ion-datetime",10),e.qZA(),e.TgZ(26,"ion-button",11),e._uU(27,"Guardar"),e.qZA()()()),2&r&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("formGroup",n.perfilForm),e.xp6(17),e.Q6J("disabled",!n.perfilForm.valid))},dependencies:[l._Y,l.JJ,l.JL,t.YG,t.Sm,t.W2,t.x4,t.Gu,t.pK,t.Ie,t.Q$,t.fG,t.wd,t.sr,t.QI,t.j9,t.oU,l.sg,l.u]})}return o})()}];let h=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#i=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(g),u.Bz]})}return o})(),Z=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#i=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[c.ez,l.u5,t.Pc,h,l.UX]})}return o})()}}]);