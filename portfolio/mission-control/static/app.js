var bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yp=0,zh=1,jp=2;var To=1,Zp=2,Jr=3,wi=0,cn=1,Yt=2,Ai=0,Qr=1,Hh=2,Vh=3,Gh=4,Kp=5;var js=100,Jp=101,Qp=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,$h=204,Wh=205,am=206,om=207,lm=208,cm=209,um=210,hm=211,dm=212,fm=213,pm=214,Fl=0,Bl=1,kl=2,Dr=3,zl=4,Hl=5,Vl=6,Gl=7,mc=0,mm=1,gm=2,li=0,Xh=1,qh=2,Yh=3,wo=4,jh=5,Zh=6,Kh=7,Mh="attached",_m="detached",Jh=300,Ss=301,Zs=302,gc=303,_c=304,Ao=306,us=1e3,jn=1001,Nr=1002,Bt=1003,yc=1004;var Ks=1005;var kt=1006,ea=1007;var ci=1008;var On=1009,Qh=1010,ed=1011,ta=1012,xc=1013,ui=1014,Gn=1015,hi=1016,vc=1017,bc=1018,na=1020,td=35902,nd=35899,id=1021,sd=1022,$n=1023,xi=1026,Ms=1027,Sc=1028,Mc=1029,Es=1030,Ec=1031;var Tc=1033,Ro=33776,Co=33777,Po=33778,Io=33779,wc=35840,Ac=35841,Rc=35842,Cc=35843,Pc=36196,Ic=37492,Lc=37496,Dc=37488,Nc=37489,Lo=37490,Uc=37491,Oc=37808,Fc=37809,Bc=37810,kc=37811,zc=37812,Hc=37813,Vc=37814,Gc=37815,$c=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,jc=37821,Zc=36492,Kc=36494,Jc=36495,Qc=36283,eu=36284,Do=36285,tu=36286;var Bs=2300,ks=2301,Nl=2302,Eh=2303,Th=2400,wh=2401,Ah=2402,ym=2500;var rd=0,No=1,ia=2,xm=3200;var Uo=0,vm=1,Ji="",Lt="srgb",wn="srgb-linear",ka="linear",_t="srgb";var Ul=7680;var bm=519,Sm=512,Mm=513,Em=514,nu=515,Tm=516,wm=517,iu=518,Am=519,ad=35044;var od="300 es",ri=2e3,Ur=2001;function J0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rm(){let i=Or("canvas");return i.style.display="block",i}var Jf={},Fr=null;function za(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function Cm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Cm(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Cm(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in Jf||(Jf[e]=!0,He(...i))}function Pm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Im={[Fl]:Bl,[kl]:Vl,[zl]:Gl,[Dr]:Hl,[Bl]:Fl,[Vl]:kl,[Gl]:zl,[Hl]:Dr},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,Ua=Math.PI/180,zs=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function ld(i,e){return(i%e+e)%e}function e_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function t_(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function n_(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function i_(i,e=1){return e-Math.abs(ld(i,e*2)-e)}function s_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function r_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function o_(i,e){return i+Math.random()*(e-i)}function l_(i){return i*(.5-Math.random())}function c_(i){i!==void 0&&(Qf=i);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u_(i){return i*Ua}function h_(i){return i*zs}function d_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function f_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function p_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m_(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*u,o*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zt={DEG2RAD:Ua,RAD2DEG:zs,generateUUID:Zn,clamp:je,euclideanModulo:ld,mapLinear:e_,inverseLerp:t_,lerp:Oa,damp:n_,pingpong:i_,smoothstep:s_,smootherstep:r_,randInt:a_,randFloat:o_,randFloatSpread:l_,seededRandom:c_,degToRad:u_,radToDeg:h_,isPowerOfTwo:d_,ceilPowerOfTwo:f_,floorPowerOfTwo:p_,setQuaternionFromProperEuler:m_,normalize:yt,denormalize:si},ve=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(h!==y||c!==d||l!==f||u!==p){let m=c*d+l*f+u*p+h*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);g=Math.sin(g*x)/b,o=Math.sin(o*x)/b,c=c*g+d*o,l=l*g+f*o,u=u*g+p*o,h=h*g+y*o}else{c=c*g+d*o,l=l*g+f*o,u=u*g+p*o,h=h*g+y*o;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-o*f,e[t+2]=l*p+u*f+o*d-c*h,e[t+3]=u*p-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ep.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qu=new P,ep=new nn,Ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],x=s[1],b=s[4],v=s[7],M=s[2],E=s[5],C=s[8];return r[0]=a*y+o*x+c*M,r[3]=a*m+o*b+c*E,r[6]=a*g+o*v+c*C,r[1]=l*y+u*x+h*M,r[4]=l*m+u*b+h*E,r[7]=l*g+u*v+h*C,r[2]=d*y+f*x+p*M,r[5]=d*m+f*b+p*E,r[8]=d*g+f*v+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=h*y,e[1]=(s*l-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yu=new Ke,tp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),np=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g_(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:ka,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var at=g_();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,$l=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Or("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},__=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ju(s[a].image)):r.push(ju(s[a]))}else r=ju(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var y_=0,Zu=new P,qt=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=kt,a=ci,o=$n,c=On,l=i.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Zn(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Jh;qt.DEFAULT_ANISOTROPY=1;var ut=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(f+1)/2,M=(g+1)/2,E=(u+d)/4,C=(h+y)/4,S=(p+m)/4;return b>v&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=S/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=S/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,p,y,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,p=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,y=l*h;t[0]=d+y*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,p=o*u,y=o*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,y=o*l;t[0]=c*u,t[4]=y-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,v_)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ss.crossVectors(n,Hn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ss.crossVectors(n,Hn)),ss.normalize(),nl.crossVectors(Hn,ss),s[0]=ss.x,s[4]=nl.x,s[8]=Hn.x,s[1]=ss.y,s[5]=nl.y,s[9]=Hn.y,s[2]=ss.z,s[6]=nl.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],x=n[3],b=n[7],v=n[11],M=n[15],E=s[0],C=s[4],S=s[8],w=s[12],I=s[1],F=s[5],H=s[9],G=s[13],z=s[2],X=s[6],re=s[10],ee=s[14],de=s[3],Y=s[7],le=s[11],B=s[15];return r[0]=a*E+o*I+c*z+l*de,r[4]=a*C+o*F+c*X+l*Y,r[8]=a*S+o*H+c*re+l*le,r[12]=a*w+o*G+c*ee+l*B,r[1]=u*E+h*I+d*z+f*de,r[5]=u*C+h*F+d*X+f*Y,r[9]=u*S+h*H+d*re+f*le,r[13]=u*w+h*G+d*ee+f*B,r[2]=p*E+y*I+m*z+g*de,r[6]=p*C+y*F+m*X+g*Y,r[10]=p*S+y*H+m*re+g*le,r[14]=p*w+y*G+m*ee+g*B,r[3]=x*E+b*I+v*z+M*de,r[7]=x*C+b*F+v*X+M*Y,r[11]=x*S+b*H+v*re+M*le,r[15]=x*w+b*G+v*ee+M*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],x=c*f-l*d,b=o*f-l*h,v=o*d-c*h,M=a*f-l*u,E=a*d-c*u,C=a*h-o*u;return t*(y*x-m*b+g*v)-n*(p*x-m*M+g*E)+s*(p*b-y*M+g*C)-r*(p*v-y*E+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],x=t*o-n*a,b=t*c-s*a,v=t*l-r*a,M=n*c-s*o,E=n*l-r*o,C=s*l-r*c,S=u*y-h*p,w=u*m-d*p,I=u*g-f*p,F=h*m-d*y,H=h*g-f*y,G=d*g-f*m,z=x*G-b*H+v*F+M*I-E*w+C*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/z;return e[0]=(o*G-c*H+l*F)*X,e[1]=(s*H-n*G-r*F)*X,e[2]=(y*C-m*E+g*M)*X,e[3]=(d*E-h*C-f*M)*X,e[4]=(c*I-a*G-l*w)*X,e[5]=(t*G-s*I+r*w)*X,e[6]=(m*v-p*C-g*b)*X,e[7]=(u*C-d*v+f*b)*X,e[8]=(a*H-o*I+l*S)*X,e[9]=(n*I-t*H-r*S)*X,e[10]=(p*E-y*v+g*x)*X,e[11]=(h*v-u*E-f*x)*X,e[12]=(o*w-a*F-c*S)*X,e[13]=(t*F-n*w+s*S)*X,e[14]=(y*b-p*M-m*x)*X,e[15]=(u*M-h*b+d*x)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,p=r*h,y=a*u,m=a*h,g=o*h,x=c*l,b=c*u,v=c*h,M=n.x,E=n.y,C=n.z;return s[0]=(1-(y+g))*M,s[1]=(f+v)*M,s[2]=(p-b)*M,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+g))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+b)*C,s[9]=(m-x)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);let l=1/a,u=1/o,h=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ri,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(c)p=r/(a-r),y=a*r/(a-r);else if(o===ri)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ur)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(c)p=1/(a-r),y=a/(a-r);else if(o===ri)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ur)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new P,ti=new qe,x_=new P(0,0,0),v_=new P(1,1,1),ss=new P,nl=new P,Hn=new P,ip=new qe,sp=new nn,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b_=0,rp=new P,fr=new nn,Ui=new qe,il=new P,Ma=new P,S_=new P,M_=new nn,ap=new P(1,0,0),op=new P(0,1,0),lp=new P(0,0,1),cp={type:"added"},E_={type:"removed"},pr={type:"childadded",child:null},Ku={type:"childremoved",child:null},St=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new vi,n=new nn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?il.copy(e):il.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ma,il,this.up):Ui.lookAt(il,Ma,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(Ui),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cp),pr.child=e,this.dispatchEvent(pr),pr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E_),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cp),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Ju(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=ld(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ju(a,r,e+1/3),this.g=Ju(a,r,e),this.b=Ju(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return at.workingToColorSpace(yn.copy(this),e),Math.round(je(yn.r*255,0,255))*65536+Math.round(je(yn.g*255,0,255))*256+Math.round(je(yn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Lt){at.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(sl);let n=Oa(rs.h,sl.h,t),s=Oa(rs.s,sl.s,t),r=Oa(rs.l,sl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ke;ke.NAMES=Lm;var Va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new P,Oi=new P,Qu=new P,Fi=new P,mr=new P,gr=new P,up=new P,eh=new P,th=new P,nh=new P,ih=new ut,sh=new ut,rh=new ut,Hi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Oi.subVectors(n,t),Qu.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(Oi),c=ni.dot(Qu),l=Oi.dot(Oi),u=Oi.dot(Qu),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,p=(a*u-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(a,Fi.y),c.addScaledVector(o,Fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Oi.subVectors(e,t),ni.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;mr.subVectors(s,n),gr.subVectors(r,n),eh.subVectors(e,n);let c=mr.dot(eh),l=gr.dot(eh);if(c<=0&&l<=0)return t.copy(n);th.subVectors(e,s);let u=mr.dot(th),h=gr.dot(th);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(mr,a);nh.subVectors(e,r);let f=mr.dot(nh),p=gr.dot(nh);if(p>=0&&f<=p)return t.copy(r);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(gr,o);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return up.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(up,o);let g=1/(m+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(mr,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ot=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rl.copy(n.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),al.subVectors(this.max,Ea),_r.subVectors(e.a,Ea),yr.subVectors(e.b,Ea),xr.subVectors(e.c,Ea),as.subVectors(yr,_r),os.subVectors(xr,yr),Ds.subVectors(_r,xr);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-Ds.z,Ds.y,as.z,0,-as.x,os.z,0,-os.x,Ds.z,0,-Ds.x,-as.y,as.x,0,-os.y,os.x,0,-Ds.y,Ds.x,0];return!ah(t,_r,yr,xr,al)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,_r,yr,xr,al))?!1:(ol.crossVectors(as,os),t=[ol.x,ol.y,ol.z],ah(t,_r,yr,xr,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new P,new P,new P,new P,new P,new P,new P,new P],ii=new P,rl=new Ot,_r=new P,yr=new P,xr=new P,as=new P,os=new P,Ds=new P,Ea=new P,al=new P,ol=new P,Ns=new P;function ah(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ns.fromArray(i,r);let o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),u=n.dot(Ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Gt=new P,ll=new ve,w_=0,Xt=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ad,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $a=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},A_=new Ot,Ta=new P,oh=new P,sn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):A_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);let t=Ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(oh)),this.expandByPoint(Ta.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},R_=0,Yn=new qe,lh=new St,vr=new P,Vn=new Ot,wa=new Ot,tn=new P,nt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?$a:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Vn.min,wa.min),Vn.expandByPoint(tn),tn.addVectors(Vn.max,wa.max),Vn.expandByPoint(tn)):(Vn.expandByPoint(wa.min),Vn.expandByPoint(wa.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)tn.fromBufferAttribute(o,l),c&&(vr.fromBufferAttribute(e,l),tn.add(vr)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new P,c[S]=new P;let l=new P,u=new P,h=new P,d=new ve,f=new ve,p=new ve,y=new P,m=new P;function g(S,w,I){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,I),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(F),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(F),o[S].add(y),o[w].add(y),o[I].add(y),c[S].add(m),c[w].add(m),c[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,w=x.length;S<w;++S){let I=x[S],F=I.start,H=I.count;for(let G=F,z=F+H;G<z;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new P,v=new P,M=new P,E=new P;function C(S){M.fromBufferAttribute(s,S),E.copy(M);let w=o[S];b.copy(w),b.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(E,w);let F=v.dot(c[S])<0?-1:1;a.setXYZW(S,b.x,b.y,b.z,F)}for(let S=0,w=x.length;S<w;++S){let I=x[S],F=I.start,H=I.count;for(let G=F,z=F+H;G<z;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,p=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let g=0;g<u;g++)d[p++]=l[f++]}return new Xt(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ad,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tn=new P,xn=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new P,C_=new P,P_=new Ke,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ch.subVectors(n,t).cross(C_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||P_.getNormalMatrix(e),s=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},I_=0,vn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Qr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Wh,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ul,this.stencilZFail=Ul,this.stencilZPass=Ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new on().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ds=class extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,Aa=new P,Sr=new P,Mr=new P,Er=new ve,Ra=new ve,Dm=new qe,cl=new P,Ca=new P,ul=new P,hp=new ve,uh=new ve,dp=new ve,Hs=class extends St{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hs(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new xn(n,3,0,!1)),br.setAttribute("uv",new xn(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;hl(cl.set(-.5,-.5,0),Mr,a,Sr,s,r),hl(Ca.set(.5,-.5,0),Mr,a,Sr,s,r),hl(ul.set(.5,.5,0),Mr,a,Sr,s,r),hp.set(0,0),uh.set(1,0),dp.set(1,1);let o=e.ray.intersectTriangle(cl,Ca,ul,!1,Aa);if(o===null&&(hl(Ca.set(-.5,.5,0),Mr,a,Sr,s,r),uh.set(0,1),o=e.ray.intersectTriangle(cl,ul,Ca,!1,Aa),o===null))return;let c=e.ray.origin.distanceTo(Aa);c<e.near||c>e.far||t.push({distance:c,point:Aa.clone(),uv:Hi.getInterpolation(Aa,cl,Ca,ul,hp,uh,dp,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hl(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ra.x=r*Er.x-s*Er.y,Ra.y=s*Er.x+r*Er.y):Ra.copy(Er),i.copy(e),i.x+=Ra.x,i.y+=Ra.y,i.applyMatrix4(Dm)}var ki=new P,hh=new P,dl=new P,fl=new P,bi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hh.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),fl.copy(this.origin).sub(hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(dl),o=fl.dot(this.direction),c=-fl.dot(dl),l=fl.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*c-o,d=a*o-c,p=r*u,h>=0)if(d>=-p)if(d<=p){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hh).addScaledVector(dl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),s=ki.dot(ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,y=t.y-a.y,m=t.z-a.z,g=n.x-a.x,x=n.y-a.y,b=n.z-a.z,v=Math.abs(c),M=Math.abs(l),E=Math.abs(u),C,S,w,I,F,H,G,z,X,re,ee,de;if(v>=M&&v>=E?(w=c,H=h,X=p,de=g,c>=0?(C=l,S=u,I=d,F=f,G=y,z=m,re=x,ee=b):(C=u,S=l,I=f,F=d,G=m,z=y,re=b,ee=x)):M>=E?(w=l,H=d,X=y,de=x,l>=0?(C=u,S=c,I=f,F=h,G=m,z=p,re=b,ee=g):(C=c,S=u,I=h,F=f,G=p,z=m,re=g,ee=b)):(w=u,H=f,X=m,de=b,u>=0?(C=c,S=l,I=h,F=d,G=p,z=y,re=g,ee=x):(C=l,S=c,I=d,F=h,G=y,z=p,re=x,ee=g)),w===0)return null;let Y=C/w,le=S/w,B=1/w,U=I-Y*H,k=F-le*H,ie=G-Y*X,ye=z-le*X,Me=re-Y*de,q=ee-le*de,W=Me*ye-q*ie,ge=U*q-k*Me,Re=ie*k-ye*U;if(s){if(W<0||ge<0||Re<0)return null}else if((W<0||ge<0||Re<0)&&(W>0||ge>0||Re>0))return null;let Se=W+ge+Re;if(Se===0)return null;let Oe=B*(W*H+ge*X+Re*de);return(Se>0?Oe<0:Oe>0)?null:this.at(Oe/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fp=new qe,Us=new bi,pl=new sn,pp=new P,ml=new P,gl=new P,_l=new P,dh=new P,yl=new P,mp=new P,xl=new P,Ze=class extends St{constructor(e=new nt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){yl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(dh.fromBufferAttribute(h,e),a?yl.addScaledVector(dh,u):yl.addScaledVector(dh.sub(t),u))}t.add(yl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(pl.containsPoint(Us.origin)===!1&&(Us.intersectSphere(pl,pp)===null||Us.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),Us.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=b;v<M;v+=3){let E=o.getX(v),C=o.getX(v+1),S=o.getX(v+2);s=vl(this,g,e,n,l,u,h,E,C,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let x=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=vl(this,a,e,n,l,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=b;v<M;v+=3){let E=v,C=v+1,S=v+2;s=vl(this,g,e,n,l,u,h,E,C,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let x=m,b=m+1,v=m+2;s=vl(this,a,e,n,l,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function L_(i,e,t,n,s,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===wi,o),c===null)return null;xl.copy(o),xl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xl);return l<t.near||l>t.far?null:{distance:l,point:xl.clone(),object:i}}function vl(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ml),i.getVertexPosition(c,gl),i.getVertexPosition(l,_l);let u=L_(i,e,t,n,ml,gl,_l,mp);if(u){let h=new P;Hi.getBarycoord(mp,ml,gl,_l,h),s&&(u.uv=Hi.getInterpolatedAttribute(s,o,c,l,h,new ve)),r&&(u.uv1=Hi.getInterpolatedAttribute(r,o,c,l,h,new ve)),a&&(u.normal=Hi.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Hi.getNormal(ml,gl,_l,d.normal),u.face=d,u.barycoord=h}return u}var Pa=new ut,gp=new ut,_p=new ut,D_=new ut,yp=new qe,bl=new P,fh=new sn,xp=new qe,ph=new bi,Wa=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ot),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(s),e.ray.intersectsSphere(fh)!==!1&&(xp.copy(s).invert(),ph.copy(e.ray).applyMatrix4(xp),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_m?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gp.fromBufferAttribute(s.attributes.skinIndex,e),_p.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(...t,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=_p.getComponent(r);if(a!==0){let o=gp.getComponent(r);yp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(D_.copy(Pa).applyMatrix4(yp),a)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,u=Bt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vp=new qe,N_=new qe,Xa=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:N_;vp.multiplyMatrices(o,t[r]),vp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vr(t,e,e,$n,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(He("Skeleton: No bone found with UUID:",r),a=new Hr),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},$i=class extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new qe,bp=new qe,Sl=[],Sp=new Ot,U_=new qe,Ia=new Ze,La=new sn,Vs=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Sp.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Sp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),La.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),bp.multiplyMatrices(n,Tr),Ia.matrixWorld=bp,Ia.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){let c=Sl[a];c.instanceId=r,c.object=this,t.push(c)}Sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,Sc,Gn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Os=new sn,O_=new ve(.5,.5),Ml=new P,Gr=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],x=r[12],b=r[13],v=r[14],M=r[15];if(s[0].setComponents(l-a,f-u,g-p,M-x).normalize(),s[1].setComponents(l+a,f+u,g+p,M+x).normalize(),s[2].setComponents(l+o,f+h,g+y,M+b).normalize(),s[3].setComponents(l-o,f-h,g-y,M-b).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,g-m,M-v).normalize();else if(s[4].setComponents(l-c,f-d,g-m,M-v).normalize(),t===ri)s[5].setComponents(l+c,f+d,g+m,M+v).normalize();else if(t===Ur)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);let t=O_.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ml.x=s.normal.x>0?e.max.x:e.min.x,Ml.y=s.normal.y>0?e.max.y:e.min.y,Ml.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ln=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ql=new P,Yl=new P,Mp=new qe,Da=new bi,El=new sn,mh=new P,Ep=new P,rn=class extends St{constructor(e=new nt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ql.fromBufferAttribute(t,s-1),Yl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ql.distanceTo(Yl);e.setAttribute("lineDistance",new We(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;Mp.copy(s).invert(),Da.copy(e.ray).applyMatrix4(Mp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=l){let g=u.getX(y),x=u.getX(y+1),b=Tl(this,e,Da,c,g,x,y);b&&t.push(b)}if(this.isLineLoop){let y=u.getX(p-1),m=u.getX(f),g=Tl(this,e,Da,c,y,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=l){let g=Tl(this,e,Da,c,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=Tl(this,e,Da,c,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ql.fromBufferAttribute(o,s),Yl.fromBufferAttribute(o,r),t.distanceSqToSegment(ql,Yl,mh,Ep)>n)return;mh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(mh);if(!(l<e.near||l>e.far))return{distance:l,point:Ep.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Tp=new P,wp=new P,Wi=class extends rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tp.fromBufferAttribute(t,s),wp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tp.distanceTo(wp);e.setAttribute("lineDistance",new We(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qa=class extends rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$r=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ap=new qe,Rh=new bi,wl=new sn,Al=new P,Ya=class extends St{constructor(e=new nt,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;Ap.copy(s).invert(),Rh.copy(e.ray).applyMatrix4(Ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,y=f;p<y;p++){let m=l.getX(p);Al.fromBufferAttribute(h,m),Rp(Al,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,y=f;p<y;p++)Al.fromBufferAttribute(h,p),Rp(Al,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rp(i,e,t,n,s,r,a){let o=Rh.distanceSqToPoint(i);if(o<t){let c=new P;Rh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ja=class extends qt{constructor(e=[],t=Ss,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gs=class extends qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends qt{constructor(e,t,n=ui,s,r,a,o=Bt,c=Bt,l,u=xi,h=1){if(u!==xi&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jl=class extends fs{constructor(e,t=ui,n=Ss,s,r,a=Bt,o=Bt,c,l=xi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class i extends nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function p(y,m,g,x,b,v,M,E,C,S,w){let I=v/C,F=M/S,H=v/2,G=M/2,z=E/2,X=C+1,re=S+1,ee=0,de=0,Y=new P;for(let le=0;le<re;le++){let B=le*F-G;for(let U=0;U<X;U++){let k=U*I-H;Y[y]=k*x,Y[m]=B*b,Y[g]=z,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[g]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(U/C),h.push(1-le/S),ee+=1}}for(let le=0;le<S;le++)for(let B=0;B<C;B++){let U=d+B+X*le,k=d+B+X*(le+1),ie=d+(B+1)+X*(le+1),ye=d+(B+1)+X*le;c.push(U,k,ye),c.push(k,ie,ye),de+=6}o.addGroup(f,de,w),f+=de,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ms=class i extends nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,u=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wr=class i extends nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,y=[],m=n/2,g=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function x(){let v=new P,M=new P,E=0,C=(t-e)/n;for(let S=0;S<=r;S++){let w=[],I=S/r,F=I*(t-e)+e;for(let H=0;H<=s;H++){let G=H/s,z=G*c+o,X=Math.sin(z),re=Math.cos(z);M.x=F*X,M.y=-I*n+m,M.z=F*re,h.push(M.x,M.y,M.z),v.set(X,C,re).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-I),w.push(p++)}y.push(w)}for(let S=0;S<s;S++)for(let w=0;w<r;w++){let I=y[w][S],F=y[w+1][S],H=y[w+1][S+1],G=y[w][S+1];(e>0||w!==0)&&(u.push(I,F,G),E+=3),(t>0||w!==r-1)&&(u.push(F,H,G),E+=3)}l.addGroup(g,E,0),g+=E}function b(v){let M=p,E=new ve,C=new P,S=0,w=v===!0?e:t,I=v===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),p++;let F=p;for(let H=0;H<=s;H++){let z=H/s*c+o,X=Math.cos(z),re=Math.sin(z);C.x=w*re,C.y=m*I,C.z=w*X,h.push(C.x,C.y,C.z),d.push(0,I,0),E.x=X*.5+.5,E.y=re*.5*I+.5,f.push(E.x,E.y),p++}for(let H=0;H<s;H++){let G=M+H,z=F+H;v===!0?u.push(z,z+1,G):u.push(z+1,z,G),S+=3}l.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zl=class i extends Wr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kl=class i extends nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new P,v=new P,M=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],v),f(t[E+2],M),c(b,v,M,x)}function c(x,b,v,M){let E=M+1,C=[];for(let S=0;S<=E;S++){C[S]=[];let w=x.clone().lerp(v,S/E),I=b.clone().lerp(v,S/E),F=E-S;for(let H=0;H<=F;H++)H===0&&S===E?C[S][H]=w:C[S][H]=w.clone().lerp(I,H/F)}for(let S=0;S<E;S++)for(let w=0;w<2*(E-S)-1;w++){let I=Math.floor(w/2);w%2===0?(d(C[S][I+1]),d(C[S+1][I]),d(C[S][I])):(d(C[S][I+1]),d(C[S+1][I+1]),d(C[S+1][I]))}}function l(x){let b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(x),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){let x=new P;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let v=m(x)/2/Math.PI+.5,M=g(x)/Math.PI+.5;a.push(v,1-M)}p(),h()}function h(){for(let x=0;x<a.length;x+=6){let b=a[x+0],v=a[x+2],M=a[x+4],E=Math.max(b,v,M),C=Math.min(b,v,M);E>.9&&C<.1&&(b<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,b){let v=x*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function p(){let x=new P,b=new P,v=new P,M=new P,E=new ve,C=new ve,S=new ve;for(let w=0,I=0;w<r.length;w+=9,I+=6){x.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),S.set(a[I+4],a[I+5]),M.copy(x).add(b).add(v).divideScalar(3);let F=m(M);y(E,I+0,x,F),y(C,I+2,b,F),y(S,I+4,v,F)}}function y(x,b,v,M){M<0&&x.x===1&&(a[b]=x.x-1),v.x===0&&v.z===0&&(a[b]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new qe;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jl=class extends Xr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cd(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Cp=new P,Pp=new P,gh=new cd,_h=new cd,yh=new cd,Ql=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Pp.subVectors(s[0],s[1]).add(s[0]),l=Pp);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),gh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,y,m),_h.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,y,m),yh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),_h.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),yh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(gh.calc(c),_h.calc(c),yh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ip(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function F_(i,e){let t=1-i;return t*t*e}function B_(i,e){return 2*(1-i)*i*e}function k_(i,e){return i*i*e}function Fa(i,e,t,n){return F_(i,e)+B_(i,t)+k_(i,n)}function z_(i,e){let t=1-i;return t*t*t*e}function H_(i,e){let t=1-i;return 3*t*t*i*e}function V_(i,e){return 3*(1-i)*i*i*e}function G_(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return z_(i,e)+H_(i,t)+V_(i,n)+G_(i,s)}var Ka=class extends An{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends An{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y),Ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends An{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends An{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends An{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(e,s.x,r.x,a.x),Fa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends An{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(e,s.x,r.x,a.x),Fa(e,s.y,r.y,a.y),Fa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ip(o,c.x,l.x,u.x,h.x),Ip(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Ch=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:Ql,CubicBezierCurve:Ka,CubicBezierCurve3:ec,EllipseCurve:Xr,LineCurve:Ja,LineCurve3:tc,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:eo,SplineCurve:to}),nc=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ch[s.type]().fromJSON(s))}return this}},no=class extends nc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ja(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qa(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ka(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new to(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Xr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qr=class extends no{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new no().fromJSON(s))}return this}};function $_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=j_(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<c&&(c=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return io(r,a,t,o,c,l,0),a}function Nm(i,e,t,n,s){let r;if(s===ay(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Lp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Lp(a/n|0,i[a],i[a+1],r);return r&&Yr(r,r.next)&&(ro(r),r=r.next),r}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yr(t,t.next)||Dt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ey(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?X_(i,n,s,r):W_(i)){e.push(c.i,i.i,l.i),ro(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=q_($s(i),e),io(i,e,t,n,s,r,2)):a===2&&Y_(i,e,t,n,s,r):io($s(i),e,t,n,s,r,1);break}}}function W_(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),h=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Na(s,o,r,c,a,l,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function X_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(u,h,d),y=Math.max(o,c,l),m=Math.max(u,h,d),g=Ph(f,p,e,t,n),x=Ph(y,m,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=g&&v&&v.z<=x;){if(b.x>=f&&b.x<=y&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Na(o,u,c,h,l,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Na(o,u,c,h,l,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=y&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Na(o,u,c,h,l,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Na(o,u,c,h,l,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function q_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Yr(n,s)&&Om(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return $s(t)}function Y_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&iy(a,o)){let c=Fm(a,o);a=$s(a,a.next),c=$s(c,c.next),io(a,e,t,n,s,r,0),io(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function j_(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Nm(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ny(l))}s.sort(Z_);for(let r=0;r<s.length;r++)t=K_(s[r],t);return t}function Z_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function K_(i,e){let t=J_(i,e);if(!t)return e;let n=Fm(t,i);return $s(n,n.next),$s(t,t.next)}function J_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Yr(i,t))return t;do{if(Yr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Um(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Q_(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Q_(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function ey(i,e,t,n){let s=i;do s.z===0&&(s.z=Ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ty(s)}function ty(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ny(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Um(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Na(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Um(i,e,t,n,s,r,a,o)}function iy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sy(i,e)&&(so(i,e)&&so(e,i)&&ry(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Yr(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yr(i,e){return i.x===e.x&&i.y===e.y}function Om(i,e,t,n){let s=Cl(Dt(i,e,t)),r=Cl(Dt(i,e,n)),a=Cl(Dt(t,n,i)),o=Cl(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Rl(i,t,e)||r===0&&Rl(i,n,e)||a===0&&Rl(t,i,n)||o===0&&Rl(t,e,n))}function Rl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cl(i){return i>0?1:i<0?-1:0}function sy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Om(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function ry(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fm(i,e){let t=Ih(i.i,i.x,i.y),n=Ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(i,e,t,n){let s=Ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ay(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Lh=class{static triangulate(e,t,n=2){return $_(e,t,n)}},Lr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Dp(e),Np(n,e);let a=e.length;t.forEach(Dp);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Np(n,t[c]);let o=Lh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Dp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Np(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ao=class i extends Kl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ws=class i extends nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let x=g*d-a;for(let b=0;b<l;b++){let v=b*h-r;p.push(v,-x,0),y.push(0,0,1),m.push(b/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<o;x++){let b=x+l*g,v=x+l*(g+1),M=x+1+l*(g+1),E=x+1+l*g;f.push(b,v,E),f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(y,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xs=class i extends nt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new P,p=new ve;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=h*Math.cos(g),f.y=h*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let x=g+m,b=x,v=x+n+1,M=x+n+2,E=x+1;o.push(b,v,E),o.push(v,M,E)}}this.setIndex(o),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oo=class i extends nt{constructor(e=new qr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(r,3)),this.setAttribute("uv",new We(a,2));function l(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;Lr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Lr.isClockWise(x)===!0&&(p[m]=x.reverse())}let y=Lr.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=y.length;m<g;m++){let x=y[m],b=x[0]+h,v=x[1]+h,M=x[2]+h;n.push(b,v,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return oy(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function oy(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Si=class i extends nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new P,d=new P,f=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let x=[],b=g/n,v=a+b*o,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),C=0;g===0&&a===0?C=.5/t:g===n&&c===Math.PI&&(C=-.5/t);for(let S=0;S<=t;S++){let w=S/t,I=s+w*r;h.x=-E*Math.cos(I),h.y=M,h.z=E*Math.sin(I),p.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(w+C,1-b),x.push(l++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let b=u[g][x+1],v=u[g][x],M=u[g+1][x],E=u[g+1][x+1];(g!==0||a>0)&&f.push(b,v,E),(g!==n-1||c<Math.PI)&&f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(y,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var lo=class i extends nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],h=[],d=new P,f=new P,p=new P;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let g=0;g<=s;g++){let x=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(g/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(g,x,v),c.push(x,b,v)}this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var co=class i extends nt{constructor(e=new eo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new ve,u=new P,h=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function y(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),x(),g()}function m(b){u=e.getPointAt(b/t,u);let v=a.normals[b],M=a.binormals[b];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,S=Math.sin(C),w=-Math.cos(C);c.x=w*v.x+S*M.x,c.y=w*v.y+S*M.y,c.z=w*v.z+S*M.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let M=(s+1)*(b-1)+(v-1),E=(s+1)*b+(v-1),C=(s+1)*b+v,S=(s+1)*(b-1)+v;p.push(M,E,S),p.push(E,C,S)}}function x(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)l.x=b/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ch[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},uo=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],d=h.start,f=h.count;for(let p=d,y=d+f;p<y;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),x=o.getX(p+(m+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),Up(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let u=3*o+l,h=3*o+(l+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Up(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new We(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Up(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Op(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Op(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function Op(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ly(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ud(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Oo={clone:Js,merge:bn},cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cy,this.fragmentShader=uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ic=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ho=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var gs=class extends ln{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function cs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ol(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function hy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function dy(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ac=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=e,o=2*t-n;break;case Ah:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wh:a=e,c=2*n-t;break;case Ah:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*y+.5*p,v=f*m-f*y;for(let M=0;M!==o;++M)r[M]=g*a[u+M]+x*a[l+M]+b*a[c+M]+v*a[h+M];return r}},oc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},lc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cc=class extends Mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),y=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let y=a[l+p],m=a[c+p],g=f*d+p*2,x=h[g],b=h[g+1],v=e*d+p*2,M=u[v],E=u[v+1],C=py(n,t,x,M,s);r[p]=Bm(C,y,b,E,m)}return r}};function Bm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function fy(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function py(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Bm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=fy(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ol(e.settings)&&(n.settings={inTangents:cs(e.settings.inTangents,Array),outTangents:cs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break;case Eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Nl;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ol(this.settings)&&(Bp(this.settings.inTangents,e),Bp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Xe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Q0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let y=t[h+p];if(y!==t[d+p]||y!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ol(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ks;var Xi=class extends Un{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Bs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};fo.prototype.ValueTypeName="color";var qi=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};qi.prototype.ValueTypeName="number";var uc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Yi=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};Yi.prototype.ValueTypeName="quaternion";Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Un{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Bs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};_s.prototype.ValueTypeName="vector";var po=class{constructor(e="",t=-1,n=[],s=ym){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=hy(c);c=Fp(c,1,u),l=Fp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function my(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return fo;case"quaternion":return Yi;case"bool":case"boolean":return Xi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=my(i.type);if(i.times===void 0){let n=[],s=[];dy(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ol(i.settings)&&(t.settings={inTangents:cs(i.settings.inTangents,Float32Array),outTangents:cs(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},km=new hc,Ei=class{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},jr=class extends Ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:s});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=zi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,m=new ReadableStream({start(g){x();function x(){h.read().then(({done:b,value:v})=>{if(b)g.close();else{y+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let E=0,C=u.length;E<C;E++){let S=u[E];S.onProgress&&S.onProgress(M)}g.enqueue(v),x()}},b=>{g.error(b)})}}});return new Response(m)}else throw new Dh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{yi.add(`file:${e}`,l);let u=zi[e];delete zi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=zi[e];if(u===void 0)throw this.manager.itemError(e),l;delete zi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=new WeakMap,dc=class extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=wr.get(a);h===void 0&&(h=[],wr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Or("img");function c(){u(),t&&t(this);let h=wr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}wr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),yi.remove(`image:${e}`);let d=wr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var mo=class extends Ei{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new dc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},go=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new qe,zp=new P,Hp=new P,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ur||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=new P,Il=new nn,_i=new P,_o=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Il,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pl,Il,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new P,Vp=new ve,Gp=new ve,Ut=class extends _o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,Vp,Gp),t.subVectors(Gp,Vp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nh=class extends Zr{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},yo=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Uh=class extends Zr{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},Ys=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ti=class extends _o{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Zr{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xo=class extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vh=new WeakMap,vo=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{vh.has(a)===!0?(s&&s(vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vh.set(c,l),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=-90,Rr=1,fc=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Ar,Rr,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Ar,Rr,e,t);r.layers=this.layers,this.add(r);let a=new Ut(Ar,Rr,e,t);a.layers=this.layers,this.add(a);let o=new Ut(Ar,Rr,e,t);o.layers=this.layers,this.add(o);let c=new Ut(Ar,Rr,e,t);c.layers=this.layers,this.add(c);let l=new Ut(Ar,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pc=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hd="\\[\\]\\.:\\/",_y=new RegExp("["+hd+"]","g"),dd="[^"+hd+"]",yy="[^"+hd.replace("\\.","")+"]",xy=/((?:WC+[\/:])*)/.source.replace("WC",dd),vy=/(WCOD+)?/.source.replace("WCOD",yy),by=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),My=new RegExp("^"+xy+vy+by+Sy+"$"),Ey=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){let t=My.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Fh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HE=new Float32Array(1);var xs=class extends hs{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var $p=new qe,bo=class{constructor(e,t,n=0,s=1/0){this.ray=new bi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(e,t=!0,n=[]){return Bh(e,this,n,t),n.sort(Wp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bh(e[s],this,n,t);return n.sort(Wp),n}};function Wp(i,e){return i.distance-e.distance}function Bh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bh(r[a],e,t,!0)}}var Kr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Xp=new P,Ll=new P,Cr=new P,Pr=new P,bh=new P,Ty=new P,wy=new P,So=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xp.subVectors(e,this.start),Ll.subVectors(this.end,this.start);let n=Ll.dot(Ll);if(n===0)return 0;let r=Ll.dot(Xp)/n;return t&&(r=je(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Ty,n=wy){let s=10000000000000001e-32,r,a,o=this.start,c=e.start,l=this.end,u=e.end;Cr.subVectors(l,o),Pr.subVectors(u,c),bh.subVectors(o,c);let h=Cr.dot(Cr),d=Pr.dot(Pr),f=Pr.dot(bh);if(h<=s&&d<=s)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(h<=s)r=0,a=f/d,a=je(a,0,1);else{let p=Cr.dot(bh);if(d<=s)a=0,r=je(-p/h,0,1);else{let y=Cr.dot(Pr),m=h*d-y*y;m!==0?r=je((y*f-p*d)/m,0,1):r=0,a=(y*r+f)/d,a<0?(a=0,r=je(-p/h,0,1)):a>1&&(a=1,r=je((y-p)/h,0,1))}}return t.copy(o).addScaledVector(Cr,r),n.copy(c).addScaledVector(Pr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var vs=class extends Wi{constructor(e=10,t=10,n=4473924,s=8947848){n=new ke(n),s=new ke(s);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);let y=d===r?n:s;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}let u=new nt;u.setAttribute("position",new We(c,3)),u.setAttribute("color",new We(l,3));let h=new ln({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var qp=new P,Dl,Sh,Ki=class extends St{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Dl===void 0&&(Dl=new nt,Dl.setAttribute("position",new We([0,0,0,0,1,0],3)),Sh=new Zl(.5,1,5,1),Sh.translate(0,-.5,0)),this.position.copy(t),this.line=new rn(Dl,new ln({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ze(Sh,new xt({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{qp.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(qp,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Mo=class extends Wi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new nt;s.setAttribute("position",new We(t,3)),s.setAttribute("color",new We(n,3));let r=new ln({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new ke,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Eo=class extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function fd(i,e,t,n){let s=Ay(n);switch(t){case id:return i*e;case Sc:return i*e/s.components*s.byteLength;case Mc:return i*e/s.components*s.byteLength;case Es:return i*e*2/s.components*s.byteLength;case Ec:return i*e*2/s.components*s.byteLength;case sd:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Tc:return i*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case wc:case Rc:return Math.max(i,8)*Math.max(e,8)/2;case Pc:case Ic:case Dc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Lo:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ay(i){switch(i){case On:case Qh:return{byteLength:1,components:1};case ta:case ed:case hi:return{byteLength:2,components:1};case vc:case bc:return{byteLength:2,components:4};case ui:case xc:case Gn:return{byteLength:4,components:1};case td:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function og(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cy(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let y=h[f];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Py,alphahash_pars_fragment:Iy,alphamap_fragment:Ly,alphamap_pars_fragment:Dy,alphatest_fragment:Ny,alphatest_pars_fragment:Uy,aomap_fragment:Oy,aomap_pars_fragment:Fy,batching_pars_vertex:By,batching_vertex:ky,begin_vertex:zy,beginnormal_vertex:Hy,bsdfs:Vy,iridescence_fragment:Gy,bumpmap_pars_fragment:$y,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:jy,color_pars_fragment:Zy,color_pars_vertex:Ky,color_vertex:Jy,common:Qy,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ax,colorspace_pars_fragment:ox,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:ux,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:fx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:yx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:vx,lights_pars_begin:bx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:Ix,lightprobes_pars_fragment:Lx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ox,map_fragment:Fx,map_pars_fragment:Bx,map_particle_fragment:kx,map_particle_pars_fragment:zx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Gx,morphcolor_vertex:$x,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:jx,normal_pars_fragment:Zx,normal_pars_vertex:Kx,normal_vertex:Jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:sv,packing:rv,premultiplied_alpha_fragment:av,project_vertex:ov,dithering_fragment:lv,dithering_pars_fragment:cv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:fv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:_v,skinning_vertex:yv,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:bv,tonemapping_fragment:Sv,tonemapping_pars_fragment:Mv,transmission_fragment:Ev,transmission_pars_fragment:Tv,uv_pars_fragment:wv,uv_pars_vertex:Av,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Iv,backgroundCube_vert:Lv,backgroundCube_frag:Dv,cube_vert:Nv,cube_frag:Uv,depth_vert:Ov,depth_frag:Fv,distance_vert:Bv,distance_frag:kv,equirect_vert:zv,equirect_frag:Hv,linedashed_vert:Vv,linedashed_frag:Gv,meshbasic_vert:$v,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:jv,meshnormal_vert:Zv,meshnormal_frag:Kv,meshphong_vert:Jv,meshphong_frag:Qv,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:sb,points_frag:rb,shadow_vert:ab,shadow_frag:ob,sprite_vert:lb,sprite_frag:cb},we={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Cn={basic:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:bn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:bn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ke(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:bn([we.points,we.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:bn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:bn([we.common,we.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:bn([we.sprite,we.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:bn([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:bn([we.lights,we.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Cn.physical={uniforms:bn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var su={r:0,b:0,g:0},ub=new qe,lg=new Ke;lg.set(-1,0,0,0,1,0,0,0,1);function hb(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let v=x.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(x){let b=!1,v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,b){let v=f(b);v&&(v.isCubeTexture||v.mapping===Ao)?(l===void 0&&(l=new Ze(new ps(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Js(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lg),l.material.toneMapped=at.getTransfer(v.colorSpace)!==_t,(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new Ws(2,2),new Rn({name:"BackgroundMaterial",uniforms:Js(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,b){x.getRGB(su,ud(i)),t.buffers.color.setClear(su.r,su.g,su.b,b,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:y,dispose:g}}function db(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,H,G,z,X){let re=!1,ee=h(F,z,G,H);r!==ee&&(r=ee,l(r.object)),re=f(F,z,G,X),re&&p(F,z,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,v(F,H,G,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function h(F,H,G,z){let X=z.wireframe===!0,re=n[H.id];re===void 0&&(re={},n[H.id]=re);let ee=F.isInstancedMesh===!0?F.id:0,de=re[ee];de===void 0&&(de={},re[ee]=de);let Y=de[G.id];Y===void 0&&(Y={},de[G.id]=Y);let le=Y[X];return le===void 0&&(le=d(c()),Y[X]=le),le}function d(F){let H=[],G=[],z=[];for(let X=0;X<t;X++)H[X]=0,G[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:z,object:F,attributes:{},index:null}}function f(F,H,G,z){let X=r.attributes,re=H.attributes,ee=0,de=G.getAttributes();for(let Y in de)if(de[Y].location>=0){let B=X[Y],U=re[Y];if(U===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(U=F.instanceColor)),B===void 0||B.attribute!==U||U&&B.data!==U.data)return!0;ee++}return r.attributesNum!==ee||r.index!==z}function p(F,H,G,z){let X={},re=H.attributes,ee=0,de=G.getAttributes();for(let Y in de)if(de[Y].location>=0){let B=re[Y];B===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(B=F.instanceColor));let U={};U.attribute=B,B&&B.data&&(U.data=B.data),X[Y]=U,ee++}r.attributes=X,r.attributesNum=ee,r.index=z}function y(){let F=r.newAttributes;for(let H=0,G=F.length;H<G;H++)F[H]=0}function m(F){g(F,0)}function g(F,H){let G=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;G[F]=1,z[F]===0&&(i.enableVertexAttribArray(F),z[F]=1),X[F]!==H&&(i.vertexAttribDivisor(F,H),X[F]=H)}function x(){let F=r.newAttributes,H=r.enabledAttributes;for(let G=0,z=H.length;G<z;G++)H[G]!==F[G]&&(i.disableVertexAttribArray(G),H[G]=0)}function b(F,H,G,z,X,re,ee){ee===!0?i.vertexAttribIPointer(F,H,G,X,re):i.vertexAttribPointer(F,H,G,z,X,re)}function v(F,H,G,z){y();let X=z.attributes,re=G.getAttributes(),ee=H.defaultAttributeValues;for(let de in re){let Y=re[de];if(Y.location>=0){let le=X[de];if(le===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),le!==void 0){let B=le.normalized,U=le.itemSize,k=e.get(le);if(k===void 0)continue;let ie=k.buffer,ye=k.type,Me=k.bytesPerElement,q=ye===i.INT||ye===i.UNSIGNED_INT||le.gpuType===xc;if(le.isInterleavedBufferAttribute){let W=le.data,ge=W.stride,Re=le.offset;if(W.isInstancedInterleavedBuffer){for(let Se=0;Se<Y.locationSize;Se++)g(Y.location+Se,W.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Se=0;Se<Y.locationSize;Se++)b(Y.location+Se,U/Y.locationSize,ye,B,ge*Me,(Re+U/Y.locationSize*Se)*Me,q)}else{if(le.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)g(Y.location+W,le.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let W=0;W<Y.locationSize;W++)m(Y.location+W);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let W=0;W<Y.locationSize;W++)b(Y.location+W,U/Y.locationSize,ye,B,U*Me,U/Y.locationSize*W*Me,q)}}else if(ee!==void 0){let B=ee[de];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(Y.location,B);break;case 3:i.vertexAttrib3fv(Y.location,B);break;case 4:i.vertexAttrib4fv(Y.location,B);break;default:i.vertexAttrib1fv(Y.location,B)}}}}x()}function M(){w();for(let F in n){let H=n[F];for(let G in H){let z=H[G];for(let X in z){let re=z[X];for(let ee in re)u(re[ee].object),delete re[ee];delete z[X]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let H=n[F.id];for(let G in H){let z=H[G];for(let X in z){let re=z[X];for(let ee in re)u(re[ee].object),delete re[ee];delete z[X]}}delete n[F.id]}function C(F){for(let H in n){let G=n[H];for(let z in G){let X=G[z];if(X[F.id]===void 0)continue;let re=X[F.id];for(let ee in re)u(re[ee].object),delete re[ee];delete X[F.id]}}}function S(F){for(let H in n){let G=n[H],z=F.isInstancedMesh===!0?F.id:0,X=G[z];if(X!==void 0){for(let re in X){let ee=X[re];for(let de in ee)u(ee[de].object),delete ee[de];delete X[re]}delete G[z],Object.keys(G).length===0&&delete n[H]}}}function w(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function fb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==$n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let S=C===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==On&&C!==Gn&&!S&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(He("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:v,maxSamples:M,samples:E}}function mb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let x=r?0:n,b=x*4,v=g.clippingState||null;c.value=v,v=u(p,d,b,f);for(let M=0;M!==b;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=f;b!==y;++b,v+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ra=4,gb=6,_b=20,yb=256,Fo=new Ti,zm=new ke,pd=null,md=0,gd=0,_d=!1,xb=new P,Qs=new P,oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=xb}=r;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=_d,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:hi,format:$n,colorSpace:wn,depthBuffer:!1},s=Hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vb(r)),this._blurMaterial=Sb(r,e,t),this._ggxMaterial=bb(r,e,t)}return s}_compileMaterial(e){let t=new Ze(new nt,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,s,r){let c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(zm),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new ps,new xt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(zm),g=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let M=this._cubeSize;sa(s,v*M,b>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ss||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:p}=this,y=this._sizeLods[n],m=3*y*(n>p-ra?n-p+ra:0),g=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,sa(r,m,g,3*y,2*y),s.setRenderTarget(r),s.render(o,Fo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,sa(e,m,g,3*y,2*y),s.setRenderTarget(e),s.render(o,Fo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ra?s-this._lodMax+ra:0),d=4*(this._cubeSize-u);sa(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Fo)}};function vb(i){let e=[],t=[],n=i,s=i-ra+1+gb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,p=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let g=0;g<h;g++){let x=g%3*2/3-1,b=g>2?0:-1,v=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];p.set(v,f*d*g);for(let M=0;M<d;M++){let E=u[M*2]*2-1,C=u[M*2+1]*2-1;g===0?Qs.set(1,C,E):g===1?Qs.set(-E,1,-C):g===2?Qs.set(-E,C,1):g===3?Qs.set(-1,C,-E):g===4?Qs.set(-E,-1,C):Qs.set(E,C,-1),Qs.toArray(y,(g*d+M)*f)}}let m=new nt;m.setAttribute("position",new Xt(p,f)),m.setAttribute("outputDirection",new Xt(y,f)),t.push(new Ze(m,null)),n>ra&&n--}return{lodMeshes:t,sizeLods:e}}function Hm(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bb(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Sb(i,e,t){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:_b,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Vm(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Gm(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ps(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=kt),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Mb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===gc||f===_c)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new au(p.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===gc||f===_c,y=f===Ss||f===Zs;if(p||y){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new oa(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return p&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new oa(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===gc?d.mapping=Ss:f===_c&&(d.mapping=Zs),d}function c(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Eb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Tb(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,y=0;if(p===void 0)return;if(f!==null){let x=f.array;y=f.version;for(let b=0,v=x.length;b<v;b+=3){let M=x[b+0],E=x[b+1],C=x[b+2];d.push(M,E,E,C,C,M)}}else{let x=p.array;y=p.version;for(let b=0,v=x.length/3-1;b<v;b+=3){let M=b+0,E=b+1,C=b+2;d.push(M,E,E,C,C,M)}}let m=new(p.count>=65535?$a:Ga)(d,1);m.version=y;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function wb(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ab(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rb(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*h),C=new Ha(E,v,M,h);C.type=Gn,C.needsUpdate=!0;let S=b*4;for(let I=0;I<h;I++){let F=m[I],H=g[I],G=x[I],z=v*M*4*I;for(let X=0;X<F.count;X++){let re=X*S;f===!0&&(s.fromBufferAttribute(F,X),E[z+re+0]=s.x,E[z+re+1]=s.y,E[z+re+2]=s.z,E[z+re+3]=0),p===!0&&(s.fromBufferAttribute(H,X),E[z+re+4]=s.x,E[z+re+5]=s.y,E[z+re+6]=s.z,E[z+re+7]=0),y===!0&&(s.fromBufferAttribute(G,X),E[z+re+8]=s.x,E[z+re+9]=s.y,E[z+re+10]=s.z,E[z+re+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ve(v,M)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cb(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Pb={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Kh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function Ib(i,e,t,n,s,r){let a=new Ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new nt;l.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new We([0,2,0,0,2,0],2));let u=new ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ze(l,u),d=new Ti(-1,1,1,-1,0,1),f=null,p=null,y=!1,m,g=null,x=[],b=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),c!==null&&c.setSize(v,M);for(let E=0;E<x.length;E++){let C=x[E];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){x=v,b=x.length>0&&x[0].isRenderPass===!0;let M=a.width,E=a.height;x.length>0&&o===null&&(o=new Ln(M,E,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(M,E,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){let S=x[C];S.setSize&&S.setSize(M,E)}},this.begin=function(v,M){if(y||v.toneMapping===li&&x.length===0)return!1;if(g=M,M!==null){let E=M.width,C=M.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return b===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=li,!0},this.hasRenderPass=function(){return b},this.end=function(v,M){v.toneMapping=m,y=!0;let E=a,C=o;for(let S=0;S<x.length;S++){let w=x[S];w.enabled!==!1&&(w.render(v,C,E,M),w.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,u.defines={},at.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");let S=Pb[p];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(g),v.render(h,d),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var cg=new qt,vd=new fs(1,1),ug=new Ha,hg=new Xl,dg=new ja,$m=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function ca(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$m[s];if(r===void 0&&(r=new Float32Array(s),$m[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lu(i,e){let t=Wm[e];t===void 0&&(t=new Int32Array(e),Wm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Ob(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;Ym.set(n),i.uniformMatrix2fv(this.addr,!1,Ym),Zt(t,n)}}function Fb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;qm.set(n),i.uniformMatrix3fv(this.addr,!1,qm),Zt(t,n)}}function Bb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;Xm.set(n),i.uniformMatrix4fv(this.addr,!1,Xm),Zt(t,n)}}function kb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Gb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $b(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function qb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=t.isReversedDepthBuffer()?iu:nu,r=vd):r=cg,t.setTexture2D(e||r,s)}function Yb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hg,s)}function jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dg,s)}function Zb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ug,s)}function Kb(i){switch(i){case 5126:return Lb;case 35664:return Db;case 35665:return Nb;case 35666:return Ub;case 35674:return Ob;case 35675:return Fb;case 35676:return Bb;case 5124:case 35670:return kb;case 35667:case 35671:return zb;case 35668:case 35672:return Hb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return $b;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Zb}}function Jb(i,e){i.uniform1fv(this.addr,e)}function Qb(i,e){let t=ca(e,this.size,2);i.uniform2fv(this.addr,t)}function eS(i,e){let t=ca(e,this.size,3);i.uniform3fv(this.addr,t)}function tS(i,e){let t=ca(e,this.size,4);i.uniform4fv(this.addr,t)}function nS(i,e){let t=ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iS(i,e){let t=ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sS(i,e){let t=ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rS(i,e){i.uniform1iv(this.addr,e)}function aS(i,e){i.uniform2iv(this.addr,e)}function oS(i,e){i.uniform3iv(this.addr,e)}function lS(i,e){i.uniform4iv(this.addr,e)}function cS(i,e){i.uniform1uiv(this.addr,e)}function uS(i,e){i.uniform2uiv(this.addr,e)}function hS(i,e){i.uniform3uiv(this.addr,e)}function dS(i,e){i.uniform4uiv(this.addr,e)}function fS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vd:a=cg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function pS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hg,r[a])}function mS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dg,r[a])}function gS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ug,r[a])}function _S(i){switch(i){case 5126:return Jb;case 35664:return Qb;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}var bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kb(t.type)}},Sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},yd=/(\w+)(\])?(\[|\.)?/g;function jm(i,e){i.seq.push(e),i.map[e.id]=e}function yS(i,e,t){let n=i.name,s=n.length;for(yd.lastIndex=0;;){let r=yd.exec(n),a=yd.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jm(t,l===void 0?new bd(o,i,e):new Sd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Md(o),jm(t,h)),t=h}}}var aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);yS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Zm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xS=37297,vS=0;function bS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Km=new Ke;function SS(i){at._getMatrix(Km,at.workingColorSpace,i);let e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case ka:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bS(i.getShaderSource(e),o)}else return r}function MS(i,e){let t=SS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ES={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[wo]:"ACESFilmic",[Zh]:"AgX",[Kh]:"Neutral",[jh]:"Custom"};function TS(i,e){let t=ES[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ru=new P;function wS(){at.getLuminanceCoefficients(ru);let i=ru.x.toFixed(4),e=ru.y.toFixed(4),t=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function RS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ko(i){return i!==""}function Qm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(i){return i.replace(PS,LS)}var IS=new Map;function LS(i,e){let t=rt[e];if(t===void 0){let n=IS.get(e);if(n!==void 0)t=rt[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ed(t)}var DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(i){return i.replace(DS,NS)}function NS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ng(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var US={[To]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function OS(i){return US[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FS={[Ss]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function BS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":FS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var kS={[Zs]:"ENVMAP_MODE_REFRACTION"};function zS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var HS={[mc]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function VS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":HS[i.combine]||"ENVMAP_BLENDING_NONE"}function GS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $S(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=OS(t),l=BS(t),u=zS(t),h=VS(t),d=GS(t),f=AS(t),p=RS(r),y=s.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(m=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?rt.tonemapping_pars_fragment:"",t.toneMapping!==li?TS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),wS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=Ed(a),a=Qm(a,t),a=eg(a,t),o=Ed(o),o=Qm(o,t),o=eg(o,t),a=tg(a),o=tg(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=x+m+a,v=x+g+o,M=Zm(s,s.VERTEX_SHADER,b),E=Zm(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(F){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(E)||"",X=H.trim(),re=G.trim(),ee=z.trim(),de=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,E);else{let le=Jm(s,M,"vertex"),B=Jm(s,E,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+le+`
`+B)}else X!==""?He("WebGLProgram: Program Info Log:",X):(re===""||ee==="")&&(Y=!1);Y&&(F.diagnostics={runnable:de,programLog:X,vertexShader:{log:re,prefix:m},fragmentShader:{log:ee,prefix:g}})}s.deleteShader(M),s.deleteShader(E),S=new aa(s,y),w=CS(s,y)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,xS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=E,this}var WS=0,Td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wd(e),t.set(e,n)),n}},wd=class{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}};function XS(i){return i===Es||i===Lo||i===Do}function qS(i,e,t,n,s,r){let a=new kr,o=new Td,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,w,I,F,H,G){let z=F.fog,X=H.geometry,re=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,de=e.get(S.envMap||re,ee),Y=de&&de.mapping===Ao?de.image.height:null,le=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&He("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,U=B!==void 0?B.length:0,k=0;X.morphAttributes.position!==void 0&&(k=1),X.morphAttributes.normal!==void 0&&(k=2),X.morphAttributes.color!==void 0&&(k=3);let ie,ye,Me,q;if(le){let lt=Cn[le];ie=lt.vertexShader,ye=lt.fragmentShader}else{ie=S.vertexShader,ye=S.fragmentShader;let lt=o.getVertexShaderStage(S),tt=o.getFragmentShaderStage(S);o.update(S,lt,tt),Me=lt.id,q=tt.id}let W=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Re=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,Oe=!!S.map,ht=!!S.matcap,Ue=!!de,$e=!!S.aoMap,Ge=!!S.lightMap,Je=!!S.bumpMap&&S.wireframe===!1,it=!!S.normalMap,mt=!!S.displacementMap,Mt=!!S.emissiveMap,et=!!S.metalnessMap,pt=!!S.roughnessMap,j=S.anisotropy>0,wt=S.clearcoat>0,Qe=S.dispersion>0,D=S.retroreflectivity>0,_=S.iridescence>0,T=S.sheen>0,L=S.transmission>0,O=j&&!!S.anisotropyMap,ae=wt&&!!S.clearcoatMap,se=wt&&!!S.clearcoatNormalMap,Q=wt&&!!S.clearcoatRoughnessMap,ne=_&&!!S.iridescenceMap,me=_&&!!S.iridescenceThicknessMap,te=T&&!!S.sheenColorMap,be=T&&!!S.sheenRoughnessMap,xe=!!S.specularMap,Ie=!!S.specularColorMap,N=!!S.specularIntensityMap,V=L&&!!S.transmissionMap,R=L&&!!S.thicknessMap,J=!!S.gradientMap,$=!!S.alphaMap,oe=S.alphaTest>0,_e=!!S.alphaHash,pe=!!S.extensions,Ee=li;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let Ae={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:ye,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Oe,matcap:ht,envMap:Ue,envMapMode:Ue&&de.mapping,envMapCubeUVHeight:Y,aoMap:$e,lightMap:Ge,bumpMap:Je,normalMap:it,displacementMap:mt,emissiveMap:Mt,normalMapObjectSpace:it&&S.normalMapType===vm,normalMapTangentSpace:it&&S.normalMapType===Uo,packedNormalMap:it&&S.normalMapType===Uo&&XS(S.normalMap.format),metalnessMap:et,roughnessMap:pt,anisotropy:j,anisotropyMap:O,clearcoat:wt,clearcoatMap:ae,clearcoatNormalMap:se,clearcoatRoughnessMap:Q,dispersion:Qe,retroreflection:D,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:T,sheenColorMap:te,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Ie,specularIntensityMap:N,transmission:L,transmissionMap:V,thicknessMap:R,gradientMap:J,opaque:S.transparent===!1&&S.blending===Qr&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:oe,alphaHash:_e,combine:S.combine,mapUv:Oe&&p(S.map.channel),aoMapUv:$e&&p(S.aoMap.channel),lightMapUv:Ge&&p(S.lightMap.channel),bumpMapUv:Je&&p(S.bumpMap.channel),normalMapUv:it&&p(S.normalMap.channel),displacementMapUv:mt&&p(S.displacementMap.channel),emissiveMapUv:Mt&&p(S.emissiveMap.channel),metalnessMapUv:et&&p(S.metalnessMap.channel),roughnessMapUv:pt&&p(S.roughnessMap.channel),anisotropyMapUv:O&&p(S.anisotropyMap.channel),clearcoatMapUv:ae&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:te&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(S.sheenRoughnessMap.channel),specularMapUv:xe&&p(S.specularMap.channel),specularColorMapUv:Ie&&p(S.specularColorMap.channel),specularIntensityMapUv:N&&p(S.specularIntensityMap.channel),transmissionMapUv:V&&p(S.transmissionMap.channel),thicknessMapUv:R&&p(S.thicknessMap.channel),alphaMapUv:$&&p(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(it||j),vertexNormals:!!X.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Oe||$),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&it===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:k,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(g(w,S),x(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numSunLights),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numSunLightShadows),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function b(S){let w=f[S.type],I;if(w){let F=Cn[w];I=Oo.clone(F.uniforms)}else I=S.uniforms;return I}function v(S,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new $S(i,w,S,s),l.push(I),u.set(w,I)),I}function M(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function E(S){o.remove(S)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function YS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,y,m,g){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=m,x.group=g),e++,x}function c(d,f,p,y,m,g,x){x.reversedDepth===!0&&(m=-m);let b=o(d,f,p,y,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,y,m,g){let x=o(d,f,p,y,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||jS),n.length>1&&n.sort(f||ig),s.length>1&&s.sort(f||ig)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function ZS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new sg,i.set(n,[a])):s>=r.length?(a=new sg,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function KS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function JS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var QS=0;function eM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tM(i){let e=new KS,t=JS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new qe,a=new qe;function o(l){let u=0,h=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,x=0,b=0,v=0,M=0,E=0,C=0,S=0,w=0,I=0;l.sort(eM);for(let H=0,G=l.length;H<G;H++){let z=l[H],X=z.color,re=z.intensity,ee=z.distance,de=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Es?de=z.shadow.map.texture:de=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=X.r*re,h+=X.g*re,d+=X.b*re;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(z.sh.coefficients[Y],re);I++}else if(z.isSunLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[p]=B,n.sunShadowMap[p]=de;let U=le.getViewportCount();for(let k=0;k<U;k++)n.sunShadowMatrix[y+k]=le.getMatrix(k),n.sunShadowCascade[y+k]=le._cascadeData[k];y+=U,p++}n.sun[f]=Y,f++}else if(z.isDirectionalLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=de,n.directionalShadowMatrix[m]=z.shadow.matrix,M++}n.directional[m]=Y,m++}else if(z.isSpotLight){let Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(X).multiplyScalar(re),Y.distance=ee,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,n.spot[x]=Y;let le=z.shadow;if(z.map&&(n.spotLightMap[S]=z.map,S++,le.updateMatrices(z),z.castShadow&&w++),n.spotLightMatrix[x]=le.matrix,z.castShadow){let B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=de,C++}x++}else if(z.isRectAreaLight){let Y=e.get(z);Y.color.copy(X).multiplyScalar(re),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),n.rectArea[b]=Y,b++}else if(z.isPointLight){let Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){let le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=de,n.pointShadowMatrix[g]=z.shadow.matrix,E++}n.point[g]=Y,g++}else if(z.isHemisphereLight){let Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(re),Y.groundColor.copy(z.groundColor).multiplyScalar(re),n.hemi[v]=Y,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==b||F.hemiLength!==v||F.numSunShadows!==p||F.numDirectionalShadows!==M||F.numPointShadows!==E||F.numSpotShadows!==C||F.numSpotMaps!==S||F.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=x,F.rectAreaLength=b,F.hemiLength=v,F.numSunShadows=p,F.numDirectionalShadows=M,F.numPointShadows=E,F.numSpotShadows=C,F.numSpotMaps=S,F.numLightProbes=I,n.version=QS++)}function c(l,u){let h=0,d=0,f=0,p=0,y=0,m=0,g=u.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){let v=l[x];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function rg(i){let e=new tM(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function nM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new rg(i),e.set(s,[o])):r>=a.length?(o=new rg(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],aM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ag=new qe,Bo=new P,xd=new P;function oM(i,e,t){let n=new Gr,s=new ve,r=new ve,a=new ut,o=new sc,c=new rc,l={},u=t.maxTextureSize,h={[wi]:cn,[cn]:wi,[Yt]:Yt},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:iM,fragmentShader:sM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new nt;p.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ze(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let g=this.type;this.render=function(E,C,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Zp&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=To);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ai),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=g!==this.type;G&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=E.length;z<X;z++){let re=E[z],ee=re.shadow;if(ee===void 0){He("WebGLShadowMap:",re,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let de=ee.getFrameExtents();s.multiply(de),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,ee.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Y,ee.map===null||G===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Jr){if(re.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ln(s.x,s.y,{format:Es,type:hi,minFilter:kt,magFilter:kt,generateMipmaps:!1}),ee.map.texture.name=re.name+".shadowMap",ee.map.depthTexture=new fs(s.x,s.y,Gn),ee.map.depthTexture.name=re.name+".shadowMapDepth",ee.map.depthTexture.format=xi,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Bt,ee.map.depthTexture.magFilter=Bt}else re.isPointLight?(ee.map=new au(s.x),ee.map.depthTexture=new jl(s.x,ui)):(ee.map=new Ln(s.x,s.y),ee.map.depthTexture=new fs(s.x,s.y,ui)),ee.map.depthTexture.name=re.name+".shadowMap",ee.map.depthTexture.format=xi,this.type===To?(ee.map.depthTexture.compareFunction=Y?iu:nu,ee.map.depthTexture.minFilter=kt,ee.map.depthTexture.magFilter=kt):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Bt,ee.map.depthTexture.magFilter=Bt);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let le=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();re.isPointLight!==!0&&ee.updateMatrices(re,S);for(let B=0;B<le;B++){let U=ee.getCamera(B);if(re.isPointLight){let k=ee.camera,ie=ee.matrix,ye=re.distance||k.far;ye!==k.far&&(k.far=ye,k.updateProjectionMatrix()),Bo.setFromMatrixPosition(re.matrixWorld),k.position.copy(Bo),xd.copy(k.position),xd.add(rM[B]),k.up.copy(aM[B]),k.lookAt(xd),k.updateMatrixWorld(),ie.makeTranslation(-Bo.x,-Bo.y,-Bo.z),ag.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(ag,k.coordinateSystem,k.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,B),i.clear();else{B===0&&(i.setRenderTarget(ee.map),i.clear());let k=ee.getViewport(B);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),H.viewport(a)}n=ee.getFrustum(B),v(C,S,U,re,this.type)}ee.isPointLightShadow!==!0&&this.type===Jr&&x(ee,S),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,F)};function x(E,C){let S=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ln(s.x,s.y,{format:Es,type:hi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,S,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,S,f,y,null)}function b(E,C,S,w){let I=null,F=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)I=F;else if(I=S.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=I.uuid,G=C.uuid,z=l[H];z===void 0&&(z={},l[H]=z);let X=z[G];X===void 0&&(X=I.clone(),z[G]=X,C.addEventListener("dispose",M)),I=X}if(I.visible=C.visible,I.wireframe=C.wireframe,w===Jr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:h[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=i.properties.get(I);H.light=S}return I}function v(E,C,S,w,I){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Jr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let G=e.update(E),z=E.material;if(Array.isArray(z)){let X=G.groups;for(let re=0,ee=X.length;re<ee;re++){let de=X[re],Y=z[de.materialIndex];if(Y&&Y.visible){let le=b(E,Y,w,I);E.onBeforeShadow(i,E,C,S,G,le,de),i.renderBufferDirect(S,null,G,le,E,de),E.onAfterShadow(i,E,C,S,G,le,de)}}}else if(z.visible){let X=b(E,z,w,I);E.onBeforeShadow(i,E,C,S,G,X,null),i.renderBufferDirect(S,null,G,X,E,null),E.onAfterShadow(i,E,C,S,G,X,null)}}let H=E.children;for(let G=0,z=H.length;G<z;G++)v(H[G],C,S,w,I)}function M(E){E.target.removeEventListener("dispose",M);for(let S in l){let w=l[S],I=E.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function lM(i,e){function t(){let R=!1,J=new ut,$=null,oe=new ut(0,0,0,0);return{setMask:function(_e){$!==_e&&!R&&(i.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){R=_e},setClear:function(_e,pe,Ee,Ae,lt){lt===!0&&(_e*=Ae,pe*=Ae,Ee*=Ae),J.set(_e,pe,Ee,Ae),oe.equals(J)===!1&&(i.clearColor(_e,pe,Ee,Ae),oe.copy(J))},reset:function(){R=!1,$=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,$=null,oe=null,_e=null;return{setReversed:function(pe){if(J!==pe){let Ee=e.get("EXT_clip_control");pe?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),J=pe;let Ae=_e;_e=null,this.setClear(Ae)}},getReversed:function(){return J},setTest:function(pe){pe?W(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(pe){$!==pe&&!R&&(i.depthMask(pe),$=pe)},setFunc:function(pe){if(J&&(pe=Im[pe]),oe!==pe){switch(pe){case Fl:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case kl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=pe}},setLocked:function(pe){R=pe},setClear:function(pe){_e!==pe&&(_e=pe,J&&(pe=1-pe),i.clearDepth(pe))},reset:function(){R=!1,$=null,oe=null,_e=null,J=!1}}}function s(){let R=!1,J=null,$=null,oe=null,_e=null,pe=null,Ee=null,Ae=null,lt=null;return{setTest:function(tt){R||(tt?W(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(tt){J!==tt&&!R&&(i.stencilMask(tt),J=tt)},setFunc:function(tt,dt,Ye){($!==tt||oe!==dt||_e!==Ye)&&(i.stencilFunc(tt,dt,Ye),$=tt,oe=dt,_e=Ye)},setOp:function(tt,dt,Ye){(pe!==tt||Ee!==dt||Ae!==Ye)&&(i.stencilOp(tt,dt,Ye),pe=tt,Ee=dt,Ae=Ye)},setLocked:function(tt){R=tt},setClear:function(tt){lt!==tt&&(i.clearStencil(tt),lt=tt)},reset:function(){R=!1,J=null,$=null,oe=null,_e=null,pe=null,Ee=null,Ae=null,lt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,x=null,b=null,v=null,M=null,E=null,C=null,S=new ke(0,0,0),w=0,I=!1,F=null,H=null,G=null,z=null,X=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,de=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=de>=1):Y.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=de>=2);let le=null,B={},U=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),ie=new ut().fromArray(U),ye=new ut().fromArray(k);function Me(R,J,$,oe){let _e=new Uint8Array(4),pe=i.createTexture();i.bindTexture(R,pe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<$;Ee++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(J+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return pe}let q={};q[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Dr),Je(!1),it(zh),W(i.CULL_FACE),$e(Ai);function W(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function ge(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Re(R,J){return d[R]!==J?(i.bindFramebuffer(R,J),d[R]=J,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Se(R,J){let $=p,oe=!1;if(R){$=f.get(J),$===void 0&&($=[],f.set(J,$));let _e=R.textures;if($.length!==_e.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ee=_e.length;pe<Ee;pe++)$[pe]=i.COLOR_ATTACHMENT0+pe;$.length=_e.length,oe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,oe=!0);oe&&i.drawBuffers($)}function Oe(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let ht={[js]:i.FUNC_ADD,[Jp]:i.FUNC_SUBTRACT,[Qp]:i.FUNC_REVERSE_SUBTRACT};ht[em]=i.MIN,ht[tm]=i.MAX;let Ue={[nm]:i.ZERO,[im]:i.ONE,[sm]:i.SRC_COLOR,[$h]:i.SRC_ALPHA,[um]:i.SRC_ALPHA_SATURATE,[lm]:i.DST_COLOR,[am]:i.DST_ALPHA,[rm]:i.ONE_MINUS_SRC_COLOR,[Wh]:i.ONE_MINUS_SRC_ALPHA,[cm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[hm]:i.CONSTANT_COLOR,[dm]:i.ONE_MINUS_CONSTANT_COLOR,[fm]:i.CONSTANT_ALPHA,[pm]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(R,J,$,oe,_e,pe,Ee,Ae,lt,tt){if(R===Ai){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),R!==Kp){if(R!==g||tt!==I){if((x!==js||M!==js)&&(i.blendEquation(i.FUNC_ADD),x=js,M=js),tt)switch(R){case Qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hh:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",R);break}else switch(R){case Qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",R);break}b=null,v=null,E=null,C=null,S.set(0,0,0),w=0,g=R,I=tt}return}_e=_e||J,pe=pe||$,Ee=Ee||oe,(J!==x||_e!==M)&&(i.blendEquationSeparate(ht[J],ht[_e]),x=J,M=_e),($!==b||oe!==v||pe!==E||Ee!==C)&&(i.blendFuncSeparate(Ue[$],Ue[oe],Ue[pe],Ue[Ee]),b=$,v=oe,E=pe,C=Ee),(Ae.equals(S)===!1||lt!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,lt),S.copy(Ae),w=lt),g=R,I=!1}function Ge(R,J){R.side===Yt?ge(i.CULL_FACE):W(i.CULL_FACE);let $=R.side===cn;J&&($=!$),Je($),R.blending===Qr&&R.transparent===!1?$e(Ai):$e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Mt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(R){F!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),F=R)}function it(R){R!==Yp?(W(i.CULL_FACE),R!==H&&(R===zh?i.cullFace(i.BACK):R===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),H=R}function mt(R){R!==G&&(ee&&i.lineWidth(R),G=R)}function Mt(R,J,$){R?(W(i.POLYGON_OFFSET_FILL),(z!==J||X!==$)&&(z=J,X=$,a.getReversed()&&(J=-J),i.polygonOffset(J,$))):ge(i.POLYGON_OFFSET_FILL)}function et(R){R?W(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function pt(R){R===void 0&&(R=i.TEXTURE0+re-1),le!==R&&(i.activeTexture(R),le=R)}function j(R,J,$){$===void 0&&(le===null?$=i.TEXTURE0+re-1:$=le);let oe=B[$];oe===void 0&&(oe={type:void 0,texture:void 0},B[$]=oe),(oe.type!==R||oe.texture!==J)&&(le!==$&&(i.activeTexture($),le=$),i.bindTexture(R,J||q[R]),oe.type=R,oe.texture=J)}function wt(){let R=B[le];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function _(){try{i.texSubImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function T(){try{i.texSubImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function L(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function ae(){try{i.texStorage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function se(){try{i.texStorage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function Q(){try{i.texImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function ne(){try{i.texImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function me(R){return h[R]!==void 0?h[R]:i.getParameter(R)}function te(R,J){h[R]!==J&&(i.pixelStorei(R,J),h[R]=J)}function be(R){ie.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function xe(R){ye.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ye.copy(R))}function Ie(R,J){let $=l.get(J);$===void 0&&($=new WeakMap,l.set(J,$));let oe=$.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(J,R.name),$.set(R,oe))}function N(R,J){let oe=l.get(J).get(R);c.get(J)!==oe&&(i.uniformBlockBinding(J,oe,R.__bindingPointIndex),c.set(J,oe))}function V(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,B={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,x=null,b=null,v=null,M=null,E=null,C=null,S=new ke(0,0,0),w=0,I=!1,F=null,H=null,G=null,z=null,X=null,ie.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:ge,bindFramebuffer:Re,drawBuffers:Se,useProgram:Oe,setBlending:$e,setMaterial:Ge,setFlipSided:Je,setCullFace:it,setLineWidth:mt,setPolygonOffset:Mt,setScissorTest:et,activeTexture:pt,bindTexture:j,unbindTexture:wt,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:Q,texImage3D:ne,pixelStorei:te,getParameter:me,updateUBOMapping:Ie,uniformBlockBinding:N,texStorage2D:ae,texStorage3D:se,texSubImage2D:_,texSubImage3D:T,compressedTexSubImage2D:L,compressedTexSubImage3D:O,scissor:be,viewport:xe,reset:V}}function cM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,_){return p?new OffscreenCanvas(D,_):Or("canvas")}function m(D,_,T){let L=1,O=Qe(D);if((O.width>T||O.height>T)&&(L=T/Math.max(O.width,O.height)),L<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ae=Math.floor(L*O.width),se=Math.floor(L*O.height);d===void 0&&(d=y(ae,se));let Q=_?y(ae,se):d;return Q.width=ae,Q.height=se,Q.getContext("2d").drawImage(D,0,0,ae,se),He("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+ae+"x"+se+")."),Q}else return"data"in D&&He("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),D;return D}function g(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,_,T,L,O,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se;L&&(se=e.get("EXT_texture_norm16"),se||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(T===i.FLOAT&&(Q=i.R32F),T===i.HALF_FLOAT&&(Q=i.R16F),T===i.UNSIGNED_BYTE&&(Q=i.R8),T===i.UNSIGNED_SHORT&&se&&(Q=se.R16_EXT),T===i.SHORT&&se&&(Q=se.R16_SNORM_EXT)),_===i.RED_INTEGER&&(T===i.UNSIGNED_BYTE&&(Q=i.R8UI),T===i.UNSIGNED_SHORT&&(Q=i.R16UI),T===i.UNSIGNED_INT&&(Q=i.R32UI),T===i.BYTE&&(Q=i.R8I),T===i.SHORT&&(Q=i.R16I),T===i.INT&&(Q=i.R32I)),_===i.RG&&(T===i.FLOAT&&(Q=i.RG32F),T===i.HALF_FLOAT&&(Q=i.RG16F),T===i.UNSIGNED_BYTE&&(Q=i.RG8),T===i.UNSIGNED_SHORT&&se&&(Q=se.RG16_EXT),T===i.SHORT&&se&&(Q=se.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(T===i.UNSIGNED_BYTE&&(Q=i.RG8UI),T===i.UNSIGNED_SHORT&&(Q=i.RG16UI),T===i.UNSIGNED_INT&&(Q=i.RG32UI),T===i.BYTE&&(Q=i.RG8I),T===i.SHORT&&(Q=i.RG16I),T===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(T===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),T===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),T===i.UNSIGNED_INT&&(Q=i.RGB32UI),T===i.BYTE&&(Q=i.RGB8I),T===i.SHORT&&(Q=i.RGB16I),T===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(T===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),T===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),T===i.UNSIGNED_INT&&(Q=i.RGBA32UI),T===i.BYTE&&(Q=i.RGBA8I),T===i.SHORT&&(Q=i.RGBA16I),T===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(T===i.UNSIGNED_SHORT&&se&&(Q=se.RGB16_EXT),T===i.SHORT&&se&&(Q=se.RGB16_SNORM_EXT),T===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),T===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let ne=ae?ka:at.getTransfer(O);T===i.FLOAT&&(Q=i.RGBA32F),T===i.HALF_FLOAT&&(Q=i.RGBA16F),T===i.UNSIGNED_BYTE&&(Q=ne===_t?i.SRGB8_ALPHA8:i.RGBA8),T===i.UNSIGNED_SHORT&&se&&(Q=se.RGBA16_EXT),T===i.SHORT&&se&&(Q=se.RGBA16_SNORM_EXT),T===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),T===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(D,_){let T;return D?_===null||_===ui||_===na?T=i.DEPTH24_STENCIL8:_===Gn?T=i.DEPTH32F_STENCIL8:_===ta&&(T=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===na?T=i.DEPTH_COMPONENT24:_===Gn?T=i.DEPTH_COMPONENT32F:_===ta&&(T=i.DEPTH_COMPONENT16),T}function E(D,_){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Bt&&D.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function C(D){let _=D.target;_.removeEventListener("dispose",C),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function S(D){let _=D.target;_.removeEventListener("dispose",S),F(_)}function w(D){let _=n.get(D);if(_.__webglInit===void 0)return;let T=D.source,L=f.get(T);if(L){let O=L[_.__cacheKey];O.usedTimes--,O.usedTimes===0&&I(D),Object.keys(L).length===0&&f.delete(T)}n.remove(D)}function I(D){let _=n.get(D);i.deleteTexture(_.__webglTexture);let T=D.source,L=f.get(T);delete L[_.__cacheKey],a.memory.textures--}function F(D){let _=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(_.__webglFramebuffer[L]))for(let O=0;O<_.__webglFramebuffer[L].length;O++)i.deleteFramebuffer(_.__webglFramebuffer[L][O]);else i.deleteFramebuffer(_.__webglFramebuffer[L]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[L])}else{if(Array.isArray(_.__webglFramebuffer))for(let L=0;L<_.__webglFramebuffer.length;L++)i.deleteFramebuffer(_.__webglFramebuffer[L]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let L=0;L<_.__webglColorRenderbuffer.length;L++)_.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[L]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let T=D.textures;for(let L=0,O=T.length;L<O;L++){let ae=n.get(T[L]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(T[L])}n.remove(D)}let H=0;function G(){H=0}function z(){return H}function X(D){H=D}function re(){let D=H;return D>=s.maxTextures&&He("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function ee(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function de(D,_){let T=n.get(D);if(D.isVideoTexture&&j(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&T.__version!==D.version){let L=D.image;if(L===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(T,D,_);return}}else D.isExternalTexture&&(T.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,T.__webglTexture,i.TEXTURE0+_)}function Y(D,_){let T=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&T.__version!==D.version){ge(T,D,_);return}else D.isExternalTexture&&(T.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,T.__webglTexture,i.TEXTURE0+_)}function le(D,_){let T=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&T.__version!==D.version){ge(T,D,_);return}t.bindTexture(i.TEXTURE_3D,T.__webglTexture,i.TEXTURE0+_)}function B(D,_){let T=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&T.__version!==D.version){Re(T,D,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+_)}let U={[us]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},k={[Bt]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},ie={[Sm]:i.NEVER,[Am]:i.ALWAYS,[Mm]:i.LESS,[nu]:i.LEQUAL,[Em]:i.EQUAL,[iu]:i.GEQUAL,[Tm]:i.GREATER,[wm]:i.NOTEQUAL};function ye(D,_){if(_.type===Gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===ea||_.magFilter===Ks||_.magFilter===ci||_.minFilter===kt||_.minFilter===ea||_.minFilter===Ks||_.minFilter===ci)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,U[_.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,U[_.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,U[_.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,k[_.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,k[_.minFilter]),_.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==Ks&&_.minFilter!==ci||_.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let T=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Me(D,_){let T=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",C));let L=_.source,O=f.get(L);O===void 0&&(O={},f.set(L,O));let ae=ee(_);if(ae!==D.__cacheKey){O[ae]===void 0&&(O[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,T=!0),O[ae].usedTimes++;let se=O[D.__cacheKey];se!==void 0&&(O[D.__cacheKey].usedTimes--,se.usedTimes===0&&I(_)),D.__cacheKey=ae,D.__webglTexture=O[ae].texture}return T}function q(D,_,T){return Math.floor(Math.floor(D/T)/_)}function W(D,_,T,L){let ae=D.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,T,L,_.data);else{ae.sort((te,be)=>te.start-be.start);let se=0;for(let te=1;te<ae.length;te++){let be=ae[se],xe=ae[te],Ie=be.start+be.count,N=q(xe.start,_.width,4),V=q(be.start,_.width,4);xe.start<=Ie+1&&N===V&&q(xe.start+xe.count-1,_.width,4)===N?be.count=Math.max(be.count,xe.start+xe.count-be.start):(++se,ae[se]=xe)}ae.length=se+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,be=ae.length;te<be;te++){let xe=ae[te],Ie=Math.floor(xe.start/4),N=Math.ceil(xe.count/4),V=Ie%_.width,R=Math.floor(Ie/_.width),J=N,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,V),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,V,R,J,$,T,L,_.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ge(D,_,T){let L=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(L=i.TEXTURE_3D);let O=Me(D,_),ae=_.source;t.bindTexture(L,D.__webglTexture,i.TEXTURE0+T);let se=n.get(ae);if(ae.version!==se.__version||O===!0){if(t.activeTexture(i.TEXTURE0+T),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=at.getPrimaries(at.workingColorSpace),oe=_.colorSpace===Ji?null:at.getPrimaries(_.colorSpace),_e=_.colorSpace===Ji||$===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,s.maxTextureSize);ne=wt(_,ne);let me=r.convert(_.format,_.colorSpace),te=r.convert(_.type),be=v(_.internalFormat,me,te,_.normalized,_.colorSpace,_.isVideoTexture);ye(L,_);let xe,Ie=_.mipmaps,N=_.isVideoTexture!==!0,V=se.__version===void 0||O===!0,R=ae.dataReady,J=E(_,ne);if(_.isDepthTexture)be=M(_.format===Ms,_.type),V&&(N?t.texStorage2D(i.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,me,te,null));else if(_.isDataTexture)if(Ie.length>0){N&&V&&t.texStorage2D(i.TEXTURE_2D,J,be,Ie[0].width,Ie[0].height);for(let $=0,oe=Ie.length;$<oe;$++)xe=Ie[$],N?R&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,me,te,xe.data):t.texImage2D(i.TEXTURE_2D,$,be,xe.width,xe.height,0,me,te,xe.data);_.generateMipmaps=!1}else N?(V&&t.texStorage2D(i.TEXTURE_2D,J,be,ne.width,ne.height),R&&W(_,ne,me,te)):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,me,te,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&V&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,be,Ie[0].width,Ie[0].height,ne.depth);for(let $=0,oe=Ie.length;$<oe;$++)if(xe=Ie[$],_.format!==$n)if(me!==null)if(N){if(R)if(_.layerUpdates.size>0){let _e=fd(xe.width,xe.height,_.format,_.type);for(let pe of _.layerUpdates){let Ee=xe.data.subarray(pe*_e/xe.data.BYTES_PER_ELEMENT,(pe+1)*_e/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,pe,xe.width,xe.height,1,me,Ee)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ne.depth,me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,be,xe.width,xe.height,ne.depth,0,xe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ne.depth,me,te,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,be,xe.width,xe.height,ne.depth,0,me,te,xe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{N&&V&&t.texStorage2D(i.TEXTURE_2D,J,be,Ie[0].width,Ie[0].height);for(let $=0,oe=Ie.length;$<oe;$++)xe=Ie[$],_.format!==$n?me!==null?N?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,be,xe.width,xe.height,0,xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?R&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,me,te,xe.data):t.texImage2D(i.TEXTURE_2D,$,be,xe.width,xe.height,0,me,te,xe.data)}else if(_.isDataArrayTexture)if(N){if(V&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,be,ne.width,ne.height,ne.depth),R)if(_.layerUpdates.size>0){let $=fd(ne.width,ne.height,_.format,_.type);for(let oe of _.layerUpdates){let _e=ne.data.subarray(oe*$/ne.data.BYTES_PER_ELEMENT,(oe+1)*$/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ne.width,ne.height,1,me,te,_e)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,te,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,me,te,ne.data);else if(_.isData3DTexture)N?(V&&t.texStorage3D(i.TEXTURE_3D,J,be,ne.width,ne.height,ne.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,te,ne.data)):t.texImage3D(i.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,me,te,ne.data);else if(_.isFramebufferTexture){if(V)if(N)t.texStorage2D(i.TEXTURE_2D,J,be,ne.width,ne.height);else{let $=ne.width,oe=ne.height;for(let _e=0;_e<J;_e++)t.texImage2D(i.TEXTURE_2D,_e,be,$,oe,0,me,te,null),$>>=1,oe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ne.parentNode!==$){$.appendChild(ne),h.add(_),$.onpaint=oe=>{let _e=oe.changedElements;for(let pe of h)_e.includes(pe.image)&&(pe.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let _e=i.RGBA,pe=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,pe,Ee,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(N&&V){let $=Qe(Ie[0]);t.texStorage2D(i.TEXTURE_2D,J,be,$.width,$.height)}for(let $=0,oe=Ie.length;$<oe;$++)xe=Ie[$],N?R&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,me,te,xe):t.texImage2D(i.TEXTURE_2D,$,be,me,te,xe);_.generateMipmaps=!1}else if(N){if(V){let $=Qe(ne);t.texStorage2D(i.TEXTURE_2D,J,be,$.width,$.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,te,ne)}else t.texImage2D(i.TEXTURE_2D,0,be,me,te,ne);g(_)&&x(L),se.__version=ae.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function Re(D,_,T){if(_.image.length!==6)return;let L=Me(D,_),O=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+T);let ae=n.get(O);if(O.version!==ae.__version||L===!0){t.activeTexture(i.TEXTURE0+T);let se=at.getPrimaries(at.workingColorSpace),Q=_.colorSpace===Ji?null:at.getPrimaries(_.colorSpace),ne=_.colorSpace===Ji||se===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!me&&!te?be[pe]=m(_.image[pe],!0,s.maxCubemapSize):be[pe]=te?_.image[pe].image:_.image[pe],be[pe]=wt(_,be[pe]);let xe=be[0],Ie=r.convert(_.format,_.colorSpace),N=r.convert(_.type),V=v(_.internalFormat,Ie,N,_.normalized,_.colorSpace),R=_.isVideoTexture!==!0,J=ae.__version===void 0||L===!0,$=O.dataReady,oe=E(_,xe);ye(i.TEXTURE_CUBE_MAP,_);let _e;if(me){R&&J&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,V,xe.width,xe.height);for(let pe=0;pe<6;pe++){_e=be[pe].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){let Ae=_e[Ee];_.format!==$n?Ie!==null?R?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,V,Ae.width,Ae.height,0,Ae.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,Ae.width,Ae.height,Ie,N,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,V,Ae.width,Ae.height,0,Ie,N,Ae.data)}}}else{if(_e=_.mipmaps,R&&J){_e.length>0&&oe++;let pe=Qe(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,V,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(te){R?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,Ie,N,be[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,V,be[pe].width,be[pe].height,0,Ie,N,be[pe].data);for(let Ee=0;Ee<_e.length;Ee++){let lt=_e[Ee].image[pe].image;R?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,lt.width,lt.height,Ie,N,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,V,lt.width,lt.height,0,Ie,N,lt.data)}}else{R?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ie,N,be[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,V,Ie,N,be[pe]);for(let Ee=0;Ee<_e.length;Ee++){let Ae=_e[Ee];R?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,Ie,N,Ae.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,V,Ie,N,Ae.image[pe])}}}g(_)&&x(i.TEXTURE_CUBE_MAP),ae.__version=O.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function Se(D,_,T,L,O,ae){let se=r.convert(T.format,T.colorSpace),Q=r.convert(T.type),ne=v(T.internalFormat,se,Q,T.normalized,T.colorSpace),me=n.get(_),te=n.get(T);if(te.__renderTarget=_,!me.__hasExternalTextures){let be=Math.max(1,_.width>>ae),xe=Math.max(1,_.height>>ae);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?t.texImage3D(O,ae,ne,be,xe,_.depth,0,se,Q,null):t.texImage2D(O,ae,ne,be,xe,0,se,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,O,te.__webglTexture,0,et(_)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,O,te.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,_,T){if(i.bindRenderbuffer(i.RENDERBUFFER,D),_.depthBuffer){let L=_.depthTexture,O=L&&L.isDepthTexture?L.type:null,ae=M(_.stencilBuffer,O),se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(_),ae,_.width,_.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,D)}else{let L=_.textures;for(let O=0;O<L.length;O++){let ae=L[O],se=r.convert(ae.format,ae.colorSpace),Q=r.convert(ae.type),ne=v(ae.internalFormat,se,Q,ae.normalized,ae.colorSpace);pt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(_),ne,_.width,_.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(D,_,T){let L=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O=n.get(_.depthTexture);if(O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),L){if(O.__webglInit===void 0&&(O.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),O.__webglTexture===void 0){O.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ye(i.TEXTURE_CUBE_MAP,_.depthTexture);let me=r.convert(_.depthTexture.format),te=r.convert(_.depthTexture.type),be;_.depthTexture.format===xi?be=i.DEPTH_COMPONENT24:_.depthTexture.format===Ms&&(be=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,be,_.width,_.height,0,me,te,null)}}else de(_.depthTexture,0);let ae=O.__webglTexture,se=et(_),Q=L?i.TEXTURE_CUBE_MAP_POSITIVE_X+T:i.TEXTURE_2D,ne=_.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ae,0);else if(_.depthTexture.format===Ms)pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(D){let _=n.get(D),T=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let L=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),L){let O=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,L.removeEventListener("dispose",O)};L.addEventListener("dispose",O),_.__depthDisposeCallback=O}_.__boundDepthTexture=L}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(T)for(let L=0;L<6;L++)ht(_.__webglFramebuffer[L],D,L);else{let L=D.texture.mipmaps;L&&L.length>0?ht(_.__webglFramebuffer[0],D,0):ht(_.__webglFramebuffer,D,0)}else if(T){_.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[L]),_.__webglDepthbuffer[L]===void 0)_.__webglDepthbuffer[L]=i.createRenderbuffer(),Oe(_.__webglDepthbuffer[L],D,!1);else{let O=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,ae)}}else{let L=D.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Oe(_.__webglDepthbuffer,D,!1);else{let O=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(D,_,T){let L=n.get(D);_!==void 0&&Se(L.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),T!==void 0&&Ue(D)}function Ge(D){let _=D.texture,T=n.get(D),L=n.get(_);D.addEventListener("dispose",S);let O=D.textures,ae=D.isWebGLCubeRenderTarget===!0,se=O.length>1;if(se||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=_.version,a.memory.textures++),ae){T.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer[Q]=[];for(let ne=0;ne<_.mipmaps.length;ne++)T.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else T.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)T.__webglFramebuffer[Q]=i.createFramebuffer()}else T.__webglFramebuffer=i.createFramebuffer();if(se)for(let Q=0,ne=O.length;Q<ne;Q++){let me=n.get(O[Q]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&pt(D)===!1){T.__webglMultisampledFramebuffer=i.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let Q=0;Q<O.length;Q++){let ne=O[Q];T.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,T.__webglColorRenderbuffer[Q]);let me=r.convert(ne.format,ne.colorSpace),te=r.convert(ne.type),be=v(ne.internalFormat,me,te,ne.normalized,ne.colorSpace,D.isXRRenderTarget===!0),xe=et(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,be,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,T.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(T.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(T.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),ye(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Se(T.__webglFramebuffer[Q][ne],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Se(T.__webglFramebuffer[Q],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(_)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Q=0,ne=O.length;Q<ne;Q++){let me=O[Q],te=n.get(me),be=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,te.__webglTexture),ye(be,me),Se(T.__webglFramebuffer,D,me,i.COLOR_ATTACHMENT0+Q,be,0),g(me)&&x(be)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),ye(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Se(T.__webglFramebuffer[ne],D,_,i.COLOR_ATTACHMENT0,Q,ne);else Se(T.__webglFramebuffer,D,_,i.COLOR_ATTACHMENT0,Q,0);g(_)&&x(Q),t.unbindTexture()}D.depthBuffer&&Ue(D)}function Je(D){let _=D.textures;for(let T=0,L=_.length;T<L;T++){let O=_[T];if(g(O)){let ae=b(D),se=n.get(O).__webglTexture;t.bindTexture(ae,se),x(ae),t.unbindTexture()}}}let it=[],mt=[];function Mt(D){if(D.samples>0){if(pt(D)===!1){let _=D.textures,T=D.width,L=D.height,O=i.COLOR_BUFFER_BIT,ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(D),Q=_.length>1;if(Q)for(let me=0;me<_.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let ne=D.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let me=0;me<_.length;me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[me]);let te=n.get(_[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,T,L,0,0,T,L,O,i.NEAREST),c===!0&&(it.length=0,mt.length=0,it.push(i.COLOR_ATTACHMENT0+me),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(it.push(ae),mt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<_.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,se.__webglColorRenderbuffer[me]);let te=n.get(_[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let _=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function et(D){return Math.min(s.maxSamples,D.samples)}function pt(D){let _=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function j(D){let _=a.render.frame;u.get(D)!==_&&(u.set(D,_),D.update())}function wt(D,_){let T=D.colorSpace,L=D.format,O=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||T!==wn&&T!==Ji&&(at.getTransfer(T)===_t?(L!==$n||O!==On)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",T)),_}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=G,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=de,this.setTexture2DArray=Y,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=$e,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uM(i,e){function t(n,s=Ji){let r,a=at.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===ed)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===xc)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===id)return i.ALPHA;if(n===sd)return i.RGB;if(n===$n)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ac||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Lo||n===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Ic)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dc)return r.COMPRESSED_R11_EAC;if(n===Nc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===$c||n===Wc||n===Xc||n===qc||n===Yc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Kc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===eu||n===Do||n===tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rd=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new Ad,g={},x=t.getContextAttributes(),b=null,v=null,M=[],E=[],C=new ve,S=null,w=null,I=new Ut;I.viewport=new ut;let F=new Ut;F.viewport=new ut;let H=[I,F],G=new pc,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=M[q];return W===void 0&&(W=new zr,M[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=M[q];return W===void 0&&(W=new zr,M[q]=W),W.getGripSpace()},this.getHand=function(q){let W=M[q];return W===void 0&&(W=new zr,M[q]=W),W.getHandSpace()};function re(q){let W=E.indexOf(q.inputSource);if(W===-1)return;let ge=M[W];ge!==void 0&&(ge.update(q.inputSource,q.frame,l||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function ee(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",de);for(let q=0;q<M.length;q++){let W=E[q];W!==null&&(E[q]=null,M[q].disconnect(W))}z=null,X=null,m.reset();for(let q in g)delete g[q];if(e.setRenderTarget(b),f=null,d=null,h=null,s=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Re=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?Ms:xi,Re=x.stencil?na:ui);let Oe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ln(d.textureWidth,d.textureHeight,{format:$n,type:On,depthTexture:new fs(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ln(f.framebufferWidth,f.framebufferHeight,{format:$n,type:On,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function de(q){for(let W=0;W<q.removed.length;W++){let ge=q.removed[W],Re=E.indexOf(ge);Re>=0&&(E[Re]=null,M[Re].disconnect(ge))}for(let W=0;W<q.added.length;W++){let ge=q.added[W],Re=E.indexOf(ge);if(Re===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=E.length){E.push(ge),Re=Oe;break}else if(E[Oe]===null){E[Oe]=ge,Re=Oe;break}if(Re===-1)break}let Se=M[Re];Se&&Se.connect(ge)}}let Y=new P,le=new P;function B(q,W,ge){Y.setFromMatrixPosition(W.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);let Re=Y.distanceTo(le),Se=W.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,ht=Se[14]/(Se[10]-1),Ue=Se[14]/(Se[10]+1),$e=(Se[9]+1)/Se[5],Ge=(Se[9]-1)/Se[5],Je=(Se[8]-1)/Se[0],it=(Oe[8]+1)/Oe[0],mt=ht*Je,Mt=ht*it,et=Re/(-Je+it),pt=et*-Je;if(W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pt),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let j=ht+et,wt=Ue+et,Qe=mt-pt,D=Mt+(Re-pt),_=$e*Ue/wt*j,T=Ge*Ue/wt*j;q.projectionMatrix.makePerspective(Qe,D,_,T,j,wt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function U(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let W=q.near,ge=q.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),G.near=F.near=I.near=W,G.far=F.far=I.far=ge,(z!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,X=G.far),G.layers.mask=q.layers.mask|6,I.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Re=q.parent,Se=G.cameras;U(G,Re);for(let Oe=0;Oe<Se.length;Oe++)U(Se[Oe],Re);Se.length===2?B(G,I,F):G.projectionMatrix.copy(I.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),k(q,G,Re)};function k(q,W,ge){ge===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return g[q]};let ie=null;function ye(q,W){if(u=W.getViewerPose(l||a),p=W,u!==null){let ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Re=!1;ge.length!==G.cameras.length&&(G.cameras.length=0,Re=!0);for(let Ue=0;Ue<ge.length;Ue++){let $e=ge[Ue],Ge=null;if(f!==null)Ge=f.getViewport($e);else{let it=h.getViewSubImage(d,$e);Ge=it.viewport,Ue===0&&(e.setRenderTargetTextures(v,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(v))}let Je=H[Ue];Je===void 0&&(Je=new Ut,Je.layers.enable(Ue),Je.viewport=new ut,H[Ue]=Je),Je.matrix.fromArray($e.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray($e.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ue===0&&(G.matrix.copy(Je.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Re===!0&&G.cameras.push(Je)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ue=h.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Ue=0;Ue<ge.length;Ue++){let $e=ge[Ue].camera;if($e){let Ge=g[$e];Ge||(Ge=new Za,g[$e]=Ge);let Je=h.getCameraImage($e);Ge.sourceTexture=Je}}}}for(let ge=0;ge<M.length;ge++){let Re=E[ge],Se=M[ge];Re!==null&&Se!==void 0&&Se.update(Re,W,l||a)}ie&&ie(q,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let Me=new og;Me.setAnimationLoop(ye),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}},fM=new qe,fg=new Ke;fg.set(-1,0,0,0,1,0,0,0,1);function pM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ud(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,x,b):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),b=x.envMap,v=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let E=M.program;n.uniformBlockBinding(v,E)}function l(v,M){let E=s[v.id];E===void 0&&(m(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",x));let C=M.program;n.updateUBOMapping(v,C);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function u(v){let M=h();v.__bindingPointIndex=M;let E=i.createBuffer(),C=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],E=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,w=E.length;S<w;S++){let I=E[S];if(Array.isArray(I))for(let F=0,H=I.length;F<H;F++)f(I[F],S,F,C);else f(I,S,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,E,C){if(y(v,M,E,C)===!0){let S=v.__offset,w=v.value;if(Array.isArray(w)){let I=0;for(let F=0;F<w.length;F++){let H=w[F],G=g(H);p(H,v.__data,I),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function p(v,M,E){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,E)}function y(v,M,E,C){let S=v.value,w=M+"_"+E;if(C[w]===void 0)return typeof S=="number"||typeof S=="boolean"?C[w]=S:ArrayBuffer.isView(S)?C[w]=S.slice():C[w]=S.clone(),!0;{let I=C[w];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return C[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(I.equals(S)===!1)return I.copy(S),!0}}return!1}function m(v){let M=v.uniforms,E=0,C=16;for(let w=0,I=M.length;w<I;w++){let F=Array.isArray(M[w])?M[w]:[M[w]];for(let H=0,G=F.length;H<G;H++){let z=F[H],X=Array.isArray(z.value)?z.value:[z.value];for(let re=0,ee=X.length;re<ee;re++){let de=X[re],Y=g(de),le=E%C,B=le%Y.boundary,U=le+B;E+=B,U!==0&&C-U<Y.storage&&(E+=C-U),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Y.storage}}}let S=E%C;return S>0&&(E+=C-S),v.__size=E,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var gM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function _M(){return Ri===null&&(Ri=new Vr(gM,16,16,Es,hi),Ri.name="DFG_LUT",Ri.minFilter=kt,Ri.magFilter=kt,Ri.wrapS=jn,Ri.wrapT=jn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var la=class{constructor(e={}){let{canvas:t=Rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,m=new Set([Tc,Ec,Mc]),g=new Set([On,ui,ta,na,vc,bc]),x=new Uint32Array(4),b=new Int32Array(4),v=new P,M=null,E=null,C=[],S=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,H=null,G=null,z=null,X=null;this._outputColorSpace=Lt;let re=0,ee=0,de=null,Y=-1,le=null,B=new ut,U=new ut,k=null,ie=new ke(0),ye=0,Me=t.width,q=t.height,W=1,ge=null,Re=null,Se=new ut(0,0,Me,q),Oe=new ut(0,0,Me,q),ht=!1,Ue=new Gr,$e=!1,Ge=!1,Je=new qe,it=new P,mt=new ut,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function pt(){return de===null?W:1}let j=n;function wt(A,Z){return t.getContext(A,Z)}let Qe,D,_,T,L,O,ae,se,Q,ne,me,te,be,xe,Ie,N,V,R,J,$,oe,_e,pe;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",dt,!1),j===null){let Z="webgl2";if(j=wt(Z,A),j===null)throw wt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(A){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Xe("WebGLRenderer: "+A.message),A}function Ee(){Qe=new Eb(j),Qe.init(),oe=new uM(j,Qe),D=new pb(j,Qe,e,oe),_=new lM(j,Qe),D.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),G=j.createFramebuffer(),z=j.createFramebuffer(),X=j.createFramebuffer(),T=new Ab(j),L=new YS,O=new cM(j,Qe,_,L,D,oe,T),ae=new Mb(I),se=new Cy(j),_e=new db(j,se),Q=new Tb(j,se,T,_e),ne=new Cb(j,Q,se,_e,T),R=new Rb(j,D,O),Ie=new mb(L),me=new qS(I,ae,Qe,D,_e,Ie),te=new pM(I,L),be=new ZS,xe=new nM(Qe),V=new hb(I,ae,_,ne,p,c),N=new oM(I,ne,D),pe=new mM(j,T,D,_),J=new fb(j,Qe,T),$=new wb(j,Qe,T),T.programs=me.programs,I.capabilities=D,I.extensions=Qe,I.properties=L,I.renderLists=be,I.shadowMap=N,I.state=_,I.info=T}y!==On&&(w=new Ib(y,t.width,t.height,o,s,r));let Ae=new Rd(I,j);this.xr=Ae,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Me,q,!1))},this.getSize=function(A){return A.set(Me,q)},this.setSize=function(A,Z,fe=!0){if(Ae.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=A,q=Z,t.width=Math.floor(A*W),t.height=Math.floor(Z*W),fe===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(Me*W,q*W).floor()},this.setDrawingBufferSize=function(A,Z,fe){Me=A,q=Z,W=fe,t.width=Math.floor(A*fe),t.height=Math.floor(Z*fe),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(y===On){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,Z,fe,ce){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,Z,fe,ce),_.viewport(B.copy(Se).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Oe)},this.setScissor=function(A,Z,fe,ce){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,Z,fe,ce),_.scissor(U.copy(Oe).multiplyScalar(W).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){_.setScissorTest(ht=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){Re=A},this.getClearColor=function(A){return A.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,fe=!0){let ce=0;if(A){let ue=!1;if(de!==null){let Pe=de.texture.format;ue=m.has(Pe)}if(ue){let Pe=de.texture.type,Ne=g.has(Pe),Ce=V.getClearColor(),Fe=V.getClearAlpha(),ze=Ce.r,st=Ce.g,ct=Ce.b;Ne?(x[0]=ze,x[1]=st,x[2]=ct,x[3]=Fe,j.clearBufferuiv(j.COLOR,0,x)):(b[0]=ze,b[1]=st,b[2]=ct,b[3]=Fe,j.clearBufferiv(j.COLOR,0,b))}else ce|=j.COLOR_BUFFER_BIT}Z&&(ce|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&j.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),V.dispose(),be.dispose(),xe.dispose(),L.dispose(),ae.dispose(),ne.dispose(),_e.dispose(),pe.dispose(),me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",mi),Ae.removeEventListener("sessionend",Ls),zn.stop()};function lt(A){A.preventDefault(),za("WebGLRenderer: Context Lost."),F=!0}function tt(){za("WebGLRenderer: Context Restored."),F=!1;let A=T.autoReset,Z=N.enabled,fe=N.autoUpdate,ce=N.needsUpdate,ue=N.type;Ee(),T.autoReset=A,N.enabled=Z,N.autoUpdate=fe,N.needsUpdate=ce,N.type=ue}function dt(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){let Z=A.target;Z.removeEventListener("dispose",Ye),At(Z)}function At(A){mn(A),L.remove(A)}function mn(A){let Z=L.get(A).programs;Z!==void 0&&(Z.forEach(function(fe){me.releaseProgram(fe)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,fe,ce,ue,Pe){Z===null&&(Z=Mt);let Ne=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ce=j0(A,Z,fe,ce,ue);_.setMaterial(ce,Ne);let Fe=fe.index,ze=1;if(ce.wireframe===!0){if(Fe=Q.getWireframeAttribute(fe),Fe===void 0)return;ze=2}let st=fe.drawRange,ct=fe.attributes.position,Be=st.start*ze,gt=(st.start+st.count)*ze;Pe!==null&&(Be=Math.max(Be,Pe.start*ze),gt=Math.min(gt,(Pe.start+Pe.count)*ze)),Fe!==null?(Be=Math.max(Be,0),gt=Math.min(gt,Fe.count)):ct!=null&&(Be=Math.max(Be,0),gt=Math.min(gt,ct.count));let Vt=gt-Be;if(Vt<0||Vt===1/0)return;_e.setup(ue,ce,Ce,fe,Fe);let Ct,Et=J;if(Fe!==null&&(Ct=se.get(Fe),Et=$,Et.setIndex(Ct)),ue.isMesh)ce.wireframe===!0?(_.setLineWidth(ce.wireframeLinewidth*pt()),Et.setMode(j.LINES)):Et.setMode(j.TRIANGLES);else if(ue.isLine){let gn=ce.linewidth;gn===void 0&&(gn=1),_.setLineWidth(gn*pt()),ue.isLineSegments?Et.setMode(j.LINES):ue.isLineLoop?Et.setMode(j.LINE_LOOP):Et.setMode(j.LINE_STRIP)}else ue.isPoints?Et.setMode(j.POINTS):ue.isSprite&&Et.setMode(j.TRIANGLES);if(ue.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Et.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let gn=ue._multiDrawStarts,De=ue._multiDrawCounts,En=ue._multiDrawCount,ft=Fe?se.get(Fe).bytesPerElement:1,qn=L.get(ce).currentProgram.getUniforms();for(let gi=0;gi<En;gi++)qn.setValue(j,"_gl_DrawID",gi),Et.render(gn[gi]/ft,De[gi])}else if(ue.isInstancedMesh)Et.renderInstances(Be,Vt,ue.count);else if(fe.isInstancedBufferGeometry){let gn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,De=Math.min(fe.instanceCount,gn);Et.renderInstances(Be,Vt,De)}else Et.render(Be,Vt)};function Mn(A,Z,fe,ce){H!==null&&A.isNodeMaterial&&H.setObject(ce,A),$e===!0&&Ie.setState(A,fe,!1),A.transparent===!0&&A.side===Yt&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,tl(A,Z,ce),A.side=wi,A.needsUpdate=!0,tl(A,Z,ce),A.side=Yt):tl(A,Z,ce)}this.compile=function(A,Z,fe=null){fe===null&&(fe=A),H!==null&&H.renderStart(A,Z,fe),E=xe.get(fe),E.init(Z),S.push(E),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(E.pushLight(ue),ue.castShadow&&E.pushShadow(ue))}),A!==fe&&A.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(E.pushLight(ue),ue.castShadow&&E.pushShadow(ue))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),Ge=this.localClippingEnabled,$e=Ie.init(this.clippingPlanes,Ge),$e===!0&&Ie.setGlobalState(this.clippingPlanes,Z),H!==null&&N.render(E.state.shadowsArray,fe,Z);let ce=new Set;return A.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let Pe=ue.material;if(Pe)if(Array.isArray(Pe))for(let Ne=0;Ne<Pe.length;Ne++){let Ce=Pe[Ne];Mn(Ce,fe,Z,ue),ce.add(Ce)}else Mn(Pe,fe,Z,ue),ce.add(Pe)}),E=S.pop(),H!==null&&H.renderEnd(),ce},this.compileAsync=function(A,Z,fe=null){let ce=this.compile(A,Z,fe);return new Promise(ue=>{function Pe(){if(ce.forEach(function(Ne){let Fe=L.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&ce.delete(Ne)}),ce.size===0){ue(A);return}setTimeout(Pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ni=null;function lr(A){Ni&&Ni(A)}function mi(){zn.stop()}function Ls(){zn.start()}let zn=new og;zn.setAnimationLoop(lr),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Ni=A,Ae.setAnimationLoop(A),A===null?zn.stop():zn.start()},Ae.addEventListener("sessionstart",mi),Ae.addEventListener("sessionend",Ls),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(A,Z);let fe=Ae.enabled===!0&&Ae.isPresenting===!0,ce=w!==null&&(de===null||fe)&&w.begin(I,de);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Z),Z=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,Z,de),E=xe.get(A,S.length),E.init(Z),E.state.textureUnits=O.getTextureUnits(),S.push(E),Je.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ue.setFromProjectionMatrix(Je,ri,Z.reversedDepth),Ge=this.localClippingEnabled,$e=Ie.init(this.clippingPlanes,Ge),M=be.get(A,C.length),M.init(),C.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&Xu(Ne,Z,-1/0,I.sortObjects)}Xu(A,Z,0,I.sortObjects),M.finish(),H!==null&&H.updateLights(E.state.lightsArray),I.sortObjects===!0&&M.sort(ge,Re),et=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,et&&V.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Ie.beginShadows();let ue=E.state.shadowsArray;if(N.render(ue,A,Z),$e===!0&&Ie.endShadows(),(ce&&w.hasRenderPass())===!1){let Ne=M.opaque,Ce=M.transmissive;if(E.setupLights(),Z.isArrayCamera){let Fe=Z.cameras;if(Ce.length>0)for(let ze=0,st=Fe.length;ze<st;ze++){let ct=Fe[ze];Xf(Ne,Ce,A,ct)}et&&V.render(A);for(let ze=0,st=Fe.length;ze<st;ze++){let ct=Fe[ze];Wf(M,A,ct,ct.viewport)}}else Ce.length>0&&Xf(Ne,Ce,A,Z),et&&V.render(A),Wf(M,A,Z)}de!==null&&ee===0&&(O.updateMultisampleRenderTarget(de),O.updateRenderTargetMipmap(de)),ce&&w.end(I),A.isScene===!0&&A.onAfterRender(I,A,Z),_e.resetDefaultState(),Y=-1,le=null,S.pop(),S.length>0?(E=S[S.length-1],O.setTextureUnits(E.state.textureUnits),$e===!0&&Ie.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,H!==null&&H.renderEnd()};function Xu(A,Z,fe,ce){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ue)){ce&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Je);let Ne=ne.update(A),Ce=A.material;Ce.visible&&M.push(A,Ne,Ce,fe,mt.z,null,Z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ue))){let Ne=ne.update(A),Ce=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),mt.copy(Ne.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(Je)),Array.isArray(Ce)){let Fe=Ne.groups;for(let ze=0,st=Fe.length;ze<st;ze++){let ct=Fe[ze],Be=Ce[ct.materialIndex];Be&&Be.visible&&M.push(A,Ne,Be,fe,mt.z,ct,Z)}}else Ce.visible&&M.push(A,Ne,Ce,fe,mt.z,null,Z)}}let Pe=A.children;for(let Ne=0,Ce=Pe.length;Ne<Ce;Ne++)Xu(Pe[Ne],Z,fe,ce)}function Wf(A,Z,fe,ce){let{opaque:ue,transmissive:Pe,transparent:Ne}=A;E.setupLightsView(fe),$e===!0&&Ie.setGlobalState(I.clippingPlanes,fe),ce&&_.viewport(B.copy(ce)),ue.length>0&&el(ue,Z,fe),Pe.length>0&&el(Pe,Z,fe),Ne.length>0&&el(Ne,Z,fe),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Xf(A,Z,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ce.id]===void 0){let Be=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ce.id]=new Ln(1,1,{generateMipmaps:!0,type:Be?hi:On,minFilter:ci,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Pe=E.state.transmissionRenderTarget[ce.id],Ne=ce.viewport||B;Pe.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let Ce=I.getRenderTarget(),Fe=I.getActiveCubeFace(),ze=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(ie),ye=I.getClearAlpha(),ye<1&&I.setClearColor(16777215,.5),I.clear(),et&&V.render(fe);let st=I.toneMapping;I.toneMapping=li;let ct=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),E.setupLightsView(ce),$e===!0&&Ie.setGlobalState(I.clippingPlanes,ce),el(A,fe,ce),O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let gt=0,Vt=Z.length;gt<Vt;gt++){let Ct=Z[gt],{object:Et,geometry:gn,material:De,group:En}=Ct;if(De.side===Yt&&Et.layers.test(ce.layers)){let ft=De.side;De.side=cn,De.needsUpdate=!0,qf(Et,fe,ce,gn,De,En),De.side=ft,De.needsUpdate=!0,Be=!0}}Be===!0&&(O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe))}I.setRenderTarget(Ce,Fe,ze),I.setClearColor(ie,ye),ct!==void 0&&(ce.viewport=ct),I.toneMapping=st}function el(A,Z,fe){let ce=Z.isScene===!0?Z.overrideMaterial:null;for(let ue=0,Pe=A.length;ue<Pe;ue++){let Ne=A[ue],{object:Ce,geometry:Fe,group:ze}=Ne,st=Ne.material;st.allowOverride===!0&&ce!==null&&(st=ce),Ce.layers.test(fe.layers)&&qf(Ce,Z,fe,Fe,st,ze)}}function qf(A,Z,fe,ce,ue,Pe){H!==null&&ue.isNodeMaterial&&H.setObject(A,ue),A.onBeforeRender(I,Z,fe,ce,ue,Pe),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ue.onBeforeRender(I,Z,fe,ce,A,Pe),ue.transparent===!0&&ue.side===Yt&&ue.forceSinglePass===!1?(ue.side=cn,ue.needsUpdate=!0,I.renderBufferDirect(fe,Z,ce,ue,A,Pe),ue.side=wi,ue.needsUpdate=!0,I.renderBufferDirect(fe,Z,ce,ue,A,Pe),ue.side=Yt):I.renderBufferDirect(fe,Z,ce,ue,A,Pe),A.onAfterRender(I,Z,fe,ce,ue,Pe)}function tl(A,Z,fe){Z.isScene!==!0&&(Z=Mt);let ce=L.get(A),ue=E.state.lights,Pe=E.state.shadowsArray,Ne=ue.state.version,Ce=me.getParameters(A,ue.state,Pe,Z,fe,E.state.lightProbeGridArray),Fe=me.getProgramCacheKey(Ce),ze=ce.programs;ce.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ce.fog=Z.fog;let st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ce.envMap=ae.get(A.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Ye),ze=new Map,ce.programs=ze);let ct=ze.get(Fe);if(ct!==void 0){if(ce.currentProgram===ct&&ce.lightsStateVersion===Ne)return jf(A,Ce),ct}else Ce.uniforms=me.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,fe,Ce),A.onBeforeCompile(Ce,I),ct=me.acquireProgram(Ce,Fe),ze.set(Fe,ct),ce.uniforms=Ce.uniforms;let Be=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ie.uniform),jf(A,Ce),ce.needsLights=K0(A),ce.lightsStateVersion=Ne,ce.needsLights&&(Be.ambientLightColor.value=ue.state.ambient,Be.lightProbe.value=ue.state.probe,Be.sunLights.value=ue.state.sun,Be.sunLightShadows.value=ue.state.sunShadow,Be.directionalLights.value=ue.state.directional,Be.directionalLightShadows.value=ue.state.directionalShadow,Be.spotLights.value=ue.state.spot,Be.spotLightShadows.value=ue.state.spotShadow,Be.rectAreaLights.value=ue.state.rectArea,Be.ltc_1.value=ue.state.rectAreaLTC1,Be.ltc_2.value=ue.state.rectAreaLTC2,Be.pointLights.value=ue.state.point,Be.pointLightShadows.value=ue.state.pointShadow,Be.hemisphereLights.value=ue.state.hemi,Be.sunShadowMatrix.value=ue.state.sunShadowMatrix,Be.sunShadowCascade.value=ue.state.sunShadowCascade,Be.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Be.spotLightMatrix.value=ue.state.spotLightMatrix,Be.spotLightMap.value=ue.state.spotLightMap,Be.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=E.state.lightProbeGridArray.length>0,ce.currentProgram=ct,ce.uniformsList=null,ct}function Yf(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=aa.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function jf(A,Z){let fe=L.get(A);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function Y0(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(Z.matrixWorld);for(let fe=0,ce=A.length;fe<ce;fe++){let ue=A[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(v))return ue}return null}function j0(A,Z,fe,ce,ue){Z.isScene!==!0&&(Z=Mt),O.resetTextureUnits();let Pe=Z.fog,Ne=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Z.environment:null,Ce=de===null?I.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:at.workingColorSpace,Fe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,ze=ae.get(ce.envMap||Ne,Fe),st=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ct=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Be=!!fe.morphAttributes.position,gt=!!fe.morphAttributes.normal,Vt=!!fe.morphAttributes.color,Ct=li;ce.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ct=I.toneMapping);let Et=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,gn=Et!==void 0?Et.length:0,De=L.get(ce),En=E.state.lights;if($e===!0&&(Ge===!0||A!==le)){let Rt=A===le&&ce.id===Y;Ie.setState(ce,A,Rt)}let ft=!1;ce.version===De.__version?(De.needsLights&&De.lightsStateVersion!==En.state.version||De.outputColorSpace!==Ce||ue.isBatchedMesh&&De.batching===!1||!ue.isBatchedMesh&&De.batching===!0||ue.isBatchedMesh&&De.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&De.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&De.instancing===!1||!ue.isInstancedMesh&&De.instancing===!0||ue.isSkinnedMesh&&De.skinning===!1||!ue.isSkinnedMesh&&De.skinning===!0||ue.isInstancedMesh&&De.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&De.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&De.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&De.instancingMorph===!1&&ue.morphTexture!==null||De.envMap!==ze||ce.fog===!0&&De.fog!==Pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ie.numPlanes||De.numIntersection!==Ie.numIntersection)||De.vertexAlphas!==st||De.vertexTangents!==ct||De.morphTargets!==Be||De.morphNormals!==gt||De.morphColors!==Vt||De.toneMapping!==Ct||De.morphTargetsCount!==gn||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,De.__version=ce.version);let qn=De.currentProgram;ft===!0&&(qn=tl(ce,Z,ue),H&&ce.isNodeMaterial&&H.onUpdateProgram(ce,qn,De));let gi=!1,ts=!1,cr=!1,bt=qn.getUniforms(),Ft=De.uniforms;if(_.useProgram(qn.program)&&(gi=!0,ts=!0,cr=!0),ce.id!==Y&&(Y=ce.id,ts=!0),De.needsLights){let Rt=Y0(E.state.lightProbeGridArray,ue);De.lightProbeGrid!==Rt&&(De.lightProbeGrid=Rt,ts=!0)}if(gi||le!==A){_.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(j,"projectionMatrix",A.projectionMatrix),bt.setValue(j,"viewMatrix",A.matrixWorldInverse);let is=bt.map.cameraPosition;is!==void 0&&is.setValue(j,it.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&bt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&bt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,ts=!0,cr=!0)}if(De.needsLights&&(En.state.sunShadowMap.length>0&&bt.setValue(j,"sunShadowMap",En.state.sunShadowMap,O),En.state.directionalShadowMap.length>0&&bt.setValue(j,"directionalShadowMap",En.state.directionalShadowMap,O),En.state.spotShadowMap.length>0&&bt.setValue(j,"spotShadowMap",En.state.spotShadowMap,O),En.state.pointShadowMap.length>0&&bt.setValue(j,"pointShadowMap",En.state.pointShadowMap,O)),ue.isSkinnedMesh){bt.setOptional(j,ue,"bindMatrix"),bt.setOptional(j,ue,"bindMatrixInverse");let Rt=ue.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue(j,"boneTexture",Rt.boneTexture,O))}ue.isBatchedMesh&&(bt.setOptional(j,ue,"batchingTexture"),bt.setValue(j,"batchingTexture",ue._matricesTexture,O),bt.setOptional(j,ue,"batchingIdTexture"),bt.setValue(j,"batchingIdTexture",ue._indirectTexture,O),bt.setOptional(j,ue,"batchingColorTexture"),ue._colorsTexture!==null&&bt.setValue(j,"batchingColorTexture",ue._colorsTexture,O));let ns=fe.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&R.update(ue,fe,qn),(ts||De.receiveShadow!==ue.receiveShadow)&&(De.receiveShadow=ue.receiveShadow,bt.setValue(j,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Z.environment!==null&&(Ft.envMapIntensity.value=Z.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=_M()),ts){if(bt.setValue(j,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&Z0(Ft,cr),Pe&&ce.fog===!0&&te.refreshFogUniforms(Ft,Pe),te.refreshMaterialUniforms(Ft,ce,W,q,E.state.transmissionRenderTarget[A.id]),De.needsLights&&De.lightProbeGrid){let Rt=De.lightProbeGrid;Ft.probesSH.value=Rt.texture,Ft.probesMin.value.copy(Rt.boundingBox.min),Ft.probesMax.value.copy(Rt.boundingBox.max),Ft.probesResolution.value.copy(Rt.resolution)}aa.upload(j,Yf(De),Ft,O)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(aa.upload(j,Yf(De),Ft,O),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&bt.setValue(j,"center",ue.center),bt.setValue(j,"modelViewMatrix",ue.modelViewMatrix),bt.setValue(j,"normalMatrix",ue.normalMatrix),bt.setValue(j,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){let Rt=ce.uniformsGroups;for(let is=0,ur=Rt.length;is<ur;is++){let Kf=Rt[is];pe.update(Kf,qn),pe.bind(Kf,qn)}}return qn}function Z0(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.sunLights.needsUpdate=Z,A.sunLightShadows.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function K0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(A,Z,fe){let ce=L.get(A);ce.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),L.get(A.texture).__webglTexture=Z,L.get(A.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){let fe=L.get(A);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,fe=0){de=A,re=Z,ee=fe;let ce=null,ue=!1,Pe=!1;if(A){let Ce=L.get(A);if(Ce.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(j.FRAMEBUFFER,Ce.__webglFramebuffer),B.copy(A.viewport),U.copy(A.scissor),k=A.scissorTest,_.viewport(B),_.scissor(U),_.setScissorTest(k),Y=-1;return}else if(Ce.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(Ce.__hasExternalTextures)O.rebindTextures(A,L.get(A.texture).__webglTexture,L.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let st=A.depthTexture;if(Ce.__boundDepthTexture!==st){if(st!==null&&L.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);let ze=L.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[Z])?ce=ze[Z][fe]:ce=ze[Z],ue=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?ce=L.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?ce=ze[fe]:ce=ze,B.copy(A.viewport),U.copy(A.scissor),k=A.scissorTest}else B.copy(Se).multiplyScalar(W).floor(),U.copy(Oe).multiplyScalar(W).floor(),k=ht;if(fe!==0&&(ce=G),_.bindFramebuffer(j.FRAMEBUFFER,ce)&&_.drawBuffers(A,ce),_.viewport(B),_.scissor(U),_.setScissorTest(k),ue){let Ce=L.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce.__webglTexture,fe)}else if(Pe){let Ce=Z;for(let Fe=0;Fe<A.textures.length;Fe++){let ze=L.get(A.textures[Fe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,fe,Ce)}}else if(A!==null&&fe!==0){let Ce=L.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ce.__webglTexture,fe)}Y=-1};function Zf(A){let Z=L.get(A);return(Z.__readFormat!==A.format||Z.__readType!==A.type)&&(Z.__readFormat=A.format,Z.__readType=A.type,Z.__formatReadable=D.textureFormatReadable(A.format),Z.__typeReadable=D.textureTypeReadable(A.type)),Z}this.readRenderTargetPixels=function(A,Z,fe,ce,ue,Pe,Ne,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){_.bindFramebuffer(j.FRAMEBUFFER,Fe);try{let ze=A.textures[Ce],st=ze.format,ct=ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ce);let Be=Zf(ze);if(Be.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ce&&fe>=0&&fe<=A.height-ue&&j.readPixels(Z,fe,ce,ue,oe.convert(st),oe.convert(ct),Pe)}finally{let ze=de!==null?L.get(de).__webglFramebuffer:null;_.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,Z,fe,ce,ue,Pe,Ne,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(Z>=0&&Z<=A.width-ce&&fe>=0&&fe<=A.height-ue){_.bindFramebuffer(j.FRAMEBUFFER,Fe);let ze=A.textures[Ce],st=ze.format,ct=ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ce);let Be=Zf(ze);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,gt),j.bufferData(j.PIXEL_PACK_BUFFER,Pe.byteLength,j.STREAM_READ),j.readPixels(Z,fe,ce,ue,oe.convert(st),oe.convert(ct),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Vt=de!==null?L.get(de).__webglFramebuffer:null;_.bindFramebuffer(j.FRAMEBUFFER,Vt);let Ct=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Pm(j,Ct,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,gt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pe),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(gt),j.deleteSync(Ct),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,fe=0){let ce=Math.pow(2,-fe),ue=Math.floor(A.image.width*ce),Pe=Math.floor(A.image.height*ce),Ne=Z!==null?Z.x:0,Ce=Z!==null?Z.y:0;O.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Ne,Ce,ue,Pe),_.unbindTexture()},this.copyTextureToTexture=function(A,Z,fe=null,ce=null,ue=0,Pe=0){let Ne,Ce,Fe,ze,st,ct,Be,gt,Vt,Ct=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(fe!==null)Ne=fe.max.x-fe.min.x,Ce=fe.max.y-fe.min.y,Fe=fe.isBox3?fe.max.z-fe.min.z:1,ze=fe.min.x,st=fe.min.y,ct=fe.isBox3?fe.min.z:0;else{let Ft=Math.pow(2,-ue);Ne=Math.floor(Ct.width*Ft),Ce=Math.floor(Ct.height*Ft),A.isDataArrayTexture?Fe=Ct.depth:A.isData3DTexture?Fe=Math.floor(Ct.depth*Ft):Fe=1,ze=0,st=0,ct=0}ce!==null?(Be=ce.x,gt=ce.y,Vt=ce.z):(Be=0,gt=0,Vt=0);let Et=oe.convert(Z.format),gn=oe.convert(Z.type),De;Z.isData3DTexture?(O.setTexture3D(Z,0),De=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),De=j.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),De=j.TEXTURE_2D),_.activeTexture(j.TEXTURE0),_.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),_.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),_.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);let En=_.getParameter(j.UNPACK_ROW_LENGTH),ft=_.getParameter(j.UNPACK_IMAGE_HEIGHT),qn=_.getParameter(j.UNPACK_SKIP_PIXELS),gi=_.getParameter(j.UNPACK_SKIP_ROWS),ts=_.getParameter(j.UNPACK_SKIP_IMAGES);_.pixelStorei(j.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(j.UNPACK_SKIP_ROWS,st),_.pixelStorei(j.UNPACK_SKIP_IMAGES,ct);let cr=A.isDataArrayTexture||A.isData3DTexture,bt=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){let Ft=L.get(A),ns=L.get(Z),Rt=L.get(Ft.__renderTarget),is=L.get(ns.__renderTarget);_.bindFramebuffer(j.READ_FRAMEBUFFER,Rt.__webglFramebuffer),_.bindFramebuffer(j.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let ur=0;ur<Fe;ur++)cr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L.get(A).__webglTexture,ue,ct+ur),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L.get(Z).__webglTexture,Pe,Vt+ur)),j.blitFramebuffer(ze,st,Ne,Ce,Be,gt,Ne,Ce,j.DEPTH_BUFFER_BIT,j.NEAREST);_.bindFramebuffer(j.READ_FRAMEBUFFER,null),_.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ue!==0||A.isRenderTargetTexture||L.has(A)){let Ft=L.get(A),ns=L.get(Z);_.bindFramebuffer(j.READ_FRAMEBUFFER,z),_.bindFramebuffer(j.DRAW_FRAMEBUFFER,X);for(let Rt=0;Rt<Fe;Rt++)cr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ft.__webglTexture,ue,ct+Rt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ft.__webglTexture,ue),bt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ns.__webglTexture,Pe,Vt+Rt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ns.__webglTexture,Pe),ue!==0?j.blitFramebuffer(ze,st,Ne,Ce,Be,gt,Ne,Ce,j.COLOR_BUFFER_BIT,j.NEAREST):bt?j.copyTexSubImage3D(De,Pe,Be,gt,Vt+Rt,ze,st,Ne,Ce):j.copyTexSubImage2D(De,Pe,Be,gt,ze,st,Ne,Ce);_.bindFramebuffer(j.READ_FRAMEBUFFER,null),_.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(De,Pe,Be,gt,Vt,Ne,Ce,Fe,Et,gn,Ct.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(De,Pe,Be,gt,Vt,Ne,Ce,Fe,Et,Ct.data):j.texSubImage3D(De,Pe,Be,gt,Vt,Ne,Ce,Fe,Et,gn,Ct):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Pe,Be,gt,Ne,Ce,Et,gn,Ct.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Pe,Be,gt,Ct.width,Ct.height,Et,Ct.data):j.texSubImage2D(j.TEXTURE_2D,Pe,Be,gt,Ne,Ce,Et,gn,Ct);_.pixelStorei(j.UNPACK_ROW_LENGTH,En),_.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(j.UNPACK_SKIP_PIXELS,qn),_.pixelStorei(j.UNPACK_SKIP_ROWS,gi),_.pixelStorei(j.UNPACK_SKIP_IMAGES,ts),Pe===0&&Z.generateMipmaps&&j.generateMipmap(De),_.unbindTexture()},this.initRenderTarget=function(A){L.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),_.unbindTexture()},this.resetState=function(){re=0,ee=0,de=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};function Pd(i,e){if(e===rd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ia||e===No){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ia)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function pg(i){let e=new Map,t=new Map,n=i.clone();return mg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mg(i.children[n],e.children[n],t)}var cu=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new uu(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uu(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Zi.extractUrlBase(e);a=Zi.resolveURL(l,this.path)}else a=Zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vg){try{a[ot.KHR_BINARY_GLTF]=new Kd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new rf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:a[h]=new Ud;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[h]=new Jd(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[h]=new Qd;break;case ot.KHR_MESH_QUANTIZATION:a[h]=new ef;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ht(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nd=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],wn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ys(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ys(u),l.distance=h;break;case"spot":l=new yo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ud=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return xt}extendParams(e,t,n){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(r,r)}return Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},$d=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],wn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Yd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},jd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Zd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let p of h){let y=new qe,m=new P,g=new nn,x=new P(1,1,1),b=new Vs(p.geometry,p.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,y.compose(m,g,x));let v=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];b.instanceColor=new $i(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let C=b.geometry;v=new nt,v.name=C.name;for(let S in C.attributes)v.setAttribute(S,C.attributes[S]);for(let S in C.morphAttributes)v.morphAttributes[S]=C.morphAttributes[S];C.index!==null&&v.setIndex(C.index),v.morphTargetsRelative=C.morphTargetsRelative;for(let S of C.groups)v.addGroup(S.start,S.count,S.materialIndex);C.boundingBox!==null&&(v.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(v.boundingSphere=C.boundingSphere.clone()),v.drawRange.start=C.drawRange.start,v.drawRange.count=C.drawRange.count,v.userData=Object.assign({},C.userData),b.geometry=v}let E=c[M];v.setAttribute(M,new $i(E.array,E.itemSize,E.normalized))}St.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},vg="glTF",zo=12,gg={JSON:1313821514,BIN:5130562},Kd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zo,r=new DataView(e,zo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===gg.JSON){let l=new Uint8Array(e,zo+a,o);this.content=n.decode(l)}else if(c===gg.BIN){let l=zo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=nf[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=nf[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=ua[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let y=f.attributes[p],m=c[p];m!==void 0&&(y.normalized=m)}h(f)},o,l,wn,d)})})}},Qd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ef=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},hu=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*l,y=p-l,m=-2*f+3*d,g=f-d,x=1-m,b=g-d+h;for(let v=0;v!==o;v++){let M=a[y+v+o],E=a[y+v+c]*u,C=a[p+v+o],S=a[p+v]*u;r[v]=x*M+b*E+m*C+g*S}return r}},xM=new nn,tf=class extends hu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return xM.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ua={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_g={9728:Bt,9729:kt,9984:yc,9985:ea,9986:Ks,9987:ci},yg={33071:jn,33648:Nr,10497:us},Id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},Ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),i.DefaultMaterial}function er(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function MM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dd(t.attributes):e=i.indices+":"+Dd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Dd(i.targets[n]);return e}function Dd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wM=new qe,rf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new mo(this.options.manager):this.textureLoader=new vo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return er(r,o,s),Ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Id[s.type],o=ua[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Xt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Id[s.type],l=ua[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,m;if(f&&f!==h){let g=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(x);b||(y=new l(o,g*f,s.count*f/u),b=new hs(y,f/u),t.cache.add(x,b)),m=new xn(b,c,d%f/u,p)}else o===null?y=new l(s.count*c):y=new l(o,d,s.count*c),m=new Xt(y,c,p);if(s.sparse!==void 0){let g=Id.SCALAR,x=ua[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,M=new x(a[1],b,s.sparse.count*g),E=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,S=M.length;C<S;C++){let w=M[C];if(m.setX(w,E[C*c]),c>=2&&m.setY(w,E[C*c+1]),c>=3&&m.setZ(w,E[C*c+2]),c>=4&&m.setW(w,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=_g[d.magFilter]||kt,u.minFilter=_g[d.minFilter]||ci,u.wrapS=yg[d.wrapS]||us,u.wrapT=yg[d.wrapT]||us,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==kt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(y){let m=new qt(y);m.needsUpdate=!0,d(m)}),t.load(Zi.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Ci(h,a),h.userData.mimeType=a.mimeType||TM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new $r,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ln,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Dn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],wn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yt);let u=r.alphaMode||Ld.OPAQUE;if(u===Ld.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ld.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==xt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xt){let h=r.emissiveFactor;o.emissive=new ke().setRGB(h[0],h[1],h[2],wn)}return r.emissiveTexture!==void 0&&a!==xt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&er(s,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return xg(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=EM(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xg(new nt,l,t),l.mode===Kn.TRIANGLE_STRIP?d=d.then(f=>Pd(f,No)):l.mode===Kn.TRIANGLE_FAN&&(d=d.then(f=>Pd(f,ia))),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?bM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let y=u[f],m=a[f],g,x=l[f];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");b&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&v?new Wa(y,x):new Ze(y,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Kn.LINES)g=new Wi(y,x);else if(m.mode===Kn.LINE_STRIP)g=new rn(y,x);else if(m.mode===Kn.LINE_LOOP)g=new qa(y,x);else if(m.mode===Kn.POINTS)g=new Ya(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&MM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ci(g,r),m.extensions&&er(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&er(s,h[0],r),h[0];let d=new Nt;r.extensions&&er(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(zt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xa(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],y=f.target,m=y.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],y=h[3],m=h[4],g=[];for(let b=0,v=d.length;b<v;b++){let M=d[b],E=f[b],C=p[b],S=y[b],w=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let I=n._createAnimationTracks(M,E,C,S,w);if(I)for(let F=0;F<I.length;F++)g.push(I[F])}let x=new po(r,void 0,g);return Ci(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wM)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new P().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Hr:l.length>1?u=new Nt:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ci(u,r),r.extensions&&er(n,u,r),r.matrix!==void 0){let h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Nt;n.name&&(r.name=s.createUniqueName(n.name)),Ci(r,n),n.extensions&&er(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(pg(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof vn||d instanceof qt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ts[r.path]===Ts.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(Ts[r.path]){case Ts.weights:u=qi;break;case Ts.rotation:u=Yi;break;case Ts.translation:case Ts.scale:u=_s;break;default:switch(n.itemSize){case 1:u=qi;break;case 2:case 3:default:u=_s;break}break}let h=s.interpolation!==void 0?vM[s.interpolation]:ks,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let y=new u(c[f]+"."+Ts[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Yi?tf:hu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function AM(i,e,t){let n=e.attributes,s=new Ot;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let u=sf(ua[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=sf(ua[d.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function xg(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=nf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return at.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Ci(i,e),AM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?SM(i,e.targets,t):i})}var bg={type:"change"},of={type:"start"},Mg={type:"end"},du=new bi,Sg=new on,RM=Math.cos(70*zt.DEG2RAD),Kt=new P,Fn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},af=1e-6,ha=class extends Eo{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new nn,this._lastTargetPosition=new P,this._quat=new nn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kr,this._sphericalDelta=new Kr,this._scale=1,this._panOffset=new P,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new P,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PM.bind(this),this._onPointerDown=CM.bind(this),this._onPointerUp=IM.bind(this),this._onContextMenu=BM.bind(this),this._onMouseWheel=NM.bind(this),this._onKeyDown=UM.bind(this),this._onTouchStart=OM.bind(this),this._onTouchMove=FM.bind(this),this._onMouseDown=LM.bind(this),this._onMouseMove=DM.bind(this),this._interceptControlDown=kM.bind(this),this._interceptControlUp=zM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=vt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bg),this.update(),this.state=vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fn:n>Math.PI&&(n-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Kt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<RM?this.object.lookAt(this.target):(Sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(Sg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>af||8*(1-this._lastQuaternion.dot(this.object.quaternion))>af||this._lastTargetPosition.distanceToSquared(this.target)>af?(this.dispatchEvent(bg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function CM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function PM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function IM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mg),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function LM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case bs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case bs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(of)}function DM(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function NM(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mg))}function UM(i){this.enabled!==!1&&this._handleKeyDown(i)}function OM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(of)}function FM(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function BM(i){this.enabled!==!1&&i.preventDefault()}function kM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fu=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ps;e.deleteAttribute("uv");let t=new Dn({side:cn}),n=new Dn,s=new Ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vs(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ze(e,da(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ze(e,da(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Ze(e,da(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ze(e,da(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Ze(e,da(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ze(e,da(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function da(i){return new ho({color:0,emissive:16777215,emissiveIntensity:i})}var It={primary:"#f4f6f7",secondary:"#b9c2c8",muted:"#7c878f",track:"rgba(255,255,255,.13)",grid:"rgba(255,255,255,.07)"},di=["#3987e5","#d95926","#199e70","#c98500"],pu={good:"#0ca30c",warning:"#fab219",serious:"#ec835a",critical:"#d03b3b"},fa='Bahnschrift, "DIN Alternate", "Segoe UI", Arial, sans-serif',tr=180/Math.PI;function Bn(i,e=i.clientWidth,t=i.clientHeight){let n=Math.min(devicePixelRatio,2);(i.width!==Math.round(e*n)||i.height!==Math.round(t*n))&&(i.width=Math.round(e*n),i.height=Math.round(t*n));let s=i.getContext("2d");return s.setTransform(n,0,0,n,0,0),s.clearRect(0,0,e,t),s}function mu(i){let[e,t,n,s]=i;return{roll:Math.atan2(2*(e*t+n*s),1-2*(t*t+n*n))*tr,pitch:Math.asin(Math.max(-1,Math.min(1,2*(e*n-s*t))))*tr,yaw:Math.atan2(2*(e*s+t*n),1-2*(n*n+s*s))*tr,tilt:Math.acos(Math.max(-1,Math.min(1,1-2*(t*t+n*n))))*tr}}function Eg(i,e,t,n,{label:s,value:r,unit:a,max:o,digits:c=0,alert:l=!1}){let u=Math.PI*.75,h=Math.PI*1.5,d=Number.isFinite(r)?Math.max(0,Math.min(1,Math.abs(r)/o)):0;i.lineCap="round",i.lineWidth=3,i.strokeStyle=It.track,i.beginPath(),i.arc(e,t,n,u,u+h),i.stroke(),d>0&&(i.strokeStyle=l?pu.warning:It.primary,i.beginPath(),i.arc(e,t,n,u,u+h*d),i.stroke()),i.textAlign="center",i.fillStyle=It.primary,i.font=`${Math.round(n*.52)}px ${fa}`,i.fillText(Number.isFinite(r)?r.toFixed(c):"\u2014",e,t+n*.12),i.fillStyle=It.muted,i.font=`${Math.max(8,Math.round(n*.2))}px ${fa}`,i.fillText(a,e,t+n*.45),i.fillStyle=It.secondary,i.font=`${Math.max(9,Math.round(n*.22))}px ${fa}`,i.fillText(s,e,t+n+14)}function Tg(i,{frame:e,time:t,end:n,milestones:s,maxima:r,width:a,height:o}){a??=i.clientWidth,o??=i.clientHeight;let c=Bn(i,a,o),l=c.createLinearGradient(0,0,0,o);l.addColorStop(0,"#05070a"),l.addColorStop(1,"#000"),c.fillStyle=l,c.fillRect(0,0,a,o);let u=Math.min(34,o*.3),h=o*.42,d=u*2.6,f=e,y=[{label:"SPEED",value:f?Math.hypot(...f.velocity):NaN,unit:"m/s",max:r.speed,digits:1},{label:"ALTITUDE",value:f?.position[2],unit:"m",max:r.altitude,digits:1}],m=[{label:"THRUST",value:f?.thrust_n,unit:"N",max:r.thrust,digits:1},{label:"LIPO",value:f?.battery?f.battery.soc*100:NaN,unit:"% SOC",max:100,digits:0,alert:!!f?.battery?.current_limited}],g=a<640,x=g?[y[1]]:y,b=g?[m[0]]:m;x.forEach((E,C)=>Eg(c,16+u+C*d,h,u,E)),b.forEach((E,C)=>Eg(c,a-16-u-(b.length-1-C)*d,h,u,E));let v=16+x.length*d+18,M=a-16-b.length*d-18;M-v>80&&HM(c,v,M,o*.46,t,n,s)}function HM(i,e,t,n,s,r,a){let o=Math.max(r,.001),c=h=>e+Math.max(0,Math.min(1,h/o))*(t-e),l=c(s);i.lineCap="butt",i.lineWidth=2,i.strokeStyle=It.track,i.beginPath(),i.moveTo(e,n),i.lineTo(t,n),i.stroke(),i.strokeStyle=It.primary,i.beginPath(),i.moveTo(e,n),i.lineTo(l,n),i.stroke();let u=[-1e9,-1e9];a.forEach((h,d)=>{let f=c(h.t),p=h.t<=s+1e-6,y=d%2;if(i.fillStyle="#000",i.strokeStyle=h.tone?pu[h.tone]:p?It.primary:It.muted,i.lineWidth=2,i.beginPath(),i.arc(f,n,5,0,Math.PI*2),i.fill(),i.stroke(),p&&(i.fillStyle=i.strokeStyle,i.beginPath(),i.arc(f,n,2.5,0,Math.PI*2),i.fill()),f-u[y]<70)return;u[y]=f,i.textAlign="center",i.font=`10px ${fa}`,i.fillStyle=p?It.primary:It.muted;let m=y?n+22:n-14;i.fillText(h.label,f,m),i.font=`9px ${fa}`,i.fillStyle=It.muted,i.fillText(`T+${h.t.toFixed(1)}`,f,y?m+12:m-12)}),i.fillStyle=It.primary,i.fillRect(l-1,n-7,2,14)}function wg(i,e){let t=i.clientWidth,n=i.clientHeight;if(Math.min(t,n)<40)return;let s=Bn(i,t,n),r=t/2,a=n/2,o=Math.min(t,n)/2-12,c=o/35;if(s.save(),s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.clip(),e){s.translate(r,a),s.rotate(-e.roll/tr),s.translate(0,e.pitch*c),s.fillStyle="#0f2233",s.fillRect(-2*o,-4*o,4*o,4*o),s.fillStyle="#21180f",s.fillRect(-2*o,0,4*o,4*o),s.strokeStyle=It.primary,s.lineWidth=1.5,s.beginPath(),s.moveTo(-2*o,0),s.lineTo(2*o,0),s.stroke(),s.lineWidth=1,s.font=`9px ${fa}`,s.fillStyle=It.secondary,s.textAlign="left";for(let l=-80;l<=80;l+=10){if(!l)continue;let u=-l*c,h=l%20?o*.13:o*.24;s.strokeStyle="rgba(244,246,247,.55)",s.beginPath(),s.moveTo(-h,u),s.lineTo(h,u),s.stroke(),l%20||s.fillText(String(Math.abs(l)),h+4,u+3)}}else s.fillStyle="#0b0f13",s.fillRect(0,0,t,n);s.restore(),s.strokeStyle=It.track,s.lineWidth=1,s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.stroke(),s.strokeStyle=It.muted;for(let l of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){let u=(l-90)/tr,h=o+(l%30?3:0);s.beginPath(),s.moveTo(r+Math.cos(u)*h,a+Math.sin(u)*h),s.lineTo(r+Math.cos(u)*(o+8),a+Math.sin(u)*(o+8)),s.stroke()}if(e){let l=(-e.roll-90)/tr;s.fillStyle=It.primary,s.beginPath(),s.moveTo(r+Math.cos(l)*(o-1),a+Math.sin(l)*(o-1)),s.lineTo(r+Math.cos(l+.07)*(o-11),a+Math.sin(l+.07)*(o-11)),s.lineTo(r+Math.cos(l-.07)*(o-11),a+Math.sin(l-.07)*(o-11)),s.fill()}s.strokeStyle=It.primary,s.lineWidth=2.5,s.beginPath(),s.moveTo(r-o*.45,a),s.lineTo(r-o*.15,a),s.lineTo(r-o*.07,a+7),s.moveTo(r+o*.45,a),s.lineTo(r+o*.15,a),s.lineTo(r+o*.07,a+7),s.stroke(),s.fillStyle=It.primary,s.beginPath(),s.arc(r,a,2.5,0,Math.PI*2),s.fill()}var Jt={takeoff:"Takeoff",hover:"Hover",flypass:"Fly-through",descent:"Descent",land:"Landing"},Qt={takeoff:"#48dba2",hover:"#e5ad48",flypass:"#6ab7ff",descent:"#cf94ed",land:"#f4f6f7"},Ho=i=>({takeoff:"CLIMB",descent:"DESCENT",land:"TOUCHDOWN",flypass:"PASS"})[i.type]??"APPROACH",ws=(i,e)=>`${e+1} \xB7 ${i.name||Jt[i.type]||i.type}`,Ag=i=>i.type==="hover"?`Hold ${i.hold_s} s \xB7 approach ${i.speed_m_s} m/s`:`${Ho(i).toLowerCase()} ${i.speed_m_s} m/s`,Te=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function lf(i){if(!Array.isArray(i)||i.length>12)throw new Error("A plan supports up to 12 waypoints.");return i.map(e=>{if(!e||!Object.hasOwn(Jt,e.type)||!Array.isArray(e.position)||e.position.length!==3||!e.position.every((n,s)=>Number.isFinite(n)&&n>=(s===2?e.type==="land"?0:1:-100)&&n<=100))throw new Error("Invalid waypoint type or XYZ position.");let t={type:e.type,name:e.name??"",position:[...e.position],hold_s:e.hold_s??2,radius_m:e.radius_m??1,speed_m_s:e.speed_m_s??(e.type==="land"?.15:3)};if(typeof t.name!="string"||t.name.length>40)throw new Error("Waypoint names are limited to 40 characters.");for(let[n,s,r]of[["hold_s",.1,60],["radius_m",.1,10],["speed_m_s",.1,e.type==="land"?.5:15]])if(!Number.isFinite(t[n])||t[n]<s||t[n]>r)throw new Error(`Invalid waypoint ${n}.`);if(e.corridor_m!=null){if(!Number.isFinite(e.corridor_m)||e.corridor_m<.2||e.corridor_m>25)throw new Error("Corridor half-width must be 0.2\u201325 m.");t.corridor_m=e.corridor_m}if(e.type==="land"){if(e.pad!=null){if(!Number.isInteger(e.pad)||e.pad<0||e.pad>3)throw new Error("Invalid landing pad.");t.pad=e.pad}if(e.approach_speed_m_s!=null){if(!Number.isFinite(e.approach_speed_m_s)||e.approach_speed_m_s<.3||e.approach_speed_m_s>10)throw new Error("Invalid landing approach speed.");t.approach_speed_m_s=e.approach_speed_m_s}}return t})}function Rg(i){let e=JSON.parse(i);if(e.version===2){if(e.format!=="edf-flight-plan"||!e.mission||typeof e.mission!="object"||Array.isArray(e.mission))throw new Error("Invalid version 2 flight plan.");return{mission:e.mission}}if(e.version!==1||!e.initial)throw new Error("Expected a version 1 flight plan.");for(let[t,n,s]of[["position",-100,100],["velocity",-20,20],["attitude_deg",-180,180],["angular_rate_deg_s",-720,720]])if(!Array.isArray(e.initial[t])||e.initial[t].length!==3||!e.initial[t].every(r=>Number.isFinite(r)&&r>=n&&r<=s))throw new Error(`Invalid initial ${t}.`);if(e.initial.position[2]<.34)throw new Error("Start altitude must be at least 0.34 m.");return{initial:e.initial,waypoints:lf(e.waypoints)}}var VM=["name","duration_s","position","velocity","attitude_deg","angular_rate_deg_s","initial_motor_fraction","pads","waypoints"],Vo=i=>Object.fromEntries(VM.filter(e=>i?.[e]!==void 0).map(e=>[e,structuredClone(i[e])])),Cg=i=>JSON.stringify({format:"edf-flight-plan",version:2,scope:"route",mission:Vo(i)},null,2);function nr(i,e,t=[0,0,0],{convex:n=!1}={}){let s=e.find(o=>o.type==="land"),r=e.filter(o=>o.type!=="land"),a=[i,...r.map(o=>o.position),s?.position??t];return a.slice(1).map((o,c)=>{let l=a[Math.max(0,c-1)],u=a[c],h=a[c+1],d=a[Math.min(a.length-1,c+2)],f=["takeoff","descent"].includes(r[c]?.type)||u.every((p,y)=>p===h[y])||a.length===2;return Array.from({length:49},(p,y)=>{let m=y/48;return[0,1,2].map(g=>{let x=f?u[g]+(h[g]-u[g])*m:.5*(2*u[g]+(-l[g]+h[g])*m+(2*l[g]-5*u[g]+4*h[g]-d[g])*m*m+(-l[g]+3*u[g]-3*h[g]+d[g])*m*m*m);return n&&g===2?Math.max(x,Math.min(u[2],h[2])):x})})})}var gu={hop:"HOP",land:"LANDING",hover:"HOVER"};function _u(i){let e=[],t=[],n=0,s=null;for(let r of i){for(let a of r)s&&(n+=Math.hypot(a[0]-s[0],a[1]-s[1],a[2]-s[2])),(!s||a!==r[0])&&e.push([n,a[2]]),s=a;r.length&&t.push([n,r.at(-1)[2]])}return{points:e,ends:t,distance:n}}function Pg(i){let e=i?.mission,t=e?.waypoints?.[e.waypoint_index];if(!i?.guidance||e?.ready_to_land||!["hover","takeoff","descent"].includes(t?.type)||!i.position?.every(Number.isFinite)||!i.velocity?.every(Number.isFinite))return"";let n=Math.hypot(...i.position.map((a,o)=>a-t.position[o])),s=Math.hypot(...i.velocity);return`${n>t.radius_m?"Outside capture radius":s>.4?t.type==="hover"&&e.hold_elapsed_s>0?"Hold paused (speed)":"Slowing for capture":t.type==="hover"?"Hold counting":"Capture conditions met"} \xB7 distance ${n.toFixed(2)} / ${t.radius_m.toFixed(2)} m \xB7 speed ${s.toFixed(2)} / 0.40 m/s`}var Ig=new Ot,yu=new P,pa=class extends xo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new We(e,3)),this.setAttribute("uv",new We(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new xs(t,6,1);return this.setAttribute("instanceStart",new xn(n,3,0)),this.setAttribute("instanceEnd",new xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new xs(t,6,1);return this.setAttribute("instanceColorStart",new xn(n,3,0)),this.setAttribute("instanceColorEnd",new xn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new uo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ig.setFromBufferAttribute(t),this.boundingBox.union(Ig))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yu)),yu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ve},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Cn.line={uniforms:Oo.merge([we.common,we.fog,we.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var As=class extends Rn{constructor(e){super({type:"LineMaterial",uniforms:Oo.clone(Cn.line.uniforms),vertexShader:Cn.line.vertexShader,fragmentShader:Cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var cf=new ut,Lg=new P,Dg=new P,un=new ut,hn=new ut,Pi=new ut,uf=new P,hf=new qe,dn=new So,Ng=new P,xu=new Ot,vu=new sn,Ii=new ut,Li,ir;function Ug(i,e,t){return Ii.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Ii.multiplyScalar(1/Ii.w),Ii.x=ir/t.width,Ii.y=ir/t.height,Ii.applyMatrix4(i.projectionMatrixInverse),Ii.multiplyScalar(1/Ii.w),Math.abs(Math.max(Ii.x,Ii.y))}function GM(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){dn.start.fromBufferAttribute(s,o),dn.end.fromBufferAttribute(r,o),dn.applyMatrix4(t);let l=new P,u=new P;Li.distanceSqToSegment(dn.start,dn.end,u,l),u.distanceTo(l)<ir*.5&&e.push({point:u,pointOnLine:l,distance:Li.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function $M(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),h=-e.near;Li.at(1,Pi),Pi.w=1,Pi.applyMatrix4(e.matrixWorldInverse),Pi.applyMatrix4(n),Pi.multiplyScalar(1/Pi.w),Pi.x*=r.x/2,Pi.y*=r.y/2,Pi.z=0,uf.copy(Pi),hf.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,f=u;d<f;d++){if(un.fromBufferAttribute(c,d),hn.fromBufferAttribute(l,d),un.w=1,hn.w=1,un.applyMatrix4(hf),hn.applyMatrix4(hf),un.z>h&&hn.z>h)continue;if(un.z>h){let b=un.z-hn.z,v=(un.z-h)/b;un.lerp(hn,v)}else if(hn.z>h){let b=hn.z-un.z,v=(hn.z-h)/b;hn.lerp(un,v)}un.applyMatrix4(n),hn.applyMatrix4(n),un.multiplyScalar(1/un.w),hn.multiplyScalar(1/hn.w),un.x*=r.x/2,un.y*=r.y/2,hn.x*=r.x/2,hn.y*=r.y/2,dn.start.copy(un),dn.start.z=0,dn.end.copy(hn),dn.end.z=0;let y=dn.closestPointToPointParameter(uf,!0);dn.at(y,Ng);let m=zt.lerp(un.z,hn.z,y),g=m>=-1&&m<=1,x=uf.distanceTo(Ng)<ir*.5;if(g&&x){dn.start.fromBufferAttribute(c,d),dn.end.fromBufferAttribute(l,d),dn.start.applyMatrix4(a),dn.end.applyMatrix4(a);let b=new P,v=new P;Li.distanceSqToSegment(dn.start,dn.end,v,b),t.push({point:v,pointOnLine:b,distance:Li.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var bu=class extends Ze{constructor(e=new pa,t=new As({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)Lg.fromBufferAttribute(t,a),Dg.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Lg.distanceTo(Dg);let r=new xs(s,2,1);return e.setAttribute("instanceDistanceStart",new xn(r,1,0)),e.setAttribute("instanceDistanceEnd",new xn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Li=e.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;ir=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),vu.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=ir*.5;else{let h=Math.max(s.near,vu.distanceToPoint(Li.origin));l=Ug(s,h,c.resolution)}if(vu.radius+=l,Li.intersectsSphere(vu)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),xu.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=ir*.5;else{let h=Math.max(s.near,xu.distanceToPoint(Li.origin));u=Ug(s,h,c.resolution)}xu.expandByScalar(u),Li.intersectsBox(xu)!==!1&&(n?GM(this,t):$M(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(cf),this.material.uniforms.resolution.value.set(cf.z,cf.w))}};var ma=class extends pa{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Su=class extends bu{constructor(e=new ma,t=new As({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function WM(i){let e=0;for(let t of i)for(let n=1;n<t.length;n++)e+=Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1],t[n][2]-t[n-1][2]);return e}function XM(i,e){let t=[];if(i.length<2||!(e>0))return t;let n=e/2,s=0;for(let r=1;r<i.length;r++){let a=i[r-1],o=i[r],c=[o[0]-a[0],o[1]-a[1],o[2]-a[2]],l=Math.hypot(...c);if(!(l<1e-9)){for(;n<=s+l;){let u=(n-s)/l;t.push({point:a.map((h,d)=>h+c[d]*u),tangent:c.map(h=>h/l)}),n+=e}s+=l}}return t}var qM=(()=>{let i=new qr;return i.moveTo(0,.5),i.lineTo(.42,-.35),i.lineTo(0,-.1),i.lineTo(-.42,-.35),i.closePath(),i})();function Mu({width:i=3,opacity:e=1,dashed:t=!1,chevrons:n=!0,ground:s=!1,depthTest:r=!0}={}){let a=new Nt,o=new Set,c=new ve(1,1),l=new P(0,0,1),u=new P,h=new P,d=new qe;function f(){a.traverse(g=>{g!==a&&(g.geometry?.dispose(),g.material?.dispose())}),a.clear(),o.clear()}function p(g,x){let b=new As({linewidth:g,vertexColors:!0,transparent:x<1,opacity:x,dashed:t,dashSize:.6,gapSize:.35,depthTest:r,worldUnits:!1});return b.resolution.copy(c),o.add(b),b}function y(g,x,{highlight:b=-1,scale:v=null}={}){f();let M=g.map((w,I)=>({leg:w,i:I})).filter(({leg:w})=>w.length>1);if(!M.length)return;let E=WM(g),C=v??zt.clamp(E/70,.18,1.1),S=zt.clamp(E/28,1.2,9)*Math.max(1,C/.5);for(let{leg:w,i:I}of M){let[F,H]=x[I].map(de=>new ke(de)),G=w.length,z=[],X=[];w.forEach((de,Y)=>{z.push(...de);let le=F.clone().lerp(H,Y/(G-1));X.push(le.r,le.g,le.b)});let re=new ma;re.setPositions(z),re.setColors(X);let ee=new Su(re,p(I===b?i*1.7:i,I===b||b<0?e:e*.7));if(t&&ee.computeLineDistances(),ee.renderOrder=2,a.add(ee),s&&w.some(de=>de[2]>.25)){let de=new rn(new nt().setFromPoints(w.map(Y=>new P(Y[0],Y[1],.03))),new gs({color:H,dashSize:.35,gapSize:.3,transparent:!0,opacity:.35,depthWrite:!1}));de.computeLineDistances(),a.add(de)}if(n)for(let{point:de,tangent:Y}of XM(w,S)){u.set(...Y),h.crossVectors(u,l),h.lengthSq()<1e-6&&h.set(1,0,0),h.normalize();let le=new P().crossVectors(h,u).normalize();d.makeBasis(h,u,le);let B=new Ze(new oo(qM),new xt({color:H.clone().lerp(new ke("#ffffff"),.35),side:Yt,transparent:!0,opacity:Math.min(1,e+.1),depthTest:r}));B.quaternion.setFromRotationMatrix(d),B.position.set(...de),B.scale.setScalar(C*(I===b?1.35:1)),B.renderOrder=3,a.add(B)}}}function m(g,x){c.set(g,x),o.forEach(b=>b.resolution.set(g,x))}return{group:a,set:y,setResolution:m,dispose:f}}function YM(i,e,t){let n=t.clone().addScaledVector(i,-t.dot(i));return n.lengthSq()<1e-6?null:new on().setFromNormalAndCoplanarPoint(n.normalize(),e)}function Eu(i,e){if(i==="start")return[!0,!0,!0];if(typeof i=="string")return[!0,!0,!1];let t=e[i];return!t||t.type==="land"?[!1,!1,!1]:["takeoff","descent"].includes(t.type)?[!1,!1,!0]:[!0,!0,!0]}function jM(i,e){return typeof i!="number"||!e[i]?-1:e[i].type==="land"?e.filter(n=>n.type!=="land").length:e.slice(0,i).filter(n=>n.type!=="land").length}function df(i){return Object.fromEntries(Object.keys(Jt).map(e=>[e,i.length<12&&!(["takeoff","land"].includes(e)&&i.some(t=>t.type===e))]))}var Rs=(i,e)=>e>0?Math.round(i/e)*e:i,ff="#48dba2",Tu="#ffffff",Go=()=>matchMedia("(pointer: coarse)").matches;function Og(i,{read:e,move:t,select:n,context:s,add:r,remove:a}){i.innerHTML=`<div class="scene-viewport">
      <canvas tabindex="0" aria-label="3D waypoint editor. Select a marker and drag it, or use the arrow keys; Page Up and Page Down change altitude. Right-click or long-press for step details."></canvas>
      <div class="scene-top">
        <div class="scene-label">3D ROUTE <span>WORLD XYZ \xB7 Z UP \xB7 METRES</span></div>
        <div class="scene-views" role="group" aria-label="Camera"><button type="button" data-view="fit" title="Frame the whole route">Fit</button><button type="button" data-view="iso" title="Oblique view">3D</button><button type="button" data-view="top" title="Look down the Z axis">Top</button><button type="button" data-view="side" title="Look along +Y">Side</button><button type="button" class="expand-route" title="Full screen" aria-label="Full screen">\u26F6</button></div>
      </div>
      <div class="scene-dock" role="toolbar" aria-label="Route editing">
        <button type="button" data-mode="select" aria-pressed="true" title="Select and drag markers">Select</button>
        <button type="button" data-mode="add" aria-pressed="false" aria-haspopup="true" title="Place a new step in the scene">\uFF0B Add</button>
        <span class="dock-divider" aria-hidden="true"></span>
        <button type="button" data-toggle="snap" aria-pressed="true" title="Round moves to 0.5 m">Snap 0.5</button>
        <button type="button" data-toggle="labels" aria-pressed="false" title="Show every step name (otherwise only the selected step)">Names</button>
        <button type="button" data-toggle="corridor" aria-pressed="true" title="Show the convex route corridor">Corridor</button>
        <button type="button" data-toggle="legend" aria-pressed="false" title="Show the colour key">Key</button>
      </div>
      <div class="scene-add-types" role="group" aria-label="Step type to place" hidden>${Object.entries(Jt).map(([N,V])=>`<button type="button" data-place="${N}" style="--step-color:${Qt[N]}"><i></i>${V}</button>`).join("")}</div>
      <div class="scene-legend" hidden><span><i class="legend-start"></i>Start</span>${Object.entries(Jt).map(([N,V])=>`<span><i style="background:${Qt[N]}"></i>${V}</span>`).join("")}<span><i class="legend-pad"></i>Pad</span><span><i class="legend-route"></i>Route \xB7 direction</span><span><i class="legend-corridor"></i>Corridor</span></div>
      <div class="scene-toast" role="status" aria-live="polite"></div>
      <div class="waypoint-context" role="dialog" aria-label="Waypoint actions" hidden></div>
    </div>
    <section class="scene-inspector" aria-label="Selected marker" aria-live="polite"></section>
    <p class="scene-hint"></p>`;let o=i.querySelector(".scene-viewport"),c=i.querySelector("canvas"),l=i.querySelector(".waypoint-context"),u=i.querySelector(".scene-inspector"),h=i.querySelector(".scene-hint"),d=i.querySelector(".scene-toast"),f=i.querySelector(".scene-add-types"),p=i.querySelector(".scene-legend"),y={mode:"select",placeType:null,snap:!0,labels:!1,corridor:!0,hover:null},m=new la({canvas:c,antialias:!0});m.setPixelRatio(Math.min(devicePixelRatio,2)),m.setClearColor("#060b11");let g=new Gi,x=new Ut(45,1,.05,1500);x.up.set(0,0,1),x.position.set(18,-24,20);let b=new ha(x,c);b.target.set(0,0,5),b.minDistance=2,b.maxDistance=600,b.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN};let v=new vs(200,200,1186854,1186854),M=new vs(200,20,3097690,2241348);[v,M].forEach(N=>{N.rotation.x=Math.PI/2,N.material.transparent=!0,N.material.opacity=N===v?.5:.9,N.material.depthWrite=!1,g.add(N)});let E=new Mo(4);E.material.transparent=!0,E.material.opacity=.7,g.add(E);let C=new Map;function S(N,V,R,J){if(!C.has(N)){let $=document.createElement("canvas");$.width=R,$.height=J,V($.getContext("2d"),$);let oe=new Gs($);oe.colorSpace=Lt,C.set(N,{t:oe,aspect:R/J})}return C.get(N)}function w(N,V,R,J,$,oe){let{t:_e,aspect:pe}=S(N,V,R,J),Ee=new Hs(new ds({map:_e,depthTest:!1,sizeAttenuation:!1,transparent:!0}));return Ee.scale.set($*pe,$,1),Ee.renderOrder=12,Ee.userData.cachedMap=!0,oe.add(Ee),Ee}let I=(N,V,R)=>{w(`axis:${N}`,$=>{$.fillStyle=V,$.font="bold 30px sans-serif",$.fillText(N,6,42)},64,64,.045,g).position.set(...R)};I("+X","#ff7070",[4.6,0,0]),I("+Y","#7fe36b",[0,4.6,0]);let F=new Nt,H=[],G=null,z=null,X=0;g.add(F);let re=Mu({width:3.2,ground:!0});g.add(re.group);let ee=new Nt;ee.visible=!1,g.add(ee);let de=new Ze(new Si(.3,16,12),new xt({color:16777215,transparent:!0,opacity:.55,depthTest:!1}));de.renderOrder=9,ee.add(de);let Y=new rn(new nt().setFromPoints([new P,new P(0,0,-1)]),new gs({color:16777215,dashSize:.25,gapSize:.2,transparent:!0,opacity:.6}));ee.add(Y);let le=new Nt,B=[];g.add(le);let U=[new P(1,0,0),new P(0,1,0),new P(0,0,1)],k=["#ff5d5d","#70df58","#5aa2ff"];U.forEach((N,V)=>{let R=new Ki(N,new P,1,k[V],.24,.14),J=new Ze(new Wr(.12,.12,.8,10),new xt({visible:!1}));J.position.y=.7,R.add(J),[J,R.cone].forEach(oe=>{oe.userData.axis=V,B.push(oe)}),R.traverse(oe=>{oe.material&&(oe.material.depthTest=!1,oe.material.depthWrite=!1),oe.renderOrder=20});let $=w(`gizmo:${V}`,oe=>{oe.fillStyle=k[V],oe.font="bold 48px sans-serif",oe.fillText("XYZ"[V],10,50)},64,64,.2,R);$.material.sizeAttenuation=!0,$.position.y=1.2,$.scale.set(.24,.24,1),$.renderOrder=21,le.add(R)});let ie=(N,{initial:V,waypoints:R,pads:J}=e())=>N==="start"?V.position:typeof N=="string"?J[Number(N.split(":")[1])]?.position:R[N]?.position,ye=(N,V)=>{let R=ie(N,V);return R?typeof N=="number"&&V.waypoints[N].type==="land"?[R[0],R[1],.4]:typeof N=="string"&&N.startsWith("pad:")?[R[0],R[1],.08]:R:null},Me=(N,{waypoints:V})=>N==="start"?Tu:typeof N=="string"?ff:Qt[V[N]?.type]??"#fff";function q(N,{waypoints:V,pads:R}){return N==="start"?"Start":typeof N=="string"?R[Number(N.split(":")[1])]?.name??"Pad":ws(V[N],N)}function W(){l.hidden=!0,l.replaceChildren()}function ge(N){d.textContent=N,d.classList.toggle("shown",!!N),clearTimeout(ge.timer),N&&(ge.timer=setTimeout(()=>d.classList.remove("shown"),2200))}function Re(){let N=e(),V=ie(N.selected,N);if(le.visible=!!V&&y.mode==="select",!le.visible)return;le.position.set(...V);let R=Eu(N.selected,N.waypoints);le.children.forEach((oe,_e)=>{oe.visible=R[_e]});let J=Go()?120:90,$=x.position.distanceTo(le.position)*2*Math.tan(zt.degToRad(x.fov/2))*J/Math.max(1,c.clientHeight);le.scale.setScalar($)}let Se=new bo,Oe=new ve;function ht(){X=0,!(!c.clientWidth||!c.clientHeight)&&(m.setSize(c.clientWidth,c.clientHeight,!1),x.aspect=c.clientWidth/c.clientHeight,x.updateProjectionMatrix(),re.setResolution(c.clientWidth,c.clientHeight),Re(),Mt(),m.render(g,x))}let Ue=()=>{X||(X=requestAnimationFrame(ht))};b.addEventListener("change",Ue);let $e=document.createElement("canvas").getContext("2d");function Ge(N,V,R,J){$e.font="600 26px sans-serif";let $=Math.min(720,Math.ceil($e.measureText(N).width)+30),oe=w(`name:${N}:${V}`,_e=>{_e.fillStyle="#07111df0",_e.beginPath(),_e.roundRect(1,1,$-2,44,10),_e.fill(),_e.fillStyle=V,_e.fillRect(1,8,4,30),_e.font="600 26px sans-serif",_e.fillStyle="#eaf2ff",_e.fillText(N,14,31,$-24)},$,46,.034,F);return oe.position.set(...R),oe.center.set(.5,J?1.9:-.75),oe}function Je(N,V,R,J){let $=w(`badge:${N}:${V}:${J}`,oe=>{oe.beginPath(),oe.arc(32,32,27,0,Math.PI*2),oe.fillStyle=J?"#ffffff":V,oe.fill(),oe.lineWidth=4,oe.strokeStyle="#060b11",oe.stroke(),oe.fillStyle="#071119",oe.font="bold 28px sans-serif",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(N,32,34)},64,64,J?.052:.042,F);return $.position.set(...R),$.center.set(.5,-.35),$}function it(N,V,R,J,$,oe,_e){let pe=(R==="start"?.34:.28)*(oe?1.3:_e?1.15:1),Ee=new Ze(R==="start"?new ao(pe):new Si(pe,20,14),new xt({color:V,depthTest:!1}));Ee.position.set(...N),Ee.userData.id=R,Ee.renderOrder=5,F.add(Ee),H.push(Ee);let Ae=new Ze(new Si(1,8,6),new xt({visible:!1}));if(Ae.userData.id=R,Ae.userData.pick=!0,Ae.position.copy(Ee.position),F.add(Ae),H.push(Ae),oe||_e){let dt=new Ze(new lo(pe*1.9,.045,8,40),new xt({color:oe?16777215:V,transparent:!0,opacity:oe?1:.6,depthTest:!1}));dt.position.copy(Ee.position),dt.renderOrder=6,dt.onBeforeRender=()=>dt.quaternion.copy(x.quaternion),F.add(dt)}let lt=typeof R=="string"&&R.startsWith("pad:");[$!=null&&Je($,V,N,oe),(y.labels||oe||_e||lt)&&Ge(J,V,N,lt)].forEach(dt=>{dt&&(dt.userData.id=R,H.push(dt))})}function mt(N,V){if(N[2]<.2)return;let R=new rn(new nt().setFromPoints([new P(...N),new P(N[0],N[1],.01)]),new gs({color:V,dashSize:.25,gapSize:.2,transparent:!0,opacity:.5}));R.computeLineDistances(),F.add(R);let J=new Ze(new ms(.22,20),new xt({color:V,transparent:!0,opacity:.3,depthWrite:!1}));J.position.set(N[0],N[1],.015),F.add(J)}function Mt(){let N=2*Math.tan(zt.degToRad(x.fov/2))/Math.max(1,c.clientHeight),V=Go()?26:16;H.forEach(R=>{R.userData.pick&&R.scale.setScalar(Math.max(.35,x.position.distanceTo(R.position)*N*V))})}function et(){F.traverse(Ye=>{Ye.geometry?.dispose(),Ye.userData.cachedMap||Ye.material?.map?.dispose(),Ye.material?.dispose()}),g.remove(F),F=new Nt,g.add(F),H=[];let N=e(),{initial:V,waypoints:R,pads:J,corridor:$,convex:oe,disturbances:_e,selected:pe}=N;if(_e?.selected.includes("wind")){let Ye=new P(..._e.settings.wind.steady_vector),At=Ye.length();if(At>1e-6){let mn=new P(...V.position).add(new P(0,0,1));F.add(new Ki(Ye.normalize(),mn,Math.min(8,Math.max(1,At)),15052104,.5,.25)),Ge(`WIND ${At.toFixed(1)} m/s`,"#e5ad48",mn.toArray(),!1)}}let Ee=J[R.at(-1)?.pad??0]?.position??[0,0,0],Ae=R.filter(Ye=>Ye.type!=="land"),lt=nr(V.position,R,Ee,{convex:oe}),tt=lt.map((Ye,At)=>[At?Qt[Ae[At-1].type]:Tu,Ae[At]?Qt[Ae[At].type]:ff]),dt=jM(pe,R);re.set(lt,tt,{highlight:dt}),oe&&y.corridor&&R.length&&lt.forEach((Ye,At)=>{let mn=(Ae[At]??R.find(mi=>mi.type==="land"))?.corridor_m??$,Mn=Ye.map(mi=>new P(...mi));if(!(mn>0)||Mn[0].distanceTo(Mn.at(-1))<1e-6)return;let Ni=new An;Ni.getPoint=mi=>{let Ls=mi*(Mn.length-1),zn=Math.min(Mn.length-2,Math.floor(Ls));return Mn[zn].clone().lerp(Mn[zn+1],Ls-zn)};let lr=new Ze(new co(Ni,64,mn,14,!1),new xt({color:4889328,transparent:!0,opacity:dt===At?.12:.05,depthWrite:!1}));F.add(lr)}),mt(V.position,Tu),it(V.position,Tu,"start",`START \xB7 ${V.position[2].toFixed(1)} m`,"S",pe==="start",y.hover==="start"),R.forEach((Ye,At)=>{let mn=ye(At,N);if(Ye.type!=="land"&&mt(mn,Qt[Ye.type]),it(mn,Qt[Ye.type],At,Ye.type==="land"?ws(Ye,At):`${ws(Ye,At)} \xB7 ${Ye.position[2].toFixed(1)} m`,String(At+1),pe===At,y.hover===At),pe===At&&Ye.type!=="land"){let Mn=new Ze(new Si(Ye.radius_m,24,16),new xt({color:Qt[Ye.type],wireframe:!0,transparent:!0,opacity:.22,depthWrite:!1}));Mn.position.set(...Ye.position),F.add(Mn)}}),J.forEach((Ye,At)=>{let mn=`pad:${At}`,Mn=pe===mn,Ni=new Ze(new ms(1.25,48),new xt({color:4774818,transparent:!0,opacity:Mn?.28:.12,depthWrite:!1}));Ni.position.set(Ye.position[0],Ye.position[1],.012),F.add(Ni);let lr=new Ze(new Xs(1.1,1.25,48),new xt({color:4774818,side:Yt}));lr.position.set(Ye.position[0],Ye.position[1],.02),F.add(lr);let mi=new Wi(new nt().setFromPoints([[-.45,0],[.45,0],[0,-.45],[0,.45]].map(([Ls,zn])=>new P(Ye.position[0]+Ls,Ye.position[1]+zn,.025))),new ln({color:4774818}));F.add(mi),it([Ye.position[0],Ye.position[1],.08],ff,mn,Ye.name,null,Mn,y.hover===mn)}),pt(N),D(),Ue()}function pt(N=e()){let{selected:V,waypoints:R}=N,J=ie(V,N);if(u.classList.toggle("empty",!J),!J){u.innerHTML=`<p class="inspector-empty"><b>Nothing selected.</b> ${Go()?"Tap":"Click"} a marker or a numbered badge to edit it, or use <b>\uFF0B Add</b> to place a step.</p>`;return}let $=Eu(V,R),oe=Me(V,N),_e=y.snap?.5:.1,pe=typeof V=="number"?R[V]:null,Ee=V==="start"?"START STATE":typeof V=="string"?"LANDING PAD":`STEP ${V+1} \xB7 ${Jt[pe.type].toUpperCase()}`,Ae=pe?.type==="land"?"Follows its pad: select the pad to move it.":pe&&["takeoff","descent"].includes(pe.type)?"Vertical leg: X/Y follow the previous point.":"",lt=R.length;u.innerHTML=`<div class="inspector-head" style="--step-color:${oe}"><i></i><div><small>${Ee}</small><b>${Te(q(V,N))}</b></div><button type="button" data-inspect="close" aria-label="Clear selection" title="Clear selection (Esc)">\xD7</button></div>
      <div class="inspector-axes">${["X","Y","Z"].map((tt,dt)=>`<div class="inspector-axis axis-${tt.toLowerCase()}${$[dt]?"":" locked"}"><span>${tt}</span><button type="button" data-nudge="${dt}" data-sign="-1" ${$[dt]?"":"disabled"} aria-label="${tt} minus ${_e} m">\u2212</button><output>${Number(J[dt]).toFixed(1)}</output><button type="button" data-nudge="${dt}" data-sign="1" ${$[dt]?"":"disabled"} aria-label="${tt} plus ${_e} m">+</button></div>`).join("")}</div>
      ${Ae?`<p class="inspector-note">${Ae}</p>`:""}
      <div class="inspector-actions">${typeof V=="number"?`<button type="button" data-inspect="prev" ${V<=0?"disabled":""} aria-label="Previous step" title="Previous step ([)">\u2039</button><button type="button" data-inspect="next" ${V>=lt-1?"disabled":""} aria-label="Next step" title="Next step (])">\u203A</button>`:""}
        <button type="button" data-inspect="details">${typeof V=="number"?"Details":"Info"}</button>${typeof V=="number"&&a?'<button type="button" class="danger" data-inspect="remove" title="Remove step (Delete)">Remove</button>':""}</div>`}function j(N,V){let R=e(),J=R.selected,$=ie(J,R);if(!$||!Eu(J,R.waypoints)[N])return;let oe=y.snap?.5:.1,_e=[...$];_e[N]=Rs($[N]+V*oe,oe),t(J,_e,N)}u.addEventListener("click",N=>{let V=N.target.closest("button");if(!V)return;if(V.dataset.nudge!=null){j(Number(V.dataset.nudge),Number(V.dataset.sign));return}let R=e(),J=R.selected;({close:()=>{n(null),et()},prev:()=>{n(J-1),et()},next:()=>{n(J+1),et()},details:()=>_(J,null,null),remove:()=>{W(),a?.(J)}})[V.dataset.inspect]?.()});function wt(N,V=null){y.mode=N,y.placeType=N==="add"?V:null,i.querySelectorAll("[data-mode]").forEach(J=>J.setAttribute("aria-pressed",String(J.dataset.mode===N)));let R=df(e().waypoints);f.querySelectorAll("[data-place]").forEach(J=>{J.disabled=!R[J.dataset.place],J.setAttribute("aria-pressed",String(J.dataset.place===y.placeType))}),f.hidden=N!=="add",o.classList.toggle("placing",N==="add"&&!!y.placeType),ee.visible=!1,W(),D(),Ue()}function Qe(){let{waypoints:N,selected:V}=e();return typeof V=="number"&&N[V]&&N[V].type!=="land"?N[V].position[2]:N.filter(R=>R.type!=="land").at(-1)?.position[2]??3}function D(){let N=Go(),V=e();h.innerHTML=y.mode==="add"?y.placeType?`<b>${N?"Tap":"Click"}</b> in the scene to place a <b>${Jt[y.placeType].toLowerCase()}</b> at ${Qe().toFixed(1)} m (the selected step's height)${y.placeType==="land"?"; landing always uses its pad":""} \xB7 <b>Esc</b> or <b>Select</b> to stop`:"Choose the type of step to place.":N?"<b>Tap</b> a marker to select \xB7 <b>drag</b> it to move \xB7 <b>long-press</b> for details \xB7 one finger orbits, two fingers pan and zoom":"<b>Drag</b> a marker to move it (arrows lock one axis) \xB7 <b>double-click</b> or <b>right-click</b> for details \xB7 <b>arrows / PgUp PgDn</b> nudge \xB7 <b>drag</b> orbit \xB7 <b>right-drag</b> pan \xB7 <b>scroll</b> zoom",y.mode==="select"&&!V.waypoints.length&&(h.innerHTML+=" \xB7 Empty route: use <b>\uFF0B Add</b> or load a sample plan.")}i.querySelectorAll("[data-mode]").forEach(N=>N.onclick=()=>wt(N.dataset.mode,N.dataset.mode==="add"?y.placeType:null)),f.querySelectorAll("[data-place]").forEach(N=>N.onclick=()=>{wt("add",N.dataset.place),c.focus({preventScroll:!0})}),i.querySelectorAll("[data-toggle]").forEach(N=>N.onclick=()=>{let V=N.dataset.toggle,R=N.getAttribute("aria-pressed")!=="true";N.setAttribute("aria-pressed",String(R)),V==="legend"?p.hidden=!R:y[V]=R;try{localStorage.setItem(`missionControl.planner3d.${V}`,R?"1":"0")}catch{}et()}),i.querySelectorAll("[data-toggle]").forEach(N=>{let V=null;try{V=localStorage.getItem(`missionControl.planner3d.${N.dataset.toggle}`)}catch{}let R=V==null?N.dataset.toggle==="legend"?o.clientWidth>=760:N.getAttribute("aria-pressed")==="true":V==="1";N.setAttribute("aria-pressed",String(R)),N.dataset.toggle==="legend"?p.hidden=!R:y[N.dataset.toggle]=R});function _(N,V,R){if(W(),s?.({id:N,position:V,menu:l,close:W}),!l.childElementCount)return;l.hidden=!1;let J=o.clientWidth<560||!R;if(l.classList.toggle("sheet",J),J)l.style.left=l.style.top="";else{let $=o.getBoundingClientRect();l.style.left=`${Math.max(0,Math.min(R[0]-$.left,o.clientWidth-l.offsetWidth))}px`,l.style.top=`${Math.max(0,Math.min(R[1]-$.top,o.clientHeight-l.offsetHeight))}px`}Go()||l.querySelector("input,select,button")?.focus(),Ue()}function T(N){return Se.ray.intersectPlane(new on(new P(0,0,1),-Math.max(1,N)),new P)}function L(N){O(N);let V=ae(),R=V?.object.userData.id,J=T(Qe());R==null&&!J||(R!=null&&(n(R),et()),_(R,J?.toArray().map($=>Rs($,y.snap?.5:0)),[N.clientX,N.clientY]))}function O(N){let V=c.getBoundingClientRect();Oe.set((N.clientX-V.left)/V.width*2-1,-(N.clientY-V.top)/V.height*2+1),Se.setFromCamera(Oe,x)}let ae=()=>{let N=Se.intersectObjects(H,!1);return N.find(V=>!V.object.userData.pick)??N[0]};function se(N,V,R){let J=U[V],$=new P(...ie(R)),oe=YM(J,$,x.getWorldDirection(new P)),_e=oe&&Se.ray.intersectPlane(oe,new P);return _e?(G={id:R,origin:$,anchor:_e,plane:oe,axis:J,axisIndex:V,moved:!1},!0):!1}function Q(N){let V=e(),R=Eu(N,V.waypoints),J=new P(...ie(N,V));if(R[0]&&R[1]){let $=new on(new P(0,0,1),-J.z),oe=Se.ray.intersectPlane($,new P);if(oe&&Math.abs(Se.ray.direction.z)>.12){G={id:N,origin:J,anchor:oe,plane:$,axis:null,moved:!1};return}}R[2]&&se(null,2,N)}c.addEventListener("pointerdown",N=>{if(N.button===2){z={right:!0,x:N.clientX,y:N.clientY};return}if(N.button!==0||!N.isPrimary)return;W(),O(N),c.focus({preventScroll:!0});let V=e(),R=Se.intersectObjects(H,!1).find(oe=>!oe.object.userData.pick),J=!R&&le.visible?Se.intersectObjects(B.filter(oe=>oe.parent.visible),!1)[0]:null,$=J?null:R??ae();if(z={x:N.clientX,y:N.clientY,id:$?.object.userData.id,t:performance.now(),pointerId:N.pointerId},N.pointerType!=="mouse"&&(z.timer=setTimeout(()=>{if(z&&!z.moved){let oe=z;z=null,G=null,b.enabled=!0,L({clientX:oe.x,clientY:oe.y}),navigator.vibrate?.(12)}},550)),J)se(N,J.object.userData.axis,V.selected);else if($&&y.mode==="select")V.selected!==z.id&&(n(z.id),et()),Q(z.id);else return;b.enabled=!1;try{c.setPointerCapture(N.pointerId)}catch{}N.stopImmediatePropagation(),N.preventDefault()},!0),c.addEventListener("pointermove",N=>{if(z&&!z.right&&Math.hypot(N.clientX-z.x,N.clientY-z.y)>6&&(z.moved=!0,clearTimeout(z.timer)),G){if(!z?.moved&&!G.moved)return;O(N);let V=Se.ray.intersectPlane(G.plane,new P);if(!V)return;let R=y.snap?.5:0;if(G.moved=!0,G.axis){let J=G.origin.clone().addScaledVector(G.axis,V.sub(G.anchor).dot(G.axis)).toArray();J[G.axisIndex]=Rs(J[G.axisIndex],R),t(G.id,J,G.axisIndex)}else{let J=V.sub(G.anchor);if(J.length()>x.position.distanceTo(G.origin)*3)return;let $=G.origin.clone().add(J).toArray().map((oe,_e)=>_e<2?Rs(oe,R):oe);t(G.id,$,0),t(G.id,$,1)}return}N.pointerType==="mouse"&&!N.buttons&&ne(N)});function ne(N){if(O(N),y.mode==="add"&&y.placeType){let J=T(Qe());if(ee.visible=!!J&&y.placeType!=="land",ee.visible){let $=y.snap?.5:0;ee.position.set(Rs(J.x,$),Rs(J.y,$),J.z),de.material.color.set(Qt[y.placeType]),Y.scale.set(1,1,J.z),Y.computeLineDistances()}c.style.cursor="crosshair",Ue();return}let V=le.visible&&Se.intersectObjects(B.filter(J=>J.parent.visible),!1)[0],R=V?null:ae()?.object.userData.id??null;c.style.cursor=V?"grab":R!=null?"pointer":"",R!==y.hover&&(y.hover=R,et())}c.addEventListener("pointerleave",()=>{y.hover!=null&&(y.hover=null,et()),ee.visible&&(ee.visible=!1,Ue())});function me(N){let V=z;z=null,clearTimeout(V?.timer);let R=G?.moved;if(G=null,b.enabled=!0,N&&c.hasPointerCapture?.(N.pointerId)&&c.releasePointerCapture(N.pointerId),!(!V||V.right||V.moved||R||N?.type!=="pointerup")){if(O(N),y.mode==="add"){if(!y.placeType){ge("Choose a step type first.");return}if(!df(e().waypoints)[y.placeType]){ge(`The plan cannot take another ${Jt[y.placeType].toLowerCase()} step.`);return}let J=T(Qe());if(!J&&y.placeType!=="land")return;let $=y.snap?.5:0,oe=J?[Rs(J.x,$),Rs(J.y,$),J.z]:null;r?.(y.placeType,oe),ge(`${Jt[y.placeType]} placed.`),df(e().waypoints)[y.placeType]||wt("select");return}V.id==null&&e().selected!=null&&(n(null),et())}}c.addEventListener("pointerup",me),c.addEventListener("pointercancel",me),c.addEventListener("lostpointercapture",N=>{G&&me(N)}),c.addEventListener("dblclick",N=>{O(N);let V=ae()?.object.userData.id;V!=null&&_(V,null,[N.clientX,N.clientY])}),c.addEventListener("contextmenu",N=>{N.preventDefault();let V=z;z=null,!(V?.right&&Math.hypot(N.clientX-V.x,N.clientY-V.y)>5)&&(N.pointerType&&N.pointerType!=="mouse"||(me(),L(N)))}),document.addEventListener("pointerdown",N=>{!l.hidden&&!l.contains(N.target)&&N.target!==c&&W()},!0),c.addEventListener("keydown",N=>{let V=e(),R=V.selected;if(N.key==="Escape"){l.hidden?y.mode==="add"?wt("select"):R!=null&&(n(null),et()):W(),be()&&xe(!1);return}if(N.key==="f"||N.key==="F"){te();return}if(N.key==="["||N.key==="]"){let $=V.waypoints.length;if(!$)return;let oe=typeof R=="number"?R+(N.key==="]"?1:-1):N.key==="]"?0:$-1;n((oe+$)%$),et(),N.preventDefault();return}if(R==null)return;let J={ArrowRight:[0,1],ArrowLeft:[0,-1],ArrowUp:[1,1],ArrowDown:[1,-1],PageUp:[2,1],PageDown:[2,-1]};if(J[N.key]){j(...J[N.key]),N.preventDefault();return}(N.key==="Delete"||N.key==="Backspace")&&typeof R=="number"&&a&&(a(R),N.preventDefault())}),document.addEventListener("keydown",N=>{N.key==="Escape"&&be()&&!i.contains(document.activeElement)&&xe(!1)});function te(){let{initial:N,waypoints:V,pads:R}=e(),J=new Ot().setFromPoints([N.position,...V.map(pe=>pe.position),...R.map(pe=>pe.position)].map(pe=>new P(...pe))),$=J.getCenter(new P),oe=Math.max(8,J.getSize(new P).length()),_e=Math.max(.45,Math.min(1,c.clientWidth/Math.max(1,c.clientHeight)));x.up.set(0,0,1),b.target.copy($),x.position.copy($).add(new P(.85,-1.15,.8).multiplyScalar(oe/_e**.6)),b.update(),Ue()}i.querySelectorAll("[data-view]").forEach(N=>N.onclick=()=>{te();let V=N.dataset.view;if(V==="fit"||V==="iso")return;let R=x.position.distanceTo(b.target);x.up.set(0,V==="top"?1:0,V==="top"?0:1),x.position.copy(b.target).add(V==="top"?new P(0,0,R):new P(0,-R,0)),b.update(),Ue()});let be=()=>document.fullscreenElement===i||i.classList.contains("expanded");async function xe(N=!be()){if(!N)document.fullscreenElement===i&&await document.exitFullscreen(),i.classList.remove("expanded"),document.body.classList.remove("planner-expanded");else try{if(!i.requestFullscreen)throw new Error("unsupported");await i.requestFullscreen()}catch{i.classList.add("expanded"),document.body.classList.add("planner-expanded")}Ie()}function Ie(){let N=be(),V=i.querySelector(".expand-route");V.textContent=N?"\u2715":"\u26F6",V.title=V.ariaLabel=N?"Exit full screen":"Full screen",requestAnimationFrame(()=>{te(),ht()})}return i.querySelector(".expand-route").onclick=()=>xe(),document.addEventListener("fullscreenchange",Ie),matchMedia("(pointer: coarse)").addEventListener?.("change",()=>{D(),et()}),new ResizeObserver(ht).observe(o),wt("select"),et(),te(),{draw:et,fit:te}}var ZM={takeoff:"Vertical climb from the start. Always the first step.",hover:"Fly to a point, stop, and hold for a set time.",flypass:"Pass through a point without stopping.",descent:"Vertical descent below the previous point.",land:"Final step: touch down on a chosen pad."},KM={hover:"Arrival: stay inside the capture radius below 0.4 m/s for the full hold. A speed excursion of up to 1 s (a gust) pauses the timer; leaving the radius or a longer excursion resets it.",flypass:"Arrival: pass through the capture radius in the forward direction.",land:"Arrival: contact the selected pad and settle. Position follows the pad.",takeoff:"Arrival: reach the target inside the capture radius below 0.4 m/s. X/Y follow the preceding point.",descent:"Arrival: reach the target inside the capture radius below 0.4 m/s. X/Y follow the preceding point."};function Fg(i,{readInitial:e,writeInitial:t,onChange:n,overlay:s,readMission:r,validateMission:a,readRoute:o,writeRoute:c,validateRoute:l,applyProfile:u,applyEnvironment:h,api:d,settings:f=()=>({}),writeSettings:p,isConvex:y=()=>!0,readDisturbances:m=()=>null,editStart:g}){let x=[],b=[{name:"Home pad",position:[0,0,0]}],v=-1,M=null,E=null,C,S=null,w=[],I="all",F=null;i.innerHTML=`<header class="section-head"><span class="section-index">01</span><div class="section-title"><h2>Route</h2><p>Start from a sample or build a sequence of steps. Select a step in the list, the 3D scene or the altitude profile to edit it.</p></div><div id="routeSummary" class="summary-chips" aria-live="polite"></div></header>
    <details class="sample-gallery" open><summary><span class="fold-title">Sample flight plans</span><span id="sampleCount" class="fold-note"></span></summary>
      <div class="gallery-toolbar"><div class="segmented" role="group" aria-label="Filter sample plans">${[["all","All"],["hop","Hops"],["land","Landings"],["hover","Hover"]].map(([_,T])=>`<button type="button" data-sample-filter="${_}" aria-pressed="${_==="all"}">${T}</button>`).join("")}</div><span class="hint">Loading a sample replaces only the route: start state, pads and steps. Its suggested guidance profile and environment are one click each. Undo restores your previous route.</span></div>
      <div id="sampleCards" class="sample-cards" role="list"></div></details>
    <div class="library-bar"><div class="library-group"><label for="savedPlan">My plans</label><select id="savedPlan"><option value="">Saved plans\u2026</option></select><button type="button" id="openSavedPlan">Open</button><button type="button" id="savePlan" title="Save under the mission name; the same name replaces it">Save</button></div><div class="library-group"><button type="button" id="loadPlan">Import JSON</button><button type="button" id="exportPlan">Export JSON</button><input id="planFile" type="file" accept=".json,application/json" hidden></div></div>
    <div class="plan-message" role="status"><span id="planMessage"></span><span id="planSuggestions" class="plan-suggestions"></span><button type="button" id="undoPlan" hidden>Undo</button></div>
    <div class="route-workspace"><div class="route-scene"><div id="planner3D" class="planner-3d"></div>
    <figure class="altitude-profile"><figcaption><b>ALTITUDE PROFILE</b><span>Distance flown along the drawn route \xB7 click a marker to select its step</span></figcaption><svg id="altitudeProfile" role="img" aria-label="Altitude against distance along the route"></svg></figure>
    <div class="hint route-check" id="plannerCheck"></div>
    <details class="precision-views"><summary><span class="fold-title">Precision views & start orientation</span><span class="fold-note">Top and side projections with draggable start velocity</span></summary><div class="planner-tools"><label>View range <select id="plannerRange"><option>10</option><option>25</option><option>50</option><option selected>100</option></select> m</label><button type="button" id="invertStart">Invert start</button></div><div class="planner-views"><div><b>TOP \xB7 X / Y</b><canvas id="planXY" aria-label="Drag start position and waypoints in X Y; drag the arrow to set initial velocity"></canvas></div><div><b>SIDE \xB7 X / Z</b><canvas id="planXZ" aria-label="Drag start height and waypoint altitude; drag the arrow to set vertical velocity"></canvas></div></div></details></div>
    <aside class="route-sequence" aria-label="Flight sequence"><div class="sequence-heading"><h3>Flight sequence</h3><span id="stepCount"></span></div>
      <div class="step-palette" role="group" aria-label="Add a step">${Object.entries(Jt).map(([_,T])=>`<button type="button" data-add="${_}" style="--step-color:${Qt[_]}" title="${ZM[_]}"><i></i>${T}</button>`).join("")}</div>
      <div id="waypointEditor"></div>
      <label class="route-corridor"><span>Default corridor half-width <small>m \xB7 steps without their own width</small></span><input id="defaultCorridor" aria-label="Default CORRIDOR" title="Used by steps with a blank corridor" type="number" min=".2" max="25" step="any" required></label>
      <p class="hint">Capture radius decides when a step is complete; corridor width bounds the planned path around the drawn route.</p></aside></div>
    <details class="route-pads"><summary><span class="fold-title">Landing pads</span><span class="fold-note">Ground targets \xB7 up to 4 \xB7 at least 3 m apart</span></summary><div id="padEditor"></div><button type="button" id="addPad">+ Landing pad</button></details>
    <details class="route-help"><summary><span class="fold-title">How steps complete & corridor rules</span></summary><div class="hint" id="plannerHint">Takeoff and descent finish inside the capture radius below 0.4 m/s. Hover requires the full hold inside that radius below 0.4 m/s; a speed excursion of up to 1 s pauses the timer, leaving the radius or a longer excursion resets it. Fly-through captures while moving forward through the radius. Landing requires physical contact and settling. Soft corridors penalize excess and permit emergency fallback; strict corridors reject infeasible plans. Actual tracking can deviate.</div></details>`;let H=i.querySelector("#plannerRange"),G=i.querySelector("#waypointEditor"),z=i.querySelector("#planMessage"),X=i.querySelector("#undoPlan"),re=[i.querySelector("#planXY"),i.querySelector("#planXZ")],ee=(_,T,L)=>Math.min(L,Math.max(T,_)),de=()=>f().guidance?.route_corridor_m??1,Y=(_,{offerUndo:T=!1,suggestions:L=[]}={})=>{z.textContent=_,X.hidden=!T,T||(F=null),i.querySelector("#planSuggestions").replaceChildren(...L.map(({label:ae,run:se})=>{let Q=document.createElement("button");return Q.type="button",Q.textContent=ae,Q.onclick=()=>{se(),Q.disabled=!0,Q.textContent="\u2713 "+ae.replace(/^Apply /,"Applied ")},Q}))},le=i.querySelector("#defaultCorridor");le.onchange=()=>{if(!le.reportValidity())return;let _=f();p?.({..._,guidance:{..._.guidance,route_corridor_m:Number(le.value)}}),ge()};let B=()=>y()?f().guidance?.max_speed_m_s??4:15,U=()=>b[x.find(_=>_.type==="land")?.pad??0]??b[0];function k(){let _=e().position;x.forEach((T,L)=>{T.type==="land"&&(T.position=[...b[T.pad??0].position]),["takeoff","descent"].includes(T.type)&&(T.position[0]=_[0],T.position[1]=_[1]),Re(L),_=T.position})}function ie(_,T){let L=Number(H.value),O=_.clientWidth,ae=_.clientHeight,se=25;return{w:O,h:ae,toScreen:Q=>[se+(Q[0]+L)/(2*L)*(O-2*se),se+(T===1?(L-Q[1])/(2*L):1-Q[2]/L)*(ae-2*se)],toWorld:(Q,ne)=>[(Q-se)/(O-2*se)*2*L-L,T===1?L-(ne-se)/(ae-2*se)*2*L:(1-(ne-se)/(ae-2*se))*L]}}function ye(){return nr(e().position,x,U().position,{convex:y()})}function Me(){let _=i.querySelector("#altitudeProfile"),T=Math.max(320,_.clientWidth||640),L=132,O={l:38,r:14,t:14,b:24},ae=_u(ye()),se=y()?f().guidance?.route_floor_m:null,Q=Math.max(1,ae.distance),ne=Math.max(2,...ae.points.map(R=>R[1]))*1.12,me=R=>O.l+R/Q*(T-O.l-O.r),te=R=>L-O.b-R/ne*(L-O.t-O.b),be=[0,.5,1].map(R=>Math.round(ne*R/1.12*10)/10),xe=ae.points.map(([R,J],$)=>`${$?"L":"M"}${me(R).toFixed(1)} ${te(J).toFixed(1)}`).join(" "),Ie=`${xe} L${me(ae.distance).toFixed(1)} ${te(0)} L${me(0)} ${te(0)} Z`,N=ae.ends.map((R,J)=>{let $=x.filter(Ee=>Ee.type!=="land")[J]??x.find(Ee=>Ee.type==="land"),oe=x.indexOf($);if(!$)return`<g class="profile-pad"><rect x="${me(R[0])-9}" y="${te(0)-3}" width="18" height="4"/></g>`;let _e=Qt[$.type],pe=oe===v;return`<g class="profile-step${pe?" selected":""}" data-profile-step="${oe}" tabindex="0" role="button" aria-label="Select step ${oe+1}"><line x1="${me(R[0])}" x2="${me(R[0])}" y1="${te(R[1])}" y2="${te(0)}" stroke="${_e}"/><circle cx="${me(R[0])}" cy="${te(R[1])}" r="${pe?9:7.5}" fill="${_e}"/><text x="${me(R[0])}" y="${te(R[1])+3.5}">${oe+1}</text></g>`}).join(""),V=e().position;return _.setAttribute("viewBox",`0 0 ${T} ${L}`),_.innerHTML=`${be.map(R=>`<line class="profile-grid" x1="${O.l}" x2="${T-O.r}" y1="${te(R)}" y2="${te(R)}"/><text class="profile-axis" x="${O.l-6}" y="${te(R)+3}" text-anchor="end">${R}</text>`).join("")}
      ${se!=null?`<line class="profile-floor" x1="${O.l}" x2="${T-O.r}" y1="${te(se)}" y2="${te(se)}"/><text class="profile-axis" x="${T-O.r}" y="${te(se)-4}" text-anchor="end">route floor ${se} m</text>`:""}
      <path class="profile-area" d="${Ie}"/><path class="profile-line" d="${xe}"/><line class="profile-ground" x1="${O.l}" x2="${T-O.r}" y1="${te(0)}" y2="${te(0)}"/>
      <text class="profile-axis" x="${T-O.r}" y="${L-6}" text-anchor="end">${ae.distance.toFixed(1)} m</text><text class="profile-axis" x="${O.l}" y="${L-6}">0 m</text>
      <path class="profile-start" d="M${me(0)} ${te(V[2])-7} l6 7 l-6 7 l-6 -7 Z"/>${N}`,_.querySelectorAll("[data-profile-step]").forEach(R=>{let J=()=>ht(Number(R.dataset.profileStep));R.onclick=J,R.onkeydown=$=>{($.key==="Enter"||$.key===" ")&&($.preventDefault(),J())}}),ae}function q(){le.disabled=!y()||!p,document.activeElement!==le&&(le.value=de()),k();let _=Me();Oe(_),C?.draw();let T=e(),L=s?.(x);i.querySelector("#plannerCheck").textContent=L?.braking?`Full-thrust braking from the start velocity: ~${L.braking.distance.toFixed(0)} m in ${L.braking.time.toFixed(1)} s (dashed line to \xD7 in the precision views).`:"",i.querySelector(".precision-views").open&&re.forEach((O,ae)=>{let se=ae===0?1:2,{w:Q,h:ne,toScreen:me}=ie(O,se);if(!Q||!ne)return;let te=Bn(O,Q,ne);te.fillStyle="#030507",te.fillRect(0,0,Q,ne),te.font="9px Consolas",te.strokeStyle="rgba(255,255,255,.08)",te.fillStyle="#7c878f";let be=Number(H.value);for(let V=-4;V<=4;V++){let R=V*be/4,[J]=me([R,0,0]);te.beginPath(),te.moveTo(J,25),te.lineTo(J,ne-25),te.stroke(),te.fillText(String(R),J-8,ne-8)}for(let V=0;V<=4;V++){let R=se===1?-be+V*be/2:V*be/4,J=[0,0,0];J[se]=R;let[,$]=me(J);te.beginPath(),te.moveTo(25,$),te.lineTo(Q-25,$),te.stroke(),te.fillText(String(R),2,$+3)}ye().forEach((V,R)=>{te.strokeStyle="#3987e5",te.lineWidth=1.5,te.beginPath(),V.forEach((J,$)=>{let[oe,_e]=me(J);$?te.lineTo(oe,_e):te.moveTo(oe,_e)}),y()&&x.length&&(te.save(),te.globalAlpha=.15,te.lineWidth=2*(x[R]?.corridor_m??de())*(Q-50)/(2*be),te.stroke(),te.restore()),te.stroke()}),b.forEach(V=>{let[R,J]=me(V.position);te.strokeStyle="#48dba2",te.strokeRect(R-5,J-3,10,6),te.fillText(V.name,R+8,J+12)});let xe=me(T.position),Ie=me(T.position.map((V,R)=>V+T.velocity[R]*2));if(te.strokeStyle="#d95926",te.beginPath(),te.moveTo(...xe),te.lineTo(...Ie),te.stroke(),L?.stop){let V=me(L.stop);te.setLineDash([2,3]),te.beginPath(),te.moveTo(...xe),te.lineTo(...V),te.stroke(),te.setLineDash([]),te.lineWidth=2,te.beginPath(),te.moveTo(V[0]-5,V[1]-5),te.lineTo(V[0]+5,V[1]+5),te.moveTo(V[0]+5,V[1]-5),te.lineTo(V[0]-5,V[1]+5),te.stroke(),te.lineWidth=1.5}Math.hypot(Ie[0]-xe[0],Ie[1]-xe[1])>8&&(te.fillStyle="#d95926",te.beginPath(),te.arc(...Ie,5,0,2*Math.PI),te.fill(),te.fillText("V",Ie[0]+8,Ie[1]-5));let N=[[xe[0]+10,xe[1]-19,45,13]];x.forEach((V,R)=>{let[J,$]=me(V.position);te.fillStyle=R===v?"#fff":Qt[V.type],te.beginPath(),te.arc(J,$,8,0,Math.PI*2),te.fill(),te.fillStyle="#071119",te.textAlign="center",te.fillText(String(R+1),J,$+3),te.textAlign="left";let oe=ws(V,R),_e=te.measureText(oe).width,pe=ee(J+12,4,Math.max(4,Q-_e-4)),Ee=ee($-12,12,ne-18);for(let Ae=0;Ae<30;Ae++){let lt=Math.ceil(Ae/2)*14*(Ae%2?-1:1),tt=ee($-12+lt,12,ne-18);if(!N.some(([dt,Ye,At,mn])=>pe<dt+At&&pe+_e>dt&&tt-10<Ye+mn&&tt>Ye)){Ee=tt;break}}N.push([pe,Ee-10,_e,13]),te.lineWidth=3,te.strokeStyle="#030507",te.strokeText(oe,pe,Ee),te.fillStyle=Qt[V.type],te.fillText(oe,pe,Ee),te.lineWidth=1.5}),te.fillStyle="#f4f6f7",te.beginPath(),te.moveTo(xe[0],xe[1]-9),te.lineTo(xe[0]+8,xe[1]),te.lineTo(xe[0],xe[1]+9),te.lineTo(xe[0]-8,xe[1]),te.closePath(),te.fill(),te.fillText("START",xe[0]+12,xe[1]-8)})}let W=0;function ge(){W||(W=requestAnimationFrame(()=>{W=0,q(),n?.()}))}function Re(_){i.querySelectorAll(`[data-index="${_}"] [data-axis]`).forEach(T=>{T.value=x[_].position[Number(T.dataset.axis)]})}let Se=_=>[Jt[_.type],_.type==="land"?`on ${Te(b[_.pad??0]?.name??"pad")}`:`Z ${Number(_.position[2]).toFixed(1)} m`,`${Ho(_).toLowerCase()} ${_.speed_m_s} m/s`,_.type==="hover"?`hold ${_.hold_s} s`:""].filter(Boolean).join(" \xB7 ");function Oe(_=_u(ye())){let T=[[`${x.length}/12`,"steps"],[`${_.distance.toFixed(1)} m`,"route"],[`${Math.max(e().position[2],...x.map(se=>se.position[2])).toFixed(1)} m`,"max alt"],[Te(U().name),"lands on"]];i.querySelector("#routeSummary").innerHTML=T.map(([se,Q])=>`<span class="chip"><b>${se}</b>${Q}</span>`).join(""),i.querySelector("#stepCount").textContent=`${x.length} / 12 STEPS`,G.querySelectorAll("[data-select-step]").forEach(se=>{let Q=Number(se.dataset.selectStep),ne=x[Q];se.innerHTML=`<span class="step-number">${String(Q+1).padStart(2,"0")}</span><span class="step-main"><b>${Te(ne.name||Jt[ne.type])}</b><small>${Se(ne)}</small></span><span class="step-chevron" aria-hidden="true">${Q===v?"\u25B4":"\u25BE"}</span>`,se.setAttribute("aria-expanded",String(Q===v))});let L=e(),O=G.querySelector(".step-start small");O&&(O.textContent=`XYZ ${L.position.map(se=>se.toFixed(1)).join(" / ")} m \xB7 V ${L.velocity.map(se=>se.toFixed(1)).join(" / ")} m/s`);let ae=G.querySelector(".step-end small");ae&&(ae.textContent=x.some(se=>se.type==="land")?`${U().name} \xB7 X ${U().position[0]} Y ${U().position[1]} m`:`Default 0.15 m/s touchdown on ${b[0].name}`),G.querySelector(".step-start")?.classList.toggle("selected",M==="start"),i.querySelectorAll("[data-add]").forEach(se=>{se.disabled=x.length>=12||["takeoff","land"].includes(se.dataset.add)&&x.some(Q=>Q.type===se.dataset.add)})}function ht(_){v=_,M=_<0?null:_,G.querySelectorAll("[data-index]").forEach(T=>T.classList.toggle("selected",Number(T.dataset.index)===_)),Oe(),Me(),C?.draw(),_>=0&&G.querySelector(`[data-index="${_}"]`)?.scrollIntoView({block:"nearest"})}G.addEventListener("invalid",_=>{let T=_.target.closest("[data-index]");T&&ht(Number(T.dataset.index))},!0),i.addEventListener("invalid",_=>{for(let T=_.target.parentElement;T&&T!==i;T=T.parentElement)T.tagName==="DETAILS"&&(T.open=!0)},!0);let Ue=(_,T,L="")=>`<label class="step-field ${L}"><span>${_}</span>${T}</label>`;function $e(_,T){let L=["takeoff","descent"].includes(_.type),O=_.type==="land",ae=["X","Y","Z"].map((Q,ne)=>Ue(`${Q}`,`<input aria-label="Waypoint ${T+1} ${Q}" data-axis="${ne}" type="number" min="${ne===2?1:-100}" max="100" step="any" value="${_.position[ne]}" ${O||ne<2&&L?"disabled":""}>`)).join(""),se=Object.entries(Jt).map(([Q,ne])=>`<option value="${Q}" ${_.type===Q?"selected":""} ${Q==="takeoff"&&T!==0||Q==="land"&&T!==x.length-1?"disabled":""}>${ne}</option>`).join("");return`<fieldset class="step-group"><legend>Step</legend>${Ue("Name",`<input data-key="name" aria-label="Waypoint ${T+1} name" maxlength="40" value="${Te(_.name??"")}" placeholder="${Jt[_.type]}">`,"wide")}${Ue("Type",`<select data-key="type" aria-label="Waypoint ${T+1} type">${se}</select>`)}</fieldset>
      <fieldset class="step-group"><legend>Position \xB7 m${O?" <em>follows pad</em>":L?" <em>vertical: X/Y follow previous point</em>":""}</legend>${ae}</fieldset>
      <fieldset class="step-group"><legend>Arrival</legend>${Ue(`${Ho(_)[0]+Ho(_).slice(1).toLowerCase()} speed \xB7 m/s`,`<input aria-label="Waypoint ${T+1} speed" data-key="speed_m_s" type="number" min=".1" max="${O?.5:B()}" step="any" value="${_.speed_m_s}">`)}${O?"":Ue("Capture radius \xB7 m",`<input aria-label="Waypoint ${T+1} radius" data-key="radius_m" type="number" min=".1" max="10" step="any" value="${_.radius_m}">`)}${_.type==="hover"?Ue("Hold \xB7 s",`<input aria-label="Waypoint ${T+1} hold seconds" data-key="hold_s" type="number" min=".1" max="60" step="any" value="${_.hold_s}">`):""}</fieldset>
      <fieldset class="step-group"><legend>Path</legend>${O?Ue("Pad",`<select data-key="pad" aria-label="Waypoint ${T+1} landing pad">${b.map((Q,ne)=>`<option value="${ne}" ${(_.pad??0)===ne?"selected":""}>${Te(Q.name)}</option>`).join("")}</select>`)+Ue("Approach \xB7 m/s",`<input aria-label="Landing approach speed" data-key="approach_speed_m_s" type="number" min=".3" max="${B()}" step="any" placeholder="${B()} default" value="${_.approach_speed_m_s??""}">`):""}${Ue("Corridor \xB7 m",`<input aria-label="Waypoint ${T+1} corridor half-width" data-key="corridor_m" type="number" min=".2" max="25" step="any" placeholder="${de()} default" value="${_.corridor_m??""}" ${y()?"":"disabled"}>`)}</fieldset>
      <p class="step-completion">${KM[_.type]}</p>
      <div class="step-actions"><button type="button" data-up="${T}" aria-label="Move waypoint ${T+1} earlier" ${T===0||_.type==="land"||x[T-1]?.type==="takeoff"?"disabled":""}>\u2191 Earlier</button><button type="button" data-down="${T}" aria-label="Move waypoint ${T+1} later" ${T===x.length-1||_.type==="takeoff"||x[T+1]?.type==="land"?"disabled":""}>\u2193 Later</button><button type="button" class="danger" data-remove="${T}" aria-label="Remove waypoint ${T+1}">Remove</button></div>`}function Ge(){let _=x.map((T,L)=>`<li class="waypoint-row step-card ${L===v?"selected":""}" data-index="${L}" style="--step-color:${Qt[T.type]}"><button type="button" class="step-select" data-select-step="${L}" aria-controls="step-fields-${L}"></button><div class="step-fields" id="step-fields-${L}">${$e(T,L)}</div></li>`).join("");G.innerHTML=`<ol class="step-list"><li class="step-endpoint step-start" style="--step-color:#fff"><span class="endpoint-mark">\u25C6</span><span class="step-main"><b>Start</b><small></small></span><button type="button" class="edit-start">Edit start</button></li>${_||'<li class="step-empty hint">Direct landing. Add steps above, right-click in the 3D scene, or load a sample plan.</li>'}${x.some(T=>T.type==="land")?"":'<li class="step-endpoint step-end" style="--step-color:#48dba2"><span class="endpoint-mark">\u25B1</span><span class="step-main"><b>Implicit landing</b><small></small></span></li>'}</ol>`,G.querySelector(".edit-start").onclick=()=>{M="start",v=-1,C?.draw(),Oe(),g?.()},Oe(),Je(G),mt()}function Je(_){_.querySelectorAll("[data-select-step]").forEach(T=>T.onclick=()=>{let L=Number(T.dataset.selectStep);ht(v===L?-1:L)}),_.querySelectorAll('input[type="number"]').forEach(T=>{T.required=!["corridor_m","approach_speed_m_s"].includes(T.dataset.key)}),_.querySelectorAll("input,select").forEach(T=>T.onchange=()=>{if(!T.checkValidity()){T.reportValidity();return}let L=Number(T.closest("[data-index]").dataset.index),O=x[L];if(T.dataset.axis!==void 0){let ae=Number(T.dataset.axis);O.position[ae]=Number(T.value)}else O[T.dataset.key]=["type","name"].includes(T.dataset.key)?T.value:T.value===""?null:Number(T.value);if(T.dataset.key==="type"&&(O.type==="land"?(O.pad=0,O.position=[...b[0].position],O.speed_m_s=.15):(delete O.pad,delete O.approach_speed_m_s,O.position[2]<1&&(O.position[2]=3))),v=L,M=L,["type","pad"].includes(T.dataset.key))Ge();else{i.querySelectorAll("[data-index]").forEach(se=>se.classList.toggle("selected",Number(se.dataset.index)===L));let ae=T.dataset.axis!==void 0?`[data-axis="${T.dataset.axis}"]`:`[data-key="${T.dataset.key}"]`;i.querySelectorAll(`[data-index="${L}"] ${ae}`).forEach(se=>{se.value=T.value})}ge()}),_.querySelectorAll("[data-remove]").forEach(T=>T.onclick=()=>{it(),x.splice(Number(T.dataset.remove),1),v=-1,M=null,Ge(),ge()}),_.querySelectorAll("[data-down]").forEach(T=>T.onclick=()=>{let L=Number(T.dataset.down);it(),[x[L],x[L+1]]=[x[L+1],x[L]],v=L+1,M=v,Ge(),ge()}),_.querySelectorAll("[data-up]").forEach(T=>T.onclick=()=>{let L=Number(T.dataset.up);it(),[x[L-1],x[L]]=[x[L],x[L-1]],v=L-1,M=v,Ge(),ge()})}function it(){S?.close(),S=null}function mt(){if(!S||S.menu.hidden)return;let _=G.querySelector(`[data-index="${S.id}"]`);if(!_){it();return}let T=S.menu.querySelector(".context-fields"),L=_.cloneNode(!0);L.querySelector(".step-select")?.remove(),L.querySelector(".step-fields")?.removeAttribute("id");let O=_.querySelectorAll("input,select");L.querySelectorAll("input,select").forEach((Q,ne)=>{Q.value=O[ne].value});let ae=document.createElement("div");ae.className="step-card",ae.dataset.index=L.dataset.index,ae.style.cssText=L.style.cssText,ae.append(...L.childNodes),T.replaceChildren(ae),Je(T);let se=x[S.id];S.menu.querySelector(".context-note").textContent=se.type==="land"?"Landing position follows its pad. Select the pad marker to move it.":["takeoff","descent"].includes(se.type)?"Vertical leg: X/Y follow the previous point. Use the Z arrow to change altitude.":"Use the X, Y or Z arrow to move along one axis."}function Mt(_,T){if(Y(""),x.length>=12){Y("Maximum 12 waypoints.");return}if(["takeoff","land"].includes(_)&&x.some(se=>se.type===_)){Y(`The plan already has a ${Jt[_].toLowerCase()} step.`);return}let L=_==="takeoff"?0:_==="land"||x.findIndex(se=>se.type==="land")<0?x.length:x.findIndex(se=>se.type==="land"),O=x[L-1]?.position??e().position,ae=_==="land"?[...b[0].position]:["takeoff","descent"].includes(_)?[O[0],O[1],_==="takeoff"?Math.min(100,O[2]+5):Math.max(1,O[2]-3)]:[Math.round(O[0]*.6*10)/10,Math.round(O[1]*.6*10)/10,Math.max(3,Math.round(O[2]*.75*10)/10)];if(T&&_!=="land")for(let se=0;se<3;se++)(se===2||!["takeoff","descent"].includes(_))&&(ae[se]=Math.round(ee(T[se],se===2?1:-100,100)*10)/10);it(),x.splice(L,0,{type:_,name:"",position:ae,hold_s:2,radius_m:1,speed_m_s:_==="land"?.15:["takeoff","descent"].includes(_)?1:3}),v=L,M=L,Ge(),ge()}i.querySelectorAll("[data-add]").forEach(_=>_.onclick=()=>Mt(_.dataset.add));function et(){document.activeElement?.blur();let _=i.closest("form")?.querySelector(":invalid");return _?(_.reportValidity(),!0):!1}i.querySelector("#exportPlan").onclick=async()=>{try{if(et())return;let _=await l(o()),T=new Blob([Cg(_)],{type:"application/json"}),L=URL.createObjectURL(T),O=document.createElement("a");O.href=L,O.download="flight-plan.json",O.click(),setTimeout(()=>URL.revokeObjectURL(L),1e3),Y("Route exported. Guidance and environment are not part of a flight plan.")}catch(_){Y(_.message)}};async function pt(){let _=await d("/api/flight-plans");i.querySelector("#savedPlan").replaceChildren(new Option("Saved plans\u2026",""),..._.map(T=>new Option(T.name,T.id)))}i.querySelector("#savePlan").onclick=async()=>{try{if(et())return;let _=await d("/api/flight-plans",o());await pt(),i.querySelector("#savedPlan").value=_.id,Y(`Saved the ${_.name} route on this computer. Saving the same mission name replaces it.`)}catch(_){Y(_.message)}};async function j(_,T,L=[]){let O=null;try{O=o()}catch{}c(_),v=-1,M=null,Ge(),ge(),requestAnimationFrame(()=>C?.fit()),F=O,Y(T,{offerUndo:!!O,suggestions:L});try{await a(r())}catch(ae){z.textContent=`${T} With the current guidance and setup it will not launch yet: ${ae.message}`}}X.onclick=()=>{if(!F)return;let _=F;F=null,c(_),Ge(),ge(),requestAnimationFrame(()=>C?.fit()),Y("Previous route restored.")},i.querySelector("#openSavedPlan").onclick=async()=>{try{let _=i.querySelector("#savedPlan").value;if(!_){Y("Choose a saved plan first.");return}let T=await d(`/api/flight-plans/${encodeURIComponent(_)}`);await j(T.mission,`Loaded the ${T.mission.name} route. Guidance and environment are unchanged.`)}catch(_){Y(_.message)}},pt().catch(_=>Y(_.message)),i.querySelector("#loadPlan").onclick=()=>i.querySelector("#planFile").click(),i.querySelector("#planFile").onchange=async _=>{try{let T=_.target.files[0];if(!T)return;if(T.size>1e5)throw new Error("Plan file is too large.");let L=Rg(await T.text()),O=L.mission??{...L.initial,waypoints:L.waypoints,pads:[{name:"Home pad",position:[0,0,0]}]},ae=L.mission&&["convex_settings","disturbance","disturbance_settings"].some(Q=>Q in L.mission),se=await l(Vo(O));await j(se,`Flight plan imported.${ae?" Its guidance and environment settings were not applied; set them in Guidance and Environment.":""}`)}catch(T){Y(T.message)}finally{_.target.value=""}};function wt(_){let T=_u(_.route.slice(1).map((te,be)=>[_.route[be],te])),L=172,O=64,ae=Math.max(2,_.max_altitude_m)*1.15,se=Math.max(1,T.distance),Q=te=>6+te/se*(L-12),ne=te=>O-8-te/ae*(O-16),me=T.points.map(([te,be],xe)=>`${xe?"L":"M"}${Q(te).toFixed(1)} ${ne(be).toFixed(1)}`).join(" ");return`<svg class="sample-thumb" viewBox="0 0 ${L} ${O}" aria-hidden="true"><line x1="4" x2="${L-4}" y1="${ne(0)}" y2="${ne(0)}" class="thumb-ground"/><path d="${me} L${Q(T.distance)} ${ne(0)} L${Q(0)} ${ne(0)} Z" class="thumb-area"/><path d="${me}" class="thumb-line"/>${T.ends.slice(0,-1).map(([te,be])=>`<circle cx="${Q(te)}" cy="${ne(be)}" r="2.4"/>`).join("")}<path class="thumb-start" d="M${Q(0)} ${ne(_.route[0][2])-4} l3.5 4 l-3.5 4 l-3.5 -4 Z"/><rect class="thumb-pad" x="${Q(T.distance)-7}" y="${ne(0)-1.5}" width="14" height="3"/></svg>`}function Qe(){let _=w.filter(T=>I==="all"||T.category===I);i.querySelector("#sampleCount").textContent=w.length?`${w.length} plans \xB7 hops, landings and hover`:"",i.querySelectorAll("[data-sample-filter]").forEach(T=>T.setAttribute("aria-pressed",String(T.dataset.sampleFilter===I))),i.querySelector("#sampleCards").innerHTML=_.map(T=>`<article class="sample-card cat-${T.category}" role="listitem"><div class="sample-tags"><span class="tag tag-${T.category}">${gu[T.category]??T.category}</span>${T.disturbance.length?`<span class="tag tag-env" title="${Te(T.disturbance.join(", "))}">${T.disturbance.includes("wind")?"WIND":"DISTURBED"}</span>`:""}</div>${wt(T)}<h4>${Te(T.name)}</h4><p>${Te(T.summary)}</p><dl><div><dt>Max alt</dt><dd>${T.max_altitude_m.toFixed(0)} m</dd></div><div><dt>Steps</dt><dd>${T.steps}</dd></div><div><dt>Pads</dt><dd>${T.pads}</dd></div></dl><div class="sample-foot"><span title="Suggested guidance profile (applied only if you choose)">Suggests ${Te(T.profile_name)}</span><button type="button" data-load-sample="${Te(T.id)}">Load</button></div></article>`).join("")||'<p class="hint">No sample plans are available from this service.</p>',i.querySelectorAll("[data-load-sample]").forEach(T=>T.onclick=async()=>{try{let L=await d(`/api/flight-plan-samples/${encodeURIComponent(T.dataset.loadSample)}`),O=L.sample,ae=[{label:`Apply suggested guidance: ${O.profile_name}`,run:()=>u?.(O.profile)}];O.environment&&ae.push({label:`Apply suggested environment: ${O.environment.selected.map(se=>({wind:"wind + gusts",sensor_noise:"sensor noise",com_shift:"COM offset"})[se]).join(", ")}`,run:()=>h?.(O.environment)}),await j(L.mission,`Loaded the sample route \u201C${L.mission.name}\u201D. Guidance and environment are unchanged.`,ae)}catch(L){Y(L.message)}})}i.querySelectorAll("[data-sample-filter]").forEach(_=>_.onclick=()=>{I=_.dataset.sampleFilter,Qe()}),d("/api/flight-plan-samples").then(_=>{w=_,Qe()}).catch(()=>{w=[],Qe()}),i.querySelector("#invertStart").onclick=()=>{let _=e();_.attitude_deg[0]=Math.abs(_.attitude_deg[0])>170?0:180,t(_),ge()},H.onchange=q,re.forEach((_,T)=>{let L=T===0?1:2;_.onpointerdown=O=>{let ae=_.getBoundingClientRect(),se=O.clientX-ae.left,Q=O.clientY-ae.top,{toScreen:ne}=ie(_,L),me=e(),te=[...x.flatMap((V,R)=>V.type==="land"?[]:[{index:R,point:V.position}]),{index:-1,point:me.position}],be=me.position.map((V,R)=>V+me.velocity[R]*2),xe=ne(me.position),Ie=ne(be);Math.hypot(Ie[0]-xe[0],Ie[1]-xe[1])>8&&te.push({index:-2,point:be});let N=te.reverse().find(V=>{let R=ne(V.point);return Math.hypot(R[0]-se,R[1]-Q)<15});N&&(E={index:N.index,axis:L},v=N.index,M=N.index===-1?"start":N.index>=0?N.index:null,_.setPointerCapture(O.pointerId),Ge(),q(),O.preventDefault())},_.onpointermove=O=>{if(!E||E.axis!==L)return;let ae=_.getBoundingClientRect(),[se,Q]=ie(_,L).toWorld(O.clientX-ae.left,O.clientY-ae.top),ne=e(),me=[ee(se,-100,100),ee(Q,L===2?E.index>=0?1:.34:-100,100)];E.index===-2?(ne.velocity[0]=ee((se-ne.position[0])/2,-20,20),ne.velocity[L]=ee((Q-ne.position[L])/2,-20,20),t(ne)):E.index===-1?(ne.position[0]=Math.round(me[0]*10)/10,ne.position[L]=Math.round(me[1]*10)/10,t(ne)):(x[E.index].position[0]=Math.round(me[0]*10)/10,x[E.index].position[L]=Math.round(me[1]*10)/10,Re(E.index)),ge()},_.onpointerup=()=>{E=null},_.onpointercancel=()=>{E=null}});function D(){i.querySelector("#padEditor").innerHTML=b.map((_,T)=>`<div class="pad-row"><strong>PAD ${T+1}</strong><label>NAME<input data-pad="${T}" data-field="name" aria-label="Pad ${T+1} name" maxlength="24" value="${Te(_.name)}" required></label>${["X","Y"].map((L,O)=>`<label>${L} / m<input data-pad="${T}" data-field="${O}" aria-label="Pad ${T+1} ${L}" type="number" min="-100" max="100" step="any" value="${_.position[O]}" required></label>`).join("")}<button type="button" data-remove-pad="${T}" ${b.length===1?"disabled":""}>Remove</button></div>`).join(""),i.querySelectorAll("[data-pad]").forEach(_=>_.onchange=()=>{if(!_.reportValidity())return;let T=b[Number(_.dataset.pad)];_.dataset.field==="name"?T.name=_.value:T.position[Number(_.dataset.field)]=Number(_.value),Ge(),ge()}),i.querySelectorAll("[data-remove-pad]").forEach(_=>_.onclick=()=>{let T=Number(_.dataset.removePad);b.splice(T,1),x.filter(L=>L.type==="land").forEach(L=>{L.pad=(L.pad??0)===T?0:(L.pad??0)>T?L.pad-1:L.pad??0}),D(),Ge(),ge()}),i.querySelector("#addPad").disabled=b.length>=4,i.querySelector(".route-pads .fold-note").textContent=`${b.length} of 4 \xB7 ground targets at least 3 m apart`}return i.querySelector("#addPad").onclick=()=>{b.length>=4||(b.push({name:`Pad ${b.length+1}`,position:[Math.min(100,b.at(-1).position[0]+5),b.at(-1).position[1],0]}),D(),Ge(),ge())},C=Og(i.querySelector("#planner3D"),{read:()=>({initial:e(),waypoints:x,pads:b,selected:M,corridor:de(),convex:y(),disturbances:m()}),select:_=>{M=_,v=typeof _=="number"?_:-1,Ge(),Me()},add:(_,T)=>Mt(_,T),remove:_=>{it(),x.splice(_,1),v=Math.min(_,x.length-1),M=v<0?null:v,Ge(),ge()},context:({id:_,position:T,menu:L,close:O})=>{S=null,typeof _=="number"?(L.innerHTML=`<div class="context-heading">STEP ${_+1} \xB7 ${Te(Jt[x[_].type].toUpperCase())}<button type="button" class="context-close" aria-label="Close waypoint menu">\xD7</button></div><div class="hint context-note"></div><div class="context-fields"></div>`,S={id:_,menu:L,close:O},L.hidden=!1,mt()):_==null?(L.innerHTML=`<div class="context-heading">ADD STEP HERE<button type="button" class="context-close" aria-label="Close waypoint menu">\xD7</button></div><div class="hint">X ${T[0].toFixed(1)} \xB7 Y ${T[1].toFixed(1)} \xB7 Z ${T[2].toFixed(1)} m<br>Placed at the selected step's height, else the last step's (3 m on an empty route). Takeoff/descent keep the previous X/Y; landing uses its pad.</div><div class="context-add">${Object.entries(Jt).map(([ae,se])=>`<button type="button" data-context-add="${ae}" style="--step-color:${Qt[ae]}" ${x.length>=12||["takeoff","land"].includes(ae)&&x.some(Q=>Q.type===ae)?"disabled":""}><i></i>${se}</button>`).join("")}</div>`,L.querySelectorAll("[data-context-add]").forEach(ae=>ae.onclick=()=>{O(),Mt(ae.dataset.contextAdd,T)})):L.innerHTML=`<div class="context-heading">${_==="start"?"START":"LANDING PAD"}<button type="button" class="context-close" aria-label="Close waypoint menu">\xD7</button></div><div class="hint">Use the axis arrows to move this marker. ${_==="start"?"Velocity, attitude and rotor are under Vehicle & launch \u2192 Initial state.":"Rename or remove pads under Landing pads."}</div>`,L.querySelector(".context-close").onclick=()=>{O(),S=null}},move:(_,T,L)=>{let O=_==="start"?e().position:typeof _=="string"?b[Number(_.split(":")[1])].position:x[_].position;if(T=T.map((ae,se)=>se!==L?O[se]:Math.round(ee(ae,se===2?_==="start"?.34:1:-100,100)*10)/10),_==="start"){let ae=e();ae.position=T,t(ae)}else if(typeof _=="string"){let ae=Number(_.split(":")[1]);b[ae].position=[T[0],T[1],0],D()}else x[_].position=T,Re(_);ge()}}),i.querySelector(".precision-views").addEventListener("toggle",q),new ResizeObserver(()=>{q()}).observe(i),D(),Ge(),q(),{getWaypoints:()=>(k(),structuredClone(x)),getPads:()=>structuredClone(b),setPads:_=>{it(),M=null,b=structuredClone(_??[{name:"Home pad",position:[0,0,0]}]),D()},refresh:()=>{Ge(),q()},setWaypoints:_=>{it(),x=lf(_??[]),v=x.length?0:-1,M=x.length?0:null,Ge(),ge(),requestAnimationFrame(()=>C?.fit())},draw:q,describe:()=>({steps:x.length,pad:U().name,text:x.length?`${x.length} step${x.length===1?"":"s"} \u2192 ${U().name}`:`Direct landing \u2192 ${U().name}`})}}function Bg(i,e,t=[0,0,0],n={}){return nr(i,e,t,n).flat()}var pf={"Route corridor":"Keep the reference plan near the drawn route. Per-waypoint widths override the default.","Kinematic limits":"Bound planned speed, altitude and thrust direction through the approach.",Thrust:"Leave feedback authority available while limiting thrust and actuator slew.",Landing:"Define the gate where powered descent hands over to terminal pad centering.",Objective:"Choose what the optimizer minimizes along a feasible trajectory.",Discretization:"Balance trajectory resolution, solver budget and CPU concurrency.","Re-planning":"Decide when to solve again from the measured state and how to blend the new plan.","Tracking feedback":"Tune position, velocity and integral feedback around the planned trajectory."};function kg(i,e){let t=l=>e("guidance",l),n=l=>e("tracking",l),s="",r="",a=[],o=(l,u,h)=>`<text x="${l}" y="${u}">${Te(h)}</text>`,c=(l,u,h,d,f="")=>`<line x1="${l}" y1="${u}" x2="${h}" y2="${d}" class="${f}"/>`;if(i==="Route corridor"){let l=10+Math.min(25,t("route_corridor_m"))*2;s=`<path class="diagram-band" style="stroke-width:${l}" d="M25 110 C85 110 105 40 165 40 S245 80 290 60"/><path class="diagram-route" d="M25 110 C85 110 105 40 165 40 S245 80 290 60"/><circle cx="25" cy="110" r="5"/><circle cx="290" cy="60" r="5"/>${c(165,40-l/2,165,40+l/2,"diagram-dimension")}${o(130,125,"DRAWN REFERENCE")}`,r="Corridor around the reference \xB7 schematic",a=[["Half-width",`${t("route_corridor_m")} m`],["Enforcement",t("route_corridor_mode")],["Fly-through aim",`${t("flypass_capture_fraction")} \xD7 radius`]]}else if(i==="Kinematic limits"){let l=t("max_tilt_deg")*Math.PI/180,u=95*Math.sin(l),h=95*Math.cos(l);s=`<path class="diagram-fill" d="M155 128 L${155-u} ${128-h} A95 95 0 0 1 ${155+u} ${128-h} Z"/>${c(155,128,155,20,"diagram-dashed")}${c(155,128,155+u,128-h,"diagram-route")}<circle cx="155" cy="128" r="5"/>${o(175,95,`${t("max_tilt_deg")}\xB0`)}${o(175,28,"VERTICAL")}`,r="Planned thrust-pointing cone \xB7 angle to vertical",a=[["Speed ceiling",`${t("max_speed_m_s")} m/s`],["Route floor",`${t("route_floor_m")} m`],["Glide half-angle",`${t("glide_slope_deg")}\xB0`]]}else if(i==="Thrust"){let l=t("thrust_excess_reserve_fraction"),u=t("thrust_min_weight_fraction");s=`<rect class="diagram-fill" x="25" y="62" width="270" height="24"/><rect class="diagram-reserve" x="${135+160*(1-l)}" y="62" width="${160*l}" height="24"/>${c(135,50,135,99,"diagram-dimension")}${c(25+110*u,57,25+110*u,91,"diagram-route")}${o(25,40,"MIN")}${o(118,118,"WEIGHT")}${o(207,40,"RESERVE")}`,r="Thrust allocation \xB7 schematic, no hardware maximum implied",a=[["Minimum thrust",`${u} \xD7 weight`],["Excess reserved",`${Math.round(l*100)}%`],["Duty slew",`${t("throttle_rate_per_s")} /s`]]}else if(i==="Landing"){let l=35+t("gate_height_m")*22,u=15+t("gate_capture_radius_m")*30;s=`${c(28,133,290,133)}${c(160,15,160,133,"diagram-dashed")}<ellipse class="diagram-fill" cx="160" cy="${133-l}" rx="${u}" ry="10"/>${c(75,133-l,75,133,"diagram-dimension")}${o(20,125,`${t("gate_height_m")} m`)}${o(215,133-l-12,"GATE")}<rect class="diagram-pad" x="140" y="129" width="40" height="5"/>${o(140,153,"PAD")}`,r="Gate height above touchdown \xB7 schematic",a=[["Gate height",`${t("gate_height_m")} m`],["Capture radius",`${t("gate_capture_radius_m")} m`],["Descent clamp",`${t("terminal_max_descent_m_s")} m/s`]]}else if(i==="Objective"){s=`<path class="diagram-band" d="M30 115 Q110 5 290 50"/><path class="diagram-route" d="M30 115 Q110 5 290 50"/><circle cx="30" cy="115" r="5"/><circle cx="290" cy="50" r="5"/>${o(25,145,"START")}${o(251,80,"TARGET")}${o(95,105,t("objective")==="energy"?"\u222B electrical power dt":"\u222B |T| / m dt")}`;let l=[["path_weight","path"],["time_weight","time"],["smoothness_weight","smoothness"],["tilt_weight","tilt"]].filter(([u])=>Number(t(u))>0).map(([u,h])=>`${h} ${t(u)}`);r=l.length?"Primary cost plus priced secondary terms (s of hover cost) \xB7 schematic":"Cost integrated along the feasible trajectory \xB7 schematic",a=[["Active cost",t("objective")==="energy"?"Electrical energy":"Delta-v"],["Secondary terms",l.length?l.join(" \xB7 "):"none"],["Fly-through",`\u2265 ${t("flypass_min_speed_fraction")} \xD7 speed, \xB1${t("flypass_heading_tolerance_deg")}\xB0`]]}else i==="Discretization"?(s=`${c(25,80,295,80,"diagram-route")}${Array.from({length:9},(l,u)=>`<circle cx="${25+u*33.75}" cy="80" r="4"/>`).join("")}${c(25,110,58.75,110,"diagram-dimension")}${o(25,140,`ROUTE INTERVAL ${t("route_dt_s")} s`)}${o(25,45,"DISCRETE PLAN NODES")}`,r="Node spacing along each leg \xB7 schematic",a=[["Landing intervals",t("landing_nodes")],["Nodes / leg cap",t("max_leg_nodes")],["Budget / solve",`${t("max_solve_time_s")} s`]]):i==="Re-planning"?(s=`${c(25,80,295,80)}${[35,100,165].map(l=>`${c(l,65,l,95,"diagram-route")}<circle cx="${l}" cy="80" r="4"/>`).join("")}<rect class="diagram-reserve" x="220" y="65" width="65" height="30"/>${o(25,45,"RE-SOLVE")}${o(221,45,"FREEZE")}${o(25,130,`${t("replan_period_s")} s PERIOD`)}${o(211,130,`${t("freeze_time_s")} s`)}`,r="Periodic updates stop near the landing gate \xB7 schematic",a=[["Position trigger",`${t("replan_error_m")} m`],["Velocity trigger",`${t("replan_velocity_error_m_s")} m/s`],["Blend time",`${t("replan_blend_s")} s`]]):(s=`<path class="diagram-dashed" d="M25 95 Q150 10 290 60"/><path class="diagram-route" d="M25 115 Q150 60 290 60"/>${c(155,90,155,50,"diagram-dimension")}${o(30,45,"REFERENCE")}${o(30,143,"MEASURED \u2192 CORRECTION")}`,r="Feedback corrects deviation from the reference \xB7 schematic",a=[["Correction bound",`${n("max_correction_m_s2")} m/s\xB2`],["Command tilt",`${n("max_tilt_deg")}\xB0`],["Planned tilt",`${t("max_tilt_deg")}\xB0`]]);return`<figure><svg viewBox="0 0 320 165" role="img" aria-label="${Te(r)}">${s}</svg><figcaption>${Te(r)}</figcaption></figure><div class="optimizer-visual-metrics">${a.map(([l,u])=>`<div><span>${Te(l)}</span><strong>${Te(u??"\u2014")}</strong></div>`).join("")}</div>`}function zg(i){let e=p=>i("guidance",p),t=p=>i("tracking",p);if(e("max_tilt_deg")===void 0)return"";let n=p=>p*Math.PI/180,s=205,r=305,a=(p,y)=>{let m=n(Math.min(80,p));return`M92 70 L${(92-y*Math.sin(m)).toFixed(1)} ${(70-y*Math.cos(m)).toFixed(1)} A${y} ${y} 0 0 1 ${(92+y*Math.sin(m)).toFixed(1)} ${(70-y*Math.cos(m)).toFixed(1)} Z`},o=n(Math.min(85,e("glide_slope_deg"))),c=150,l=Math.min(170,c*Math.tan(o)),u=Math.max(6,Math.min(46,4+e("route_corridor_m")*9)),h=e("route_corridor_mode")==="strict",d="M104 84 C170 92 220 70 "+(r-18)+" 118",f=(p,y,m,g="")=>`<text x="${p}" y="${y}" class="${g}">${Te(m)}</text>`;return`<svg viewBox="0 0 420 230" role="img" aria-label="Schematic of the configured guidance envelope">
    <path class="env-glide" d="M${r} ${s} L${r-l} ${s-c} L${r+l} ${s-c} Z"/>
    <line class="env-glide-edge" x1="${r}" y1="${s}" x2="${r-l}" y2="${s-c}"/><line class="env-glide-edge" x1="${r}" y1="${s}" x2="${r+l}" y2="${s-c}"/>
    <path class="env-band ${h?"is-strict":""}" d="${d}" style="stroke-width:${u}"/><path class="env-route ${h?"":"is-soft"}" d="${d}"/>
    <line class="env-floor" x1="16" x2="250" y1="${s-16}" y2="${s-16}"/>${f(18,s-21,`route floor ${e("route_floor_m")} m`)}
    <line class="env-ground" x1="8" x2="412" y1="${s}" y2="${s}"/><rect class="env-pad" x="${r-22}" y="${s-3}" width="44" height="5"/>
    <line class="env-gate" x1="${r-16}" x2="${r+16}" y1="${s-26}" y2="${s-26}"/>${f(r+22,s-22,`gate ${e("gate_height_m")} m`)}
    ${f(r-l+4,s-c-8,`glide \xB1${e("glide_slope_deg")}\xB0`,"env-label")}
    <path class="env-command" d="${a(t("max_tilt_deg"),54)}"/><path class="env-plan" d="${a(e("max_tilt_deg"),46)}"/><line class="env-axis" x1="92" y1="70" x2="92" y2="8"/>
    <rect class="env-vehicle" x="84" y="66" width="16" height="22" rx="3"/>
    ${f(14,112,`plan \u2264 ${e("max_tilt_deg")}\xB0`,"env-label env-plan-text")}${f(14,127,`feedback \u2264 ${t("max_tilt_deg")}\xB0`,"env-label env-command-text")}
    ${f(150,64,`${h?"STRICT":"SOFT"} corridor \xB1${e("route_corridor_m")} m \xB7 \u2264 ${e("max_speed_m_s")} m/s`,"env-label")}
    ${f(18,224,`cost: ${e("objective")==="delta_v"?"propulsive delta-v":"electrical energy"} \xB7 schematic, not to scale`)}
  </svg>`}var JM=[["guidance","route_corridor_mode","segmented",{soft:["Soft","Penalize excess; emergency fallback allowed"],strict:["Strict","Reject plans outside; hold if infeasible"]}],["guidance","route_corridor_m","slider"],["guidance","max_tilt_deg","slider"],["tracking","max_tilt_deg","slider"],["guidance","max_speed_m_s","slider"],["guidance","glide_slope_deg","slider"],["guidance","objective","segmented",{energy:["Energy","Electrical Wh"],delta_v:["Delta-v","\u222B|T|/m, fuel analog"]}]],QM={"guidance.route_corridor_mode":"Corridor enforcement","guidance.route_corridor_m":"Corridor half-width","guidance.max_tilt_deg":"Planned tilt limit","tracking.max_tilt_deg":"Feedback tilt limit","guidance.max_speed_m_s":"Speed limit","guidance.glide_slope_deg":"Landing glide slope","guidance.objective":"Cost"};function Hg(i,{api:e,onChange:t,useConvex:n}){let s=[],r={},a=[],o=[],c="Route corridor",l="all",u=null,h=!0;i.innerHTML=`<summary class="config-summary section-head"><span class="section-index">02</span><div class="section-title"><h2>Guidance</h2><p>Convex optimizer profile: corridor, tilt, speed and landing envelope.</p></div><span id="optimizerSummary" class="summary-chips"></span><span class="fold-chevron" aria-hidden="true"></span></summary><div class="config-body">
    <div class="guidance-inactive" role="status" hidden><span></span><button type="button" class="use-convex">Switch to convex guidance</button></div>
    <section class="preset-panel" aria-labelledby="presetTitle"><div class="block-head"><div><h3 id="presetTitle">Mission profile</h3><p>Pick the profile that matches the mission. Applying one replaces every optimizer override; tune afterwards below.</p></div><div class="segmented" role="group" aria-label="Filter profiles">${[["all","All"],["hop","Hopping"],["hover","Hovering"],["land","Landing"],["saved","My profiles"]].map(([B,U])=>`<button type="button" data-preset-filter="${B}" aria-pressed="${B==="all"}">${U}</button>`).join("")}</div></div>
      <div id="presetCards" class="preset-cards" role="list"></div><div id="presetDetail" class="preset-detail"></div>
      <div class="optimizer-profiles"><div class="optimizer-profile-load"><label for="optimizerProfile">My saved profiles</label><div><select id="optimizerProfile"><option value="">Choose profile</option></select><button type="button" id="loadOptimizer" disabled>Load</button></div></div><div class="optimizer-profile-save"><label for="optimizerName">Save current settings as</label><div><input id="optimizerName" maxlength="48" placeholder="My guidance settings"><button type="button" id="saveOptimizer">Save profile</button></div></div></div></section>
    <section class="essentials" aria-labelledby="essentialsTitle"><div class="block-head"><div><h3 id="essentialsTitle">Key constraints</h3><p>The limits that shape the plan most. The diagram redraws as you drag.</p></div><button type="button" id="resetOptimizer">Restore repository defaults</button></div>
      <div class="essentials-grid"><div id="envelopeVisual" class="envelope-visual"></div><div id="essentialControls" class="essential-controls"></div></div></section>
    <div id="optimizerMessage" role="status" class="hint"></div>
    <section class="advanced-optimizer" aria-labelledby="groupsTitle"><div class="block-head"><div><h3 id="groupsTitle">Parameter groups</h3><p>Every adjustable parameter, grouped, with a diagram of what each group constrains. Adjusted fields are highlighted.</p></div><span id="advancedSummary" class="fold-note"></span></div>
      <div class="optimizer-workspace"><div id="optimizerNav" class="optimizer-nav" role="tablist" aria-label="Optimizer parameter groups" aria-orientation="vertical"></div><div id="optimizerFields"></div></div></section></div>`;let d=i.querySelector("#optimizerFields"),f=i.querySelector("#optimizerNav"),p=i.querySelector("#optimizerMessage"),y=(B,U)=>s.find(k=>k.section===B&&k.key===U),m=(B,U)=>B?.[U.section]?.[U.key]??U.default,g=B=>m(r,B),x=B=>g(B)!==B.default,b=()=>[...new Set([...Object.keys(pf),...s.map(B=>B.group)])].filter(B=>s.some(U=>U.group===B)),v=B=>s.length>0&&s.every(U=>m(B,U)===g(U)),M=()=>[...o,...a].find(B=>v(B.settings));function E(B,U=!1){c=B,f.querySelectorAll("button").forEach(k=>{let ie=k.dataset.group===B;k.setAttribute("aria-selected",String(ie)),k.tabIndex=ie?0:-1,ie&&U&&k.focus()}),d.querySelectorAll('[role="tabpanel"]').forEach(k=>{k.hidden=k.dataset.group!==B})}function C(B,U){U===B.default?(delete r[B.section]?.[B.key],r[B.section]&&!Object.keys(r[B.section]).length&&delete r[B.section]):(r[B.section]??={})[B.key]=U}function S(B){i.querySelectorAll("[data-section][data-key]").forEach(ie=>{if(ie===B)return;let ye=y(ie.dataset.section,ie.dataset.key);ye&&(ie.type==="radio"?ie.checked=ie.value===String(g(ye)):(document.activeElement!==ie||ie.type==="range")&&(ie.value=g(ye)))});let U=y("guidance","max_tilt_deg"),k=y("tracking","max_tilt_deg");U&&k&&i.querySelectorAll('[data-section="tracking"][data-key="max_tilt_deg"]').forEach(ie=>ie.setCustomValidity(g(k)<g(U)?`Feedback tilt must be at least the planned tilt (${g(U)}\xB0): feedback needs margin.`:""))}let w=(B,U,k="")=>`<span class="chip ${k}"><b>${Te(B)}</b>${Te(U)}</span>`;function I(){let B=s.filter(x).length,U=M();return{count:B,name:U?.name??(B?"Custom":"Repository defaults"),builtin:!!U?.builtin}}function F(){let{count:B,name:U}=I(),k=ie=>g(y("guidance",ie)??{default:void 0});i.querySelector("#optimizerSummary").innerHTML=(h?"":w("Not used","by this controller","chip-strict"))+(s.length?w(U,"profile","chip-strong")+w(String(k("route_corridor_mode")).toUpperCase(),"corridor",k("route_corridor_mode")==="strict"?"chip-strict":"")+w(`${k("max_tilt_deg")}\xB0`,"tilt")+w(`${k("max_speed_m_s")} m/s`,"speed"):""),i.querySelector("#advancedSummary").textContent=`${s.length} parameters \xB7 ${B?`${B} adjusted`:"repository defaults"}`,b().forEach((ie,ye)=>{let Me=s.filter(ge=>ge.group===ie),q=Me.filter(x).length;f.querySelector(`[data-group="${ie}"] small`).textContent=q?`${q} adjusted`:`${Me.length} parameter${Me.length===1?"":"s"}`;let W=d.querySelector(`#optimizer-panel-${ye}`);W.querySelector(".optimizer-visual").innerHTML=kg(ie,(ge,Re)=>{let Se=y(ge,Re);return Se?g(Se):void 0}),W.querySelector("[data-reset-group]").disabled=!q}),d.querySelectorAll("[data-section]").forEach(ie=>ie.closest(".optimizer-field").classList.toggle("is-adjusted",x(y(ie.dataset.section,ie.dataset.key)))),i.querySelectorAll(".essential-control").forEach(ie=>ie.classList.toggle("is-adjusted",x(y(ie.dataset.param.split(".")[0],ie.dataset.param.split(".")[1])))),i.querySelector("#envelopeVisual").innerHTML=zg((ie,ye)=>{let Me=y(ie,ye);return Me?g(Me):void 0}),G()}function H(B){let U=(k,ie)=>{let ye=y(k,ie);return ye?m(B,ye):void 0};return[["Tilt",`${U("guidance","max_tilt_deg")}\xB0`],["Speed",`${U("guidance","max_speed_m_s")} m/s`],["Corridor",`${U("guidance","route_corridor_m")} m`],["Glide",`${U("guidance","glide_slope_deg")}\xB0`]]}function G(){let B=M();i.querySelectorAll("[data-preset-filter]").forEach(q=>q.setAttribute("aria-pressed",String(q.dataset.presetFilter===l)));let U=a.map((q,W)=>({...q,id:`saved:${W}`,mission:"saved",corridor:q.settings?.guidance?.route_corridor_mode??y("guidance","route_corridor_mode")?.default,summary:q.note||"Saved on this computer."})),k=l==="saved"?U:l==="all"?o:o.filter(q=>q.mission===l),ie=i.querySelector("#presetCards");ie.innerHTML=k.map(q=>{let W=B&&(B===q||q.id?.startsWith("saved:")&&a[Number(q.id.split(":")[1])]===B);return`<article class="preset-card mission-${Te(q.mission)}${W?" is-active":""}" role="listitem"><div class="sample-tags"><span class="tag tag-${Te(q.mission)}">${q.mission==="saved"?"SAVED":gu[q.mission]??Te(q.mission)}</span><span class="tag ${q.corridor==="strict"?"tag-strict":"tag-soft"}">${Te(String(q.corridor).toUpperCase())} CORRIDOR</span></div><h4>${Te(q.name)}</h4><p>${Te(q.summary)}</p><dl>${H(q.settings).map(([ge,Re])=>`<div><dt>${ge}</dt><dd>${Te(Re)}</dd></div>`).join("")}</dl><div class="preset-foot">${q.rationale?`<button type="button" class="link-button" data-preset-why="${Te(q.id)}">Why these values?</button>`:"<span></span>"}<button type="button" data-apply-preset="${Te(q.id)}" ${W?"disabled":""}>${W?"\u2713 Applied":"Apply"}</button></div></article>`}).join("")||`<p class="hint">${l==="saved"?"No saved profiles yet. Save the current settings with Save profile below.":"Built-in profiles are not available from this service; restart mission control to load them."}</p>`;let ye=q=>q.startsWith("saved:")?U[Number(q.split(":")[1])]:o.find(W=>W.id===q);ie.querySelectorAll("[data-apply-preset]").forEach(q=>q.onclick=()=>{let W=ye(q.dataset.applyPreset);W&&(de(W.id)||(r=structuredClone(W.settings),u=W,X(),t?.(),p.textContent=`Applied ${W.name}.`))}),ie.querySelectorAll("[data-preset-why]").forEach(q=>q.onclick=()=>{let W=ye(q.dataset.presetWhy),ge=i.querySelector("#presetDetail");if(ge.dataset.id===W.id&&!ge.hidden){ge.hidden=!0;return}ge.dataset.id=W.id,ge.hidden=!1,ge.innerHTML=`<b>${Te(W.name)}</b><p>${Te(W.rationale)}</p><ul>${Object.entries(W.settings).flatMap(([Re,Se])=>Object.entries(Se).map(([Oe,ht])=>{let Ue=y(Re,Oe);return`<li><span>${Te(Ue?.label??Oe)}${Re==="tracking"?" (tracking)":""}</span><b>${Te(ht)}${Ue?.unit?` ${Te(Ue.unit)}`:""}</b><small>default ${Te(Ue?.default)}</small></li>`})).join("")}</ul>`});let Me=i.querySelector("#presetDetail");Me.dataset.id||(Me.hidden=!0),u&&!B&&!p.textContent.startsWith("Modified")&&(p.textContent=`Modified from ${u.name}.`)}function z([B,U,k,ie]){let ye=y(B,U);if(!ye)return"";let Me=`essential-${B}-${U}`,q=QM[`${B}.${U}`]??ye.label;return k==="segmented"?`<fieldset class="essential-control segmented-field" data-param="${B}.${U}"><legend>${Te(q)}</legend><div class="segmented wide">${ye.choices.map(W=>`<label><input type="radio" name="${Me}" value="${Te(W)}" data-section="${B}" data-key="${U}"><span><b>${Te(ie?.[W]?.[0]??W)}</b><small>${Te(ie?.[W]?.[1]??"")}</small></span></label>`).join("")}</div></fieldset>`:`<div class="essential-control" data-param="${B}.${U}"><label for="${Me}"><span>${Te(q)}</span><small>${Te(ye.unit??"")}</small></label><div class="slider-row"><input type="range" aria-label="${Te(q)} slider" min="${ye.min}" max="${ye.max}" step="${ye.step}" data-section="${B}" data-key="${U}"><input id="${Me}" type="number" min="${ye.min}" max="${ye.max}" step="${ye.step}" data-section="${B}" data-key="${U}" aria-describedby="${Me}-help" required></div><small id="${Me}-help">${Te(ye.help)}</small></div>`}function X(){i.querySelector("#essentialControls").innerHTML=JM.map(z).join(""),f.innerHTML=b().map((B,U)=>`<button type="button" role="tab" id="optimizer-tab-${U}" aria-controls="optimizer-panel-${U}" data-group="${Te(B)}"><span class="optimizer-nav-index">${U<5?"FLIGHT":"TUNING"}</span><span>${Te(B)}<small></small></span><span class="optimizer-nav-arrow" aria-hidden="true">\u203A</span></button>`).join(""),d.innerHTML=b().map((B,U)=>`<section id="optimizer-panel-${U}" role="tabpanel" aria-labelledby="optimizer-tab-${U}" data-group="${Te(B)}"><div class="optimizer-group-heading"><div><h3>${Te(B)}</h3><p>${Te(pf[B]??"Adjust the parameters for this part of guidance.")}</p></div><button type="button" data-reset-group="${Te(B)}">Reset group</button></div><div class="optimizer-visual"></div><div class="optimizer-grid">${s.filter(k=>k.group===B).map(k=>{let ie=`optimizer-${k.section}-${k.key}`;return`<label class="optimizer-field" for="${ie}"><span class="optimizer-field-title">${Te(k.label)}<span>${Te(k.unit??"")}</span></span>${k.kind==="choice"?`<select id="${ie}" data-section="${k.section}" data-key="${k.key}" aria-label="${Te(k.label)}" aria-describedby="${ie}-help">${k.choices.map(ye=>`<option value="${Te(ye)}">${Te(ye)}</option>`).join("")}</select>`:`<input id="${ie}" data-section="${k.section}" data-key="${k.key}" aria-label="${Te(k.label)}" aria-describedby="${ie}-help" type="number" min="${k.min}" max="${k.max}" step="${k.step}" required>`}<small id="${ie}-help">${Te(k.help)}</small><span class="optimizer-default">Default ${Te(k.default)}${k.kind==="choice"?"":` \xB7 Range ${k.min}\u2013${k.max}`}</span></label>`}).join("")}</div></section>`).join(""),f.querySelectorAll("button").forEach(B=>{B.onclick=()=>E(B.dataset.group),B.onkeydown=U=>{if(!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"].includes(U.key))return;U.preventDefault(),U.stopPropagation();let k=b(),ie=k.indexOf(c);E(k[U.key==="Home"?0:U.key==="End"?k.length-1:(ie+(["ArrowUp","ArrowLeft"].includes(U.key)?-1:1)+k.length)%k.length],!0)}}),d.querySelectorAll("[data-reset-group]").forEach(B=>B.onclick=()=>{s.filter(U=>U.group===B.dataset.resetGroup).forEach(U=>C(U,U.default)),X(),t?.(),p.textContent=`${c} defaults restored.`}),E(b().includes(c)?c:b()[0]),S(),F()}function re(B,U){if(!B.dataset?.section)return;if(B.type!=="radio"&&B.type!=="range"&&!B.checkValidity()){U&&B.reportValidity();return}let k=y(B.dataset.section,B.dataset.key);if(k&&!(B.type==="radio"&&!B.checked)&&(C(k,k.kind==="choice"?B.value:Number(B.value)),S(B),F(),U)){let ie=i.querySelector('[data-section="tracking"][data-key="max_tilt_deg"]:invalid');ie&&B.dataset.key==="max_tilt_deg"&&ie.reportValidity(),t?.()}}i.addEventListener("input",B=>re(B.target,!1)),i.addEventListener("change",B=>{B.target.closest(".optimizer-profiles")||re(B.target,!0)}),i.addEventListener("invalid",B=>{let U=B.target.closest("details");U&&(U.open=!0),i.open=!0;let k=d.querySelector(":invalid")?.closest('[role="tabpanel"]');k&&E(k.dataset.group)},!0),i.querySelectorAll("[data-preset-filter]").forEach(B=>B.onclick=()=>{l=B.dataset.presetFilter,G()});async function ee(){a=await e("/api/convex-profiles"),i.querySelector("#optimizerProfile").replaceChildren(new Option("Choose profile",""),...a.map((B,U)=>new Option(B.name,String(U)))),i.querySelector("#loadOptimizer").disabled=!0,F()}i.querySelector("#optimizerProfile").onchange=B=>{i.querySelector("#loadOptimizer").disabled=B.target.value===""},i.querySelector("#loadOptimizer").onclick=()=>{let B=i.querySelector("#optimizerProfile").value;if(B==="")return;let U=a[Number(B)];r=structuredClone(U.settings),u=U,i.querySelector("#optimizerName").value=U.name,X(),t?.(),p.textContent=`Loaded ${U.name}.`},i.querySelector("#saveOptimizer").onclick=async()=>{try{let B=i.querySelector(".config-body :invalid");if(B){let k=B.closest('[role="tabpanel"]');k&&E(k.dataset.group),B.reportValidity();return}let U=await e("/api/convex-profiles",{name:i.querySelector("#optimizerName").value,settings:r});await ee(),p.textContent=`Saved ${U.name} on this computer.`}catch(B){p.textContent=B.message}},i.querySelector("#resetOptimizer").onclick=()=>{r={},u=null,X(),t?.(),p.textContent="Repository defaults restored."};function de(B){let U=o.find(k=>k.id===B);return U?(r=structuredClone(U.settings),u=U,X(),t?.(),p.textContent=`Applied ${U.name}. Every other parameter is at its repository default.`,!0):!1}let Y=i.querySelector(".guidance-inactive");Y.querySelector(".use-convex").onclick=()=>n?.();function le(B,U="",k=!0){h=B,i.classList.toggle("is-inactive",!B),Y.hidden=B,Y.querySelector("span").textContent=`These settings apply only to convex guidance. The selected controller (${U}) does not use them, so they are not sent with the run; they are kept for when you switch back.`,Y.querySelector(".use-convex").hidden=!k,F()}return{applyPreset:de,setInUse:le,configure:B=>{s=B,X(),ee().catch(U=>{p.textContent=U.message}),e("/api/convex-presets").then(U=>{o=U,F()}).catch(()=>{o=[],F()})},get:()=>structuredClone(r),set:B=>{r=structuredClone(B??{}),u=null,p.textContent="",X(),t?.()},describe:I}}var eE=[["position_std","Position","m",.5,.001],["velocity_std","Velocity","m/s",2,.01],["attitude_std","Attitude","rad",.1,.001],["angular_velocity_std","Body rate","rad/s",1,.01]],wu=[["wind","Wind + gusts","Airflow in world XYZ"],["sensor_noise","Sensor noise","Measurement uncertainty"],["com_shift","Center of mass","Body-frame offset"]],tE={wind:"Wind + gusts",sensor_noise:"Sensor noise",com_shift:"COM offset"},nE={calm:"\u25EF",breeze:"\u2248",moderate:"\u224B","gusty-crosswind":"\u21F6","com-offset":"\u2295",stress:"\u26A0"},iE=i=>i<.5?"calm":i<3.4?"light":i<8?"moderate":i<10.8?"fresh":"strong";function Vg(i,{onChange:e,api:t}){let n={},s={},r=!1,a=[],o=(U,k,ie,ye,Me,q,W=1)=>`<label class="disturbance-control"><span>${k}<small>${ie}</small></span><div><input type="range" data-path="${U}" data-factor="${W}" min="${ye}" max="${Me}" step="${q}" aria-label="${k} slider"><input type="number" data-path="${U}" data-factor="${W}" min="${ye}" max="${Me}" step="any" required aria-label="${k}"></div></label>`,c=(U,k,ie)=>`<div class="disturbance-card-heading"><label class="switch"><input type="checkbox" name="disturbance" value="${U}"><span class="switch-track" aria-hidden="true"></span><span class="switch-label">Apply ${k.toLowerCase()} to this flight</span></label><span>${ie}</span></div><p class="source-off-note">Off \xB7 these values are kept but not flown. Switch on to apply them.</p>`;i.innerHTML=`<summary class="config-summary section-head"><span class="section-index">03</span><div class="section-title"><h2>Environment</h2><p>Wind and gusts, sensor noise and centre-of-mass offset for this flight.</p></div><span id="disturbanceSummary" class="summary-chips"></span><span class="fold-chevron" aria-hidden="true"></span></summary><div class="config-body">
    <div class="block-head"><div><h3>Conditions</h3><p>Pick a wind preset, then fine-tune. Wind presets leave the centre of mass and the IMU alone.</p></div><button type="button" class="reset-disturbances">Reset parameters</button></div>
    <div class="env-presets" role="group" aria-label="Environment presets"></div>
    <div class="environment-tabs" role="tablist" aria-label="Disturbance source"></div><div class="disturbance-cards">
      <section class="disturbance-card" data-source="wind">${c("wind","Wind + gusts","WORLD XYZ \xB7 Z UP")}<div class="wind-design"><svg class="wind-compass" viewBox="0 0 240 240" role="img" aria-label="Wind vector editor; drag to set horizontal speed and direction"><circle cx="120" cy="120" r="88"/><circle cx="120" cy="120" r="44" class="compass-inner"/><path d="M25 120 H215 M120 25 V215"/><text x="195" y="112">+X</text><text x="129" y="32">+Y</text><text x="28" y="112">\u2212X</text><text x="129" y="212">\u2212Y</text><text x="168" y="164" class="compass-scale">7.5</text><text x="198" y="194" class="compass-scale">15 m/s</text><path class="wind-arrow"/><circle class="wind-tip" r="7"/><circle cx="120" cy="120" r="3" class="wind-origin"/></svg><div><div class="wind-readout"></div><div class="wind-band"></div><p>Drag the arrow tip, or use the sliders.<br>Direction is where the air travels, measured from +X toward +Y.</p><span class="wind-vector"></span></div></div>
      <div class="wind-sliders">${o("windSpeed","Horizontal speed","m/s",0,15,.05)}${o("windHeading","Flow direction","\xB0",0,360,.1)}${o("wind.steady_vector.2","Vertical airflow","m/s \xB7 +up",-15,15,.05)}</div>
      <div class="gust-controls"><h4>Random horizontal gusts</h4><div class="gust-timeline"></div><div class="gust-grid">${o("gust.magnitude","Gust magnitude","m/s",0,15,.1)}${o("gust.duration","Gust duration","s",.05,10,.05)}${o("gust.interval.0","Minimum wait","s",.1,120,.1)}${o("gust.interval.1","Maximum wait","s",.1,120,.1)}</div><p class="hint">Random direction per gust; the wait between gusts is sampled uniformly between the minimum and maximum. The seed fixes the realization.</p></div></section>
      <section class="disturbance-card" data-source="sensor_noise">${c("sensor_noise","Sensor noise","GAUSSIAN \xB7 1\u03C3")}<div class="disturbance-illustration noise-visual"></div><div class="disturbance-fields"><div class="imu-presets"><h4>IMU hardware</h4><p class="hint">A specific sensor. <b>Noise \u03C3</b> applies datasheet-derived white noise to all four channels. <b>Physical chain</b> instead simulates the sensor's bias, drift, temperature, filtering, output rate and latency for attitude and body rate; position and velocity stay as an external source. Either switches sensor noise on; wind and COM are unchanged.</p><div class="imu-cards" role="list"></div></div><div class="imu-nav" hidden><span>Position &amp; velocity source</span><div role="group" aria-label="Position and velocity source"><button type="button" data-imu-nav="inertial" title="Integrate the IMU's own accelerometer and attitude estimate; unaided, so it drifts">Inertial \xB7 integrated from the IMU</button><button type="button" data-imu-nav="fused" title="ArduPilot EKF3-style filter: IMU + TFmini Plus range + MTF-01P optical flow + barometer">Fused \xB7 EKF + range + flow + baro</button><button type="button" data-imu-nav="fused_marker" title="The fused filter plus a downward camera on an AprilTag-style marker at the pad, used during the descent (ArduPilot precision-landing style)">Fused + pad marker</button><button type="button" data-imu-nav="external" title="Drift-free reference with white noise (motion capture / RTK stand-in)">External reference \xB7 white noise</button></div></div><p class="hint imu-physical-note" hidden></p><p class="disturbance-description">Independent observation noise. Each slider sets one standard deviation; physical states are unchanged.</p>${eE.map(([U,k,ie,ye,Me])=>o(`sensor_noise.${U}`,`${k} noise`,ie,0,ye,Me)).join("")}</div></section>
      <section class="disturbance-card" data-source="com_shift">${c("com_shift","Center of mass","BODY FRD \xB7 mm")}<div class="disturbance-illustration com-visual"></div><div class="disturbance-fields"><p class="disturbance-description">Offset sampled uniformly at reset within this box. Body X forward, Y right, Z down; equal bounds fix an axis.</p>${["X","Y","Z"].map((U,k)=>`<div class="com-axis"><b>${U} OFFSET</b><div class="disturbance-pair">${o(`com_offset.range.0.${k}`,`${U} minimum`,"mm",-50,50,.1,1e3)}${o(`com_offset.range.1.${k}`,`${U} maximum`,"mm",-50,50,.1,1e3)}</div></div>`).join("")}</div></section>
    </div><p class="hint disturbance-note">Visuals show the configured vectors and distributions, not a forecast of the sampled run.</p></div>`;let l=i.querySelector("#disturbanceSummary"),u="wind",h=i.querySelector(".environment-tabs");h.innerHTML=wu.map(([U,k,ie])=>`<button type="button" role="tab" id="environment-tab-${U}" aria-controls="environment-panel-${U}" data-source-tab="${U}"><b>${k}</b><small>${ie}</small><span class="source-state"></span></button>`).join("");function d(U,k=!1){u=U,h.querySelectorAll("button").forEach(ie=>{let ye=ie.dataset.sourceTab===U;ie.setAttribute("aria-selected",String(ye)),ie.tabIndex=ye?0:-1,ye&&k&&ie.focus()}),i.querySelectorAll(".disturbance-card").forEach(ie=>{ie.hidden=ie.dataset.source!==U})}wu.forEach(([U])=>{let k=i.querySelector(`[data-source="${U}"]`);k.id=`environment-panel-${U}`,k.setAttribute("role","tabpanel"),k.setAttribute("aria-labelledby",`environment-tab-${U}`)}),h.querySelectorAll("button").forEach(U=>{U.onclick=()=>d(U.dataset.sourceTab),U.onkeydown=k=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(k.key))return;k.preventDefault(),k.stopPropagation();let ie=wu.findIndex(([ye])=>ye===u);d(wu[k.key==="Home"?0:k.key==="End"?2:(ie+(k.key==="ArrowLeft"?2:1))%3][0],!0)}}),d(u);let f=U=>i.querySelector(`input[type=number][data-path="${U}"]`),p=()=>[...i.querySelectorAll("input[name=disturbance]:checked")].map(U=>U.value).sort();function y(U){return U.split(".").reduce((k,ie)=>k?.[ie],s)}function m(U,k){let ie=U.split("."),ye=ie.pop();ie.reduce((Me,q)=>Me[q],s)[ye]=k}function g(){let[U,k]=s.wind.steady_vector;return{speed:Math.hypot(U,k),heading:(Math.atan2(k,U)*180/Math.PI+360)%360}}function x(){let U=g();i.querySelectorAll("[data-path]").forEach(k=>{let ie=k.dataset.path,ye=ie==="windSpeed"?U.speed:ie==="windHeading"?U.heading:y(ie)*Number(k.dataset.factor);k.value=Number(ye.toFixed(ie==="windSpeed"||ie==="windHeading"?2:6))})}function b(){i.querySelectorAll("input[type=number]").forEach(U=>U.setCustomValidity("")),s.gust.interval[0]>s.gust.interval[1]&&f("gust.interval.0").setCustomValidity("Minimum wait must be at most the maximum wait.");for(let U=0;U<3;U++)s.com_offset.range[0][U]>s.com_offset.range[1][U]&&f(`com_offset.range.0.${U}`).setCustomValidity("Minimum offset must be at most the maximum offset.")}let v=["wind","gust"],M=(U,k)=>Array.isArray(U)?Array.isArray(k)&&U.length===k.length&&U.every((ie,ye)=>M(ie,k[ye])):typeof U=="number"?Math.abs(U-k)<1e-6:U===k;function E(U){if(U.selected.includes("wind")!==p().includes("wind"))return!1;if(!r||!U.selected.includes("wind"))return!0;let k=structuredClone(n);for(let[ie,ye]of Object.entries(U.settings))v.includes(ie)&&Object.assign(k[ie],ye);return v.every(ie=>Object.keys(k[ie]).every(ye=>M(k[ie][ye],s[ie][ye])))}function C(U){if(i.querySelector("input[name=disturbance][value=wind]").checked=U.selected.includes("wind"),r){for(let k of v)s[k]=structuredClone(n[k]);for(let[k,ie]of Object.entries(U.settings??{}))v.includes(k)&&Object.assign(s[k],structuredClone(ie));x()}ee()}let S=(U,k,ie="")=>`<span class="chip ${ie}"><b>${Te(U)}</b>${Te(k)}</span>`,w=()=>a.filter(U=>U.group==="wind"),I=()=>a.filter(U=>U.group==="imu"),F=()=>r&&p().includes("sensor_noise")?I().find(U=>Object.entries(U.settings.sensor_noise).every(([k,ie])=>M(ie,s.sensor_noise[k]))):null,H=()=>r&&p().includes("sensor_noise")&&s.sensor_noise.imu_profile||"",G=()=>H()?s.sensor_noise.imu_nav||"external":"",z=()=>["inertial","fused","fused_marker"].includes(G());function X(){let U=p(),k=w().find(E),ie=F(),ye=!!H(),Me=G();if(!U.length)return{text:"Calm air",chips:[S("Calm","air")],preset:k};let q=[];if(U.includes("wind")){let W=r?g():null;q.push(W?S(`${W.speed.toFixed(1)} m/s`,`wind \u2192 ${W.heading.toFixed(0)}\xB0`):S("Wind","on")),r&&s.gust.magnitude>0&&q.push(S(`${s.gust.magnitude} m/s`,"gusts"))}return U.includes("sensor_noise")&&q.push(ie?S(ie.hardware.part,Me==="fused_marker"?"IMU \xB7 fused + pad marker":Me==="fused"?"IMU \xB7 fused (EKF)":Me==="inertial"?"IMU \xB7 inertial nav":ye?"IMU \xB7 physical chain":"IMU"):S(r?`\u03C3 ${s.sensor_noise.position_std} m`:"Noise",r?"position noise":"on")),U.includes("com_shift")&&q.push(S(r?`\xB1${(1e3*Math.max(...s.com_offset.range.flat().map(Math.abs))).toFixed(0)} mm`:"COM","COM box")),{text:(k?k.name+" \xB7 ":"")+U.map(W=>W==="sensor_noise"&&ie?`${ie.hardware.part} IMU${Me==="fused_marker"?" (fused + marker)":Me==="fused"?" (fused)":Me==="inertial"?" (inertial nav)":ye?" (physical)":""}`:tE[W]).join(" \xB7 "),chips:[...k?[S(k.name,"preset","chip-strong")]:[],...q],preset:k}}function re(){let U=X().preset;i.querySelector(".env-presets").innerHTML=w().map(W=>`<button type="button" data-env-preset="${Te(W.id)}" aria-pressed="${U?.id===W.id}" title="${Te(W.summary)}"><i aria-hidden="true">${nE[W.id]??"\u2022"}</i><b>${Te(W.name)}</b><small>${Te(W.summary)}</small></button>`).join(""),i.querySelectorAll("[data-env-preset]").forEach(W=>W.onclick=()=>{let ge=a.find(Re=>Re.id===W.dataset.envPreset);ge&&(C(ge),ge.selected.length&&d("wind"),e?.())});let k=F(),ie=!!H(),ye=W=>W*180/Math.PI,Me=W=>W>=.1?W.toFixed(2):W>=.01?W.toFixed(3):W.toPrecision(2),q=W=>W?`${W.sample_rate_hz} Hz output \xB7 ${W.bandwidth_hz} Hz bandwidth \xB7 ${Number(W.latency_ms.toFixed(1))} ms latency \xB7 \xB1${W.gyro_range_dps} \xB0/s \xB7 ${W.yaw==="gyro"?"gyro yaw":"magnetometer yaw"}`:"";i.querySelector(".imu-cards").innerHTML=I().map(W=>{let ge=W.settings.sensor_noise,Re=W.hardware,Se=k===W;return`<article class="imu-card${Se?" is-active":""}" role="listitem"><div class="sample-tags"><span class="tag ${Re.class==="tactical"?"tag-land":"tag-hover"}">${Te(String(Re.class).toUpperCase())}</span><span class="imu-maker">${Te(Re.maker)}</span></div><h5>${Te(Re.part)}</h5><p>${Te(Re.type)}</p><dl><div><dt>Attitude \u03C3</dt><dd>${Me(ye(ge.attitude_std))}\xB0</dd></div><div><dt>Rate \u03C3</dt><dd>${Me(ye(ge.angular_velocity_std))}\xB0/s</dd></div></dl><p class="imu-chain">${W.physical?`Physical chain: ${Te(q(W.physical))}`:""}</p><details><summary>Datasheet & mapping</summary><ul>${Object.entries(Re.datasheet).map(([Oe,ht])=>`<li><span>${Te(Oe.replaceAll("_"," "))}</span><b>${Te(ht)}</b></li>`).join("")}</ul><p>${Te(Re.mapping)}</p><p class="imu-source">Source: ${Te(Re.source)}</p></details><div class="imu-actions"><button type="button" data-imu-preset="${Te(W.id)}" ${Se&&!ie?"disabled":""}>${Se&&!ie?"\u2713 Noise \u03C3":"Noise \u03C3"}</button><button type="button" data-imu-physical="${Te(W.id)}" ${Se&&ie?"disabled":""} title="Bias, drift, temperature, low-pass, output rate, latency and the onboard attitude filter">${Se&&ie?"\u2713 Physical chain":"Physical chain"}</button></div></article>`}).join("")||'<p class="hint">Hardware presets are not available from this service.</p>',i.querySelectorAll("[data-imu-preset]").forEach(W=>W.onclick=()=>{let ge=a.find(Re=>Re.id===W.dataset.imuPreset);!ge||!r||(i.querySelector("input[name=disturbance][value=sensor_noise]").checked=!0,Object.assign(s.sensor_noise,structuredClone(ge.settings.sensor_noise)),delete s.sensor_noise.imu_profile,delete s.sensor_noise.imu_nav,x(),ee(),e?.())}),i.querySelectorAll("[data-imu-physical]").forEach(W=>W.onclick=()=>{let ge=a.find(Re=>Re.id===W.dataset.imuPhysical);!ge||!r||!ge.hardware.imu_profile||(i.querySelector("input[name=disturbance][value=sensor_noise]").checked=!0,Object.assign(s.sensor_noise,structuredClone(ge.settings.sensor_noise)),s.sensor_noise.imu_profile=ge.hardware.imu_profile,s.sensor_noise.imu_nav="inertial",x(),ee(),e?.())}),i.querySelectorAll("[data-imu-nav]").forEach(W=>W.onclick=()=>{!r||!H()||(s.sensor_noise.imu_nav=W.dataset.imuNav,ee(),e?.())})}function ee(){let U=p();i.querySelectorAll("[data-source]").forEach(O=>{O.classList.toggle("is-active",U.includes(O.dataset.source)),O.classList.toggle("is-off",!U.includes(O.dataset.source))});let k=X();if(l.innerHTML=k.chips.join(""),h.querySelectorAll("button").forEach(O=>{let ae=U.includes(O.dataset.sourceTab),se=O.querySelector(".source-state");se.textContent=ae?"ON":"OFF",se.classList.toggle("is-on",ae)}),re(),!r)return;let ie=H(),ye=z(),Me=i.querySelector(".imu-physical-note"),q=i.querySelector(".imu-nav"),W=O=>i.querySelectorAll(`[data-path="sensor_noise.${O}"]`).forEach(ae=>{ae.disabled=O==="attitude_std"||O==="angular_velocity_std"?!!ie:ye});["attitude_std","angular_velocity_std","position_std","velocity_std"].forEach(W),q.hidden=!ie,q.querySelectorAll("[data-imu-nav]").forEach(O=>O.setAttribute("aria-pressed",String(O.dataset.imuNav===(G()||"external")))),Me.hidden=!ie,Me.textContent=G()==="fused_marker"?"Fused navigation with a pad marker: as fused, plus a downward camera that sees a fiducial at the landing pad below 8 m and gives a pad-relative position fix, which removes the horizontal drift that optical flow alone accumulates. The marker is only visible while it is inside the camera\u2019s 60\xB0 field of view. All four noise sliders below are superseded.":G()==="fused"?"Fused navigation: an ArduPilot EKF3-style filter estimates attitude, velocity and position from the IMU\u2019s raw gyro and accelerometer plus a TFmini Plus rangefinder, an MTF-01P optical-flow sensor and a barometer. Optical flow gives velocity, not position, so horizontal position still drifts slowly; heading is gyro-only. The mission sequencer and controller fly on the estimate; all four noise sliders below are superseded.":ye?"Inertial navigation: position and velocity are integrated from the IMU\u2019s own accelerometer and attitude estimate, unaided, so they drift (metres within seconds for hobby-grade parts). The mission sequencer and controller fly on that estimate; all four noise sliders below are superseded.":ie?"Physical IMU chain active: attitude and body-rate noise below are superseded by the sensor model (bias, drift, filtering, latency). Position and velocity noise still apply as an external drift-free reference.":"";let[ge,Re,Se]=s.wind.steady_vector,Oe=g(),ht=120+ge/15*88,Ue=120-Re/15*88;i.querySelector(".wind-arrow").setAttribute("d",`M120 120 L${ht} ${Ue}`),i.querySelector(".wind-tip").setAttribute("cx",ht),i.querySelector(".wind-tip").setAttribute("cy",Ue),i.querySelector(".wind-readout").textContent=`${Oe.speed.toFixed(2)} m/s \u2192 ${Oe.heading.toFixed(1)}\xB0`,i.querySelector(".wind-band").textContent=`${iE(Oe.speed)} breeze${Math.abs(Se)>.05?` \xB7 ${Se>0?"updraft":"downdraft"} ${Math.abs(Se).toFixed(1)} m/s`:""}`.replace("calm breeze","calm air"),i.querySelector(".wind-vector").textContent=`XYZ [${[ge,Re,Se].map(O=>O.toFixed(2)).join(", ")}] m/s`;let $e=s.gust,Ge=60,Je=($e.interval[0]+$e.interval[1])/2,it=i.querySelector(".gust-timeline"),mt=Math.max(300,Math.round(it.clientWidth||420)),Mt=O=>14+O/Ge*(mt-28),et=Math.max(1,Oe.speed+$e.magnitude,7.5),pt=O=>74-O/et*52,j=[];for(let O=Je;O<Ge;O+=Je)j.push(O);it.innerHTML=`<svg viewBox="0 0 ${mt} 96" role="img" aria-label="Illustrative gust timeline over 60 seconds"><line class="diagram-axis" x1="14" x2="${mt-14}" y1="74" y2="74"/><line class="gust-steady" x1="14" x2="${mt-14}" y1="${pt(Oe.speed)}" y2="${pt(Oe.speed)}"/>${j.map(O=>`<rect class="gust-pulse" x="${Mt(O)}" y="${pt(Oe.speed+$e.magnitude)}" width="${Math.max(1.5,Mt(O+$e.duration)-Mt(O))}" height="${Math.max(0,pt(Oe.speed)-pt(Oe.speed+$e.magnitude))}"/>`).join("")}<rect class="gust-window" x="${Mt(Math.min(Ge,$e.interval[0]))}" y="80" width="${Math.max(1,Mt(Math.min(Ge,$e.interval[1]))-Mt(Math.min(Ge,$e.interval[0])))}" height="5"><title>Wait window between gusts</title></rect><text x="14" y="94">0 s</text><text x="${mt-14}" y="94" text-anchor="end">60 s</text><text x="14" y="12">steady ${Oe.speed.toFixed(1)} m/s + ${$e.magnitude} m/s gusts of ${$e.duration} s, every ${$e.interval[0]}\u2013${$e.interval[1]} s \xB7 illustrative</text></svg>`;let wt=[["position_std","POSITION","m",1],["velocity_std","VELOCITY","m/s",1],["attitude_std","ATTITUDE","\xB0",180/Math.PI],["angular_velocity_std","BODY RATE","\xB0/s",180/Math.PI]],Qe=O=>70+Math.max(0,Math.min(1,(Math.log10(Math.max(O,1e-5))+5)/6))*150;i.querySelector(".noise-visual").innerHTML=`<svg viewBox="0 0 240 155" role="img" aria-label="Configured sensor noise standard deviations on a logarithmic scale">${[1e-5,1e-4,.001,.01,.1,1,10].map(O=>`<line class="diagram-axis" x1="${Qe(O)}" x2="${Qe(O)}" y1="14" y2="128"/><text x="${Qe(O)}" y="140" text-anchor="middle" class="noise-tick">${O>=1?O:`1e${Math.round(Math.log10(O))}`}</text>`).join("")}${wt.map(([O,ae,se,Q],ne)=>{let me=s.sensor_noise[O]*Q,te=22+ne*28;return`<text x="4" y="${te+4}">${ae}</text><rect x="70" y="${te-5}" width="${Math.max(1,Qe(me)-70)}" height="10"/><text x="${Math.min(Qe(me)+4,176)}" y="${te+16}" class="noise-value">\u03C3 ${me>=.01?me.toFixed(3):me.toPrecision(2)} ${se}</text>`}).join("")}<text x="4" y="152">1\u03C3 PER 30 Hz STEP \xB7 LOG SCALE</text></svg>`;let[D,_]=s.com_offset.range,T=O=>120+O*1600,L=O=>77-O*1e3;i.querySelector(".com-visual").innerHTML=`<svg viewBox="0 0 240 155" role="img" aria-label="Body X Y center of mass offset sampling bounds"><path class="diagram-axis" d="M20 77 H220 M120 15 V140"/><rect x="${T(D[0])}" y="${L(_[1])}" width="${Math.max(1,(_[0]-D[0])*1600)}" height="${Math.max(1,(_[1]-D[1])*1e3)}"/><circle cx="120" cy="77" r="4"/><text x="195" y="69">+X</text><text x="129" y="24">+Y</text><text x="25" y="150">XY RANGE \xB7 Z SET BELOW</text></svg>`,b()}i.querySelectorAll("[data-path]").forEach(U=>U.oninput=()=>{if(!r||U.value===""||(U.setCustomValidity(""),!U.checkValidity()))return;let k=U.dataset.path,ie=Number(U.value),ye=g();if(k==="windSpeed"||k==="windHeading"){let Me=k==="windSpeed"?ie:ye.speed,q=(k==="windHeading"?ie:ye.heading)*Math.PI/180;s.wind.steady_vector[0]=Me*Math.cos(q),s.wind.steady_vector[1]=Me*Math.sin(q)}else m(k,ie/Number(U.dataset.factor));i.querySelectorAll(`[data-path="${k}"]`).forEach(Me=>{Me!==U&&(Me.value=ie)}),ee(),e?.()}),i.querySelectorAll("input[name=disturbance]").forEach(U=>U.onchange=()=>{ee(),e?.()}),i.addEventListener("invalid",U=>{let k=U.target.closest("[data-source]");i.open=!0,k&&d(k.dataset.source);let ie=U.target.closest("details");ie&&(ie.open=!0)},!0),new ResizeObserver(()=>{r&&ee()}).observe(i.querySelector(".gust-timeline"));let de=i.querySelector(".wind-compass"),Y=!1;function le(U){if(!r)return;let k=de.getBoundingClientRect(),ie=Math.min(k.width,k.height)/240,ye=(U.clientX-k.left-k.width/2)/ie/88*15,Me=-(U.clientY-k.top-k.height/2)/ie/88*15,q=Math.hypot(ye,Me);q>15&&(ye*=15/q,Me*=15/q),s.wind.steady_vector[0]=ye,s.wind.steady_vector[1]=Me,x(),ee(),e?.()}de.onpointerdown=U=>{U.button===0&&(Y=!0,de.setPointerCapture(U.pointerId),le(U))},de.onpointermove=U=>{Y&&le(U)},de.onpointerup=de.onpointercancel=de.onlostpointercapture=()=>{Y=!1},i.querySelector(".reset-disturbances").onclick=()=>{r&&(s=structuredClone(n),x(),ee(),e?.())};function B(U,k={}){if(i.querySelectorAll("input[name=disturbance]").forEach(ie=>{ie.checked=U.includes(ie.value)}),r){s=structuredClone(n);for(let[ie,ye]of Object.entries(k??{}))Object.assign(s[ie],structuredClone(ye));x()}ee()}return{configure(U){n=structuredClone(U),s=structuredClone(n),r=!!s.wind,i.classList.toggle("presets-only",!r),i.querySelectorAll("[data-path]").forEach(k=>{k.disabled=!r}),i.querySelector(".reset-disturbances").disabled=!r,r?x():i.querySelector(".block-head p").textContent="Source toggles are available. Restart the mission-control service to customize parameters.",ee(),r&&t?.("/api/disturbance-presets").then(k=>{a=k,ee()}).catch(()=>{})},set:B,get(){return r?structuredClone(s):{}},preview(){return r?{selected:p(),settings:structuredClone(s)}:null},describe(){return X().text}}}var Au=9.81,$o=.01;function sE(i,e){let t=(e.omega_max-i)/e.motor_time_constant_s;if(e.motor_torque_limit_nm==null)return Math.min(e.omega_max,i+t*$o);let n=e.aero_torque_at_max_nm*(i/e.omega_max)**2,s=Math.min(e.motor_torque_limit_nm,e.rotor_inertia*t+n);return Math.min(e.omega_max,i+(s-n)/e.rotor_inertia*$o)}function rE(i,e,{arrival:t=0,rotor:n=1}={}){let s=Math.hypot(...i);if(s<=t)return{distance:0,time:0};let[r,a,o]=i.map(y=>y/s),c=Math.hypot(r,a),l=Math.tan(e.max_tilt_deg*Math.PI/180),u=c+l*o,h=Math.max(0,Math.min(1,n))*e.omega_max,d=s,f=0,p=0;for(;d>t&&p<60;){let y=e.full_thrust_n*(h/e.omega_max)**2/e.mass_kg,m=Au*o+Math.sqrt(Math.max(0,Au*Au*(o*o-1)+y*y));u>1e-9&&(m=Math.min(m,Au*l/u)),d-=m*$o,f+=Math.max(d,0)*$o,p+=$o,h=sE(h,e)}return{distance:f,time:p}}function Gg(i,e,t,n){let s={warnings:[],stop:null,braking:null},[r,a,o]=i.position,c=i.velocity,l=Math.hypot(...c);if(t&&o>1&&l>.5){let u=e[0],h=u?.type==="flypass"?Math.min(u.speed_m_s,l):0,d=rE(c,t,{arrival:h,rotor:n}),f=c.map(y=>y/l),p=[r,a,o].map((y,m)=>y+f[m]*d.distance);if(s.braking=d,s.stop=p,p[2]<.5)s.warnings.push({level:"critical",text:`CANNOT STOP ABOVE THE GROUND \xB7 NEEDS ${d.distance.toFixed(0)} M`});else if(u){let y=u.position.map((E,C)=>E-i.position[C]),m=Math.hypot(...y),g=y.map(E=>E/Math.max(m,1e-9)),x=f.map(E=>E*d.distance),b=x.reduce((E,C,S)=>E+C*g[S],0),v=Math.hypot(...x.map((E,C)=>E-b*g[C])),M=Math.max(v,b-m);M>Math.max(u.radius_m,1)&&s.warnings.push({level:"warning",off:M,text:`START TOO FAST FOR WAYPOINT 1 \xB7 ~${M.toFixed(0)} M OFF ROUTE`})}}if(e.length){let u=Bg(i.position,e),h=[i.position,...e.map(d=>d.position)];for(let d=0;d<e.length;d++){let f=Math.min(...u.slice(d*49,d*49+49).map(y=>y[2])),p=Math.min(h[d][2],h[d+1][2]);f<p-1&&s.warnings.push({level:"warning",text:`ROUTE DIPS TO ${f.toFixed(1)} M BEFORE WAYPOINT ${d+1} \xB7 CONVEX HOLDS ${p.toFixed(1)} M`})}}return s}var Ru=180/Math.PI,mf=(i,e)=>i.map((t,n)=>t-e[n]),gf=i=>Math.hypot(...i),aE=i=>(i+540)%360-180,$g=i=>i.some(e=>e.imu);function oE(i,e){let t=Math.abs(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]*e[3]);return 2*Math.acos(Math.min(1,t))*Ru}function Cs(i){let e=i?.imu;if(!e)return null;let t=mf(e.position,i.position),n=mf(e.velocity,i.velocity),s=mf(e.gyro,i.gyro).map(r=>r*Ru);return{position:t,distance:gf(t),attitude:oE(e.quaternion,i.quaternion),velocity:n,speed:gf(n),gyro:s,rate:gf(s)}}var Wg=(i,e)=>["roll","pitch","yaw"].map(t=>aE(i[t]-e[t]));function Xg(i){let e=i?.disturbances?.sensor_noise;if(!e?.enabled)return"Sensor noise off: the IMU reports the PhysX state exactly.";let t=(s,r)=>Number(s??0).toFixed(r),n=e.imu?.enabled===!1?null:e.imu;if(n){let s=`${t(n.sample_rate_hz,0)} Hz output \xB7 ${t(n.bandwidth_hz,0)} Hz bandwidth \xB7 ${t((n.latency_s??0)*1e3,1)} ms latency \xB7 gyro \xB1${t(n.gyro?.range_dps,0)}\xB0/s`;return n.fusion?.enabled?`Physical IMU chain with sensor fusion (EKF3-style filter: IMU + rangefinder + optical flow + barometer${n.fusion.marker?.enabled?" + pad marker":""}) \xB7 ${s}`:n.nav?.enabled?`Physical IMU chain with inertial navigation (position and velocity integrated from its accelerometer and attitude, unaided, so they drift) \xB7 ${s}`:`Physical IMU chain (bias, drift, temperature, filtering) \xB7 ${s} \xB7 position ${t(e.position_std,3)} m / velocity ${t(e.velocity_std,3)} m/s external noise`}return`White noise per control step \xB7 \u03C3 position ${t(e.position_std,3)} m \xB7 attitude ${t((e.attitude_std??0)*Ru,2)}\xB0 \xB7 velocity ${t(e.velocity_std,3)} m/s \xB7 gyro ${t((e.angular_velocity_std??0)*Ru,2)}\xB0/s`}var Cu=180/Math.PI,lE='Bahnschrift, "DIN Alternate", "Segoe UI", Arial, sans-serif',_f=(i,e=1)=>Number.isFinite(i)?i.toFixed(e):"\u2014",qg=[{title:"ALTITUDE",unit:"m",digits:2,zero:!0,series:[{name:"Z",get:i=>i.position[2]},{name:"PLAN",get:i=>i.guidance?.reference_position?.[2]}]},{title:"VELOCITY",unit:"m/s",digits:2,zero:!0,series:[{name:"VERTICAL",get:i=>i.velocity[2]},{name:"HORIZONTAL",get:i=>Math.hypot(i.velocity[0],i.velocity[1])}]},{title:"DISTANCE",unit:"m",digits:2,zero:!0,series:[{name:"PAD",get:i=>i.pad_distance},{name:"CROSS-TRACK",get:i=>i.mission?.cross_track_error_m}]},{title:"THRUST",unit:"N",digits:1,zero:!0,series:[{name:"THRUST",get:i=>i.thrust_n},{name:"COMMAND",get:i=>i.guidance?.thrust_command_n}],limit:i=>i.maxThrust},{title:"BODY RATES \xB7 FRD",unit:"\xB0/s",digits:0,zero:!0,series:[{name:"P",get:i=>i.gyro[0]*Cu},{name:"Q",get:i=>i.gyro[1]*Cu},{name:"R",get:i=>i.gyro[2]*Cu}],bands:i=>i.softLimits},{title:"FIN ANGLES",unit:"\xB0",digits:1,zero:!0,series:["FWD","RIGHT","AFT","LEFT"].map((i,e)=>({name:i,get:t=>t.fin_angles[e]*Cu})),bands:i=>[i.finLimit]},{title:"BUS VOLTAGE",unit:"V",digits:2,series:[{name:"V",get:i=>i.battery?.voltage_v}]},{title:"PACK CURRENT",unit:"A",digits:1,zero:!0,series:[{name:"A",get:i=>i.battery?.current_a}],limit:i=>i.maxCurrent},{title:"IMU POSITION ERROR",unit:"m",digits:3,zero:!0,series:["X","Y","Z"].map((i,e)=>({name:i,get:t=>Cs(t)?.position[e]}))},{title:"IMU VELOCITY ERROR",unit:"m/s",digits:3,zero:!0,series:["X","Y","Z"].map((i,e)=>({name:i,get:t=>Cs(t)?.velocity[e]}))},{title:"IMU ATTITUDE ERROR",unit:"\xB0",digits:2,zero:!0,series:[{name:"ANGLE",get:i=>Cs(i)?.attitude}]},{title:"IMU BODY-RATE ERROR",unit:"\xB0/s",digits:1,zero:!0,series:["P","Q","R"].map((i,e)=>({name:i,get:t=>Cs(t)?.gyro[e]}))}];function Yg(i){let e=i/3,t=10**Math.floor(Math.log10(e)),n=e/t;return(n<1.5?1:n<3.5?2:n<7.5?5:10)*t}function yf(i,{onSeek:e,titles:t}){let n=[],s={},r=[],a=0,o=null,l=(t?t.map(f=>qg.find(p=>p.title===f)):qg).map(f=>{let p=document.createElement("div");p.className="chart";let y=f.series.length>1;p.innerHTML=`<div class="chart-head"><b>${f.title}</b><span class="chart-unit">${f.unit}</span><span class="chart-legend">${f.series.map((M,E)=>`<span>${y?`<i style="background:${di[E]}"></i>${M.name} `:""}<em>\u2014</em></span>`).join("")}</span></div><canvas aria-label="${f.title} time history in ${f.unit}; click to seek"></canvas>`,i.append(p);let m=p.querySelector("canvas"),g=[...p.querySelectorAll("em")],x={spec:f,el:p,canvas:m,values:g,cache:document.createElement("canvas"),cacheKey:""},b=M=>{let E=m.getBoundingClientRect(),C=x.geometry;return C?Math.max(0,Math.min(C.end,(M.clientX-E.left-C.left)/C.plotW*C.end)):0},v=!1;return m.onpointerdown=M=>{v=!0,m.setPointerCapture(M.pointerId),e(b(M))},m.onpointermove=M=>{o=b(M),v&&e(o)},m.onpointerup=m.onpointercancel=()=>{v=!1},m.onpointerleave=()=>{o=null},x});function u(f,p,y){let{spec:m}=f,g=Math.min(devicePixelRatio,2);f.cache.width=Math.round(p*g),f.cache.height=Math.round(y*g);let x=f.cache.getContext("2d");x.setTransform(g,0,0,g,0,0);let b=38,v=8,M=6,E=18,C=p-b-v,S=y-M-E,w=Math.max(n.at(-1)?.t??1,.001),I=1/0,F=-1/0;for(let Y of n)for(let le of m.series){let B=le.get(Y);Number.isFinite(B)&&(I=Math.min(I,B),F=Math.max(F,B))}let H=m.bands?.(s)?.filter(Number.isFinite)??[],G=m.limit?.(s);Number.isFinite(I)||(I=0,F=1),m.zero&&(I=Math.min(I,0),F=Math.max(F,0)),Number.isFinite(G)&&G<F*1.6&&(F=Math.max(F,G));let z=Math.max(0,...H);z&&z<Math.max(Math.abs(I),Math.abs(F))*1.6&&(F=Math.max(F,z),I<0&&(I=Math.min(I,-z))),F-I<1e-6&&(F+=.5,I-=.5);let X=Yg(F-I);I=Math.floor(I/X)*X,F=Math.ceil(F/X)*X;let re=Y=>M+(F-Y)/(F-I)*S,ee=Y=>b+Y/w*C;f.geometry={left:b,plotW:C,end:w,top:M,plotH:S,y:re,x:ee},x.font=`9px ${lE}`,x.fillStyle=It.muted,x.textAlign="right",x.lineWidth=1;for(let Y=I;Y<=F+X/2;Y+=X)x.strokeStyle=Math.abs(Y)<X/1e3&&I<0?"rgba(255,255,255,.22)":It.grid,x.beginPath(),x.moveTo(b,Math.round(re(Y))+.5),x.lineTo(p-v,Math.round(re(Y))+.5),x.stroke(),x.fillText(_f(Y,X<1?Math.max(1,Math.ceil(-Math.log10(X)-1e-9)):0),b-5,re(Y)+3);x.textAlign="center";let de=Yg(w*1.4);for(let Y=0;Y<=w+1e-6;Y+=de)x.fillText(`${_f(Y,de<1?1:0)}s`,ee(Y),y-5);x.setLineDash([3,4]),x.strokeStyle="rgba(250,178,25,.55)";for(let Y of H)for(let le of[Y,-Y])le>=I&&le<=F&&(x.beginPath(),x.moveTo(b,re(le)),x.lineTo(p-v,re(le)),x.stroke());Number.isFinite(G)&&G<=F&&(x.beginPath(),x.moveTo(b,re(G)),x.lineTo(p-v,re(G)),x.stroke()),x.setLineDash([]);for(let Y of r)x.strokeStyle=Y.tone?pu[Y.tone]+"88":"rgba(255,255,255,.16)",x.beginPath(),x.moveTo(ee(Y.t),M),x.lineTo(ee(Y.t),M+S),x.stroke();x.lineWidth=1.6,x.lineJoin="round",m.series.forEach((Y,le)=>{x.strokeStyle=di[le],x.beginPath();let B=!1;for(let U of n){let k=Y.get(U);if(!Number.isFinite(k)){B=!1;continue}B?x.lineTo(ee(U.t),re(k)):x.moveTo(ee(U.t),re(k)),B=!0}x.stroke()})}function h(f){if(i.offsetParent)for(let p of l){let y=p.canvas.clientWidth,m=p.canvas.clientHeight;if(!y||!m)continue;let g=`${a}:${y}:${m}`;p.cacheKey!==g&&(u(p,y,m),p.cacheKey=g);let x=Bn(p.canvas,y,m),b=p.geometry;x.drawImage(p.cache,0,0,y,m);let v=o??f;if(n.length){let M=d(v);x.strokeStyle=o==null?"rgba(244,246,247,.8)":It.secondary,x.lineWidth=1,x.beginPath(),x.moveTo(b.x(v),b.top),x.lineTo(b.x(v),b.top+b.plotH),x.stroke(),p.spec.series.forEach((E,C)=>{let S=E.get(M),w=_f(S,p.spec.digits);p.values[C].textContent!==w&&(p.values[C].textContent=w),Number.isFinite(S)&&(x.fillStyle="#000",x.strokeStyle=di[C],x.lineWidth=2,x.beginPath(),x.arc(b.x(M.t),b.y(S),3.5,0,Math.PI*2),x.fill(),x.stroke())}),p.el.classList.toggle("hovering",o!=null)}else p.values.forEach(M=>{M.textContent="\u2014"})}}function d(f){let p=0,y=n.length-1;for(;p<y;){let m=Math.ceil((p+y)/2);n[m].t<=f?p=m:y=m-1}return n[p]}return{setData(f,p,y){n=f,s=p,r=y,a++},draw:h,hoverTime:()=>o,canvases:()=>l.map(f=>f.canvas)}}var Zg="edfMissionControl.preflight.v1",xf=[["POWER",[["charge","Battery charged & balanced",i=>`${i.cells}S pack reads ${(i.cells*4.2).toFixed(1)} V when full; plan assumes ${i.soc}% SOC`],["pack_secure","Pack secured","Strap tight, main connector fully seated, leads clear of the EDF intake"],["servo_supply","Servo supply verified","Regulated 6 V at the servo rail with all four fins moving"]]],["SENSORS",[["imu_alignment","IMU alignment","Autopilot board orientation matches body FRD; level calibration done on a flat surface"],["gyro_bias","Gyro at rest","Vehicle still after power-up; body rates read \u2248 0 \xB0/s on the ground station"],["heading","Heading reference","Compass or mocap heading agrees with the pad axes"],["position_fix","Position & altitude fix","Position source healthy; altitude reads \u2248 0 m on the pad"]]],["ACTUATORS",[["fin_neutral","Fins at neutral","All four fins centred at 0\xB0 with the servo horns square"],["fin_sweep","Fin sweep & sign",i=>`Command \xB1${i.finLimit.toFixed(0)}\xB0 on FWD / RIGHT / AFT / LEFT; motion matches the mixer sign with no binding`],["linkages","Linkages tight","Horns, pushrods and hinge pins secure with no play"]]],["PROPULSION",[["edf_inspect","EDF rotor & duct","No chipped blades or debris in the intake; duct and motor mount screws tight"],["esc_calibration","ESC calibrated","Throttle endpoints set; rotor spins the correct way at idle"]]],["AIRFRAME",[["mass_cg","Mass & CG",i=>`Weigh the assembled vehicle (simulation assumes ${i.mass.toFixed(3)} kg); CG on the thrust axis`],["structure","Structure & legs","Carbon tubes, fasteners and landing legs undamaged"]]],["RANGE & SAFETY",[["range_clear","Range clear","Personnel behind the safety line; landing pad marked at the origin"],["kill_switch","Kill switch tested","Disarm and RC failsafe both drop throttle to zero"],["telemetry_link","Telemetry & logging","Ground station connected; onboard log recording"],["mission_plan","Mission plan reviewed",i=>`Controller ${i.controller}; route, disturbances and initial state match the test card`]]]],Pu=xf.flatMap(([,i])=>i);function cE(){try{return JSON.parse(localStorage.getItem(Zg))??{}}catch{return{}}}function jg(i){try{localStorage.setItem(Zg,JSON.stringify(i))}catch{}}var uE=i=>new Date(i).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"});function Kg(i,{context:e,onChange:t}){let n=cE();i.innerHTML=`<div class="panel-title">PRE-FLIGHT CHECKLIST <span id="checklistCount"></span></div><div class="card-body">
    <div class="bar"><i id="checklistBar"></i></div>
    <div class="checklist-groups">${xf.map(([c,l],u)=>`<div class="check-group"><div class="section-label">${c} <span id="checklistGroup${u}"></span></div>
      ${l.map(([h,d])=>`<label class="check-item"><input type="checkbox" data-check="${h}"><div><b>${d}</b><small data-detail="${h}"></small></div><time data-time="${h}"></time></label>`).join("")}</div>`).join("")}</div>
    <div class="checklist-actions"><span class="hint">Operator checks, saved in this browser. Hardware is not queried.</span><button type="button" id="checklistReset">RESET</button></div></div>`;let s=(c,l)=>i.querySelector(`[data-${c}="${l}"]`);function r(){let c=e();for(let[h,,d]of Pu){let f=typeof d=="function"?d(c):d,p=s("detail",h);p.textContent!==f&&(p.textContent=f),s("time",h).textContent=h in n?uE(n[h]):""}let{done:l,total:u}=a();i.querySelector("#checklistCount").textContent=`${l} / ${u} COMPLETE`,i.querySelector("#checklistBar").style.width=`${l/u*100}%`,i.classList.toggle("complete",l===u),xf.forEach(([,h],d)=>{i.querySelector(`#checklistGroup${d}`).textContent=`${h.filter(([f])=>f in n).length} / ${h.length}`})}function a(){return{done:Pu.filter(([c])=>c in n).length,total:Pu.length}}i.addEventListener("change",c=>{let l=c.target.dataset?.check;l&&(c.target.checked?n[l]=Date.now():delete n[l],jg(n),r(),t?.())});let o=()=>Pu.forEach(([c])=>{s("check",c).checked=c in n});return i.querySelector("#checklistReset").onclick=()=>{n={},jg(n),o(),r(),t?.()},o(),r(),{update:r,summary:a}}var vf=2*Math.PI,Jg=vf/60*.005,Wo=i=>Number.isFinite(i?.rotor_rpm)?Math.max(0,i.rotor_rpm):0;function Qg(i){let e=new Float64Array(0);return{setFrames(t){e=new Float64Array(t.length);for(let n=1;n<t.length;n++){let s=Math.max(0,t[n].t-t[n-1].t);e[n]=(e[n-1]+s*(Wo(t[n-1])+Wo(t[n]))/2*Jg)%vf}},update(t){if(!i)return;if(!t){i.rotation.z=0;return}let{a:n,b:s,alpha:r,index:a}=t,c=Math.max(0,s.t-n.t)*(Wo(n)*r+(Wo(s)-Wo(n))*r*r/2);i.rotation.z=((e[a]??0)+c*Jg)%vf}}}var Wn={green:"#48dba2",blue:"#6ab7ff",amber:"#fab219",white:"#f4f6f7",muted:"#8d9da7",grid:"#263037"},fi=Number.isFinite,an=(i,e=2)=>fi(i)?i.toFixed(e):"\u2014",e0=i=>fi(i?.thrust_available_n)&&fi(i?.thrust_command_n)?i.thrust_available_n-i.thrust_command_n:null;function hE(i,e){let t=[],n=[],s=new Set,r=0,a=0,o=null;for(let c of i){if(c.t>e)break;let l=c.guidance,u=l?.tracking_error_m;t.push({t:c.t,error:u,energy:c.battery?.energy_wh,reserve:e0(l)}),fi(u)&&(r+=u*u,a++,o=Math.max(o??0,u)),l?.plan&&l.solver&&!s.has(l.plan_id)&&(s.add(l.plan_id),n.push({t:c.t,id:l.plan_id,ms:l.solver.solve_ms,energy:l.solver.objective==="energy"?l.solver.energy_wh:null,status:l.solver.status,fallback:l.solver.mode==="soft_terminal"}))}return{history:t,solves:n,rms:a?Math.sqrt(r/a):null,peak:o}}function t0(i,e){let t=[["solver","01 / SOLVER","Solve history","Bar height = solve time per recorded plan. Failed attempts are not recorded.",'<span class="diag-green">\u25CF Solved</span><span class="diag-amber">! Fallback / other status</span>'],["tracking","02 / TRACKING","Position error","Recorded tracking error \xB7 statistics through replay time",'<span class="diag-blue">\u2501 Error magnitude</span><span>\u2504 Sample RMS</span>'],["energy","03 / ENERGY","Energy history","Plan cost covers its horizon at solve time; it is not cumulative.",'<span>\u2501 Consumed</span><span class="diag-green">\u25C7 Plan cost at solve</span>'],["reserve","04 / THRUST","Control reserve","Gauge = commanded / available. History = available \u2212 commanded; zero means no reserve.",'<span class="diag-green">+ Reserve</span><span class="diag-amber">\u2212 Demand exceeds available</span>']];i.innerHTML=t.map(([u,h,d,f,p])=>`<section class="diagnostic-card" data-card="${u}" aria-label="${d}">
    <div class="diagnostic-heading"><div><span class="eyebrow">${h}</span><h3>${d}</h3></div><strong data-summary="${u}">\u2014</strong></div>
    <div class="diagnostic-legend">${p}</div>
    ${u==="reserve"?'<div class="reserve-gauge" role="img" aria-label="Thrust demand unavailable"><i></i><b></b></div>':""}
    <canvas data-diagnostic="${u}" role="img" aria-label="${d} through replay time"></canvas>
    <div class="diagnostic-detail" data-detail="${u}"></div><p class="diagnostic-note">${f}</p>
    ${u==="solver"?'<div class="solve-jumps" aria-label="Recent recorded plans"></div>':""}
  </section>`).join("");let n=Object.fromEntries([...i.querySelectorAll("canvas")].map(u=>[u.dataset.diagnostic,u])),s=Object.fromEntries([...i.querySelectorAll("[data-summary]")].map(u=>[u.dataset.summary,u])),r=Object.fromEntries([...i.querySelectorAll("[data-detail]")].map(u=>[u.dataset.detail,u])),a=i.querySelector(".reserve-gauge"),o=i.querySelector(".solve-jumps"),c="",l=(u,h)=>{u.textContent!==h&&(u.textContent=h)};return{update(u,h,d){let{history:f,solves:p,rms:y,peak:m}=hE(u,d),g=h.guidance,x=e0(g),b=fi(g.thrust_command_n)&&g.thrust_available_n>0?g.thrust_command_n/g.thrust_available_n:null;l(s.solver,`${an(g.solver?.solve_ms,0)} ms`),l(r.solver,`${p.length} recorded ${p.length===1?"plan":"plans"} \xB7 ${p.filter(M=>M.fallback).length} fallback \xB7 ${g.solver?.iterations??"\u2014"} iterations in last plan`),l(s.tracking,`${an(g.tracking_error_m)} m`),l(r.tracking,`Sample RMS ${an(y,3)} m \xB7 peak ${an(m,3)} m`),l(s.energy,`${an(h.battery?.energy_wh)} Wh used`),l(r.energy,g.solver?.objective==="delta_v"?"\u0394v objective \xB7 no energy cost recorded for this plan":`Last plan ${an(g.solver?.energy_wh)} Wh \xB7 consumed ${an(h.battery?.energy_wh)} Wh`),l(s.reserve,`${an(x,1)} N ${x==null?"":x<0?"deficit":"reserve"}`),s.reserve.classList.toggle("diag-amber",x!=null&&x<0),l(r.reserve,`Command ${an(g.thrust_command_n,1)} / available ${an(g.thrust_available_n,1)} N \xB7 demand ${an(b==null?null:b*100,0)}%`),a.querySelector("i").style.width=`${b==null?0:Math.max(0,Math.min(1,b))*100}%`,a.dataset.over=String(x!=null&&x<0),a.dataset.known=String(b!=null),a.setAttribute("aria-label",b==null?"Thrust demand unavailable":`Command uses ${an(b*100,0)} percent of available thrust; ${an(x,1)} newtons headroom`);let v=p.slice(-8).map(M=>`${M.id}:${M.t}:${M.ms}:${M.status}:${M.fallback}`).join("|");v!==c&&(c=v,o.replaceChildren(...p.slice(-8).map(M=>{let E=document.createElement("button");E.type="button";let C=M.fallback||M.status!=="Solved";return E.textContent=`${C?"!":"\u25CF"} #${M.id}`,E.dataset.warning=String(C),E.title=`Seek to plan #${M.id} at ${an(M.t)} s \xB7 ${M.fallback?"fallback":M.status??"unknown"} \xB7 ${an(M.ms,0)} ms`,E.setAttribute("aria-label",E.title),E.onclick=()=>e(M.t),E}))),dE(n.solver,p,d),bf(n.tracking,f.map(M=>[M.t,M.error]),[],d,{color:Wn.blue,rms:y,minimum:.01}),bf(n.energy,f.map(M=>[M.t,M.energy]),p.map(M=>[M.t,M.energy]),d,{color:Wn.white,minimum:.1}),bf(n.reserve,f.map(M=>[M.t,M.reserve]),[],d,{color:Wn.green,minimum:1,signed:!0});for(let M of Object.keys(n))n[M].setAttribute("aria-label",`${s[M].textContent}. ${r[M].textContent}. History through ${an(d)} seconds.`)}}}function n0(i,e,t,n){let s=i.clientWidth,r=i.clientHeight;if(!s||!r)return null;let a=Bn(i,s,r),o=46,c=s-14,l=12,u=r-26,h=p=>o+p/Math.max(e,1)*(c-o),d=p=>u-(p-t)/(n-t)*(u-l);a.font="10px Consolas, monospace",a.lineWidth=1;let f=n-t<.1?3:n-t<1?2:1;for(let p=0;p<=2;p++){let y=t+(n-t)*p/2,m=d(y);a.strokeStyle=Wn.grid,a.beginPath(),a.moveTo(o,m),a.lineTo(c,m),a.stroke(),a.fillStyle=Wn.muted,a.textAlign="right",a.fillText(an(y,f),o-6,m+3),a.textAlign="center",a.fillText(`${an(Math.max(e,1)*p/2,1)}s`,o+(c-o)*p/2,r-7)}return a.save(),a.beginPath(),a.rect(o-1,l-1,c-o+2,u-l+2),a.clip(),{ctx:a,x:h,y:d,left:o,right:c,top:l,bottom:u,w:s,h:r}}function i0(i,e="No recorded samples yet"){i.ctx.fillStyle=Wn.muted,i.ctx.textAlign="center",i.ctx.fillText(e,(i.left+i.right)/2,(i.top+i.bottom)/2)}function dE(i,e,t){let n=e.filter(a=>fi(a.ms)),s=n.reduce((a,o)=>Math.max(a,o.ms),1),r=n0(i,t,0,s*1.25);if(r){n.length||i0(r,"Awaiting a recorded solve");for(let a=0;a<n.length;a++){let o=n[a],c=o.fallback||o.status!=="Solved",l=Math.min(a?o.t-n[a-1].t:1/0,a+1<n.length?n[a+1].t-o.t:1/0),u=Math.max(1,Math.min(14,(r.x(l)-r.x(0))*.65)),h=Math.min(r.right-u/2,Math.max(r.left+u/2,r.x(o.t)));r.ctx.fillStyle=c?Wn.amber:Wn.green,r.ctx.globalAlpha=a===n.length-1?1:.55,r.ctx.fillRect(h-u/2,r.y(o.ms),u,r.bottom-r.y(o.ms)),r.ctx.globalAlpha=1,c&&(r.ctx.textAlign="center",r.ctx.fillText("!",h,r.y(o.ms)-4))}r.ctx.restore()}}function Iu(i,e,t,n=!1){i.ctx.strokeStyle=t,i.ctx.lineWidth=1.8,i.ctx.setLineDash(n?[4,3]:[]),i.ctx.beginPath();let s=!1;for(let[r,a]of e){if(!fi(a)){s=!1;continue}s?i.ctx.lineTo(i.x(r),i.y(a)):i.ctx.moveTo(i.x(r),i.y(a)),s=!0}i.ctx.stroke(),i.ctx.setLineDash([])}function bf(i,e,t,n,s){let r=[...e,...t].map(h=>h[1]).filter(fi),a=0,o=s.minimum;for(let h of r)a=Math.min(a,h),o=Math.max(o,h);let c=(o-a)*.15,l=n0(i,n,a<0?a-c:0,o+c);if(!l)return;r.length||i0(l),s.signed&&(l.ctx.fillStyle="rgba(72,219,162,.06)",l.ctx.fillRect(l.left,l.top,l.right-l.left,l.y(0)-l.top),l.ctx.fillStyle="rgba(250,178,25,.12)",l.ctx.fillRect(l.left,l.y(0),l.right-l.left,l.bottom-l.y(0)),Iu(l,[[0,0],[Math.max(n,1),0]],Wn.muted,!0)),fi(s.rms)&&Iu(l,[[0,s.rms],[n,s.rms]],Wn.muted,!0),Iu(l,e,s.color),s.signed&&(l.ctx.save(),l.ctx.beginPath(),l.ctx.rect(l.left,l.y(0),l.right-l.left,l.bottom-l.y(0)),l.ctx.clip(),Iu(l,e,Wn.amber),l.ctx.restore());for(let[h,d]of t){if(!fi(d))continue;let f=l.x(h),p=l.y(d);l.ctx.beginPath(),l.ctx.moveTo(f,p-3),l.ctx.lineTo(f+3,p),l.ctx.lineTo(f,p+3),l.ctx.lineTo(f-3,p),l.ctx.closePath(),l.ctx.strokeStyle=Wn.green,l.ctx.lineWidth=1.2,l.ctx.stroke()}let u=e.at(-1);fi(u?.[1])&&(l.ctx.beginPath(),l.ctx.arc(l.x(u[0]),l.y(u[1]),3,0,2*Math.PI),l.ctx.fillStyle=s.signed&&u[1]<0?Wn.amber:s.color,l.ctx.fill()),l.ctx.restore()}var en={plan:"#48dba2",actual:"#f4f6f7",reference:"#6ab7ff",warning:"#fab219",grid:"#20292f",muted:"#8d9da7"},Pn=(i,e=1)=>Number.isFinite(i)?i.toFixed(e):"\u2014";function r0(i){return i.filter(e=>e.guidance?.plan?.positions?.length).map(e=>({t:e.t,id:e.guidance.plan_id,...e.guidance.plan}))}function Mf(i,e){let t=0,n=i.length;for(;t<n;){let s=t+n>>>1;i[s].t<=e?t=s+1:n=s}return i[t-1]??null}function fE(i){return i?i.phase==="SPOOL_UP"?{label:"SPOOLING \xB7 AWAITING PLAN",tone:"idle"}:i.phase==="HOLD"?{label:"HOLD \xB7 PLAN UNAVAILABLE",tone:"warning"}:i.phase==="TERMINAL_DESCENT"||i.phase==="LANDED"?{label:"LAST PLAN \xB7 "+i.phase.replaceAll("_"," "),tone:"idle"}:i.solver?i.solver.mode==="soft_terminal"?{label:"FALLBACK \xB7 MAXIMUM BRAKING",tone:"warning"}:{label:(i.solver.status??"STATUS NOT RECORDED").toUpperCase(),tone:i.solver.status==="Solved"?"good":"warning"}:{label:"AWAITING SOLVER",tone:"idle"}:{label:"NO GUIDANCE",tone:"idle"}}function pE(i){let e=i?.cost_terms;if(!e||typeof e!="object")return"";let t=i.objective==="delta_v"?"m/s":"Wh";return Object.entries(e).filter(([,n])=>Number.isFinite(n)&&Math.abs(n)>=5e-4).sort((n,s)=>Math.abs(s[1])-Math.abs(n[1])).map(([n,s])=>`${n.replace("_","-")} ${Pn(s,2)} ${t}`).join(", ")}function a0(i,{onSeek:e}){i.innerHTML=`
    <div class="optimization-heading"><div><div class="eyebrow">RECEDING-HORIZON GUIDANCE</div><h2>Convex optimization</h2></div><span class="optimization-status" data-field="status"></span></div>
    <div class="optimization-toolbar"><span data-field="identity">Awaiting first plan</span><div><button type="button" data-action="previous" aria-label="Previous optimization plan">\u2190 PREV PLAN</button><button type="button" data-action="next" aria-label="Next optimization plan">NEXT PLAN \u2192</button></div></div>
    <div class="optimization-metrics">${[["cost","PLANNED ENERGY"],["remaining","TIME TO GATE"],["error","TRACKING ERROR"],["solve","LAST SOLVE"],["gap","RELAXATION GAP"],["headroom","THRUST HEADROOM"]].map(([f,p])=>`<div><span data-label="${f}">${p}</span><strong data-field="${f}">\u2014</strong></div>`).join("")}</div>
    <div class="guidance-diagnostics" aria-label="Solver, tracking, energy and thrust diagnostics"></div>
    <div class="optimization-legend"><span><i class="plan"></i>Optimized plan</span><span><i class="actual"></i>Flown to replay time</span><span><i class="reference"></i>Current reference</span><span><i class="available"></i>Available thrust now</span></div>
    <div class="optimization-plots">
      <figure><figcaption>GROUND TRACK <span>X / Y \xB7 m \xB7 equal scale</span></figcaption><canvas data-plot="track" role="img" aria-label="Top view of optimized trajectory, flown path, current reference and landing pad"></canvas></figure>
      <figure><figcaption>ALTITUDE HORIZON <span>Z \xB7 m</span></figcaption><canvas data-plot="altitude" role="img" aria-label="Planned and recorded altitude against mission time"></canvas></figure>
      <figure><figcaption>THRUST HORIZON <span>N</span></figcaption><canvas data-plot="thrust" role="img" aria-label="Planned thrust slack and actual thrust against mission time, with current available thrust"></canvas></figure>
    </div>
    <div class="optimization-footnote" data-field="note"></div>`;let t=f=>i.querySelector(`[data-field="${f}"]`),n=(f,p)=>{let y=t(f);y.textContent!==p&&(y.textContent=p)},s=i.querySelector('[data-action="previous"]'),r=i.querySelector('[data-action="next"]'),a=Object.fromEntries([...i.querySelectorAll("canvas")].map(f=>[f.dataset.plot,f])),o=t0(i.querySelector(".guidance-diagnostics"),e),c=[],l=[],u=0,h=[0,0,0];s.onclick=()=>{let f=l.filter(p=>p.t<u-.001).at(-1);f&&e(f.t)},r.onclick=()=>{let f=l.find(p=>p.t>u+.001);f&&e(f.t)};function d(f,p){u=p;let y=f?.guidance;if(i.hidden=!y,!y)return;let m=Mf(l,u),g=y.solver,x=fE(y);n("status",x.label),t("status").dataset.tone=x.tone,i.querySelector(".optimization-legend .plan").style.borderColor=x.tone==="warning"?en.warning:en.plan;let b=y.phase?.replaceAll("_"," ")??"UNKNOWN PHASE";n("identity",m?`PLAN #${m.id} \xB7 ${b} \xB7 age ${Pn(u-m.t)} s`:b),s.disabled=!l.some(w=>w.t<u-.001),r.disabled=!l.some(w=>w.t>u+.001),i.querySelector('[data-label="cost"]').textContent=g?.objective==="delta_v"?"PLANNED \u0394V":"PLANNED ENERGY",n("cost",g?.objective==="delta_v"?`${Pn(g.delta_v_m_s,2)} m/s`:`${Pn(g?.energy_wh,2)} Wh`),n("remaining",`${Pn(y.time_to_go_s)} s`),n("error",`${Pn(y.tracking_error_m,2)} m`),n("solve",`${Pn(g?.solve_ms,0)} ms`),n("gap",`${Pn(Number.isFinite(g?.convexification_gap)?g.convexification_gap*100:null,3)} %`);let v=Number.isFinite(y.thrust_available_n)&&Number.isFinite(y.thrust_command_n)?y.thrust_available_n-y.thrust_command_n:null;n("headroom",`${Pn(v)} N`),t("headroom").classList.toggle("negative",v!=null&&v<0);let M=[g&&Number.isFinite(g.route_deviation_m)?`planned route deviation ${Pn(g.route_deviation_m,2)} m`:null,Number.isFinite(y.cross_track_m)?`flown cross-track ${Pn(y.cross_track_m,2)} m`:null].filter(Boolean).join(" \xB7 "),E=pE(g),C=g?`${g.solves??"\u2014"} candidate solves \xB7 ${g.iterations??"\u2014"} iterations \xB7 terminal miss ${Pn(g.terminal_miss_m,2)} m \xB7 corridor excess ${Pn(g.corridor_excess_m,3)} m${M?" \xB7 "+M:""}. ${E?"Cost terms: "+E+". ":""}`:"";if(n("note",(x.tone==="warning"&&g?.mode==="soft_terminal"?"No safe terminal plan; showing the maximum-braking fallback. ":"")+C+(m?"Thrust plan shows the optimizer\u2019s slack \u03C3. Amber line is current available thrust, not a recorded optimization bound. Headroom = available \u2212 commanded thrust.":"Waiting for the first recorded trajectory. Live reference and vehicle position are shown when available.")),!i.getClientRects().length)return;o.update(c,f,u);let S=c.filter(w=>w.t<=u);mE(a.track,m,S,f,x,h),s0(a.altitude,"altitude",m,S,f,u,x),s0(a.thrust,"thrust",m,S,f,u,x)}return{setData(f,p,y=[0,0,0]){c=f,l=p,h=y},update:d}}function o0(i,e,t,n=!1){let s=i.clientWidth,r=i.clientHeight;if(!s||!r)return null;let a=Bn(i,s,r),o={left:42,right:s-16,top:16,bottom:r-32},[c,l]=e,[u,h]=t;if(n){let p=Math.max((l-c)/(o.right-o.left),(h-u)/(o.bottom-o.top)),y=(c+l)/2,m=(u+h)/2,g=p*(o.right-o.left)/2,x=p*(o.bottom-o.top)/2;c=y-g,l=y+g,u=m-x,h=m+x}let d=p=>o.left+(p-c)/(l-c)*(o.right-o.left),f=p=>o.bottom-(p-u)/(h-u)*(o.bottom-o.top);a.font="10px Consolas, monospace",a.lineWidth=1;for(let p=0;p<=3;p++){let y=o.left+(o.right-o.left)*p/3,m=o.bottom-(o.bottom-o.top)*p/3;a.strokeStyle=en.grid,a.beginPath(),a.moveTo(y,o.top),a.lineTo(y,o.bottom),a.moveTo(o.left,m),a.lineTo(o.right,m),a.stroke(),a.fillStyle=en.muted,a.textAlign="center",a.fillText(Pn(c+(l-c)*p/3),y,r-15),a.textAlign="right",a.fillText(Pn(u+(h-u)*p/3),o.left-6,m+3)}return a.save(),a.beginPath(),a.rect(o.left,o.top,o.right-o.left,o.bottom-o.top),a.clip(),{ctx:a,x:d,y:f,box:o,w:s,h:r}}function sr(i,e,t,n=[],s=1.8){i.ctx.strokeStyle=t,i.ctx.lineWidth=s,i.ctx.setLineDash(n),i.ctx.beginPath();let r=!1;for(let[a,o]of e){if(!Number.isFinite(a)||!Number.isFinite(o)){r=!1;continue}r?i.ctx.lineTo(i.x(a),i.y(o)):i.ctx.moveTo(i.x(a),i.y(o)),r=!0}i.ctx.stroke(),i.ctx.setLineDash([])}function Xo(i,e,t,n=!1){if(!e?.every(Number.isFinite))return;let s=i.ctx;s.beginPath(),s.arc(i.x(e[0]),i.y(e[1]),n?5:3.5,0,Math.PI*2),s.fillStyle=n?"#07090b":t,s.fill(),s.strokeStyle=t,s.lineWidth=1.5,s.stroke()}function Sf(i,e=2){let t=1/0,n=-1/0;for(let r of i)Number.isFinite(r)&&(t=Math.min(t,r),n=Math.max(n,r));if(!Number.isFinite(t))return[0,e];let s=Math.max(e,n-t)*.15;return[t-s,n+s]}function mE(i,e,t,n,s,r){let a=[...e?.positions??[],...t.map(h=>h.position),[r[0]-1.25,r[1]-1.25,0],[r[0]+1.25,r[1]+1.25,0],n.guidance.reference_position].filter(Boolean),o=o0(i,Sf(a.map(h=>h[0])),Sf(a.map(h=>h[1])),!0);if(!o)return;let c=s.tone==="warning"?en.warning:en.plan;o.ctx.strokeStyle=en.muted,o.ctx.beginPath(),o.ctx.arc(o.x(r[0]),o.y(r[1]),Math.abs(o.x(1.25)-o.x(0)),0,Math.PI*2),o.ctx.stroke(),sr(o,t.map(h=>[h.position[0],h.position[1]]),en.actual),sr(o,(e?.positions??[]).map(h=>[h[0],h[1]]),c,[5,4],2);let l=n.position.slice(0,2),u=n.guidance.reference_position?.slice(0,2);u&&(sr(o,[l,u],en.reference,[2,3]),Xo(o,u,en.reference,!0)),Xo(o,l,en.actual),Xo(o,e?.positions.at(-1)?.slice(0,2),c,!0),o.ctx.restore(),o.ctx.fillStyle=en.muted,o.ctx.textAlign="left",o.ctx.fillText("\u25CB pad / plan endpoint   \u25CF vehicle",12,o.h-2)}function s0(i,e,t,n,s,r,a){let o=e==="thrust",c=t?.times??[],l=t?t.t+(c.at(-1)??0):r+1,u=t?.t??Math.max(0,r-5),h=Math.max(u+1,l,r),d=n.filter(b=>b.t>=u),f=c.map((b,v)=>[t.t+b,o?t.thrust_n?.[v]:t.positions[v]?.[2]]),p=d.map(b=>[b.t,o?b.thrust_n:b.position[2]]),y=s.guidance.thrust_available_n,m=[...f,...p].map(b=>b[1]);o&&Number.isFinite(y)&&m.push(y);let g=Sf([0,...m]),x=o0(i,[u,h],[m.some(b=>b<0)?g[0]:0,g[1]]);x&&(o&&Number.isFinite(y)&&sr(x,[[u,y],[h,y]],en.warning,[3,4],1),sr(x,f,a.tone==="warning"?en.warning:en.plan,[5,4],2),sr(x,p,en.actual),sr(x,[[r,g[0]],[r,g[1]]],"#647987",[2,3],1),Xo(x,[s.t,o?s.thrust_n:s.position[2]],en.actual),o||Xo(x,[s.t,s.guidance.reference_position?.[2]],en.reference,!0),x.ctx.restore(),x.ctx.fillStyle=en.muted,x.ctx.textAlign="left",x.ctx.fillText("MISSION TIME / s",12,x.h-2))}var gE=Math.PI/180,Jn={fovDeg:60,markerSizeM:.4,altMaxM:8,altMinM:.3,mountDownM:.15,padSizeM:1.6,maxHeightM:12};function _E([i,e,t,n]){return[[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t)],[2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e)],[2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)]]}function yE(i,e,t=Jn.mountDownM){let n=_E(e),s=[0,1,2].map(r=>i[r]-t*n[r][2]);return{toFrd(r){let a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=[0,1,2].map(c=>n[0][c]*a[0]+n[1][c]*a[1]+n[2][c]*a[2]);return[o[0],-o[1],-o[2]]},height:s[2],origin:s,groundHit(r){let a=[r[0],-r[1],-r[2]],o=[0,1,2].map(l=>n[l][0]*a[0]+n[l][1]*a[1]+n[l][2]*a[2]);if(o[2]>=-1e-6)return null;let c=-s[2]/o[2];return[s[0]+c*o[0],s[1]+c*o[1]]}}}var xE=[{cell:1,salt:7919,keep:.5,base:58},{cell:.25,salt:0,keep:.45,base:70}],vE=(i,e,t)=>AE(i+t,e-3*t);function bE(i,e,t,n){return i[2]<=.001?null:[t+e*i[1]/i[2],n-e*i[0]/i[2]]}var SE=(i,e)=>.5*i/Math.tan(e*gE/2);function ME(i){let e=i?.disturbances?.sensor_noise?.imu?.fusion,t=e?.marker;return{enabled:!!e?.enabled,markerEnabled:!!t?.enabled,fovDeg:t?.fov_deg??Jn.fovDeg,markerSizeM:t?.marker_size_m??Jn.markerSizeM,altMaxM:t?.alt_max_m??Jn.altMaxM,altMinM:t?.alt_min_m??Jn.altMinM,mountDownM:e?.mount_down_m??Jn.mountDownM,maxHeightM:e?.flow?.max_height_m??Jn.maxHeightM,minPixels:t?.min_pixels??24,resolutionPx:t?.resolution_px??640}}function EE(i,e=Jn){if(!i||!i.marker_enabled)return{key:"off",label:"PAD MARKER OFF"};if(!i.marker_in_fov)return{key:"out_of_view",label:"MARKER OUT OF VIEW"};if(!i.marker_in_window){let t=e.altMinM??Jn.altMinM,n=e.altMaxM??Jn.altMaxM;return{key:"outside_window",label:i.height_est_m<t?`MARKER OFF BELOW ${t} m`:`MARKER VISIBLE \xB7 USED BELOW ${n} m`}}return i.marker_valid?i.accepted?.marker?{key:"tracking",label:"MARKER TRACKING"}:{key:"rejected",label:"DETECTED \xB7 REJECTED BY GATE"}:{key:"not_detected",label:"MARKER NOT DETECTED"}}function l0(i,e=30,t=60){if(!i)return[0,0];let n=-i[0]*e,s=-i[1]*e,r=Math.hypot(n,s);return r>t&&(n*=t/r,s*=t/r),[n,s]}var TE=(i,e=Jn.maxHeightM)=>Math.max(0,Math.min(1,i/e)),wE="101101011001110010101101001011010010",AE=(i,e)=>{let t=Math.imul(i,374761393)^Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function c0(i){let e=i.querySelector("canvas"),t=i.querySelector(".down-cam-status"),n=i.querySelector(".down-cam-mode"),s=e.getContext("2d");i.querySelector(".down-cam-bar").onclick=()=>i.classList.toggle("collapsed");let r=e.width,a=e.height,o=52,c=r-o,l=c/2,u=a/2,h=null,d=null;function f(b,v){let M=SE(c,v.fovDeg),E=[],C=[];for(let H of[0,c/2,c])for(let G of[0,a/2,a]){let z=b.groundHit([(u-G)/M,(H-l)/M,1])??[b.origin[0]+30,b.origin[1]+30];E.push(z[0]),C.push(z[1])}let S=Math.min(...E),w=Math.max(...E),I=Math.min(...C),F=Math.max(...C);for(let{cell:H,salt:G,keep:z,base:X}of xE){let re=Math.floor(S/H)-1,ee=Math.ceil(w/H)+1,de=Math.floor(I/H)-1,Y=Math.ceil(F/H)+1;if(!((ee-re)*(Y-de)>12e3))for(let le=re;le<=ee;le++)for(let B=de;B<=Y;B++){let U=vE(le,B,G);if(U<1-z)continue;let k=p(b,M,[[le*H,B*H,0],[(le+1)*H,B*H,0],[(le+1)*H,(B+1)*H,0],[le*H,(B+1)*H,0]]);if(!k)continue;let ie=Math.min(k[0][0],k[1][0],k[2][0],k[3][0]),ye=Math.max(k[0][0],k[1][0],k[2][0],k[3][0]),Me=Math.min(k[0][1],k[1][1],k[2][1],k[3][1]),q=Math.max(k[0][1],k[1][1],k[2][1],k[3][1]);if(ye<0||ie>c||q<0||Me>a||(ye-ie)*(q-Me)<.25)continue;let W=Math.round(X+U*70);s.fillStyle=`rgb(${W-20},${W},${W-30})`,s.beginPath(),s.moveTo(k[0][0],k[0][1]),s.lineTo(k[1][0],k[1][1]),s.lineTo(k[2][0],k[2][1]),s.lineTo(k[3][0],k[3][1]),s.closePath(),s.fill()}}return M}function p(b,v,M){let E=M.map(C=>bE(b.toFrd(C),v,l,u));return E.some(C=>!C)?null:E}function y(b,v,M,E){let C=Jn.padSizeM/2,[S,w]=M,I=p(b,v,[[S-C,w-C,0],[S+C,w-C,0],[S+C,w+C,0],[S-C,w+C,0]]);if(I&&(s.beginPath(),I.forEach((z,X)=>X?s.lineTo(...z):s.moveTo(...z)),s.closePath(),s.fillStyle="#5b6168",s.fill()),!E.markerEnabled)return null;let F=E.markerSizeM/2,H=8,G=E.markerSizeM/H;for(let z=0;z<H;z++)for(let X=0;X<H;X++){let ee=z>0&&z<H-1&&X>0&&X<H-1&&wE[(z-1)*6+(X-1)]==="1",de=S-F+z*G,Y=w-F+X*G,le=p(b,v,[[de,Y,0],[de+G,Y,0],[de+G,Y+G,0],[de,Y+G,0]]);le&&(s.beginPath(),le.forEach((B,U)=>U?s.lineTo(...B):s.moveTo(...B)),s.closePath(),s.fillStyle=ee?"#f2f2f2":"#101214",s.fill())}return p(b,v,[[S-F,w-F,0],[S+F,w-F,0],[S+F,w+F,0],[S-F,w+F,0]])}function m(b,v,M,E,C,S){s.strokeStyle=C,s.fillStyle=C,s.lineWidth=S,s.beginPath(),s.moveTo(b,v),s.lineTo(b+M,v+E),s.stroke();let w=Math.hypot(M,E);if(w<3)return;let I=M/w,F=E/w;s.beginPath(),s.moveTo(b+M,v+E),s.lineTo(b+M-6*I-3*F,v+E-6*F+3*I),s.lineTo(b+M-6*I+3*F,v+E-6*F-3*I),s.closePath(),s.fill()}function g(b,v,M){let E=c+8,C=22,S=a-24,w=S-C,I=H=>S-TE(H,M.maxHeightM)*w;s.fillStyle="#0d1218",s.fillRect(c,0,o,a),M.markerEnabled&&(s.fillStyle="rgba(95,212,160,.16)",s.fillRect(E,I(M.altMaxM),14,I(M.altMinM)-I(M.altMaxM))),s.strokeStyle="#3a4550",s.lineWidth=1,s.beginPath(),s.moveTo(E+7,C),s.lineTo(E+7,S),s.stroke(),s.font="9px Bahnschrift, Arial",s.fillStyle="#8b98a5",s.textAlign="left";for(let H=0;H<=M.maxHeightM;H+=4)s.fillRect(E+3,I(H),8,1),s.fillText(`${H}`,E+16,I(H)+3);s.fillStyle="#f2f2f2",s.fillRect(E-2,I(v.height_truth_m)-1,18,2),s.fillStyle="#5fd4ff",s.beginPath(),s.moveTo(E+16,I(v.height_est_m)),s.lineTo(E+24,I(v.height_est_m)-4),s.lineTo(E+24,I(v.height_est_m)+4),s.fill();let F=v.range_m?.[0];F!=null&&(s.strokeStyle=v.range_valid?"#f2b84b":"#6b5a2e",s.lineWidth=2,s.beginPath(),s.arc(E+7,I(F),3,0,2*Math.PI),s.stroke()),s.fillStyle="#8b98a5",s.font="8px Bahnschrift, Arial",s.textAlign="center",s.fillText("HEIGHT m",E+12,12),s.fillStyle="#5fd4ff",s.fillText("EST",E+12,a-14),s.fillStyle="#f2b84b",s.fillText("RANGE",E+12,a-5)}function x(b,v){let M=b.fusion,E=yE(b.position,b.quaternion,v.mountDownM);s.clearRect(0,0,r,a),s.save(),s.beginPath(),s.rect(0,0,c,a),s.clip(),s.fillStyle="#2d3a30",s.fillRect(0,0,c,a);let C=f(E,v),S=y(E,C,M.marker_world_m,v),w=EE(M,v),[I,F]=l0(M.flow_rad_s),[H,G]=l0(M.flow_truth_rad_s);for(let X of[.2,.5,.8])for(let re of[.25,.5,.75])m(X*c,re*a,I,F,M.flow_valid?"rgba(255,214,120,.9)":"rgba(150,120,70,.7)",1.6);if(m(l,u,H,G,"rgba(255,255,255,.75)",1),S&&v.markerEnabled){let X=S.map(de=>de[0]),re=S.map(de=>de[1]),ee={tracking:"#7fe0a0",rejected:"#ff8a80",not_detected:"#ff8a80",outside_window:"#8b98a5"}[w.key]??"#8b98a5";if(s.strokeStyle=ee,s.lineWidth=2,s.setLineDash(w.key==="tracking"?[]:[4,3]),s.strokeRect(Math.min(...X)-4,Math.min(...re)-4,Math.max(...X)-Math.min(...X)+8,Math.max(...re)-Math.min(...re)+8),s.setLineDash([]),M.marker_valid){let de=l+C*Math.tan(M.marker_rad[1]),Y=u-C*Math.tan(M.marker_rad[0]);s.strokeStyle="#5fd4ff",s.lineWidth=1,s.beginPath(),s.moveTo(de-8,Y),s.lineTo(de+8,Y),s.moveTo(de,Y-8),s.lineTo(de,Y+8),s.stroke()}}else if(v.markerEnabled&&w.key==="out_of_view"){let X=Math.atan2(-Math.tan(M.marker_truth_rad[0]),Math.tan(M.marker_truth_rad[1])),re=l+Math.cos(X)*(c/2-16),ee=u+Math.sin(X)*(a/2-16);m(re-Math.cos(X)*18,ee-Math.sin(X)*18,Math.cos(X)*18,Math.sin(X)*18,"#ff8a80",2.5)}s.strokeStyle="rgba(255,255,255,.35)",s.lineWidth=1,s.beginPath(),s.moveTo(l-10,u),s.lineTo(l+10,u),s.moveTo(l,u-10),s.lineTo(l,u+10),s.stroke(),s.restore(),g(b,M,v),s.font="9px Bahnschrift, Arial",s.fillStyle="rgba(255,255,255,.75)",s.textAlign="left",s.fillText("FWD \u2191",6,12);let z=M.flow_rad_s?Math.hypot(...M.flow_rad_s):0;n.textContent=`FOV ${v.fovDeg}\xB0`,t.innerHTML=`<span>HEIGHT <b>${M.height_est_m.toFixed(2)}</b> m est \xB7 <b>${M.range_valid?M.range_m[0].toFixed(2):"\u2014"}</b> m range</span><span>FLOW <b>${z.toFixed(2)}</b> rad/s${M.flow_valid?"":" \xB7 <i>no lock</i>"}</span><span class="marker-${w.key}">${w.label}</span>`}return{update(b,v){i.hidden=!b?.fusion?.marker_world_m,!(i.hidden||b===h&&v===d)&&(h=b,d=v,x(b,ME(v)))}}}var he=i=>document.getElementById(i),$t=180/Math.PI,Qo=["FWD","RIGHT","AFT","LEFT"],ku=["FwdFin","RightFin","AftFin","LeftFin"],Pf=["AIRBORNE","CONTACT DWELL","LANDED","CRASHED"],K={id:null,frames:[],metadata:null,time:0,playing:!1,live:!0,busy:!1,recording:!1,result:null,requestError:null,milestones:[],mission:null,connected:!1,hasImu:!1,imuOverlay:!1};try{K.imuOverlay=localStorage.getItem("missionControl.imuOverlay")==="1"}catch{}var RE=c0(he("downCam")),In,Lu=new P,rr=!1,Le=(i,e=1)=>Number.isFinite(i)?i.toFixed(e):"\u2014",Uu=i=>`T+ ${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`,Ve=(i,e)=>{let t=he(i);t.textContent!==e&&(t.textContent=e)};function pi(i,e=!1){for(let t of["runMessage","launchMessage"])Ve(t,i),he(t).style.color=e?"#ff8f8f":""}var Tf=["flight","plan","telemetry","checklists"],CE={},Di="flight",ya=!0,If=0,va=()=>{ya=!0,If++};function ba(i){Di=Tf.includes(i)?i:"flight",va(),CE[Di]?.();for(let e of Tf)he(`page-${e}`).hidden=e!==Di;document.querySelectorAll("[data-page]").forEach(e=>{let t=e.dataset.page===Di;e.setAttribute("aria-selected",t),e.tabIndex=t?0:-1}),location.hash!==`#${Di}`&&history.replaceState({},"",`${location.pathname}${location.search}#${Di}`)}document.querySelectorAll("[data-page]").forEach(i=>i.onclick=()=>ba(i.dataset.page));document.querySelectorAll(".plan-jumps a").forEach(i=>i.onclick=e=>{e.preventDefault();let t=document.querySelector(i.getAttribute("href"));t?.tagName==="DETAILS"&&(t.open=!0),t?.scrollIntoView()});window.addEventListener("hashchange",()=>ba(location.hash.slice(1)));ba(location.hash.slice(1));function S0(i){let e=he("controller").value,t=Object.entries(i.policies);JSON.stringify([...he("controller").options].map(n=>[n.value,n.text]))!==JSON.stringify(t)&&(he("controller").replaceChildren(...t.map(([n,s])=>new Option(s,n))),he("controller").value=e in i.policies?e:i.defaults.controller),K.connected=!0,Ve("connection","ISAAC SERVICE ONLINE"),he("run").disabled=K.busy||K.recording,ei(),If++}async function Qn(i,e){let t=await fetch(i,e===void 0?{}:{method:"POST",headers:{"Content-Type":"application/json","X-Mission-Control":"local"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error(typeof n.detail=="string"?n.detail:JSON.stringify(n.detail));return n}for(let[i,e,t,n,s,r]of[["position","POSITION / m",["X","Y","Z"],[-.28,.82,18],[-100,-100,.34],[100,100,100]],["velocity","VELOCITY / m/s",["VX","VY","VZ"],[0,0,-1],[-20,-20,-20],[20,20,20]],["attitude_deg","ATTITUDE / degrees",["ROLL","PITCH","YAW"],[0,0,0],[-180,-180,-180],[180,180,180]],["angular_rate_deg_s","BODY RATE / degrees/s \xB7 FRD",["P","Q","R"],[0,0,0],[-720,-720,-720],[720,720,720]]]){let a=document.createElement("div");a.innerHTML=`<div class="vector-label">${e}</div><div class="triple">${t.map((o,c)=>`<label>${o}<input aria-label="${e} ${o}" id="${i}_${c}" type="number" step="any" min="${s[c]}" max="${r[c]}" value="${n[c]}" required></label>`).join("")}</div>`,he("vectors").append(a)}var M0=["position","velocity","attitude_deg","angular_rate_deg_s"],Lf=()=>Object.fromEntries(M0.map(i=>[i,[0,1,2].map(e=>Number(he(`${i}_${e}`).value))])),u0=null,h0={warnings:[],stop:null,braking:null};function E0(i=pn.getWaypoints()){let e=Lf(),t=Number(he("initial_motor_fraction").value)/100,n=In?.vehicles?.[`${he("hardware_profile").value}/momentum`],s=JSON.stringify([e.position,e.velocity,i,t,n]);return s!==u0&&(u0=s,h0=Gg(e,i,n,t)),h0}var Ps=Hg(he("optimizerSettings"),{api:Qn,onChange:()=>{pn.refresh(),ei(),Is()},useConvex:()=>{he("controller").value="convex",he("controller").onchange(),he("optimizerSettings").scrollIntoView({behavior:"smooth",block:"start"})}});function Df(){let i=he("controller"),e=i.value==="convex";Ps.setInUse(e,i.selectedOptions[0]?.textContent??i.value,[...i.options].some(t=>t.value==="convex"))}var ar,pn=Fg(he("missionPlanner"),{readInitial:Lf,api:Qn,settings:()=>Ps.get(),isConvex:()=>he("controller").value==="convex",writeSettings:i=>Ps.set(i),readDisturbances:()=>ar?.preview(),readMission:Rf,writeMission:V0,validateMission:i=>Qn("/api/flight-plan/validate",i),readRoute:()=>Vo(Rf()),writeRoute:zE,validateRoute:i=>Qn("/api/flight-plan/route",i),applyProfile:i=>Ps.applyPreset(i),applyEnvironment:i=>{ar.set(i.selected,i.settings),pn.draw(),ei(),Is()},writeInitial:i=>M0.forEach(e=>i[e].forEach((t,n)=>{he(`${e}_${n}`).value=Math.round(t*100)/100})),editStart:()=>{let i=he("initialState");i.open=!0,i.scrollIntoView({behavior:"smooth",block:"center"})},onChange:()=>{Bf(),ei(),Is()},overlay:i=>E0(i)});ar=Vg(he("plannerDisturbances"),{api:Qn,onChange:()=>{pn.draw(),ei(),Is()}});function Is(){let i=he("controller").value==="convex",e=pn.describe(),t=Ps.describe(),n=[["Route",e.text],["Guidance",i?t.name+(t.count&&!t.builtin&&t.name==="Custom"?` \xB7 ${t.count} adjusted`:""):In?.policies?.[he("controller").value]??"Policy"],["Environment",ar.describe()]];he("launchSummary").innerHTML=n.map(([s,r])=>`<div><dt>${s}</dt><dd>${Te(r)}</dd></div>`).join("")}he("missionForm").addEventListener("invalid",i=>{for(let e=i.target.parentElement;e&&e!==i.currentTarget;e=e.parentElement)e.tagName==="DETAILS"&&(e.open=!0)},!0);he("vectors").addEventListener("input",()=>{pn.draw(),Bf(),ei()});for(let i of["initial_motor_fraction","hardware_profile"])he(i).addEventListener("change",()=>{pn.draw(),ei()});he("finRows").innerHTML=Qo.map((i,e)=>`<tr><td>${i}</td><td class="defl"><div class="dbar"><i id="fd${e}" style="background:${di[e]}"></i><b id="fdc${e}"></b></div></td><td id="fc${e}">\u2014</td><td id="fa${e}">\u2014</td></tr>`).join("");he("finRateRows").innerHTML=Qo.map((i,e)=>`<tr><td>${i}</td><td id="fcr${e}">\u2014</td><td id="far${e}">\u2014</td></tr>`).join("");he("gyro").innerHTML=["P \xB7 ROLL","Q \xB7 PITCH","R \xB7 YAW"].map((i,e)=>`<div class="gyro-row"><span>${i}</span><div class="gbar"><i id="gb${e}" style="background:${di[e]}"></i><span class="limit" style="left:25%"></span><span class="limit" style="left:75%"></span></div><b id="g${e}">\u2014</b></div>`).join("");var T0=[["POS X","m",3],["POS Y","m",3],["POS Z","m",3],["ROLL","\xB0",2],["PITCH","\xB0",2],["YAW","\xB0",2],["P","\xB0/s",1],["Q","\xB0/s",1],["R","\xB0/s",1]];he("imuRows").innerHTML=T0.map(([i,e],t)=>`<tr><td>${i} \xB7 ${e}</td><td id="imuA${t}">\u2014</td><td id="imuI${t}">\u2014</td><td id="imuD${t}">\u2014</td></tr>`).join("");var w0=[["peak_rate_deg_s","PEAK \xB0/s",1],["angular_travel_deg","TRAVEL \xB0",0],["excess_rotation_deg","EXCESS \xB0",0],["time_above_limit_s","OVER / s",2]];he("rotationRows").innerHTML=w0.map(([i,e])=>`<tr><td>${e}</td>${[0,1,2].map(t=>`<td id="rotation_${i}_${t}">\u2014</td>`).join("")}</tr>`).join("");var A0=[["voltage_v","BUS VOLTAGE","V",2],["current_a","CURRENT","A",1],["power_w","POWER","W",0],["energy_wh","USED ENERGY","Wh",2],["temperature_c","PACK TEMP","\xB0C",1],["ocv_v","OPEN CIRCUIT","V",2]];he("batteryMetrics").innerHTML=A0.map(([i,e,t])=>`<div><span>${e}</span><b id="b_${i}">\u2014</b><small>${t}</small></div>`).join("");he("batteryMetrics").insertAdjacentHTML("beforeend",'<div><span>PROPULSIVE \u0394V</span><b id="propulsiveDv">\u2014</b><small>m/s</small></div>');var zu=i=>{K.live=!1,K.playing=!1,K.time=zt.clamp(i,0,K.frames.at(-1)?.t??0)},R0=a0(he("optimizationPanel"),{onSeek:zu}),Nf=yf(he("charts"),{onSeek:zu}),Ko=yf(he("flightCharts"),{onSeek:zu,titles:["ALTITUDE","VELOCITY","THRUST","BODY RATES \xB7 FRD"]}),or=Kg(he("checklist"),{onChange:ei,context:()=>{let i=K.metadata?.physics_parameters,e=he("controller").value;return{cells:he("hardware_profile").value==="planned_8s"?8:6,soc:Number(he("initial_soc").value),controller:In?.policies?.[e]??e,mass:i?.vehicle?.total_mass??3.104,finLimit:(i?.vehicle?.fins?.max_deflection??.262)*$t}}});he("missionForm").addEventListener("input",()=>or.update());he("missionForm").addEventListener("change",()=>or.update());var Sn=new la({canvas:he("scene"),antialias:!0});Sn.setPixelRatio(Math.min(devicePixelRatio,1.5));Sn.setClearColor("#05080b");Sn.outputColorSpace=Lt;Sn.toneMapping=wo;Sn.toneMappingExposure=1.45;var Wt=new Gi;Wt.background=new ke("#070b0f");Wt.fog=new Va("#070b0f",160,520);Wt.add(new go(14674674,2896438,2.8));var C0=new ys(15922936,3.2);C0.position.set(4,-6,12);Wt.add(C0);var P0=new ys(9086136,1.8);P0.position.set(-3,4,3);Wt.add(P0);var Uf=new Ze(new Ws(300,300),new Dn({color:790290,roughness:.98}));Uf.position.z=-.006;Wt.add(Uf);var Hu=new vs(100,100,3818572,1843751);Hu.rotation.x=Math.PI/2;Hu.position.z=.001;Wt.add(Hu);var jo=new Nt;Wt.add(jo);var d0=[Uf,Hu,jo],Ou=new rn(new nt,new ln({color:16054007,transparent:!0,opacity:.55}));Wt.add(Ou);var Fu=Mu({width:2.5,opacity:.85,dashed:!0,chevrons:!1});Wt.add(Fu.group);var Zo=new Nt;Wt.add(Zo);var ga=new rn(new nt,new ln({color:3129201,transparent:!0,opacity:.9}));Wt.add(ga);var Of=new Nt;Wt.add(Of);var Ff=(i,e=!1)=>{let t=new Ze(new Si(1,12,8),new xt({color:i,wireframe:e,depthTest:!1}));return t.renderOrder=5,Of.add(t),t},f0=Ff(16054007),Du=Ff(6993919,!0),qo=Ff(4774818,!0),Qi=null;function PE(){let i=Mf(K.plans??[],K.time);i!==Qi&&(Qi=i,wf(ga,i?.positions??[]))}function wf(i,e){i.geometry.dispose(),i.geometry=new nt,i.geometry.setAttribute("position",new We(e.flat(),3)),ya=!0}function Bf(){let i=K.frames[0]?.position??Lf().position,e=K.frames.length?K.metadata?.request?.waypoints??[]:pn.getWaypoints(),t=K.frames.length?K.metadata?.request:null,n=t?.pads??(K.frames.length?[{name:"Home pad",position:[0,0,0]}]:pn.getPads()),s=n[e.at(-1)?.pad??0]?.position??[0,0,0],r=nr(i,e,s,{convex:(t?.controller??he("controller").value)==="convex"});Fu.set(r,r.map(()=>["#2f78d0","#8cc8ff"])),ya=!0,jo.traverse(o=>{o.geometry?.dispose(),o.material?.dispose()}),jo.clear(),n.forEach(o=>{let c=new Nt;c.position.set(...o.position);let l=new Ze(new ms(1.25,64),new Dn({color:2040615,roughness:.95}));l.position.z=.004,c.add(l);for(let u of[.5,1.15]){let h=new Ze(new Xs(u-.02,u,64),new xt({color:14081505,side:Yt}));h.position.z=.008,c.add(h)}jo.add(c)});for(let o of[...Zo.children])o.material.map?.dispose(),o.material.dispose(),Zo.remove(o);(e.at(-1)?.type==="land"?e:[...e,{type:"land",position:s,speed_m_s:.15}]).forEach((o,c)=>{let l=document.createElement("canvas");l.width=640,l.height=112;let u=l.getContext("2d");u.fillStyle="rgba(3,7,12,.9)",u.fillRect(0,0,640,112),u.fillStyle=Qt[o.type]??"#fff",u.fillRect(0,0,7,112),u.font="bold 27px Consolas",u.fillText(ws(o,c),20,40,600),u.font="22px Consolas",u.fillText(Ag(o),20,82,600);let h=new ds({map:new Gs(l),depthTest:!1,sizeAttenuation:!1}),d=new Hs(h);d.position.set(...o.position),d.center.set(.5,-.15-c%3*1.15),d.scale.set(.24,.042,1),d.renderOrder=8,Zo.add(d)})}var Yo=new Ki(new P(0,0,1),new P,.4,16429593,.05,.025);Wt.add(Yo);var Pt=Array.from({length:4},()=>{let i=new Ut(40,1,.008,300);return i.up.set(0,0,1),i});Pt[3]=new Ti(-.18,.18,.1,-.1,.001,5);var kf=document.createElement("canvas");kf.id="finLabels";he("views").append(kf);document.querySelector(".fin-tag b").textContent="FINS / BOTTOM";var kn=new ha(Pt[0],he("scene"));kn.enableDamping=!0;kn.dampingFactor=.1;kn.minDistance=.3;kn.maxDistance=40;kn.enablePan=!1;var Bu="vehicle",Af=null,p0="";function zf(i){Bu=i,Af=null,rr=!1,he("cameraVehicle").setAttribute("aria-pressed",i==="vehicle"),he("cameraPlan").setAttribute("aria-pressed",i==="plan"),document.querySelector(".main-tag b").textContent=i==="plan"?"PLAN OVERVIEW / DRAG TO ROTATE":"ORBIT / DRAG TO ROTATE",kn.maxDistance=i==="plan"?600:40,va()}he("cameraVehicle").onclick=()=>zf("vehicle");he("cameraPlan").onclick=()=>zf("plan");kn.addEventListener("change",()=>{ya=!0});var Vu=await new cu().loadAsync("/static/drone_visual.glb?v=edf-rotor-1"),I0=await(await fetch("/static/geometry.json")).json(),Xn=Object.fromEntries(["Body",...ku].map(i=>[i,Vu.scene.getObjectByName(i)])),L0=Vu.scene.getObjectByName("EDFRotor"),D0=Qg(L0);he("rpm").title="Recorded rotor RPM. Fan blade animation is slowed 200\xD7 for visibility.";ku.forEach((i,e)=>{Xn[i].material=new Dn({color:di[e],roughness:.5})});var IE=new oa(Sn).fromScene(new fu,.04).texture;Vu.scene.traverse(i=>{i.isMesh&&Object.assign(i.material,{side:Yt,envMap:IE,envMapIntensity:.45})});Wt.add(Vu.scene);for(let i of I0.links){let e=Xn[i.name];e&&(e.position.fromArray(i.neutral_position),e.quaternion.set(i.neutral_quaternion[1],i.neutral_quaternion[2],i.neutral_quaternion[3],i.neutral_quaternion[0]))}var LE=new xt({color:6280447,transparent:!0,opacity:.22,depthWrite:!1,depthTest:!1}),es=Xn.Body.clone();es.traverse(i=>{i.isMesh&&(i.material=LE,i.renderOrder=6)});Wt.add(es);var _a=new Ki(new P(0,0,1),new P,.4,6280447,.05,.025);Wt.add(_a);var Gu=new rn(new nt,new ln({color:6280447,transparent:!0,opacity:.5}));Wt.add(Gu);var Sa=new rn(new nt,new ln({color:6280447,depthTest:!1}));Sa.geometry.setAttribute("position",new We(new Float32Array(6),3));Sa.renderOrder=7;Sa.frustumCulled=!1;Wt.add(Sa);var DE=[es,_a,Gu,Sa],fn={v:new P,q:new nn,pos:new P,move:new P,a:new P,b:new P};function Ef(i,e,t,n,s,r){i.position.fromArray(e).lerp(fn.v.fromArray(n),r),i.quaternion.set(t[1],t[2],t[3],t[0]).slerp(fn.q.set(s[1],s[2],s[3],s[0]),r)}function xa(i){let e=K.frames;if(!e.length)return null;let t=0,n=e.length-1;for(;t<n;){let a=Math.ceil((t+n)/2);e[a].t<=i?t=a:n=a-1}let s=e[t],r=e[Math.min(t+1,e.length-1)];return{a:s,b:r,index:t,alpha:s===r?0:zt.clamp((i-s.t)/(r.t-s.t),0,1)}}function Hf(i=he("views").clientWidth,e=he("views").clientHeight){(Sn.domElement.width!==Math.round(i*Sn.getPixelRatio())||Sn.domElement.height!==Math.round(e*Sn.getPixelRatio()))&&Sn.setSize(i,e,!1);let t=xa(K.time);if(PE(),D0.update(t),t){let{a:d,b:f,alpha:p}=t;Ef(Xn.Body,d.position,d.quaternion,f.position,f.quaternion,p),ku.forEach((y,m)=>Ef(Xn[y],d.fin_positions[m],d.fin_quaternions[m],f.fin_positions[m],f.fin_quaternions[m],p))}let n=fn.pos.copy(Xn.Body.position),s=!!(K.imuOverlay&&t?.a.imu);if(s){let{a:d,b:f,alpha:p}=t,y=f.imu??d.imu;Ef(es,d.imu.position,d.imu.quaternion,y.position,y.quaternion,p);let m=Sa.geometry.attributes.position;m.setXYZ(0,n.x,n.y,n.z),m.setXYZ(1,es.position.x,es.position.y,es.position.z),m.needsUpdate=!0,Gu.geometry.setDrawRange(0,t.index+1)}if(Bu==="plan"&&Qi){if(!rr||Af!==Qi||p0!==`${i}:${e}`){let d=new Ot().setFromPoints([...Qi.positions.map(b=>new P(...b)),n.clone(),new P]),f=d.getCenter(new P),p=Math.max(1,d.getSize(new P).length()/2),y=Math.max(.2,i*.66/e),m=Math.atan(Math.tan(Pt[0].fov/2/$t)*Math.min(1,y)),g=p/Math.sin(m)*1.18,x=rr?fn.v.copy(Pt[0].position).sub(kn.target).normalize():fn.v.set(1,-1,.65).normalize();kn.target.copy(f),Pt[0].position.copy(f).add(x.multiplyScalar(g)),Pt[0].far=Math.max(300,g+p*3),Af=Qi,p0=`${i}:${e}`,rr=!0}Lu.copy(n),kn.update()}else{rr||(kn.target.copy(n),Pt[0].position.copy(n).add(fn.v.set(.85,-1.05,.43)),rr=!0,Lu.copy(n));let d=fn.move.copy(n).sub(Lu);Pt[0].position.add(d),kn.target.add(d),Lu.copy(n),kn.update()}let r=t?.a.guidance;ga.material.color.set(r?.solver?.mode==="soft_terminal"?16429593:4774818),ga.material.opacity=["TERMINAL_DESCENT","LANDED","HOLD"].includes(r?.phase)?.3:.9,Ou.geometry.setDrawRange(0,t?t.index+1:0);let a=Math.max(.04,Pt[0].position.distanceTo(kn.target)*.003);f0.position.copy(n),f0.scale.setScalar(a),Du.visible=!!r?.reference_position,Du.visible&&(Du.position.fromArray(r.reference_position),Du.scale.setScalar(a*1.7)),qo.visible=!!Qi,qo.visible&&(qo.position.fromArray(Qi.positions.at(-1)),qo.scale.setScalar(a*1.7),qo.material.color.copy(ga.material.color)),Pt[1].position.set(3,-5,.25),Pt[1].lookAt(n),Pt[1].fov=zt.clamp(2*Math.atan(.7/Pt[1].position.distanceTo(n))*$t,4,45),Pt[2].position.copy(n).add(fn.v.set(0,0,1.6)),Pt[2].up.set(0,1,0),Pt[2].lookAt(n);let o=Xn.Body.quaternion;Pt[3].position.copy(n).add(fn.v.set(0,0,-.55).applyQuaternion(o)),Pt[3].up.set(1,0,0).applyQuaternion(o),Pt[3].lookAt(fn.a.copy(n).add(fn.v.set(0,0,-.13).applyQuaternion(o))),Yo.position.copy(n),Yo.setDirection(fn.v.set(0,0,1).applyQuaternion(o)),Yo.setLength(.015+(t?.a.thrust_n??0)/90,.045,.022),s&&(_a.position.copy(es.position),_a.setDirection(fn.v.set(0,0,1).applyQuaternion(es.quaternion)),_a.setLength(.015+(t.a.thrust_n??0)/90,.045,.022));let c=Math.floor(i*.66),l=i-c,u=e/3,h=[[0,0,c-1,e],[c+1,2*u,l-1,u-1],[c+1,u,l-1,u-1],[c+1,0,l-1,u-1]];Sn.setScissorTest(!0),h.forEach(([d,f,p,y],m)=>{Sn.setViewport(d,f,p,y),Sn.setScissor(d,f,p,y),Pt[m].aspect=p/y,m===3&&(Pt[m].left=-.1*p/y,Pt[m].right=.1*p/y),Pt[m].updateProjectionMatrix(),Xn.Body.visible=m!==3,Ou.visible=m<3,Fu.group.visible=m<3,Fu.setResolution(p,y),Zo.visible=m===0,ga.visible=m<3,Of.visible=m===0&&Bu==="plan"&&!!r,Yo.visible=m===0,DE.forEach(g=>{g.visible=s&&m<3}),_a.visible=s&&m===0,d0.forEach(g=>{g.visible=m!==3}),Sn.render(Wt,Pt[m])}),Xn.Body.visible=!0,d0.forEach(d=>{d.visible=!0}),Sn.setScissorTest(!1),N0(Bn(kf,i,e),i,e,t)}function N0(i,e,t,n){if(!n)return;let s=Math.floor(e*.66)+1,r=e-s,a=t/3,o=l=>(l.project(Pt[3]),[s+(l.x+1)*r/2,2*a+(1-l.y)*a/2]),c=[[1,0,0],[0,-1,0],[-1,0,0],[0,1,0]];i.save(),i.beginPath(),i.rect(s,2*a,r,a),i.clip(),K.metadata?.hinge_layout!=="radial_span_v1"&&(i.fillStyle="#3a1414",i.fillRect(s,2*a,r,22),i.fillStyle="#ffc9c9",i.font="10px Bahnschrift, Arial",i.textAlign="center",i.fillText("OLD HINGE RECORDING \xB7 RUN AGAIN",s+r/2,2*a+15)),ku.forEach((l,u)=>{let h=fn.a.copy(Xn[l].position).add(fn.v.set(0,0,-.025).applyQuaternion(Xn[l].quaternion)),d=fn.b.copy(Xn.Body.position).add(fn.v.set(c[u][0]*.077,c[u][1]*.077,-.13).applyQuaternion(Xn.Body.quaternion)),[f,p]=o(h),[y,m]=o(d);i.strokeStyle=di[u],i.lineWidth=1,i.beginPath(),i.moveTo(f,p),i.lineTo(y,m),i.stroke(),i.fillStyle="rgba(0,0,0,.82)",i.fillRect(y-31,m-12,62,26),i.fillStyle=di[u],i.fillRect(y-31,m-12,2,26),i.textAlign="center",i.fillStyle="#b9c2c8",i.font="8px Bahnschrift, Arial",i.fillText(Qo[u],y,m-3),i.fillStyle="#f4f6f7",i.font="11px Bahnschrift, Consolas";let g=zt.lerp(n.a.fin_angles[u],n.b.fin_angles[u],n.alpha)*$t;i.fillText(`${Le(g,1)}\xB0`,y,m+10)}),i.restore()}function NE(){let i=[],e=K.frames;if(!e.length)return i;i.push({t:e[0].t,label:"START"});let t=e[0].contact,n=e[0].mission?.waypoint_index,s=e[0].control_phase,r=!!e[0].mission?.ready_to_land,a=e[0].guidance?.phase,o=!1,c={SPOOL_UP:"SPOOL UP",ROUTE:"ROUTE",POWERED_DESCENT:"PDG",TERMINAL_DESCENT:"TERMINAL",HOLD:"HOLD"};for(let l of e){let u=l.guidance;u?.phase&&u.phase!==a&&c[u.phase]&&i.push({t:l.t,label:c[u.phase],detail:`CONVEX GUIDANCE \xB7 ${u.phase.replaceAll("_"," ")}`,tone:u.phase==="HOLD"?"critical":void 0}),a=u?.phase??a;let h=u?.solver?.mode==="soft_terminal";h&&!o&&i.push({t:l.t,label:"FALLBACK",detail:"NO SAFE PLAN \xB7 SOFT-TERMINAL MAXIMUM-BRAKING PLAN",tone:"warning"}),u?.solver&&(o=h);let d=l.mission?.waypoint_index;if(d!=null&&n!=null&&d>n)for(let f=n;f<d;f++)i.push({t:l.t,label:`WP ${f+1}`,detail:`WAYPOINT ${f+1} CAPTURED`});if(n=d??n,l.mission?.ready_to_land&&!r&&i.at(-1)?.t!==l.t&&i.push({t:l.t,label:"LAND",detail:"ROUTE COMPLETE \xB7 LANDING PHASE"}),r=!!l.mission?.ready_to_land||r,l.contact!==t){let f=l.contact===2?"good":l.contact===3?"critical":void 0;i.push({t:l.t,label:["AIRBORNE","CONTACT","LANDED","CRASHED"][l.contact],detail:["AIRBORNE","CONTACT DETECTED / DWELL","LANDED","CRASHED"][l.contact],tone:f}),t=l.contact}l.control_phase==="POST_TOUCHDOWN_DISARM"&&s!==l.control_phase&&i.push({t:l.t,label:"MOTOR OFF",detail:"MOTOR OFF / SETTLING CHECK"}),s=l.control_phase}if(K.result){let l=K.result,u=l.success?"good":"critical",h=`${l.outcome}${l.outcome==="LANDED"?l.success?" / SUCCESS CRITERIA MET":" / OUTSIDE SUCCESS CRITERIA":""}`,d=Math.min(l.duration_s??e.at(-1).t,e.at(-1).t),f=i.at(-1);f&&f.label===l.outcome?(f.tone=u,f.detail=h):i.push({t:d,label:l.success?"PASS":l.outcome,detail:h,tone:u})}return i}function UE(){let i=K.metadata?.physics_parameters,e=K.frames[0]?.rotation?.soft_limits_deg_s??[90,90,180];return{maxThrust:i?.edf?.max_thrust??48,softLimits:[...new Set(e)],finLimit:(i?.vehicle?.fins?.max_deflection??.262)*$t,maxCurrent:K.metadata?.request?.battery?.max_current_a}}function U0(){let i=5,e=10;for(let t of K.frames)i=Math.max(i,Math.hypot(...t.velocity)),e=Math.max(e,t.position[2]);return{speed:Math.ceil(i*1.1),altitude:Math.ceil(e*1.1),thrust:K.metadata?.physics_parameters?.edf?.max_thrust??48}}var O0=U0(),Vf=0;function F0(){Vf++,va(),D0.setFrames(K.frames),K.plans=r0(K.frames),Qi=void 0;let i=K.metadata?.request,e=i?.pads?.[i.waypoints?.find(s=>s.type==="land")?.pad??0]?.position??[0,0,0];R0.setData(K.frames,K.plans,e),he("cameraPlan").hidden=!K.plans.length,!K.plans.length&&Bu==="plan"&&zf("vehicle"),K.hasImu=$g(K.frames),$f(),K.milestones=NE(),O0=U0();let t=K.milestones.filter(s=>s.label!=="START"),n=UE();Nf.setData(K.frames,n,t),Ko.setData(K.frames,n,t),BE(),Bf(),kE(),or.update()}var OE={good:"\u2713",warning:"!",critical:"\u2715",idle:"\u2013"},m0="";function ei(){let i=xa(K.time)?.a,e=[];e.push(["ISAAC SIM",K.connected?K.busy?["good","MISSION RUNNING"]:["good","READY"]:["critical","OFFLINE"]]);let t=he("controller").value,n=In?.policies?.[t]??t;e.push(["NEXT CONTROLLER",t==="convex"?["good","CONVEX SOCP"]:["good",n.toUpperCase()]]);let s=Number(he("position_2")?.value??0)>1,r=Number(he("initial_motor_fraction").value)<50;s&&r&&e.push(["ROTOR START",["warning","COLD IN AIR \xB7 SPIN-UP YAWS THE BODY"]]);for(let c of E0().warnings)e.push(["ROUTE CHECK",[c.level,c.text]]);let a=or.summary();if(e.push(["PRE-FLIGHT",a.done===a.total?["good",`COMPLETE \xB7 ${a.total}/${a.total}`]:a.done?["warning",`HOLD \xB7 ${a.done}/${a.total}`]:["idle","NOT STARTED"]]),e.push(["TELEMETRY",K.frames.length?K.busy&&K.live?["good",`LIVE \xB7 ${K.frames.length} SAMPLES`]:["idle",`REPLAY \xB7 ${K.frames.length} SAMPLES`]:["idle","NO DATA"]]),i){let c=i.rotation?.soft_limits_deg_s??[90,90,180],l=i.gyro.some((u,h)=>Math.abs(u*$t)>c[h]);e.push(["VEHICLE",i.contact===3?["critical","CRASHED"]:i.contact===2?["good","LANDED"]:l?["warning","RATE LIMIT EXCEEDED"]:["good",Pf[i.contact]??"\u2014"]]),e.push(["POWER",i.battery?i.battery.cutoff?["critical","CUTOFF"]:i.battery.current_limited?["warning","CURRENT LIMIT"]:["good",`${Le(i.battery.soc*100,0)}% \xB7 ${Le(i.battery.voltage_v,1)} V`]:["idle","IDEAL BUS"]])}else e.push(["VEHICLE",["idle","NO DATA"]]),e.push(["POWER",["idle","NO DATA"]]);let o=e.map(([c,[l,u]])=>`<div class="go-item ${l}"><i class="glyph" aria-hidden="true">${OE[l]}</i><div><span>${c}</span><b>${u}</b></div></div>`).join("");o!==m0&&(he("goBoard").innerHTML=o,m0=o)}function g0(i,e,t){let n=Math.max(-1,Math.min(1,e/t));i.style.left=`${50+Math.min(0,n)*50}%`,i.style.width=`${Math.abs(n)*50}%`}function $u(){let i=xa(K.time),e=i?.a;if(ei(),R0.update(e,K.time),RE.update(e,K.metadata),!e)return;let t=(x,b)=>zt.lerp(x,b,i.alpha);Ve("clock",Uu(K.time)),Ve("telemetryTime",Uu(e.t)),Ve("hudAlt",Le(e.position[2],2)),Ve("hudVz",Le(e.velocity[2],2)),Ve("hudVh",Le(Math.hypot(e.velocity[0],e.velocity[1]),2)),Ve("hudPad",Le(e.pad_distance,2));let n=mu(e.quaternion);wg(he("adi"),n),Ve("attRoll",Le(n.roll,1)),Ve("attPitch",Le(n.pitch,1)),Ve("attYaw",Le((n.yaw+360)%360,0)),Ve("attTilt",Le(n.tilt,1));let s=e.mission,r=e.guidance,a=r?.phase?.replaceAll("_"," "),o=r?`CONVEX \xB7 ${a}${r.time_to_go_s!=null?" \xB7 gate in "+Le(r.time_to_go_s,1)+" s":""}${r.solver?` \xB7 plan #${r.plan_id} ${r.solver.mode==="soft_terminal"?"SOFT-TERMINAL FALLBACK":r.solver.status??"status unavailable"} \xB7 ${Le(r.solver.solve_ms,0)} ms / ${r.solver.solves} SOCPs`:""}`:null,c=s?s.ready_to_land?`LAND \xB7 ${s.waypoint_count} waypoints completed \xB7 Soft contact required`:`${s.phase} \xB7 Waypoint ${s.waypoint_index+1}/${s.waypoint_count} \xB7 Cross-track ${Le(s.cross_track_error_m,2)} m${s.phase==="HOVER"?" \xB7 Hold "+Le(s.hold_elapsed_s,1)+" / "+Le(s.waypoints[s.waypoint_index].hold_s,1)+" s":""}`:o??"Waypoint telemetry was not recorded in this replay.",l=Pg(e);Ve("waypointStatus",s&&r?`${c} \xB7 CONVEX ${a}${l?` \xB7 ${l}`:""}`:c),Ve("waypointBadge",s?`${Math.min(s.waypoint_index,s.waypoint_count)}/${s.waypoint_count} CAPTURED`:""),he("phaseTag").hidden=!s&&!r,s?Ve("phaseTag",s.ready_to_land?"LANDING PHASE":`${s.phase} \xB7 WP ${s.waypoint_index+1}/${s.waypoint_count}`):r&&Ve("phaseTag",`CONVEX \xB7 ${a}`);let u=K.metadata?.physics_parameters,h=u?.edf?.max_thrust??48,d=u?.vehicle?.total_mass??3.104;Ve("thrust",Le(e.thrust_n,1)),Ve("thrustWeight",`T/W ${Le(e.thrust_n/(d*9.81),2)}`),Ve("throttle",Le(e.throttle*100,1)),Ve("rpm",Le(e.rotor_rpm,0)),he("thrustBar").style.width=`${Math.min(100,e.thrust_n/h*100)}%`;let f=(u?.vehicle?.fins?.max_deflection??.262)*$t;Ve("finLimitLabel",Le(f,0)),Qo.forEach((x,b)=>{let v=t(e.fin_angles[b],i.b.fin_angles[b])*$t,M=e.fin_commands[b]*$t;Ve(`fc${b}`,Le(M,2)),Ve(`fa${b}`,Le(v,2)),Ve(`fcr${b}`,Le(e.fin_command_rates[b]*$t,1)),Ve(`far${b}`,Le(e.fin_rates[b]*$t,1)),g0(he("fd"+b),v,f),he("fdc"+b).style.left=`calc(${50+Math.max(-1,Math.min(1,M/f))*50}% - 1px)`});let p=e.rotation?.soft_limits_deg_s??[90,90,180];e.gyro.forEach((x,b)=>{let v=x*$t,M=p[b]*2;Ve(`g${b}`,Le(v,1)),he("g"+b).classList.toggle("over",Math.abs(v)>p[b]),g0(he("gb"+b),v,M)}),w0.forEach(([x,,b])=>[0,1,2].forEach(v=>Ve(`rotation_${x}_${v}`,Le(e.rotation?.[x]?.[v],b)))),Ve("rotationNote",`Soft limits: ${p.map(x=>Le(x,0)).join(" / ")} \xB0/s; gyro bars span \xB12\xD7 each limit. ${e.rotation?"Travel counts turns and reversals; excess counts rotation above each limit.":"Cumulative rotation was not recorded in this older replay."}`);let y=K.metadata?.policy.controller,m=y==="pid"?"PID uses attitude feedback and fin mixing; its internal mix commands are not calibrated body-rate setpoints.":y==="convex"?"Convex guidance plans a thrust-vector trajectory (SOCP); a geometric attitude loop turns the thrust direction into fin efforts. No body-rate setpoint is generated.":"No body-rate setpoint is generated.",g=e.imu?.gyro??e.observed_gyro;if(Ve("rateNote",`${m}${g?" Sensor P/Q/R: "+g.map(x=>Le(x*$t,1)).join(" / ")+" \xB0/s.":""}`),K.imuOverlay&&e.imu){let x=Cs(e),b=mu(e.imu.quaternion),v=Wg(b,n);Ve("imuDist",Le(x.distance,3)),Ve("imuAtt",Le(x.attitude,2)),Ve("imuVel",Le(x.speed,3)),Ve("imuRate",Le(x.rate,1)),[...[0,1,2].map(E=>[e.position[E],e.imu.position[E],x.position[E]]),...["roll","pitch","yaw"].map((E,C)=>[n[E],b[E],v[C]]),...[0,1,2].map(E=>[e.gyro[E]*$t,e.imu.gyro[E]*$t,x.gyro[E]])].forEach(([E,C,S],w)=>{let I=T0[w][2];Ve(`imuA${w}`,Le(E,I)),Ve(`imuI${w}`,Le(C,I)),Ve(`imuD${w}`,`${S>=0?"+":""}${Le(S,I)}`)}),Ve("imuNote",Xg(K.metadata))}Ve("soc",e.battery?Le(e.battery.soc*100,1):"OFF"),he("socBar").style.width=`${(e.battery?.soc??0)*100}%`,Ve("batteryState",e.battery?e.battery.cutoff?"CUTOFF":e.battery.current_limited?"CURRENT LIMIT":"DISCHARGING":"IDEAL BUS"),A0.forEach(([x,,b,v])=>Ve(`b_${x}`,Le(e.battery?.[x],v))),Ve("propulsiveDv",Le(e.propulsive_delta_v_m_s,2)),Ve("contactState",e.control_phase==="POST_TOUCHDOWN_DISARM"?"MOTOR OFF / SETTLING":Pf[e.contact]??"\u2014"),Ve("impact",Le(e.impact_speed,3)),Ve("contactLoad",Le(e.contact_force_n,1)),he("timeline").max=Math.max(.001,K.frames.at(-1).t),he("timeline").value=K.time,Ve("elapsed",`${Le(K.time,2)} / ${Le(K.frames.at(-1).t,2)} s`),he("play").textContent=K.playing?"\u2161":"\u25B6",Ve("mode",K.recording?"RECORDING":K.live&&K.busy?"LIVE TELEMETRY":"RECORDED REPLAY")}function B0(i=he("webcast"),e,t){Tg(i,{frame:xa(K.time)?.a,time:K.time,end:K.frames.at(-1)?.t??1,milestones:K.milestones,maxima:O0,width:e,height:t})}function Gf(){Nf.draw(K.time),Ko.draw(K.time),Di==="flight"&&B0(),Di==="telemetry"&&FE()}var Nu={canvas:document.createElement("canvas"),key:""};function FE(){let i=he("rotationPlots"),e=i.clientWidth,t=i.clientHeight;if(!e||!t)return;let n=K.frames.at(-1)?.t??1,s=40,r=e-6,a=`${Vf}:${e}:${t}`;if(Nu.key!==a){Nu.key=a;let l=Bn(Nu.canvas,e,t),u=K.frames[0]?.rotation?.soft_limits_deg_s??[90,90,180];["ROLL","PITCH","YAW"].forEach((h,d)=>{let f=u[d]*1.15;for(let m of K.frames)f=Math.max(f,Math.abs(m.gyro[d]*$t));let p=27+d*54,y=20/f;l.font="8px Bahnschrift, Arial",l.fillStyle="#b9c2c8",l.fillText(h,0,p-12),l.fillStyle="#7c878f",l.fillText("\xB1"+Le(f,0),0,p+3),l.strokeStyle="rgba(250,178,25,.55)",l.setLineDash([3,3]);for(let m of[-1,1])l.beginPath(),l.moveTo(s,p-m*u[d]*y),l.lineTo(r,p-m*u[d]*y),l.stroke();l.setLineDash([]),l.strokeStyle=di[d],l.lineWidth=1.4,l.beginPath(),K.frames.forEach((m,g)=>{let x=s+m.t/n*(r-s),b=p-m.gyro[d]*$t*y;g?l.lineTo(x,b):l.moveTo(x,b)}),l.stroke()})}let o=Bn(i,e,t);o.drawImage(Nu.canvas,0,0,e,t);let c=s+K.time/n*(r-s);o.strokeStyle="rgba(244,246,247,.7)",o.lineWidth=1,o.beginPath();for(let l=0;l<3;l++){let u=27+l*54;o.moveTo(c,u-22),o.lineTo(c,u+22)}o.stroke()}function BE(){wf(Ou,K.frames.map(i=>i.position)),wf(Gu,K.frames.map(i=>i.imu?.position??i.position))}function $f(){let i=he("imuToggle"),e=K.imuOverlay&&K.hasImu;i.disabled=!K.hasImu,i.setAttribute("aria-pressed",e),i.title=K.hasImu?"Overlay the IMU-estimated pose (cyan ghost) on the actual PhysX pose \xB7 key I":K.frames.length?"This replay predates IMU recording; run the mission again to record it":"No telemetry loaded",he("imuSection").hidden=!e}function k0(i){K.imuOverlay=i;try{localStorage.setItem("missionControl.imuOverlay",i?"1":"0")}catch{}$f(),va()}he("imuToggle").onclick=()=>k0(!K.imuOverlay);$f();function kE(){let i=K.milestones.filter(e=>e.label!=="START"||K.frames.length).map(e=>{let t=document.createElement("div");return t.textContent=`${Uu(e.t)}  ${e.detail??e.label}`,e.tone&&(t.className="tone-"+e.tone),t});if(!i.length){he("events").textContent="Awaiting simulation.";return}he("events").replaceChildren(...i)}async function z0(){let i=await Qn("/api/missions"),e=he("history").value;return he("history").replaceChildren(new Option("Select a recorded mission",""),...i.map(t=>new Option(`${t.request?.name??t.id} \xB7 ${t.summary?.success?"SUCCESS":t.phase??t.state}`,t.id))),he("history").value=e,i}async function Wu(i){K.requestError=null,K.id=i,K.frames=[],K.metadata=null,K.time=0,K.result=null,K.playing=!1,K.live=!0,K.settled=!1,rr=!1,F0();let e=await H0();e&&V0(e.request),he("history").value=i;let t=new URL(location.href);t.searchParams.set("mission",i),t.hash=Di,history.replaceState({},"",t)}async function H0(){if(!K.id)return;let i=K.id,[e,t]=await Promise.all([Qn(`/api/missions/${i}`),Qn(`/api/missions/${i}/frames?after=${K.frames.length}`)]);if(i!==K.id)return;let n=!K.metadata&&e.metadata,s=!K.result&&e.summary;K.metadata=e.metadata,K.frames.push(...t.frames),K.result=e.summary,K.busy=["starting","running"].includes(e.state),K.settled=!K.busy&&!t.frames.length,(t.frames.length||n||s)&&(K.live&&t.frames.length&&(K.time=K.frames.at(-1).t),F0(),Gf()),Ve("missionTitle",e.request.name);let r=e.state==="failed"||e.summary&&!e.summary.success;Ve("flightStatus",e.summary?.success?"\u2713 LANDED / PASS":e.summary?.outcome==="LANDED"?"\u2715 LANDED / FAIL":e.summary?.outcome?(r?"\u2715 ":"")+e.summary.outcome:e.state.toUpperCase()),he("flightStatus").className=`status${r?" fail":e.summary?.success?" pass":""}`,he("run").disabled=K.busy||K.recording,he("stop").disabled=!K.busy,he("export").disabled=K.busy||K.frames.length<2||K.recording;let a=e.request.hardware_profile==="planned_8s"?"8S PLANNED":"6S LEGACY",o=e.request.vane_model==="legacy"?"LEGACY VANES":"MOMENTUM VANES";return Ve("footerProfile",`${a} \xB7 ${o} \xB7 3.104 kg${e.metadata?.physics_dt?" \xB7 "+Le(1/e.metadata.physics_dt,0)+" Hz PHYSICS":""}`),Ve("notice",`${a} \xB7 ${e.request.battery.enabled?"LiPo coupled to EDF":"Ideal voltage, battery disabled"}${e.metadata?.hinge_layout==="radial_span_v1"?" \xB7 Radial hinges":" \xB7 ARCHIVE: OLD HINGE AXES"} \xB7 Hardware calibration pending`),pi(K.requestError??e.error??(K.busy?`${e.phase} \xB7 ${e.frames??0} samples received`:e.summary?`${e.summary.outcome} \xB7 impact ${Le(e.summary.impact_speed,3)} m/s \xB7 pad error ${Le(e.summary.pad_distance,3)} m`:"Mission loaded"),!!(K.requestError||e.error)),he("jsonDownload").hidden=!K.frames.length,he("jsonDownload").href=`/api/missions/${i}/download`,he("videoDownload").hidden=!e.video,he("videoDownload").href=`/api/missions/${i}/video`,K.frames.length&&$u(),e}function V0(i){for(let t of["name","controller","hardware_profile","seed","duration_s"])he(t).value=i[t];he("controller").value||(he("controller").value=In?.defaults?.controller??"convex");for(let t of["position","velocity","attitude_deg","angular_rate_deg_s"])i[t].forEach((n,s)=>{he(`${t}_${s}`).value=n});he("initial_motor_fraction").value=i.initial_motor_fraction*100;let e=Array.isArray(i.disturbance)?i.disturbance:[i.disturbance];ar.set(e,i.disturbance_settings),he("battery_enabled").checked=i.battery.enabled;for(let t of["capacity_ah","c_rating","max_current_a"])he(t).value=i.battery[t];he("initial_soc").value=i.battery.initial_soc*100,he("cell_resistance_ohm").value=i.battery.cell_resistance_ohm*1e3,Ve("packLabel",i.hardware_profile==="planned_8s"?"8S / ESTIMATED":"6S / ESTIMATED"),he("fast_live").checked=i.fast_live??!0,he("cpu_physics").checked=i.cpu_physics??!1,pn.setPads(i.pads),pn.setWaypoints(i.waypoints??[]),Ps.set(i.convex_settings),Df(),or.update(),Is()}function zE(i){for(let e of["name","duration_s"])i[e]!==void 0&&(he(e).value=i[e]);for(let e of["position","velocity","attitude_deg","angular_rate_deg_s"])i[e]?.forEach((t,n)=>{he(`${e}_${n}`).value=t});i.initial_motor_fraction!==void 0&&(he("initial_motor_fraction").value=i.initial_motor_fraction*100),pn.setPads(i.pads),pn.setWaypoints(i.waypoints??[]),or.update(),Is()}function Rf(){let i={};for(let e of["name","controller","hardware_profile"])i[e]=he(e).value;i.disturbance=[...document.querySelectorAll('input[name="disturbance"]:checked')].map(e=>e.value),In?.disturbance_defaults&&(i.disturbance_settings=ar.get());for(let e of["seed","duration_s"])i[e]=Number(he(e).value);for(let e of["position","velocity","attitude_deg","angular_rate_deg_s"])i[e]=[0,1,2].map(t=>Number(he(`${e}_${t}`).value));i.initial_motor_fraction=Number(he("initial_motor_fraction").value)/100,i.waypoints=pn.getWaypoints(),i.pads=pn.getPads(),i.convex_settings=i.controller==="convex"?Ps.get():{},i.fast_live=he("fast_live").checked,i.cpu_physics=he("cpu_physics").checked,i.battery={enabled:he("battery_enabled").checked};for(let e of["capacity_ah","c_rating","max_current_a"])i.battery[e]=Number(he(e).value);return i.battery.initial_soc=Number(he("initial_soc").value)/100,i.battery.cell_resistance_ohm=Number(he("cell_resistance_ohm").value)/1e3,i}he("missionForm").addEventListener("submit",async i=>{i.preventDefault(),K.requestError=null,he("run").disabled=!0,pi("Launching Isaac Sim\u2026");try{let e=await Qn("/api/missions",Rf());ba("flight"),await z0(),await Wu(e.id)}catch(e){K.requestError=e.message,pi(e.message,!0),he("run").disabled=K.busy}});he("stop").onclick=async()=>{try{await Qn(`/api/missions/${K.id}/stop`,{}),pi("Stop requested; Isaac will finish the current control interval."),he("stop").disabled=!0}catch(i){pi(i.message,!0)}};he("history").onchange=()=>{he("history").value&&Wu(he("history").value).catch(i=>pi(i.message,!0))};he("play").onclick=()=>{K.frames.length&&(K.live=!1,K.time>=K.frames.at(-1).t&&(K.time=0),K.playing=!K.playing)};he("timeline").oninput=()=>{K.live=!1,K.playing=!1,K.time=Number(he("timeline").value)};he("live").onclick=()=>{K.live=!0,K.playing=!1,K.time=K.frames.at(-1)?.t??0};he("controller").onchange=()=>{pn.refresh(),Df(),ei(),Is()};he("hardware_profile").onchange=()=>Ve("packLabel",he("hardware_profile").value==="planned_8s"?"8S / ESTIMATED":"6S / ESTIMATED");he("hardwareButton").onclick=()=>he("hardwareDialog").showModal();he("closeHardware").onclick=()=>he("hardwareDialog").close();document.addEventListener("keydown",i=>{if(!(i.target.closest("input,select,textarea,dialog")||i.ctrlKey||i.metaKey||i.altKey)){if(/^[1-4]$/.test(i.key)){ba(Tf[Number(i.key)-1]);return}K.frames.length&&(i.code==="Space"?(i.preventDefault(),he("play").click()):(i.key==="i"||i.key==="I")&&K.hasImu?k0(!K.imuOverlay):(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),K.live=!1,K.playing=!1,K.time=zt.clamp(K.time+(i.key==="ArrowLeft"?-1:1)*(i.shiftKey?5:.5),0,K.frames.at(-1).t)))}});var Jo=document.createElement("canvas");Jo.width=1600;Jo.height=1e3;var _0=document.createElement("canvas");function Cf(){Hf(1160,560);let i=Jo.getContext("2d"),e=xa(K.time),t=e?.a;if(!t)return;i.fillStyle="#000",i.fillRect(0,0,1600,1e3),i.fillStyle="#f4f6f7",i.font="20px Bahnschrift, Arial",i.fillText("EDF / MISSION CONTROL",26,38),i.textAlign="center",i.font="30px Bahnschrift, Consolas",i.fillText(Uu(K.time),600,40),i.textAlign="left",i.drawImage(he("scene"),20,58,1160,560),i.save(),i.translate(20,58),N0(i,1160,560,xa(K.time)),i.restore(),i.fillStyle="#b9c2c8",i.font="11px Bahnschrift, Arial",[[34,80,"CAM 01 / ORBIT"],[800,80,"CAM 02 / GROUND"],[800,267,"CAM 03 / OVERHEAD"],[800,453,"CAM 04 / FINS BOTTOM"]].forEach(([c,l,u])=>i.fillText(u,c,l)),B0(_0,1160,118),i.drawImage(_0,20,620,1160,118),Ko.draw(K.time),Ko.canvases().forEach((c,l)=>{let u=20+l*292,h=760;i.fillStyle="#b9c2c8",i.font="10px Bahnschrift, Arial",i.fillText(c.getAttribute("aria-label").split(" time history")[0],u,h),i.drawImage(c,u,h+6,284,150)});let s=85,r=(c,l,u="#f4f6f7")=>{i.fillStyle="#7c878f",i.font="11px Bahnschrift, Arial",i.fillText(c,1210,s),i.fillStyle=u,i.font="19px Bahnschrift, Consolas",i.fillText(l,1210,s+23),s+=52};r("THRUST / THROTTLE",`${Le(t.thrust_n)} N / ${Le(t.throttle*100)} %`),r("ROTOR",`${Le(t.rotor_rpm,0)} rpm`);let a=mu(t.quaternion);if(r("ROLL / PITCH / TILT \xB7 \xB0",`${Le(a.roll,1)} / ${Le(a.pitch,1)} / ${Le(a.tilt,1)}`),i.fillStyle="#7c878f",i.font="11px Bahnschrift, Arial",i.fillText("FIN       CMD \xB0        ACT \xB0",1210,s),s+=24,Qo.forEach((c,l)=>{i.font="15px Consolas",i.fillStyle="#f4f6f7",i.fillText(`${c.padEnd(6)} ${Le(t.fin_commands[l]*$t,2).padStart(7)}   ${Le(zt.lerp(t.fin_angles[l],e.b.fin_angles[l],e.alpha)*$t,2).padStart(7)}`,1210,s),s+=23}),s+=12,r("GYRO P / Q / R \xB7 \xB0/s",t.gyro.map(c=>Le(c*$t,1)).join(" / ")),K.imuOverlay&&t.imu){let c=Cs(t);r("IMU ERROR POSITION / ATTITUDE",`${Le(c.distance,3)} m / ${Le(c.attitude,2)}\xB0`,"#a8e6ff")}t.rotation&&(r("PEAK P / Q / R \xB7 \xB0/s",t.rotation.peak_rate_deg_s.map(c=>Le(c,0)).join(" / ")),r("ABOVE SOFT LIMITS \xB7 seconds",t.rotation.time_above_limit_s.map(c=>Le(c,2)).join(" / "))),r("LIPO / SOC",t.battery?`${K.metadata.battery_model.cells}S / ${Le(t.battery.soc*100,1)} %`:"DISABLED"),r("BUS / CURRENT",t.battery?`${Le(t.battery.voltage_v,2)} V / ${Le(t.battery.current_a,1)} A`:"IDEAL BUS"),r("ENERGY / PROPULSIVE \u0394V",`${t.battery?Le(t.battery.energy_wh,2)+" Wh":"\u2014"} / ${Le(t.propulsive_delta_v_m_s,2)} m/s`);let o=K.time>=K.frames.at(-1).t;return r("FLIGHT STATE",o&&K.result?`${K.result.outcome}${K.result.success?" / PASS":" / FAIL"}`:t.control_phase==="POST_TOUCHDOWN_DISARM"?"MOTOR OFF / SETTLING":Pf[t.contact]),r("IMPACT / PAD ERROR",`${Le(t.impact_speed,3)} m/s / ${Le(t.pad_distance,3)} m`),i.fillStyle="#b9c2c8",i.font="12px Bahnschrift, Arial",i.fillText(`${K.metadata?.request.name??"Landing"} \xB7 ${K.metadata?.policy.controller??""} \xB7 ${K.metadata?.hardware_profile??""} \xB7 Isaac PhysX / actual CAD / WebGL cameras`,26,960),i.fillStyle="#d6b36a",i.font="11px Bahnschrift, Arial",i.fillText("Planned parts; pack and aerodynamic parameters estimated. No body-rate command: controller outputs fin angles and throttle.",26,982),Jo}async function G0(){if(K.recording||K.frames.length<2)return;if(!window.MediaRecorder||!MediaRecorder.isTypeSupported("video/webm;codecs=vp9"))throw new Error("This browser needs WebM VP9 recording support. Use Chrome or Edge.");ba("flight"),await new Promise(requestAnimationFrame);let i=K.id;K.recording=!0,K.playing=!1,K.live=!1,K.time=0,he("export").disabled=!0,he("run").disabled=!0,he("history").disabled=!0;let e=[],t=Jo.captureStream(30),n=new MediaRecorder(t,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:65e5});n.ondataavailable=r=>{r.data.size&&e.push(r.data)};let s=new Promise((r,a)=>{n.onstop=r,n.onerror=a});try{Cf(),n.start(1e3);let r=performance.now(),a=K.frames.at(-1).t;await new Promise(l=>{function u(h){K.time=Math.min(a,Math.max(0,(h-r)/1e3-.5)),Cf(),$u(),pi(`Recording cameras + telemetry \xB7 ${Le(K.time,1)} / ${Le(a,1)} s`),(h-r)/1e3<a+1.2?requestAnimationFrame(u):l()}requestAnimationFrame(u)}),n.stop(),await s;let o=new Blob(e,{type:"video/webm"}),c=await fetch(`/api/missions/${i}/video`,{method:"POST",headers:{"X-Mission-Control":"local","Content-Type":"video/webm"},body:o});if(!c.ok)throw new Error("Video save failed");return he("videoDownload").href=`/api/missions/${i}/video`,he("videoDownload").hidden=!1,pi("Video saved with synchronized cameras and telemetry."),await c.json()}finally{n.state==="recording"&&n.stop(),t.getTracks().forEach(r=>r.stop()),K.recording=!1,va(),he("export").disabled=!1,he("run").disabled=K.busy,he("history").disabled=!1}}he("export").onclick=()=>G0().catch(i=>pi(i.message,!0));window.missionControl={state:K,seek(i){zu(i),Hf(),$u(),Gf()},recordVideo:G0,captureFrame:Cf,selectMission:Wu,geometry:I0,rotor:L0};var y0=performance.now(),x0=0,v0="",b0="",$0=new ResizeObserver(va);$0.observe(document.body);$0.observe(he("views"));function W0(i){let e=(i-y0)/1e3;if(y0=i,K.playing&&!K.recording&&K.frames.length&&(K.time=Math.min(K.frames.at(-1).t,K.time+e*Number(he("speed").value)),K.time>=K.frames.at(-1).t&&(K.playing=!1)),!K.recording&&Di==="flight"){let t=`${K.time}|${Vf}`;(ya||t!==v0)&&(ya=!1,v0=t,Hf())}if(i-x0>80){let t=`${K.time}|${If}|${K.playing}|${K.live}|${Nf.hoverTime()}|${Ko.hoverTime()}`;if(t!==b0){x0=i,b0=t;try{$u(),Gf()}catch(n){console.error(n)}}}requestAnimationFrame(W0)}requestAnimationFrame(W0);try{In=await Qn("/api/config"),S0(In),Ve("hardwareStatus",In.hardware.status),Ps.configure(In.convex_parameters??[]),ar.configure(In.disturbance_defaults??{}),he("controller").replaceChildren(...Object.entries(In.policies).map(([n,s])=>new Option(s,n))),he("controller").value=In.defaults.controller,Df(),pn.draw(),or.update(),Is();for(let n of In.hardware.parts){let s=document.createElement("div");s.className="hardware-part";let r=document.createElement("h3");r.textContent=n.part;let a=document.createElement("div"),o=document.createElement("strong");o.textContent=n.name;let c=document.createElement("p");c.textContent=n.spec;let l=document.createElement("p");if(l.textContent=n.basis,a.append(o,c,l),n.source){let u=document.createElement("a");u.href=n.source,u.target="_blank",u.rel="noreferrer",u.textContent="MANUFACTURER SOURCE \u2197",a.append(u)}s.append(r,a),he("hardwareParts").append(s)}let i=await z0(),t=new URLSearchParams(location.search).get("mission")??In.active??i.find(n=>n.hinge_layout==="radial_span_v1"&&n.summary?.success)?.id??i.find(n=>n.hinge_layout==="radial_span_v1"&&n.state==="complete")?.id??i.find(n=>n.state==="complete")?.id;t&&(await Wu(t),K.live=!1,K.time=0)}catch(i){K.connected=!1,Ve("connection","SERVICE ERROR"),pi(i.message,!0),ei()}finally{he("missionForm").inert=!1,he("missionForm").setAttribute("aria-busy","false")}var X0=()=>{!K.recording&&!K.settled&&H0().catch(i=>pi(i.message,!0))},q0=async()=>{try{S0(await Qn("/api/config"))}catch{K.connected=!1,ei()}};setInterval(()=>{document.hidden||X0()},1200);setInterval(()=>{document.hidden||q0()},5e3);document.addEventListener("visibilitychange",()=>{document.hidden||(X0(),q0())});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
