// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
'ar':'Arabic',
'bg':'Bulgarian',
'de':'German',
'da':'Danish',
'el':'Greek',
'en':'English',
'es':'Spanish',
'fr':'French',
'he':'Hebrew',
'hi':'Hindi',
'hu':'Hungarian',
'it':'Italian',
'ja':'Japanese',
'ko':'Korean',
'nl':'Dutch',
'pl':'Polish',
'pt':'Portuguese',
'pt-br':'Brazilian Portuguese',
'ro':'Romanian',
'ru':'Russian',
'sv':'Swedish',
'th':'Thai',
'tr':'Turkish',
'uk':'Ukrainian',
'vi':'Vietnamese',
'zh-hans':'Simplified Chinese',
'zh-hant':'Traditional Chinese'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N หน้า Activity"
s.moreResourcesOfThisType = "ข้อมูลเพิ่มเติมประเภทดังกล่าว."
s.accessKeyN = 'Accesskey n ใช้เพื่อข้ามไปยัง <a href="//internal-links" accesskey="n">หน้าในของ navigation</a>. <a href="//contentstart">ข้ามไปยังส่วนเริ่มต้นของเนื้อหา</a>'
s.examplesInAnotherScript = "เอกสารนี้ประกอบไปด้วยตัวอย่างในภาษาอื่น/script."
s.worldMap = "แผนที่โลก"
s.searchI18nSite = "I18n ค้นหาไซด์" 
s.translationDisclaimer = 'เอกสารฉบับนี้เป็นเอกสารฉบับแปลในกรณีที่มีข้อมูลไม่ตรงกันหรือมีข้อบกพร่อง <a href="'+f.filename+'.en">เอกสารดั้งเดิมฉบับภาษาอังกฤษ</a> จะถือว่าเป็นฉบับที่เป็นทางการ <a href="//copyright">ลิขสิทธิ์ดั้งเดิม</a> เป็นของ W3C, ดังที่แสดงไว้ข้างล่าง'
s.translator = "ผู้แปล:"
s.relatedLinks = "ลิงคฺ์ที่เกี่ยวข้อง"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "สารบัญตามหัวข้อ"
s.techIndexText = "สารบัญทางเทคนิค"
s.gotoW3cHome = "ไปยังหน้าโฮมเพจของW3C"
s.gotoI18nHome = "ไปยังหน้า Internationalization Activity"
s.internationalizationTitle = "Internationalization"
s.i18nActivityHomePage = "หน้า Internationalization Activity"
s.home = "หน้าแรก"
s.aboutI18nActivity = "เกี่ยวกับการงานระหว่างประเทศ"
s.about = "เกี่ยวกับ"
s.groupsThatMakeUp = "กลุ่มผู้สร้างการงานระหว่างประเทศ"
s.groups = "กลุ่ม"
s.topicIndexForInformation = "หัวข้อสำหรับข้อมูลในเวบนี้"
s.topics = "หัวข้อ"
s.taskBasedIndex = "เทคนิค i18n จัดแบ่งตามประเภทงาน"
s.techniques = "เทคนิค"
s.informationResources = "ฐานข้อมูลบนหน้าเวบระหว่างประเทศ"
s.resources = "ฐานข้อมูล"
s.newsFiltersAndFeeds = "ข่าวสารเกี่ยวกับฟิวเตอร์และ  RSS feeds สำหรับ W3C ระหว่างประเทศ"
s.news = "ข่าวสาร"
s.onThisPage = "ในหน้านี้"
s.questionAlt = "คำถาม"
s.questionLink = "คำถาม"
s.question = "คำถาม"
s.backgroundAlt = "พื้นหลัง"
s.backgroundLink = "พื้นหลัง"
s.background = "พื้นหลัง"
s.answer = "คำตอบ" // heading
s.answerAlt = "คำตอบ"
s.answerLink = "คำตอบ"
s.byTheWayAlt = "ข้อมูลที่เป็นประโยชน์อื่นๆ"
s.byTheWayLink = "นอกจากนี้"
s.byTheWay = "นอกจากนี้"
s.furtherReadingAlt = "อ่านเพิ่มเติม"
s.furtherReadingLink = "อ่านเพิ่มเติม"
s.furtherReading = "อ่านเพิ่มเติม"
s.intendedAudience = "กลุ่มเป้าหมาย:"
s.skipToAnswer = "[ข้ามไปยังคำตอบ]"
s.tellUsWhatYouThink = "บอกเราด้วยว่าคุณคิดอย่างไร (ภาษาอังกฤษ)"
s.sendAComment = "ส่งข้อคิดเห็นถึงเรา"
s.subscribeToRSS = "ลงทะเบียนรับข่าวสาร RSS ฟีด"
s.newResourcesAlt = "แจ้งเว็บใหม่ในแต่ละครั้งเพื่อลงตีพิมพ์สำหรับครั้งแรก"
s.newResources = "เว็บใหม่"
s.homePageNewsAlt = "รายการข่าวทั้งหมดแสดงในโฮมเพจ"
s.homePageNews = "โฮมเพจรายงานข่าว"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = " "

s.author = "ผู้แต่ง:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "ปรับปรุงโดย:" // person's name appears after colon
s.translatedBy = "ผู้แปล:"
s.validXHTML = "XHTML 1.0!ที่อ่านค่าได้"
s.validCSS = "CSS! ที่อ่านค่าได้"
s.codedInUtf8 = "ได้รับการแปลงโคดเป็น UTF-8! แล้ว"

s.translatedFromEnglishVer = "แปลมาจากบทความภาษาอังกฤษลงวันที่ "+dt.enVersion+". เวอร์ชั่นแปลฉบับที่เปลี่ยนแปลงลครั้งล่าสุด "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges ='สำหรับการเปลี่ยนแปลงเอกสารเก่า, ค้นหา <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a> ในบล๊อก i18n'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">See the change log.</a></span>'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_review="This article is currently out for public review. Please send comments to <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>subscribe</a>)</span>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_notreviewed="This article was published without public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location