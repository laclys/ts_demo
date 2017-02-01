var myname='zyy';
var getname=function(){
    return 'zyy';
}
console.log(`hello ${myname}`);
console.log(`hello ${getname}`);
console.log(`<div><span>${myname}</span>
<span>${getname}</span>
<div>xxx</div>
</div>`);