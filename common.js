/* ============================================================
 * Bio-score — shared code for both portals
 * Loaded after config.js by index.html and staff.html.
 * ========================================================== */

/* ---------------- dictionary ---------------- */
var DICT = {
  ku:{
    studentPortal:'پۆرتاڵی خوێندکاران', staffPortal:'پۆرتاڵی مامۆستایان',
    studentTitle:'وەرگرتنی نمرەکان',
    studentSub:'ئیمەیڵەکەت بنووسە. ڕاپۆرتەکە تەنها بۆ هەمان ئیمەیڵ دەنێردرێت، کەسی تر نایبینێت.',
    email:'ئیمەیڵ', code:'کۆد', continue:'بەردەوامبە', back:'گەڕانەوە',
    chooseSubjects:'وانەکان هەڵبژێرە', selectAll:'هەموو', sendReport:'ناردنی ڕاپۆرت بۆ ئیمەیڵەکەم',
    anotherEmail:'ئیمەیڵێکی تر', privacyNote:'نمرەکان لە ڕووی پەردەدا نیشان نادرێن — تەنها بۆ ئیمەیڵەکەت دەنێردرێن.',
    loginTitle:'چوونەژوورەوەی مامۆستا', loginSub:'ئیمەیڵ و کۆدی تایبەتت بنووسە. تا دەرنەچیت لە ئامێرەکەت دەمێنیتەوە.',
    signIn:'چوونەژوورەوە', sendCode:'کۆدێکی نوێم بۆ بنێرە',
    mySubjects:'وانەکان', management:'بەڕێوەبردن',
    deptReport:'ڕاپۆرتی بەش', deptReportSub:'هەموو وانەکان، ئامار و داگرتن',
    adminPanel:'پانێڵی بەڕێوەبەر', adminPanelSub:'خوێندکار، وانە، هەژمار و ڕێکخستن',
    logs:'تۆمارەکان', logsSub:'گۆڕانکاری نمرە و ئیمەیڵە نێردراوەکان',
    marks:'نمرەکان', activities:'چالاکییەکان', statistics:'ئامار',
    save:'پاشەکەوت', sortHigh:'ڕیزکردن', sendToStudents:'ناردنی نمرەکان بۆ خوێندکاران',
    addActivity:'زیادکردنی چالاکی', missing:'وانەی تەواو نەکراو',
    missingSub:'ئەو وانانەی هێشتا نمرەیان تۆمار نەکراوە یان بڵاو نەکراوەتەوە.',
    allSubjects:'هەموو وانەکان', fullExport:'هەموو نمرەکان',
    students:'خوێندکاران', subjects:'وانەکان', accounts:'هەژمارەکان', settings:'ڕێکخستن',
    importStudents:'هاوردەکردنی خوێندکاران', importSub:'هەر دێڕێک: کۆد, ناو, ئیمەیڵ, قۆناغ, گرووپ',
    import:'هاوردە', addSubject:'زیادکردنی وانە', addAccount:'زیادکردنی هەژمار',
    accountsSub:'مامۆستا، سەرۆکی بەش و بەڕێوەبەر. کۆد بە ئیمەیڵ دەنێردرێت.',
    changes:'گۆڕانکاری', emails:'ئیمەیڵەکان',
    name:'ناو', stage:'قۆناغ', group:'گرووپ', total:'کۆ', outOf:'لە', activity:'چالاکی',
    maxMark:'نمرەی تەواو', published:'بڵاوکراوەتەوە', draft:'ڕەشنووس', pass:'دەرچوو', fail:'دەرنەچوو',
    average:'تێکڕا', highest:'بەرزترین', lowest:'نزمترین', passed:'دەرچوون', graded:'نمرەدراو',
    teacher:'مامۆستا', teacherTotal:'نمرەی مامۆستا', passMark:'ئاستی دەرچوون', semester:'خول',
    saving:'پاشەکەوتکردن...', sending:'ناردن...', loading:'چاوەڕێبە...',
    delete:'سڕینەوە', edit:'دەستکاری', cancel:'پاشگەزبوونەوە', confirm:'دڵنیایت؟',
    role:'ڕۆڵ', active:'چالاک', subjectCode:'کۆدی وانە', resetCode:'کۆدی نوێ بنێرە',
    noData:'هیچ داتایەک نییە', logout:'دەرچوون',
    roleTeacher:'مامۆستا', roleHead:'سەرۆکی بەش', roleAdmin:'بەڕێوەبەر'
  },
  en:{
    studentPortal:'Student portal', staffPortal:'Staff portal',
    studentTitle:'Get your marks',
    studentSub:'Enter your email. The report is sent only to that address — nobody else can see it.',
    email:'Email', code:'Code', continue:'Continue', back:'Back',
    chooseSubjects:'Choose subjects', selectAll:'All', sendReport:'Send the report to my email',
    anotherEmail:'Another email', privacyNote:'Marks are never shown on screen — they are emailed to you only.',
    loginTitle:'Staff sign in', loginSub:'Enter your email and access code. You stay signed in until you log out.',
    signIn:'Sign in', sendCode:'Email me a new code',
    mySubjects:'Subjects', management:'Management',
    deptReport:'Department report', deptReportSub:'All subjects, statistics and downloads',
    adminPanel:'Admin panel', adminPanelSub:'Students, subjects, accounts and settings',
    logs:'Logs', logsSub:'Mark changes and emails sent',
    marks:'Marks', activities:'Activities', statistics:'Statistics',
    save:'Save', sortHigh:'Sort', sendToStudents:'Send marks to students',
    addActivity:'Add activity', missing:'Incomplete subjects',
    missingSub:'Subjects with no marks entered or nothing published yet.',
    allSubjects:'All subjects', fullExport:'All marks',
    students:'Students', subjects:'Subjects', accounts:'Accounts', settings:'Settings',
    importStudents:'Import students', importSub:'One per line: id, name, email, stage, group',
    import:'Import', addSubject:'Add subject', addAccount:'Add account',
    accountsSub:'Teachers, head of department and admin. The code is emailed automatically.',
    changes:'Changes', emails:'Emails',
    name:'Name', stage:'Stage', group:'Group', total:'Total', outOf:'Out of', activity:'Activity',
    maxMark:'Max mark', published:'Published', draft:'Draft', pass:'Pass', fail:'Fail',
    average:'Average', highest:'Highest', lowest:'Lowest', passed:'Passed', graded:'Graded',
    teacher:'Teacher', teacherTotal:'Teacher marks', passMark:'Pass line', semester:'Semester',
    saving:'Saving...', sending:'Sending...', loading:'Loading...',
    delete:'Delete', edit:'Edit', cancel:'Cancel', confirm:'Are you sure?',
    role:'Role', active:'Active', subjectCode:'Subject code', resetCode:'Email a new code',
    noData:'No data', logout:'Sign out',
    roleTeacher:'Teacher', roleHead:'Head of department', roleAdmin:'Admin'
  },
  ar:{
    studentPortal:'بوابة الطلبة', staffPortal:'بوابة التدريسيين',
    studentTitle:'استلام الدرجات',
    studentSub:'اكتب بريدك. يُرسل التقرير إلى هذا البريد فقط ولا يراه أحد غيرك.',
    email:'البريد الإلكتروني', code:'الرمز', continue:'متابعة', back:'رجوع',
    chooseSubjects:'اختر المواد', selectAll:'الكل', sendReport:'أرسل التقرير إلى بريدي',
    anotherEmail:'بريد آخر', privacyNote:'لا تظهر الدرجات على الشاشة — تُرسل إلى بريدك فقط.',
    loginTitle:'دخول التدريسيين', loginSub:'اكتب بريدك ورمزك الخاص. تبقى مسجلاً حتى تخرج.',
    signIn:'دخول', sendCode:'أرسل لي رمزاً جديداً',
    mySubjects:'المواد', management:'الإدارة',
    deptReport:'تقرير القسم', deptReportSub:'كل المواد والإحصاءات والتنزيل',
    adminPanel:'لوحة المدير', adminPanelSub:'الطلبة والمواد والحسابات والإعدادات',
    logs:'السجلات', logsSub:'تغييرات الدرجات والرسائل المرسلة',
    marks:'الدرجات', activities:'الأنشطة', statistics:'الإحصاء',
    save:'حفظ', sortHigh:'ترتيب', sendToStudents:'إرسال الدرجات للطلبة',
    addActivity:'إضافة نشاط', missing:'مواد غير مكتملة',
    missingSub:'مواد لم تُدخل درجاتها أو لم تُنشر بعد.',
    allSubjects:'كل المواد', fullExport:'كل الدرجات',
    students:'الطلبة', subjects:'المواد', accounts:'الحسابات', settings:'الإعدادات',
    importStudents:'استيراد الطلبة', importSub:'كل سطر: الرقم، الاسم، البريد، المرحلة، المجموعة',
    import:'استيراد', addSubject:'إضافة مادة', addAccount:'إضافة حساب',
    accountsSub:'تدريسي، رئيس قسم، مدير. يُرسل الرمز بالبريد.',
    changes:'التغييرات', emails:'الرسائل',
    name:'الاسم', stage:'المرحلة', group:'المجموعة', total:'المجموع', outOf:'من', activity:'النشاط',
    maxMark:'الدرجة الكاملة', published:'منشور', draft:'مسودة', pass:'ناجح', fail:'راسب',
    average:'المعدل', highest:'الأعلى', lowest:'الأدنى', passed:'الناجحون', graded:'مُقيَّم',
    teacher:'التدريسي', teacherTotal:'درجات التدريسي', passMark:'حد النجاح', semester:'الفصل',
    saving:'جارٍ الحفظ...', sending:'جارٍ الإرسال...', loading:'جارٍ التحميل...',
    delete:'حذف', edit:'تعديل', cancel:'إلغاء', confirm:'هل أنت متأكد؟',
    role:'الدور', active:'مُفعّل', subjectCode:'رمز المادة', resetCode:'أرسل رمزاً جديداً',
    noData:'لا توجد بيانات', logout:'خروج',
    roleTeacher:'تدريسي', roleHead:'رئيس القسم', roleAdmin:'مدير'
  }
};
var LANGS=['ku','en','ar'], LANG_LABEL={ku:'کوردی',en:'English',ar:'العربية'};
var lang = localStorage.getItem('bs_lang') || 'ku';
function t(k){ return (DICT[lang]&&DICT[lang][k]) || DICT.en[k] || k; }

