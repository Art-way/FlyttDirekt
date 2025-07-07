import pimg from '/public/images/projects/img-1.jpg'
import pimg2 from '/public/images/projects/img-2.jpg'
import pimg3 from '/public/images/projects/img-3.jpg'
import pimg4 from '/public/images/projects/img-4.jpg'
import pimg5 from '/public/images/projects/img-5.jpg'

import sSingleimg1 from '/public/images/project-single/2.jpg'
import sSingleimg2 from '/public/images/project-single/3.jpg'

const Projects = [
    {
        Id: '1',
        pImg: pimg,
        subTitle: 'Stockholm, Sverige',
        title: 'Bohagsflytt Villa',
        slug: 'bohagsflytt-stockholm',
        description: 'En komplett bohagsflytt för en familj i centrala Stockholm. Vi hanterade allt från packning till montering i det nya hemmet.',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
    },
    {
        Id: '2',
        pImg: pimg2,
        subTitle: 'Göteborg, Sverige',
        title: 'Kontorsflytt',
        slug: 'kontorsflytt-goteborg',
        description: 'Effektiv företagsflytt för ett växande tech-bolag. Projektet genomfördes under en helg för att minimera driftstopp.',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
    },
    {
        Id: '3',
        pImg: pimg3,
        subTitle: 'Köpenhamn, Danmark',
        title: 'Utlandsflytt',
        slug: 'utlandsflytt-danmark',
        description: 'Säker och smidig flytt för en privatperson från Sverige till Danmark, inklusive tullhantering och försäkring.',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
    },
    {
        Id: '4',
        pImg: pimg4,
        subTitle: 'Malmö, Sverige',
        title: 'Pianoflytt',
        slug: 'pianoflytt-malmo',
        description: 'Specialtransport av en värdefull flygel. Vårt team använde specialutrustning för att garantera en säker hantering.',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
    },
    {
        Id: '5',
        pImg: pimg5,
        subTitle: 'Uppsala, Sverige',
        title: 'Tungtransport',
        slug: 'tungtransport-uppsala',
        description: 'Flytt av ett tungt kassaskåp och industrimaskiner för ett lokalt företag i Uppsala, utfört med precision och säkerhet.',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
    },
]
export default Projects;