// images
import simg1 from '/public/images/service/1.jpg'; // Flytthjälp
import simg2 from '/public/images/service/2.jpg'; // Flyttstädning
import simg3 from '/public/images/service/3.jpg'; // Magasinering
import simg4 from '/public/images/service/4.jpg'; // Företagsflytt
import simg5 from '/public/images/service/5.jpg'; // Pianoflytt
import simg6 from '/public/images/service/6.jpg'; // Tunga lyft

// icons
import sIcon1 from '/public/images/icon/express-delivery.svg'; // Flytthjälp
import sIcon2 from '/public/images/icon/window.svg'; // Flyttstädning (cleaning icon)
import sIcon3 from '/public/images/icon/6.svg'; // Magasinering (storage icon)
import sIcon4 from '/public/images/icon/3.svg'; // Företagsflytt (business icon)
import sIcon5 from '/public/images/icon/carpet.svg'; // Pianoflytt (heavy item icon)
import sIcon6 from '/public/images/icon/2.svg'; // Tunga lyft (heavy item icon)

import sSingleimg1 from '/public/images/service-single/2.jpg';
import sSingleimg2 from '/public/images/service-single/3.jpg';

const Services = [
    {
        Id: '1',
        sImg: simg1,
        sIcon: sIcon1,
        sTitle: 'Flytthjälp',
        slug: 'flytthjalp',
        description: 'Professionell och säker flytthjälp för privatpersoner och företag. Vi hanterar allt från packning till transport.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '2',
        sImg: simg2,
        sIcon: sIcon2,
        sTitle: 'Flyttstädning',
        slug: 'flyttstadning',
        description: 'Vi erbjuder garanterad flyttstädning enligt mäklarstandard. Lämna över städningen till oss och få mer tid över till annat.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '3',
        sImg: simg3,
        sIcon: sIcon3,
        sTitle: 'Magasinering',
        slug: 'magasinering',
        description: 'Behöver du förvara dina möbler? Vi erbjuder säker, torr och tempererad magasinering för både korta och långa perioder.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '4',
        sImg: simg4,
        sIcon: sIcon4,
        sTitle: 'Företagsflytt',
        slug: 'foretagsflytt',
        description: 'Effektiv och strukturerad kontorsflytt med minimalt driftstopp för ert företag. Vi planerar och genomför hela processen.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '5',
        sImg: simg5,
        sIcon: sIcon5,
        sTitle: 'Pianoflytt',
        slug: 'pianoflytt',
        description: 'Specialiserad och säker flytt av pianon och andra tunga instrument. Vi har rätt utrustning och erfarenhet för jobbet.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '6',
        sImg: simg6,
        sIcon: sIcon6,
        sTitle: 'Tunga Lyft',
        slug: 'tunga-lyft',
        description: 'Vi hjälper till med tunga och otympliga lyft som kassaskåp, maskiner och andra tunga föremål med specialutrustning.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    // The template uses more than 6 services in some components.
    // We will duplicate the main services to fill the space for now.
    // These can be replaced with real additional services later.
    {
        Id: '7',
        sImg: simg1,
        sIcon: sIcon1,
        sTitle: 'Bohagsflytt',
        slug: 'bohagsflytt',
        description: 'Komplett service för bohagsflytt. Vi ser till att hela ditt hem flyttas tryggt och säkert till din nya adress.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '8',
        sImg: simg2,
        sIcon: sIcon2,
        sTitle: 'Kontorsstädning',
        slug: 'kontorsstadning',
        description: 'Regelbunden och noggrann städning för en trivsam och produktiv arbetsmiljö på ert kontor.',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
];

export default Services;