/* ---------------- dom helpers ---------------- */
function $(id){ return document.getElementById(id); }
function qa(sel,root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function n(v){ var x=Number(v); return isNaN(x)?0:x; }
function show(id){
  qa('section').forEach(function(s){ s.classList.add('hide'); });
  if($(id)) $(id).classList.remove('hide');
  window.scrollTo(0,0);
}
function msg(id, text, kind){
  var el=$(id); if(!el) return;
  el.className='msg show '+(kind||'info'); el.textContent=text;
  if(kind==='ok') setTimeout(function(){ el.classList.remove('show'); },7000);
}
function hideMsg(id){ var el=$(id); if(el) el.classList.remove('show'); }
function busy(on,text){
  var l=$('loading'); if(!l) return;
  $('loadingTx').textContent=text||t('loading');
  l.classList.toggle('show',!!on);
}
function stat(v,l){ return '<div class="stat"><b>'+v+'</b><span>'+esc(l)+'</span></div>'; }
function roleLabel(r){
  return r==='admin' ? t('roleAdmin') : r==='head' ? t('roleHead') : t('roleTeacher');
}
function subjName(s){ return lang==='en' ? (s.name_en||s.name_ku) : (s.name_ku||s.name_en); }
function actName(a){ return lang==='en' ? (a.name_en||a.name_ku) : (a.name_ku||a.name_en); }

/* ---------------- api ---------------- */
function apiUrl(){
  if(typeof API_URL==='string' && API_URL) return API_URL;
  return localStorage.getItem('bs_api') || '';
}
function api(action, payload){
  payload = payload||{}; payload.action=action; payload.lang=lang;
  var tok = (typeof SESSION_TOKEN==='function') ? SESSION_TOKEN() : null;
  if(tok) payload.token=tok;
  return fetch(apiUrl(),{
    method:'POST', redirect:'follow',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body: JSON.stringify(payload)
  }).then(function(r){ return r.json(); }).then(function(d){
    if(!d.ok) throw new Error(d.error||'Request failed');
    return d;
  });
}

/* ---------------- language ---------------- */
function applyLang(after){
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang==='en') ? 'ltr' : 'rtl';
  if($('langBtn')) $('langBtn').textContent = LANG_LABEL[lang];
  qa('[data-t]').forEach(function(el){ el.textContent = t(el.getAttribute('data-t')); });
  localStorage.setItem('bs_lang', lang);
  if(after) after();
}
function initLang(after){
  applyLang();
  if($('langBtn')) $('langBtn').onclick=function(){
    lang = LANGS[(LANGS.indexOf(lang)+1)%LANGS.length];
    applyLang(after);
  };
}

