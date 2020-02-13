const authors = [
  {
    name: "Paul Graham",
    bio: `Paul Graham is a programmer, writer, and investor. In 1995, he and Robert Morris started Viaweb, the first software as a service company. Viaweb was acquired by Yahoo in 1998, where it became Yahoo Store. In 2001 he started publishing essays on paulgraham.com, which now gets around 15 million page views per year. In 2005 he and Jessica Livingston, Robert Morris, and Trevor Blackwell started Y Combinator, the first of a new type of startup incubator. Since 2005 Y Combinator has funded over 2000 startups, including Airbnb, Dropbox, Stripe, and Reddit. In 2019 he published a new Lisp dialect written in itself called Bel. Paul is the author of On Lisp (Prentice Hall, 1993), ANSI Common Lisp (Prentice Hall, 1995), and Hackers & Painters (O'Reilly, 2004). He has an AB from Cornell and a PhD in Computer Science from Harvard, and studied painting at RISD and the Accademia di Belle Arti in Florence.`,
  },
  {
    name: "Peter Thiel",
    bio: `Peter Thiel is an entrepreneur and investor. He cofounded PayPal, led it as CEO, and took it public; he made the first outside investment in Facebook, where he serves as a director; and he cofounded Palantir Technologies, where he serves as chairman. He has provided early funding for LinkedIn, Yelp, and dozens of startups, many run by former colleagues who have been dubbed the “PayPal Mafia.” He is a partner at Founders Fund, a Silicon Valley venture capital firm that has funded companies including SpaceX and Airbnb. He started the Thiel Fellowship, which funds young entrepreneurs, and he leads the Thiel Foundation, which works to advance technological progress and long-term thinking. He is also the #1 New York Times bestselling author of Zero to One: Notes on Startups, or How to Build the Future.`,
  },
  {
    name: "Columbia Business School",
    bio: `Academic institution.`,
  },
  {
    name: "Ken Kocienda",
    bio:
      "Ken Kocienda was a software engineer and designer at Apple for over fifteen years. After graduating from Yale with a degree in history, he fixed motorcycles in Arizona, worked in the editorial library of a newspaper in New York, taught English in Japan, and made fine art photographs in all those places. Eventually, he discovered the internet, taught himself computer programming, and made his way through a succession of dot-com-era startups, before landing at Apple in 2001, where he worked on the software teams that created the Safari web browser, iPhone, iPad, and Apple Watch. Ken lives in San Jose, California with his wife.",
  },
  {
    name: "Rochester Institute of Technology",
    bio: "Academic institution.",
  },
  {
    name: "Ben Horowitz",
    bio:
      "Ben Horowitz is the cofounder and general partner of Andreessen Horowitz, a Silicon Valley-based venture capital firm that invests in entrepreneurs building the next generation of leading technology companies. The firm's investments include Airbnb, GitHub, Facebook, Pinterest, and Twitter. Previously, he was cofounder and CEO of Opsware, formerly Loudcloud, which was acquired by Hewlett-Packard for $1.6 billion in 2007. Horowitz writes about his experiences and insights from his career as a computer science student, software engineer, cofounder, CEO, and investor in a blog that is read by nearly 10 million people. He has also been featured in the Wall Street Journal, the New York Times, the New Yorker, Fortune, the Economist, and Bloomberg Businessweek, among others. Horowitz lives in the San Francisco Bay Area with his wife Felicia.",
  },
  {
    name: "Andrew Chen",
    bio: `Andrew Chen is a general partner at Andreessen Horowitz, investing in early stage consumer startups — focused on the themes of marketplaces, micro-entrepreneurship, games/entertainment, and next-gen social products. He is on the board of Virtual Kitchen Co, Substack, Snackpass, Singularity 6, Sandbox VR, Hipcamp, Envoy and Atrium. Previously, he led the Rider Growth teams at Uber, focusing on efforts across acquisition, new user experience, churn, and notifications/email. He writes about user growth, metrics, and network effects at andrewchen.co and has been cited at Wired, WSJ, and New York Times. Andrew is an advisor/investor for tech startups including AngelList, Barkbox, Boba Guys, Dropbox, Front, Gusto, Product Hunt, Workato, among others. He holds a B.S. in Applied Mathematics from the University of Washington, where he graduated at the age of 19.`,
  },
  {
    name: "Michael Seibel",
    bio:
      "Michael Seibel is the CEO of YC. He was the cofounder and CEO Justin.tv and Socialcam. Socialcam sold to Autodesk in 2012 and under the leadership of Emmett Shear, Justin.tv became Twitch.tv and sold to Amazon in 2014. Before getting into startups, he spent a year as the finance director for a US Senate campaign and in 2005, Michael graduated from Yale University with a BA in political science.",
  },
  {
    name: "Michael Mauboussin",
    bio:
      "Michael J. Mauboussin is Head of Consilient Research at Counterpoint Global. Previously, he was Director of Research at BlueMountain Capital, Head of Global Financial Strategies at Credit Suisse, and Chief Investment Strategist at Legg Mason Capital Management. He is also the author of three books, including More Than You Know: Finding Financial Wisdom in Unconventional Places, named in the The 100 Best Business Books of All Time by 800-CEO-Read. Michael has been an adjunct professor of finance at Columbia Business School since 1993, and received the Dean's Award for Teaching Excellence in 2009 and 2016. He is also chairman of the board of trustees of the Santa Fe Institute, a leading center for multi-disciplinary research in complex systems theory.",
  },
  {
    name: "James Baron",
    bio:
      "James Baron is the William S. Beinecke Professor of Management, with a secondary appointment in the Department of Sociology. Professor Baron’s research interests include human resources; organizational design and behavior; social stratification and inequality; work, labor markets, and careers; economic sociology; and entrepreneurial companies. Before coming to SOM in 2006, he taught at Stanford’s Graduate School of Business from 1982–2006. At Stanford, he taught the MBA core course, Human Resource Management. He was co-director of the Stanford Project on Emerging Companies (SPEC), a large-scale longitudinal study of the organizational design, human resource management practices, and financial and non-financial performance measures of entrepreneurial firms in Silicon Valley. Papers based on the project appeared in leading disciplinary journals, and an overview of the project in California Management Review won the 2003 Accenture Award for making “the most important contribution to improving the practice of management.”",
  },
  {
    name: "Michael Hannan",
    bio:
      "Michael Hannan investigates change in the world of organizations. This work involves both formal theoretical treatments of organizational change and empirical studies of the emergence, change, and dissolution of categories and populations of organizations. His current theoretical research involves applications of dynamic logics and Bayesian models to sociological theory, exploration of the emergence of categories, and typecasting processes. His current empirical research investigates the dynamics of categories in the wine industry.",
  },
  {
    name: "Eric Schmidt",
    bio:
      "Eric Emerson Schmidt (born April 27, 1955) is an American software engineer, businessman, as well as the executive chairman of Alphabet Inc (formerly named Google). In 2013, Forbes ranked Schmidt as the 138th-richest person in the world, with an estimated wealth of $9.1 billion. As an intern at Bell Labs, Schmidt did a complete re-write of Lex, a program to generate lexical analysers for the Unix computer operating system. From 1997 to 2001, he was chief executive officer of Novell. From 2001 to 2011, he served as the CEO of Google. He served on various other boards in academia and industry, such as the boards of trustees for both Carnegie Mellon University and Princeton University.",
  },
  {
    name: "Jonathan Rosenberg",
    bio:
      "Jonathan Rosenberg is the former Senior Vice President of Products at Google and current advisor to Alphabet Inc. CEO Larry Page.",
  },
  {
    name: "Greylock Partners",
    bio:
      "Greylock Partners is a leading venture capital firm based in Silicon Valley.",
  },
  {
    name: "Wharton",
    bio: "Academic institution.",
  },
  {
    name: "McKinsey",
    bio:
      "McKinsey & Company is an American management consulting firm. McKinsey has published the McKinsey Quarterly since 1964, funds the McKinsey Global Institute research organization, publishes reports on management topics, and has authored influential books on management.",
  },
  {
    name: "Harvard Business School",
    bio: "Academic institution.",
  },
  {
    name: "The Knowledge Project",
    bio:
      "The Knowledge Project Podcast with Shane Parrish helps you master the best of what other people have already figured out.",
  },
  {
    name: "Eric Ries",
    bio:
      "Eric Ries is an entrepreneur and author of the New York Times bestseller The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Business, published by Crown Business. He serves on the advisory board of a number of technology startups, and has consulted to new and established companies as well as venture capital firms. In 2010, he was named entrepreneur-in-residence at Harvard Business School and is currently an IDEO Fellow. Previously he co-founded and served as CTO of IMVU, his third startup. In 2007, BusinessWeek named him one of the Best Young Entrepreneurs of Tech. In 2009, he was honored with a TechFellow award in the category of Engineering Leadership.The Lean Startup methodology has been written about in The New York Times, The Wall Street Journal, Harvard Business Review,Inc. (where he appeared on the cover), Wired, Fast Company, and countless blogs. He lives in San Francisco.",
  },
  {
    name: "Kevin Hale",
    bio:
      "Kevin is a Partner at YC. He was cofounder of Wufoo, which was funded by Y Combinator in 2006 and acquired by SurveyMonkey in 2011. He was responsible for Wufoo’s much-admired design and speaks widely about UX. Before Wufoo he wrote about design for Particletree and was editor in chief of the web development magazine Treehouse. He has a BA from Stetson University in Digital Arts and English.",
  },
  {
    name: "Nick Szabo",
    bio:
      "Nick Szabo is a computer scientist, legal scholar and cryptographer known for his research in digital contracts and digital currency. He graduated from the University of Washington in 1989 with a degree in computer science and received a law degree from George Washington University Law School.",
  },
  {
    name: "Saifedean Ammous",
    bio:
      "Saifedean Ammous is an economist and author focusing on bitcoin, who authored the first academic book on the economics of bitcoin, The Bitcoin Standard: The Decentralized Alternative to Central Banking, published by Wiley in 2018. This website is intended to showcase Dr. Ammous’ research in studying the economics of bitcoin, and nothing in it should be construed as investment advice. Bitcoin is a highly volatile and risky asset whose future is uncertain, and whose ownership requires an understanding of complex technologies and tools. Before deciding whether to invest in bitcoin, you should do your own extensive research into the financial and technical aspects involved. Nothing written in this website should be considered advice related to that decision.",
  },
  {
    name: "Andreessen Horowitz",
    bio: `Founded in 2009 by Marc Andreessen and Ben Horowitz, Andreessen Horowitz (known as "a16z") is a venture capital firm in Silicon Valley, California that backs bold entrepreneurs building the future through technology.`,
  },
  {
    name: "Chris Dixon",
    bio:
      "Partner at a16z, focusing on cryptocurrencies/blockchains and new computing platforms.",
  },
  {
    name: "Andrew McAfee",
    bio:
      'Andrew McAfee (@amcafee), a principal research scientist at MIT, studies how digital technologies are changing the world. His new book "More from Less: The Surprising Story of How We Learned to Prosper Using Fewer Resources - and What Happens Next" will be published by Scribner in October of 2019. His prior book, written with Erik Brynjolfsson, is "Machine | Platform | Crowd: Harnessing our Digital Future." Their 2014 book "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies" was a New York Times bestseller and was shortlisted for the Financial Times / McKinsey business book of the year award.',
  },
  {
    name: "Ray Dalio",
    bio: `Ray Dalio is the founder, co-Chief Investment Officer and co-Chairman of Bridgewater Associates, which is a global macro investment firm and is the world’s largest hedge fund. He's also the author of the #1 New York Times Bestseller Principles: Life and Work. He is known to have a very practical understanding of economics that is very different from conventional economic thinking that he spells out in his video series "How the Economic Machine Works".`,
  },
  {
    name: "Ruchir Sharma",
    bio:
      "Ruchir Sharma is an Indian investor and fund manager who has written widely on global economics and politics. As Chief Global Strategist and head of the Emerging Markets Equity team at Morgan Stanley Investment Management, he manages $20 billion in assets under management.",
  },
  {
    name: "Seth Klarman",
    bio:
      "Seth Andrew Klarman is an American billionaire investor, hedge fund manager, and author. He is a proponent of value investing. He is the chief executive and portfolio manager of the Baupost Group, a Boston-based private investment partnership he founded in 1982.",
  },
  {
    name: "Howard Marks",
    bio:
      "Since the formation of Oaktree in 1995, Mr. Marks has been responsible for ensuring the firm’s adherence to its core investment philosophy; communicating closely with clients concerning products and strategies; and contributing his experience to big-picture decisions relating to investments and corporate direction. From 1985 until 1995, Mr. Marks led the groups at The TCW Group, Inc. that were responsible for investments in distressed debt, high yield bonds, and convertible securities. He was also Chief Investment Officer for Domestic Fixed Income at TCW. Previously, Mr. Marks was with Citicorp Investment Management for 16 years, where from 1978 to 1985 he was Vice President and senior portfolio manager in charge of convertible and high yield securities. Between 1969 and 1978, he was an equity research analyst and, subsequently, Citicorp's Director of Research. Mr. Marks holds a B.S.Ec. degree cum laude from the Wharton School of the University of Pennsylvania with a major in finance and an M.B.A. in accounting and marketing from the Booth School of Business of the University of Chicago, where he received the George Hay Brown Prize. He is a CFA® charterholder. Mr. Marks is a Trustee and Chairman of the Investment Committee at the Metropolitan Museum of Art. He chairs the Investment Committee of the Royal Drawing School and is Professor of Practice at King’s Business School (both in London). He serves on the Shanghai International Financial Advisory Council and the Advisory Board of Duke Kunshan University. He is an Emeritus Trustee of the University of Pennsylvania, where from 2000 to 2010 he chaired the Investment Board.",
  },
  {
    name: "Richard Dawkins",
    bio:
      "As an evolutionary biologist, Richard Dawkins has broadened our understanding of the genetic origin of our species; as a popular author, he has helped lay readers understand complex scientific concepts. He's best-known for the ideas laid out in his landmark book The Selfish Gene and fleshed out in The Extended Phenotype: the rather radical notion that Darwinian selection happens not at the level of the individual, but at the level of our DNA. The implication: We evolved for only one purpose — to serve our genes. Of perhaps equal importance is Dawkins' concept of the meme, which he defines as a self-replicating unit of culture -- an idea, a chain letter, a catchy tune, an urban legend -- which is passed person-to-person, its longevity based on its ability to lodge in the brain and inspire transmission to others. Introduced in The Selfish Gene in 1976, the concept of memes has itself proven highly contagious, inspiring countless accounts and explanations of idea propagation in the information age.",
  },
  {
    name: "Marc Andreessen",
    bio:
      "Marc Andreessen is a cofounder and general partner at the venture capital firm Andreessen Horowitz. He is an innovator and creator, one of the few to pioneer a software category used by more than a billion people and one of the few to establish multiple billion-dollar companies. Marc co-created the highly influential Mosaic internet browser and co-founded Netscape, which later sold to AOL for $4.2 billion. He also co-founded Loudcloud, which as Opsware, sold to Hewlett-Packard for $1.6 billion. He later served on the board of Hewlett-Packard from 2008 to 2018. Marc holds a BS in Computer Science from the University of Illinois at Urbana-Champaign.",
  },
  {
    name: "Naval Ravikant",
    bio:
      "Naval Ravikant is the CEO and a co-founder of AngelList. He previously co-founded Epinions (which went public as part of Shopping.com) and Vast.com. He is an active Angel investor, and have invested in dozens of companies, including Twitter, Uber, Yammer, Stack Overflow and Wanelo.",
  },
  {
    name: "Cal Newport",
    bio:
      "Cal Newport is an associate professor of computer science at Georgetown University. He's also a writer who focuses on the impact of technology on society. He's the author of six books, including Digital Minimalism and Deep Work, and writes regular essays for his popular website, calnewport.com.",
  },
  {
    name: "Dale Carnegie",
    bio:
      "Dale Carnegie was an American writer and lecturer, and the developer of courses in self-improvement, salesmanship, corporate training, public speaking, and interpersonal skills.",
  },
  {
    name: "Robert Greene",
    bio:
      "Robert Greene is the author of the New York Times bestsellers The 48 Laws of Power, The Art of Seduction, The 33 Strategies of War, and The 50th Law. His highly anticipated fifth book, Mastery, examines the lives of great historical figures such as Charles Darwin, Mozart, Paul Graham and Henry Ford and distills the traits and universal ingredients that made them masters. In addition to having a strong following within the business world and a deep following in Washington, DC, Greene's books are hailed by everyone from war historians to the biggest musicians in the industry (including Jay-Z and 50 Cent).",
  },
  {
    name: "James Engell",
    bio:
      "James Engell is Gurney Professor of English and Professor of Comparative Literature, also a member of the Committee on the Study of Religion, and a faculty associate of the Harvard University Center for the Environment.  He has also directed dissertations in American Studies, as well as Romance Languages & Literatures (French).",
  },
  {
    name: "Adam Robinson",
    bio:
      "Adam Robinson is an American educator, freelance author, and a US Chess Federation life master. He is the co-founder of The Princeton Review. He currently works as a global macro advisor to the heads of some of the world's largest hedge funds through his company Robinson Global Strategies.",
  },
  {
    name: "Josh Waitzkin",
    bio:
      "Josh Waitzkin, an eight-time National Chess Champion in his youth, was the subject of the book and movie Searching for Bobby Fischer. At eighteen, he published his first book, Josh Waitzkin's Attacking Chess. Since the age of twenty, he has developed and been spokesperson for Chessmaster, the largest computer chess program in the world. Now a martial arts champion, he holds a combined twenty-one National Championship titles in addition to several World Championship titles. When not traveling the country giving seminars and keynote presentations, he lives and trains in New York City.",
  },
  {
    name: "David Galenson",
    bio:
      "David Walter Galenson is a professor in the Department of Economics and the College at the University of Chicago, and a Research Associate of the National Bureau of Economic Research.",
  },
  {
    name: "Chris Anderson",
    bio:
      "Chris Anderson is a British-American author and entrepreneur. He was with The Economist for seven years before joining WIRED magazine in 2001, where he was the editor-in-chief until 2012.",
  },
  {
    name: "Gibson Biddle",
    bio:
      "Former VP/CPO at Netflix/Chegg. Now a speaker, teacher, and workshop host.",
  },
]

module.exports = authors
