import { dataProps, dropDownRoleProps } from "./type";


export const constructionRoles : dropDownRoleProps[]= [
    { id: 0, title: 'All' },
    { id: 1, title: 'Subcontractor' },
    { id: 2, title: 'Project Manager' },
    { id: 3, title: 'Supervisor' },
    { id: 4, title: 'Engineer' },
    { id: 5, title: 'Architect' },
    { id: 6, title: 'Electrician' },
    { id: 7, title: 'Estimator' },
    { id: 8, title: 'Construction Expeditor' },
    { id: 9, title: 'Construction Foreman' },
    { id: 10, title: 'Construction Manager' },
    { id: 11, title: 'Surveyor' },
    { id: 12, title: 'Construction Worker' },
  ];

export const sortedRole =constructionRoles.sort((a, b) => a.title.localeCompare(b.title));

export const data : dataProps[] = [{"id":1,"name":"Maynard Caso","email":"mcaso0@shinystat.com","role":"Construction Worker","action":true},
    {"id":2,"name":"Whittaker Weben","email":"wweben1@dot.gov","role":"Subcontractor","action":false},
    {"id":3,"name":"Tamarah Tyers","email":"ttyers2@vistaprint.com","role":"Project Manager","action":true},
    {"id":4,"name":"Merle Grob","email":"mgrob3@booking.com","role":"Supervisor","action":false},
    {"id":5,"name":"Kizzie Coen","email":"kcoen4@imgur.com","role":"Project Manager","action":false},
    {"id":6,"name":"Oralla Garland","email":"ogarland5@gmpg.org","role":"Engineer","action":true},
    {"id":7,"name":"Cherey Lorrie","email":"clorrie6@mit.edu","role":"Architect","action":false},
    {"id":8,"name":"Alvina Hamstead","email":"ahamstead7@adobe.com","role":"Project Manager","action":false},
    {"id":9,"name":"Jenine Neenan","email":"jneenan8@mapquest.com","role":"Electrician","action":false},
    {"id":10,"name":"Bell Foxen","email":"bfoxen9@is.gd","role":"Subcontractor","action":false},
    {"id":11,"name":"Bryn Brockwell","email":"bbrockwella@usa.gov","role":"Electrician","action":false},
    {"id":12,"name":"Allie Shobrook","email":"ashobrookb@berkeley.edu","role":"Construction Worker","action":true},
    {"id":13,"name":"Claudio Quinnette","email":"cquinnettec@engadget.com","role":"Subcontractor","action":true},
    {"id":14,"name":"Engracia Du Hamel","email":"edud@gizmodo.com","role":"Construction Worker","action":false},
    {"id":15,"name":"Charisse Quincee","email":"cquinceee@ustream.tv","role":"Estimator","action":false},
    {"id":16,"name":"Cherise Garfath","email":"cgarfathf@51.la","role":"Construction Worker","action":false},
    {"id":17,"name":"Ave Matijevic","email":"amatijevicg@prweb.com","role":"Subcontractor","action":true},
    {"id":18,"name":"Carmine Janout","email":"cjanouth@toplist.cz","role":"Subcontractor","action":false},
    {"id":19,"name":"Melody Muggeridge","email":"mmuggeridgei@businesswire.com","role":"Construction Expeditor","action":true},
    {"id":20,"name":"Ellyn Swadlen","email":"eswadlenj@soup.io","role":"Electrician","action":true},
    {"id":21,"name":"Liam Lincey","email":"llinceyk@lycos.com","role":"Electrician","action":false},
    {"id":22,"name":"Liliane Paoli","email":"lpaolil@diigo.com","role":"Construction Worker","action":false},
    {"id":23,"name":"Boony Branton","email":"bbrantonm@independent.co.uk","role":"Construction Worker","action":true},
    {"id":24,"name":"Felicio Advani","email":"fadvanin@hexun.com","role":"Engineer","action":false},
    {"id":25,"name":"Chandler Cantwell","email":"ccantwello@europa.eu","role":"Engineer","action":false},
    {"id":26,"name":"Lila Danielou","email":"ldanieloup@lulu.com","role":"Estimator","action":false},
    {"id":27,"name":"Lari Catterell","email":"lcatterellq@narod.ru","role":"Subcontractor","action":true},
    {"id":28,"name":"Dodie Crimpe","email":"dcrimper@netvibes.com","role":"Construction Foreman","action":false},
    {"id":29,"name":"Normie Tuff","email":"ntuffs@last.fm","role":"Construction Manager","action":false},
    {"id":30,"name":"Catlaina Troy","email":"ctroyt@cbslocal.com","role":"Construction Expeditor","action":false},
    {"id":31,"name":"Ethelind McSporrin","email":"emcsporrinu@microsoft.com","role":"Supervisor","action":false},
    {"id":32,"name":"Nettie Cosens","email":"ncosensv@hp.com","role":"Project Manager","action":true},
    {"id":33,"name":"Mariel Egle","email":"meglew@imgur.com","role":"Construction Foreman","action":true},
    {"id":34,"name":"Cosetta Bedinham","email":"cbedinhamx@google.co.jp","role":"Electrician","action":false},
    {"id":35,"name":"Danila Pretor","email":"dpretory@theguardian.com","role":"Subcontractor","action":true},
    {"id":36,"name":"Dulciana O'Deoran","email":"dodeoranz@miibeian.gov.cn","role":"Estimator","action":true},
    {"id":37,"name":"Kit Goldup","email":"kgoldup10@comsenz.com","role":"Supervisor","action":false},
    {"id":38,"name":"Meier Kilgallon","email":"mkilgallon11@quantcast.com","role":"Construction Worker","action":true},
    {"id":39,"name":"Julie Hammatt","email":"jhammatt12@paypal.com","role":"Supervisor","action":false},
    {"id":40,"name":"Lea Brettle","email":"lbrettle13@tinyurl.com","role":"Construction Manager","action":false},
    {"id":41,"name":"Bethina Balcock","email":"bbalcock14@businessweek.com","role":"Construction Foreman","action":true},
    {"id":42,"name":"Toma Durgan","email":"tdurgan15@smugmug.com","role":"Construction Expeditor","action":false},
    {"id":43,"name":"Ginger Matschke","email":"gmatschke16@infoseek.co.jp","role":"Construction Foreman","action":true},
    {"id":44,"name":"Phaedra de Quesne","email":"pde17@berkeley.edu","role":"Supervisor","action":true},
    {"id":45,"name":"Adelice Iannini","email":"aiannini18@artisteer.com","role":"Construction Foreman","action":false},
    {"id":46,"name":"Rahel Boshers","email":"rboshers19@hhs.gov","role":"Project Manager","action":true},
    {"id":47,"name":"Cordelia Glenister","email":"cglenister1a@seattletimes.com","role":"Project Manager","action":false},
    {"id":48,"name":"Dianemarie Fullager","email":"dfullager1b@state.tx.us","role":"Engineer","action":false},
    {"id":49,"name":"Sidonnie Vandrill","email":"svandrill1c@cisco.com","role":"Project Manager","action":true},
    {"id":50,"name":"Appolonia Drinkhill","email":"adrinkhill1d@free.fr","role":"Estimator","action":false},
    {"id":51,"name":"Errol Windrass","email":"ewindrass1e@senate.gov","role":"Project Manager","action":false},
    {"id":52,"name":"Shawn Cranney","email":"scranney1f@dagondesign.com","role":"Estimator","action":true},
    {"id":53,"name":"Robbie Puller","email":"rpuller1g@addtoany.com","role":"Construction Manager","action":false},
    {"id":54,"name":"Silva Swindell","email":"sswindell1h@google.cn","role":"Construction Foreman","action":true},
    {"id":55,"name":"Stacie Bartoszek","email":"sbartoszek1i@phoca.cz","role":"Estimator","action":true},
    {"id":56,"name":"Brandais Lundie","email":"blundie1j@behance.net","role":"Architect","action":false},
    {"id":57,"name":"Clim Semken","email":"csemken1k@utexas.edu","role":"Construction Manager","action":false},
    {"id":58,"name":"Dominique Hedgecock","email":"dhedgecock1l@abc.net.au","role":"Estimator","action":true},
    {"id":59,"name":"Clement Yashanov","email":"cyashanov1m@nationalgeographic.com","role":"Construction Expeditor","action":false},
    {"id":60,"name":"Dennet Klimaszewski","email":"dklimaszewski1n@twitter.com","role":"Electrician","action":false},
    {"id":61,"name":"Coraline Ashfull","email":"cashfull1o@wufoo.com","role":"Engineer","action":true},
    {"id":62,"name":"Livvy Hansana","email":"lhansana1p@altervista.org","role":"Estimator","action":true},
    {"id":63,"name":"Vere Ravelus","email":"vravelus1q@wired.com","role":"Construction Manager","action":false},
    {"id":64,"name":"Corrina Di Biasi","email":"cdi1r@cnbc.com","role":"Construction Manager","action":false},
    {"id":65,"name":"Kimmie Crinage","email":"kcrinage1s@slate.com","role":"Project Manager","action":true},
    {"id":66,"name":"Bastian Acey","email":"bacey1t@yellowpages.com","role":"Surveyor","action":false},
    {"id":67,"name":"Kaia Crosher","email":"kcrosher1u@acquirethisname.com","role":"Estimator","action":true},
    {"id":68,"name":"Cass Heartfield","email":"cheartfield1v@comsenz.com","role":"Engineer","action":false},
    {"id":69,"name":"Trudie Goundsy","email":"tgoundsy1w@dagondesign.com","role":"Construction Foreman","action":false},
    {"id":70,"name":"Welby Zoppo","email":"wzoppo1x@irs.gov","role":"Construction Expeditor","action":false},
    {"id":71,"name":"Bartie McVie","email":"bmcvie1y@wsj.com","role":"Subcontractor","action":true},
    {"id":72,"name":"Lyndell Vasyanin","email":"lvasyanin1z@census.gov","role":"Construction Manager","action":false},
    {"id":73,"name":"Devina Rosina","email":"drosina20@gmpg.org","role":"Architect","action":true},
    {"id":74,"name":"Celie Kamiyama","email":"ckamiyama21@hc360.com","role":"Supervisor","action":false},
    {"id":75,"name":"Janis Gauntley","email":"jgauntley22@storify.com","role":"Estimator","action":false},
    {"id":76,"name":"Ashleigh Ullock","email":"aullock23@ca.gov","role":"Subcontractor","action":false},
    {"id":77,"name":"Felicio Deeming","email":"fdeeming24@bing.com","role":"Estimator","action":true},
    {"id":78,"name":"Alta Fearneley","email":"afearneley25@si.edu","role":"Construction Foreman","action":true},
    {"id":79,"name":"Virge Robillard","email":"vrobillard26@netscape.com","role":"Supervisor","action":true},
    {"id":80,"name":"Michell Coulbeck","email":"mcoulbeck27@nyu.edu","role":"Construction Foreman","action":false},
    {"id":81,"name":"Janenna Pardi","email":"jpardi28@biglobe.ne.jp","role":"Electrician","action":false},
    {"id":82,"name":"Arden Nisard","email":"anisard29@wsj.com","role":"Construction Foreman","action":false},
    {"id":83,"name":"Bobby Polley","email":"bpolley2a@ed.gov","role":"Construction Foreman","action":true},
    {"id":84,"name":"Lezley Twittey","email":"ltwittey2b@mayoclinic.com","role":"Architect","action":true},
    {"id":85,"name":"Liam Kernoghan","email":"lkernoghan2c@bing.com","role":"Construction Foreman","action":false},
    {"id":86,"name":"Gerik Kiddie","email":"gkiddie2d@uiuc.edu","role":"Estimator","action":true},
    {"id":87,"name":"Murvyn Valero","email":"mvalero2e@alexa.com","role":"Construction Foreman","action":true},
    {"id":88,"name":"Vivia Clissell","email":"vclissell2f@tuttocitta.it","role":"Supervisor","action":false},
    {"id":89,"name":"Bernadina Meininger","email":"bmeininger2g@flickr.com","role":"Subcontractor","action":true},
    {"id":90,"name":"Shirlene Berends","email":"sberends2h@time.com","role":"Electrician","action":false},
    {"id":91,"name":"Eva Liversedge","email":"eliversedge2i@bigcartel.com","role":"Project Manager","action":true},
    {"id":92,"name":"Dan Poor","email":"dpoor2j@goo.gl","role":"Supervisor","action":true},
    {"id":93,"name":"Corene Sidnall","email":"csidnall2k@over-blog.com","role":"Architect","action":true},
    {"id":94,"name":"Addi Lyttle","email":"alyttle2l@liveinternet.ru","role":"Estimator","action":false},
    {"id":95,"name":"Bordy Mewe","email":"bmewe2m@bigcartel.com","role":"Subcontractor","action":false},
    {"id":96,"name":"Heida Deshorts","email":"hdeshorts2n@google.com","role":"Construction Foreman","action":false},
    {"id":97,"name":"Iona Hillan","email":"ihillan2o@360.cn","role":"Engineer","action":false},
    {"id":98,"name":"Hallie Gircke","email":"hgircke2p@nytimes.com","role":"Subcontractor","action":true},
    {"id":99,"name":"Lotta Serris","email":"lserris2q@usgs.gov","role":"Construction Expeditor","action":true},
    {"id":100,"name":"Gerhardt Rapinett","email":"grapinett2r@nyu.edu","role":"Construction Worker","action":true}]