/* ---------------- branding ---------------- */
/** Mix a hex colour towards black by `amount` (0..1). */
function darken(hex, amount){
  var m=/^#?([0-9a-f]{6})$/i.exec(String(hex||'')); if(!m) return hex;
  var v=parseInt(m[1],16), p=[(v>>16)&255,(v>>8)&255,v&255].map(function(c){
    return Math.max(0, Math.round(c*(1-amount)));
  });
  return '#'+p.map(function(c){ return ('0'+c.toString(16)).slice(-2); }).join('');
}
/** opts.darken — shade the brand colour, so the staff portal looks distinct. */
function loadBranding(opts){
  opts = opts || {};
  return api('public.info').then(function(d){
    if($('appName')) $('appName').textContent = d.app_name || 'Bio-score';
    if($('appSub')) $('appSub').textContent =
      (lang==='en'? d.department_en : d.department_ku) + ' · ' +
      (lang==='en'? d.university_en : d.university_ku);
    if(d.brand_color){
      var base = opts.darken ? darken(d.brand_color, opts.darken) : d.brand_color;
      document.documentElement.style.setProperty('--brand', base);
      document.documentElement.style.setProperty('--brand-dark', darken(base, 0.22));
      var meta=document.querySelector('meta[name="theme-color"]');
      if(meta) meta.setAttribute('content', base);
    }
    return d;
  }).catch(function(){ return null; });
}

