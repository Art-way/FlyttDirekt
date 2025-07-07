// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";
import blogImg4 from "/public/images/blog/img-7.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img-4.jpg";
import blogSingleImg2 from "/public/images/blog/img-5.jpg";
import blogSingleImg3 from "/public/images/blog/img-6.jpg";
import blogSingleImg4 from "/public/images/blog/img-8.jpg";

const blogs = [
    {
        id: '1',
        title: 'Så packar du smart – 10 bästa tipsen',
        slug: 'packa-smart-tips',
        screens: blogImg1,
        description: 'En bra packning är grunden för en lyckad flytt. Här är våra bästa tips för att packa effektivt och säkert.',
        author: 'Lars Svensson',
        authorTitle:'Flyttexpert',
        authorImg:blogAvaterImg1,
        create_at: '14 OKT, 23',
        blogSingleImg:blogSingleImg1, 
        comment:'5',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Checklista för din flyttstädning',
        slug: 'checklista-flyttstadning',
        screens: blogImg2,
        description: 'Missa ingenting vid flyttstädningen! Följ vår kompletta checklista för ett skinande rent resultat.',
        author: 'Sofia Lindgren',
        authorTitle:'Städexpert',
        authorImg:blogAvaterImg2,
        create_at: '16 OKT, 23',
        blogSingleImg:blogSingleImg2, 
        comment:'8',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Guide: Allt om RUT-avdrag för flytt',
        slug: 'rut-avdrag-flytt-guide',
        screens: blogImg3,
        description: 'Hur fungerar RUT-avdraget för flyttjänster? Vi reder ut begreppen och visar hur du kan spara pengar.',
        author: 'Anna Bergman',
        authorTitle:'Ekonomiansvarig',
        authorImg:blogAvaterImg3,
        create_at: '18 OKT, 23',
        blogSingleImg:blogSingleImg3,
        comment:'12',
        blClass:'format-standard-image',
    },
    {
        id: '4',
        title: 'Flytta med barn – Så gör ni det enklare',
        slug: 'flytta-med-barn',
        screens: blogImg4,
        description: 'Att flytta med familjen kan vara en utmaning. Vi delar med oss av våra bästa råd för en smidigare flytt för både stora och små.',
        author: 'Lars Svensson',
        authorTitle:'Flyttexpert',
        authorImg:blogAvaterImg3,
        create_at: '20 OKT, 23',
        blogSingleImg:blogSingleImg4,
        comment:'7',
        blClass:'format-video',
    },
];
export default blogs;