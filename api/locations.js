// File: /api/locations.js

const locations = [
    // Stor-Stockholm
    { 
        slug: 'stockholm', 
        name: 'Stockholm', 
        description: 'Vår hemmaplan där vi erbjuder ett komplett utbud av flytt- och städtjänster med oslagbar lokalkännedom i innerstaden och närförorter.' 
    },
    { 
        slug: 'sollentuna', 
        name: 'Sollentuna',
        description: 'Vi hjälper dig med en smidig och effektiv flytt i Sollentuna. Vi känner till alla områden, från Tureberg till Helenelund och Edsberg.' 
    },
    { 
        slug: 'nacka', 
        name: 'Nacka',
        description: 'Planerar du en flytt till, från eller inom Nacka? Vårt erfarna team hanterar din flytt tryggt och säkert, från Sickla till Saltsjöbaden.' 
    },
    { 
        slug: 'taby', 
        name: 'Täby',
        description: 'Flyttdirekt är din lokala flyttfirma i Täby. Vi erbjuder allt från bohagsflytt i villa till lägenhetsflytt med högsta service.' 
    },
    { 
        slug: 'solna', 
        name: 'Solna',
        description: 'Behöver du flytthjälp i Solna? Vi är experter på flyttar i området, från Arenastaden och Råsunda till Hagalund.'
    },
    { 
        slug: 'lidingo', 
        name: 'Lidingö',
        description: 'Vi erbjuder förstklassig flytthjälp på Lidingö. Vi hanterar villaflyttar och lägenhetsflyttar med största varsamhet och professionalism.'
    },
    { 
        slug: 'bromma', 
        name: 'Bromma',
        description: 'Som din lokala flyttfirma i Bromma ser vi till att din flytt blir enkel och effektiv. Vi täcker hela området, från Äppelviken till Blackeberg.'
    },
    { 
        slug: 'sodertalje', 
        name: 'Södertälje',
        description: 'Anlita en pålitlig flyttfirma i Södertälje. Vi erbjuder kompletta flyttlösningar för både privatpersoner och företag.'
    },
    { 
        slug: 'huddinge', 
        name: 'Huddinge',
        description: 'Vi utför trygga och prisvärda flyttar i hela Huddinge kommun. Kontakta oss för en kostnadsfri offert för din flytt.'
    },
    { 
        slug: 'haninge', 
        name: 'Haninge',
        description: 'Från Brandbergen till Dalarö, vi är din expert på flytthjälp och magasinering i Haninge. Säker och pålitlig service.'
    },
        { name: 'Upplands Väsby', slug: 'upplands-vasby', description: 'Vi erbjuder effektiva och säkra företagsflyttar och bohagsflyttar i Upplands Väsby.' },

        { name: 'Järfälla', slug: 'jarfalla', description: 'Vi är din lokala flyttfirma i Järfälla, redo att hjälpa dig med en smidig och stressfri flytt.' },

    { 
        slug: 'vallingby', 
        name: 'Vällingby',
        description: 'Flytta smidigt i Vällingby med omnejd. Vi erbjuder professionell flytthjälp med erfaren personal och rätt utrustning.'
    },
    { 
        slug: 'sodermalm', 
        name: 'Södermalm',
        description: 'Expert på flyttar i Stockholms innerstad. Vi hanterar trånga trapphus och parkeringsutmaningar på Södermalm utan problem.'
    },
    { 
        slug: 'norrtalje', 
        name: 'Norrtälje',
        description: 'Vi erbjuder flytthjälp i hela Roslagen. Kontakta oss för din flytt till, från eller inom Norrtälje kommun.'
    },
        { name: 'Sundbyberg', slug: 'sundbyberg', description: 'Sveriges till ytan minsta kommun kräver en flyttfirma med precision. Vi är ditt lokala val i Sundbyberg.' },

    { 
        slug: 'strangnas', 
        name: 'Strängnäs',
        description: 'Planerar du en flytt i Strängnäs? Vi erbjuder en komplett och effektiv flyttservice för en stressfri upplevelse.'
    },
    { 
        slug: 'vasterhaninge', 
        name: 'Västerhaninge',
        description: 'Din lokala flyttfirma i Västerhaninge. Vi hjälper dig med allt från packning till transport och magasinering.'
    },
    
    // Större städer i Sverige
    { 
        slug: 'goteborg', 
        name: 'Göteborg',
        description: 'Vi utför även långdistansflyttar. Planerar du att flytta mellan Stockholm och Göteborg? Kontakta oss för en smidig lösning.'
    },
    { 
        slug: 'malmo', 
        name: 'Malmö',
        description: 'Flytta mellan Stockholm och Malmö? Inga problem. Vi erbjuder säker och pålitlig fjärrflytt för hela ditt bohag.'
    },
    { 
        slug: 'uppsala', 
        name: 'Uppsala',
        description: 'Vi hjälper dig med din flytt till eller från studentstaden Uppsala. Vi har stor erfarenhet av både små och stora flyttar i området.'
    },
    { 
        slug: 'helsingborg', 
        name: 'Helsingborg',
        description: 'Planerar du en flytt till Skåne? Vi erbjuder professionell fjärrflytt till och från Helsingborg med omnejd.'
    },
    { 
        slug: 'vasteras', 
        name: 'Västerås',
        description: 'Smidig och effektiv flytthjälp för dig som flyttar till, från eller inom Västerås. Kontakta oss för en kostnadsfri offert.'
    },
    { 
        slug: 'orebro', 
        name: 'Örebro',
        description: 'Vi är din trygga partner för flyttar till och från Örebro. Vi hanterar hela processen med professionalism och omsorg.'
    },
    { 
        slug: 'linkoping', 
        name: 'Linköping',
        description: 'Behöver du hjälp med din flytt i Linköping? Vi erbjuder skräddarsydda lösningar för en stressfri flyttupplevelse.'
    }
];

module.exports = locations;