/* ---------------- setup screen ---------------- */
function needsSetup(){ return !apiUrl(); }
function wireSetup(){
  if(!$('apiSave')) return;
  $('apiSave').onclick=function(){
    var v=$('apiInput').value.trim();
    if(!/\/exec$/.test(v)){ alert('The URL must end with /exec'); return; }
    localStorage.setItem('bs_api', v); location.reload();
  };
}

/* ---------------- bottom sheet ---------------- */
function openSheet(title, html, after){
  $('shTitle').textContent=title; $('shBody').innerHTML=html;
  $('sheet').classList.add('show');
  if(after) after();
}
function closeSheet(){ $('sheet').classList.remove('show'); busy(false); }
function wireSheet(){
  if($('sheet')) $('sheet').onclick=function(e){ if(e.target===$('sheet')) closeSheet(); };
}

/* ---------------- Word / Excel download ---------------- */
function download(name, mime, content){
  var html='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">'+
    '<head><meta charset="utf-8"><style>table{border-collapse:collapse}td,th{border:1px solid #999;padding:6px;'+
    'font-family:Arial,Tahoma;font-size:12px}th{background:#0f766e;color:#fff}h2{font-family:Arial}</style></head>'+
    '<body dir="'+(lang==='en'?'ltr':'rtl')+'">'+content+'</body></html>';
  var blob=new Blob(['﻿'+html],{type:mime});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=name;
  document.body.appendChild(a); a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ---------------- service worker ---------------- */
function registerSW(){
  if('serviceWorker' in navigator){
    window.addEventListener('load',function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); });
  }
}
