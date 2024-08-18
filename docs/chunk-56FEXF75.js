import{b as T,c as s,d as R,e as q,g as B,k as L,m as M,n as z,o as D}from"./chunk-5A73ZQPM.js";import{A as y,D as g,E as p,G as t,H as i,I as c,K as N,M as n,N as u,O as E,R as f,S as v,Y as j,Z as P,_ as V,d as C,ea as b,h as I,k as h,l as S,p as w,q as F,z as m}from"./chunk-AU7S6TUB.js";var O=(()=>{let e=class e{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.cantBeStrider=l=>l.value?.trim().toLowerCase()==="strider"?{noStrider:!0}:null}isValidField(l,a){return l.controls[a].errors&&l.controls[a].touched}isFieldOneEqualsFieldTow(l,a){return o=>{let d=o.get(l)?.value,U=o.get(a)?.value;return d!==U?(o.get(a)?.setErrors({notEqual:!0}),{notEquals:!0}):(o.get(a)?.setErrors(null),null)}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var k=(()=>{let e=class e{validate(l){let a=l.value;return new C(d=>{console.log({email:a}),a==="edgar@google.com"&&(d.next({emailTaken:!0}),d.complete()),d.next(null),d.complete()}).pipe(I(3e3))}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function J(r,e){r&1&&(t(0,"span",13),n(1," Debe de ser en formato de nombre y apellido "),i())}function $(r,e){r&1&&(t(0,"span",13),n(1," mensaje de error del email "),i())}function H(r,e){r&1&&(t(0,"span",13),n(1," El username no puede ser Strider "),i())}function K(r,e){r&1&&(t(0,"span",13),n(1," La contrase\xF1a debe de ser mayor de 6 caracteres. "),i())}function Q(r,e){r&1&&(t(0,"span",13),n(1," Las contrase\xF1as deben de ser iguales "),i())}var A=(()=>{let e=class e{constructor(l,a,o){this.fb=l,this.validatorsService=a,this.emailValidator=o,this.myForm=this.fb.group({name:["",[s.required,s.pattern(this.validatorsService.firstNameAndLastnamePattern)]],email:["",[s.required,s.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[s.required,this.validatorsService.cantBeStrider]],password:["",[s.required,s.minLength(6)]],password2:["",[s.required]]},{validators:[this.validatorsService.isFieldOneEqualsFieldTow("password","password2")]})}isValidField(l){return this.validatorsService.isValidField(this.myForm,l)}onSubmit(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}console.log(this.myForm.value),this.myForm.reset({})}};e.\u0275fac=function(a){return new(a||e)(y(z),y(O),y(k))},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xF3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xF1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(a,o){a&1&&(t(0,"h2"),n(1,"Validaciones Reactivas"),i(),c(2,"hr"),t(3,"div",0)(4,"div",1)(5,"form",2),N("ngSubmit",function(){return o.onSubmit()}),t(6,"div",3)(7,"label",4),n(8,"Nombre"),i(),t(9,"div",5),c(10,"input",6),g(11,J,2,0,"span",7),i()(),t(12,"div",3)(13,"label",4),n(14,"Email"),i(),t(15,"div",5),c(16,"input",8),g(17,$,2,0,"span",7),i()(),t(18,"div",3)(19,"label",4),n(20,"Username"),i(),t(21,"div",5),c(22,"input",9),g(23,H,2,0,"span",7),i()(),t(24,"div",3)(25,"label",4),n(26,"Password"),i(),t(27,"div",5),c(28,"input",10),g(29,K,2,0,"span",7),i()(),t(30,"div",3)(31,"label",4),n(32,"Confirmar"),i(),t(33,"div",5),c(34,"input",11),g(35,Q,2,0,"span",7),i()(),t(36,"div",0)(37,"div",1)(38,"button",12),n(39," Crear "),i()()()()()(),t(40,"h2"),n(41),i(),t(42,"h2"),n(43),i(),t(44,"h2"),n(45),i(),t(46,"h2"),n(47,"Form errors"),i(),t(48,"pre"),n(49),f(50,"json"),i(),t(51,"h5"),n(52,"Nombre"),i(),t(53,"pre"),n(54),f(55,"json"),i(),t(56,"h5"),n(57,"Email"),i(),t(58,"pre"),n(59),f(60,"json"),i(),t(61,"h5"),n(62,"Username"),i(),t(63,"pre"),n(64),f(65,"json"),i(),t(66,"h5"),n(67,"Password"),i(),t(68,"pre"),n(69),f(70,"json"),i(),t(71,"h5"),n(72,"Confirmar"),i(),t(73,"pre"),n(74),f(75,"json"),i()),a&2&&(m(5),p("formGroup",o.myForm),m(6),p("ngIf",o.isValidField("name")),m(6),p("ngIf",o.isValidField("email")),m(6),p("ngIf",o.isValidField("username")),m(6),p("ngIf",o.isValidField("password")),m(6),p("ngIf",o.isValidField("password2")),m(6),E("Form Valid: ",o.myForm.valid,""),m(2),E("Form Status: ",o.myForm.status,""),m(2),E("Form Pending: ",o.myForm.pending,""),m(4),u(v(50,15,o.myForm.errors)),m(5),u(v(55,17,o.myForm.controls.name.errors)),m(5),u(v(60,19,o.myForm.controls.email.errors)),m(5),u(v(65,21,o.myForm.controls.username.errors)),m(5),u(v(70,23,o.myForm.value.password)),m(5),u(v(75,25,o.myForm.controls.password2.errors)))},dependencies:[j,B,T,R,q,L,M,P],encapsulation:2});let r=e;return r})();var W=[{path:"",children:[{path:"sing-up",component:A},{path:"**",redirectTo:"sing-up"}]}],_=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=F({type:e}),e.\u0275inj=S({imports:[b.forChild(W),b]});let r=e;return r})();var pe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=F({type:e}),e.\u0275inj=S({imports:[V,_,D]});let r=e;return r})();export{pe as AuthModule};