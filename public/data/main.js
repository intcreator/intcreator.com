export const MainData = {
    properties: {
        home: {
            type: Object,
            value: {
                blocks: [
                    {
                        slug: "sites",
                        headline: "Projects",
                        details:
                            "I'm a full stack software engineer with an emphasis on the front end. I value both visual and UX design.",
                        items: [
                            {
                                title: "The Telecommunications Inventory Wiki",
                                description:
                                    "I volunteer at the Connections Museum in Seattle and I wanted a familiar way to catalog and describe all the items we have in our collection. I created this wiki so volunteers can describe our collection and everyone can add details about telecommunications in general.",
                                url: "https://wiki.connections.museum",
                                imageUrl: "../images/home/tiw.png",
                            },
                            {
                                title: "Node Cron",
                                description: "I maintain the package you get when you run `npm i cron`. It has almost 3 million downloads per week.",
                                url: "https://www.npmjs.com/package/cron",
                                imageUrl: "../images/home/cron.svg",
                                imageStyles: "background-size: auto 80%;",
                            },
                            {
                                title: "Qualtrics",
                                description:
                                    "Qualtrics helps businesses better understand their customers and employees. I helped create a content delivery application for all Qualtrics marketing sites (1,200+ of pages, 14+ languages). I also standardized 500+ lead generation forms to a single customizable template",
                                url: "https://qualtrics.com",
                                imageUrl: "../images/home/qualtrics-logo.svg",
                                imageStyles: "background-size: 80%; background-color: white;",
                            },
                            {
                                title: "Web Audio API",
                                description:
                                    "The best source I could find to learn about the web audio API was MDN, and while MDN is a great reference, it's a poor tutorial. I created a tutorial of my own with fully self-contained code snippets that walks users through how to use the web audio API even if they have little experience in audio production.",
                                url: "https://interlucid.com/web-audio-api/",
                                imageUrl: "../images/home/web-audio-api.png",
                            },
                            {
                                title: "NUVI",
                                description:
                                    "NUVI (now Reputation) maintains a suite of social media analytics and interaction software. I helped to migrate customer filter data to a newer system.",
                                url: "https://www.nuvi.com/",
                                imageUrl: "../images/home/nuvi-logotype.png",
                                imageStyles: "background-size: 80%;",
                            },
                            {
                                title: "Prendus",
                                description:
                                    "Prendus was a startup by BYU students that allowed users to create and share learning materials across the world. I created the logo and led front-end visual and user experience design and development. Check out the style guide I made.",
                                url: "https://prendus.github.io/style-guide/",
                                imageUrl: "../images/home/prendus.png",
                                imageStyles: "background-size: 80%;",
                            },
                            {
                                title: "FamilySearch.org",
                                description:
                                    "FamilySearch is an online system for indexing, searching, and organizing family history data. I was a web developer on the team in charge of patron help resources.",
                                url: "https://familysearch.org/ask/",
                                imageUrl: "../images/home/fan-chart.jpg",
                            },
                            //   {
                            //     title: "Rewater",
                            //     description: "ReWater Systems sells greywater irrigation systems and controllers. I created a new site and online store for them using WordPress.",
                            //     url: "http://rewater.com/",
                            //     imageUrl: "../images/home/irrigation.jpg",
                            //     imageStyles: "0% 70%"
                            //   },
                            // {
                            //   title: "Reason to Rejoice",
                            //   description: "My spouse served in the Mongolia Ulaanbaatar Mission. I maintained their mission blog.",
                            //   url: "https://reasontorejoice.wordpress.com/",
                            //   imageUrl: "../images/home/snow.jpg",
                            //   imageStyles: "0% 40%"
                            // },
                            // {
                            //   title: "Elder Jared Blatter",
                            //   description: "My brother served in the Utah Salt Lake City West Mission. I maintained his mission blog.",
                            //   url: "https://elderjaredblatter.wordpress.com/",
                            //   imageUrl: "../images/home/model.jpg",
                            //   imageStyles: "0% 28%"
                            // },
                        ],
                    },
                    {
                        slug: "about",
                        headline: "About me",
                        details:
                            "I'm currently living in Seattle, Washington, but I was raised in Newbury Park, California.",
                        items: [
                            {
                                title: "Interlucid",
                                description:
                                    "I make music under the name Interlucid. Check out my sounds.",
                                url: "https://interlucid.com/",
                                imageUrl:
                                    "../images/home/interlucid-logotype.png",
                                imageStyles: "background-size: 80% auto;",
                            },
                            {
                                title: "Résumé",
                                description:
                                    "I have experience in full stack software engineering, technical instruction, and documentation.",
                                url: "../data/brandon-der-blatter-resume.pdf",
                                imageUrl: "../images/home/resume.png",
                                backgroundStyles: "background-position: 0% 35%;",
                            },
                            // {
                            //   title: "My Blog",
                            //   description: "Immerse yourself in my rants, tangents, and ideologies.",
                            //   url: "http://timl.intcreator.com/",
                            //   imageUrl: "../images/home/peak.jpg",
                            //   imageStyles: "50% 44%"
                            // },
                            // {
                            //   title: "Mission Blog",
                            //   description: "Read about my two year mission in Córdoba, Argentina (2012–2014).",
                            //   url: "http://mission.intcreator.com/",
                            //   imageUrl: "../images/home/cordoba-temple.jpg",
                            //   imageStyles: "55% 43%"
                            // },
                            //   {
                            //     title: "Mormon.org Profile",
                            //     description: "Learn more about what I believe and why",
                            //     url: "https://www.mormon.org/me/7DQ7",
                            //     imageUrl: "../images/home/mormon.jpg",
                            //     imageStyles: "55% 43%"
                            //   },
                            // {
                            //   title: "Parallax Site",
                            //   description: "If you like parallax, check out this site I made using Adobe Muse. On this site you can also see some other products of my work at BYU Software Training.",
                            //   url: "http://brandaemon.com/",
                            //   imageUrl: "../images/home/timporama.jpg",
                            //   imageStyles: "bottom"
                            // },
                            // {
                            //   title: "Animation Blog",
                            //   description: "Before switching my major to computer science, I was an Animation BFA pre-major. Needless to say, I couldn't handle drawing for several hours a day so I switched over to CS. I made some cool stuff before that though.",
                            //   url: "http://brandaemon.blogspot.com/",
                            //   imageUrl: "../images/home/lego.jpeg",
                            //   imageStyles: "50% 42%"
                            // },
                        ],
                    },
                    {
                        slug: "other",
                        headline: "Other places to find me",
                        details:
                            "I exist in a number of places around the web. In case you were interested in stalking me, I put a few links here to get you started.",
                        items: [
                            // {
                            //   title: "Bandcamp",
                            //   description: "I have a band called Interlucid. Check out my sounds.",
                            //   url: "https://interlucid.bandcamp.com/",
                            //   imageUrl: "../images/home/bandcamp-logotype.png",
                            //   imageStyles: "background-size: 80%;"
                            // },
                            // {
                            //   title: "SoundCloud",
                            //   description: "I keep a few miscellaneous things on here too.",
                            //   url: "https://soundcloud.com/interlucid",
                            //   imageUrl: "../images/home/soundcloud-logotype.png",
                            //   imageStyles: "background-size: 80%;"
                            // },
                            {
                                title: "GitHub",
                                description:
                                    "I maintain kelektiv/node-cron (2,000,000+ downloads/week) along with a host of personal projects.",
                                url: "https://github.com/intcreator",
                                imageUrl: "../images/home/github.png",
                                backgroundStyles: "background-size: 80%;",
                            },
                            {
                                title: "StackOverflow",
                                description:
                                    "I'm really not elitist enough to belong here.",
                                url: "http://stackoverflow.com/users/4561047/brandaemon",
                                imageUrl:
                                    "../images/home/stack-overflow-logotype.png",
                                imageStyles: "background-size: 80%;",
                            },
                            {
                                title: "Duolingo",
                                description:
                                    "I've nailed Spanish, I can probably make out Portuguese to an extent, and I'm learning German.",
                                url: "https://www.duolingo.com/intcreator",
                                imageUrl:
                                    "../images/home/duolingo-logotype.png",
                                imageStyles: "background-size: 80%;",
                            },
                        ],
                    },
                ],
            },
        },
        legacy: {
            type: Object,
            value: {
                slug: "legacy",
                headline: "Legacy (old) sites",
                details:
                    "I made these sites when I was first introduced to web design in high school. In Dreamweaver. Needless to say, they're not my greatest work and I don't maintain them anymore. Visit them at your own peril.",
                note: "The only good that I hope will come out of this is that you'll gain a greater appreciation for how far I've come as a web developer.",
                items: [
                    {
                        title: "Monolithic Fansite",
                        description:
                            "Monolithic is a synthpop band from Thousand Oaks, CA.",
                        url: "../legacy/monolithic",
                        imageUrl: "../images/home/.png",
                        imageStyles: "background-size: 80%;",
                    },
                    {
                        title: "Pixar",
                        description:
                            "If you don't know what Pixar is, then you are a sad, strange little person. And you have my pity.",
                        url: "../legacy/pixar",
                        imageUrl: "../images/home/.png",
                        imageStyles: "background-size: 80%;",
                    },
                    {
                        title: "Camarinfo",
                        description:
                            "Because portmanteaus make everything better.",
                        url: "../legacy/camarinfo",
                        imageUrl: "../images/home/.png",
                        imageStyles: "background-size: 80%;",
                    },
                    {
                        title: "Saving Private Ryan",
                        description: "Warning: contains Papyrus.",
                        url: "../legacy/ryan",
                        imageUrl: "../images/home/.png",
                        imageStyles: "background-size: 80%;",
                    },
                ],
            },
        },
    },
};
