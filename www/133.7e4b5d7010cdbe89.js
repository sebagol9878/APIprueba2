"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[133],{133:(y,l,c)=>{c.r(l),c.d(l,{ProductEditPageModule:()=>E});var p=c(6814),d=c(95),i=c(3582),s=c(9964),a=c(5861),o=c(6689),f=c(651),m=c(4414);function h(e,g){if(1&e&&(o.TgZ(0,"div",14),o._uU(1),o.qZA()),2&e){const r=o.oxw(2);o.xp6(1),o.hij(" ",r.nombreprodErrorL," ")}}function b(e,g){if(1&e&&(o.TgZ(0,"div",14),o._uU(1),o.qZA()),2&e){const r=o.oxw(2);o.xp6(1),o.hij(" ",r.precioErrorL," ")}}function P(e,g){if(1&e){const r=o.EpF();o.TgZ(0,"div")(1,"form",6),o.NdJ("ngSubmit",function(){o.CHM(r);const n=o.oxw();return o.KtG(n.onFormSubmit())}),o.TgZ(2,"ion-item")(3,"ion-label",7),o._uU(4,"Nombre del Producto"),o.qZA(),o._UZ(5,"ion-input",8),o.qZA(),o.YNc(6,h,2,1,"div",9),o.TgZ(7,"ion-item")(8,"ion-label",10),o._uU(9,"Descripci\xf3n"),o.qZA(),o._UZ(10,"ion-input",11),o.qZA(),o.TgZ(11,"ion-item")(12,"ion-label",10),o._uU(13,"Precio"),o.qZA(),o._UZ(14,"ion-textarea",12),o.qZA(),o.YNc(15,b,2,1,"div",9),o.TgZ(16,"ion-button",13),o._uU(17,"Submit"),o.qZA()()()}if(2&e){const r=o.oxw();o.xp6(1),o.Q6J("formGroup",r.productForm),o.xp6(5),o.Q6J("ngIf",r.nombreprodErrorL),o.xp6(9),o.Q6J("ngIf",r.precioErrorL),o.xp6(1),o.Q6J("disabled",!r.productForm.valid)}}const v=[{path:"",component:(()=>{class e{constructor(r,t,n,u,x,A){this.restApi=r,this.loadingController=t,this.alertController=n,this.route=u,this.router=x,this.formBuilder=A,this.nombreprodErrorL="",this.precioErrorL="",this.producto={idProducto:0,codigo:"09-G1",nombreprod:"",precio:0,cantidad:0,fechaNacimiento:"",rut:"",dv:"0",enfermedad:"0",fonocontacto:0,categoria:"0",editorial:"0",raza:"0",edad:0,altura:0,hrini:"0",hrfin:"0",direccion:"",fCreacion:""},this.id=""}ngOnInit(){var r=this;return(0,a.Z)(function*(){console.log("ngOnInit ID:"+r.route.snapshot.params[""]),r.id=r.route.snapshot.params.id,null!=r.id?(yield r.getProduct(r.id),r.productForm=r.formBuilder.group({nombreprod:[r.producto.nombreprod,d.kI.required],precio:[r.producto.precio,d.kI.required],direccion:[r.producto.direccion,d.kI.required]})):console.error("ID es undefined o null")})()}onFormSubmit(){var r=this;return(0,a.Z)(function*(){if(r.productForm.valid){if(r.nombreprodErrorL="",r.precioErrorL="",!/^[a-zA-Z]+$/.test(r.productForm.value.nombreprod))return void(r.nombreprodErrorL="El nombre del producto solo debe contener letras.");if(!/^\d+$/.test(r.productForm.value.precio.toString()))return void(r.precioErrorL="El precio del producto debe ser un n\xfamero entero.");r.producto&&r.producto.idProducto?(r.producto.idProducto=r.id,r.producto.nombreprod=r.productForm.value.nombreprod,r.producto.direccion=r.productForm.value.direccion,r.producto.precio=r.productForm.value.precio,yield r.restApi.updateProduct(r.id,r.producto).subscribe({next:t=>{r.presentAlertConfirm("Producto actualizado exitosamente.")},complete:()=>{},error:t=>{console.log(t),r.presentAlertConfirm("Error al actualizar el producto.")}})):console.error("El objeto producto o su propiedad idProducto es undefined")}})()}getProduct(r){var t=this;return(0,a.Z)(function*(){const n=yield t.loadingController.create({message:"Loading..."});try{yield n.present(),t.restApi.getProduct(r).subscribe({next:u=>{console.log("getProductID data**"),console.log(u),u&&(t.producto=u,t.producto.idProducto&&(t.id=t.producto.idProducto),t.producto.nombreprod&&t.productForm.setValue({nombreprod:t.producto.nombreprod||"",direccion:t.producto.direccion||"",precio:t.producto.precio||0})),n.dismiss()},error:u=>{console.log("getProductID Error**"),console.log(u),t.presentAlertConfirm("Error al cargar el producto."),n.dismiss()}})}catch(u){console.log("getProductID Error**"),console.log(u),t.presentAlertConfirm("Error al cargar el producto."),n.dismiss()}})()}presentAlertConfirm(r){var t=this;return(0,a.Z)(function*(){yield(yield t.alertController.create({header:"Warning!",message:r,buttons:[{text:"Okay",handler:()=>{t.router.navigate(["/product-list/"])}}]})).present()})()}static#o=this.\u0275fac=function(t){return new(t||e)(o.Y36(f.I),o.Y36(m.HT),o.Y36(m.Br),o.Y36(s.gz),o.Y36(s.F0),o.Y36(d.qu))};static#r=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-product-edit"]],decls:10,vars:2,consts:[[3,"translucent"],["slot","start"],["slot","end"],["defaultHref","/product-list"],["padding",""],[4,"ngIf"],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","nombreprod"],["class","error-message",4,"ngIf"],["position","stacked"],["formControlName","direccion","type","text"],["formControlName","precio"],["type","submit","shape","round","color","primary","expand","block",3,"disabled"],[1,"error-message"]],template:function(t,n){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"product-edit"),o.qZA(),o.TgZ(6,"ion-buttons",2),o._UZ(7,"ion-back-button",3),o.qZA()()(),o.TgZ(8,"ion-content",4),o.YNc(9,P,18,4,"div",5),o.qZA()),2&t&&(o.Q6J("translucent",!0),o.xp6(9),o.Q6J("ngIf",n.productForm))},dependencies:[p.O5,d._Y,d.JJ,d.JL,i.YG,i.Sm,i.W2,i.Gu,i.pK,i.Ie,i.Q$,i.fG,i.g2,i.wd,i.sr,i.j9,i.oU,d.sg,d.u]})}return e})()}];let Z=(()=>{class e{static#o=this.\u0275fac=function(t){return new(t||e)};static#r=this.\u0275mod=o.oAB({type:e});static#t=this.\u0275inj=o.cJS({imports:[s.Bz.forChild(v),s.Bz]})}return e})(),E=(()=>{class e{static#o=this.\u0275fac=function(t){return new(t||e)};static#r=this.\u0275mod=o.oAB({type:e});static#t=this.\u0275inj=o.cJS({imports:[p.ez,d.u5,i.Pc,d.UX,Z]})}return e})()}}]);