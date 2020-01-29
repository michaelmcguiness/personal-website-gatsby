const authors = [
  {
    name: "Paul Graham",
    bio: `Paul Graham is a programmer, writer, and investor. In 1995, he and Robert Morris started Viaweb, the first software as a service company. Viaweb was acquired by Yahoo in 1998, where it became Yahoo Store. In 2001 he started publishing essays on paulgraham.com, which now gets around 15 million page views per year. In 2005 he and Jessica Livingston, Robert Morris, and Trevor Blackwell started Y Combinator, the first of a new type of startup incubator. Since 2005 Y Combinator has funded over 2000 startups, including Airbnb, Dropbox, Stripe, and Reddit. In 2019 he published a new Lisp dialect written in itself called Bel. Paul is the author of On Lisp (Prentice Hall, 1993), ANSI Common Lisp (Prentice Hall, 1995), and Hackers & Painters (O'Reilly, 2004). He has an AB from Cornell and a PhD in Computer Science from Harvard, and studied painting at RISD and the Accademia di Belle Arti in Florence.`,
    imageUrl: "paul-graham.png",
  },
  {
    name: "Peter Thiel",
    bio: `Peter Thiel is an entrepreneur and investor. He cofounded PayPal, led it as CEO, and took it public; he made the first outside investment in Facebook, where he serves as a director; and he cofounded Palantir Technologies, where he serves as chairman. He has provided early funding for LinkedIn, Yelp, and dozens of startups, many run by former colleagues who have been dubbed the “PayPal Mafia.” He is a partner at Founders Fund, a Silicon Valley venture capital firm that has funded companies including SpaceX and Airbnb. He started the Thiel Fellowship, which funds young entrepreneurs, and he leads the Thiel Foundation, which works to advance technological progress and long-term thinking. He is also the #1 New York Times bestselling author of Zero to One: Notes on Startups, or How to Build the Future.`,
    imageUrl: "peter-thiel.png",
  },
  {
    name: "Columbia Business School",
    bio: `Academic institution.`,
    imageUrl: "columbia-business-school.png",
  },
  {
    name: "Ken Kocienda",
    bio:
      "Ken Kocienda was a software engineer and designer at Apple for over fifteen years. After graduating from Yale with a degree in history, he fixed motorcycles in Arizona, worked in the editorial library of a newspaper in New York, taught English in Japan, and made fine art photographs in all those places. Eventually, he discovered the internet, taught himself computer programming, and made his way through a succession of dot-com-era startups, before landing at Apple in 2001, where he worked on the software teams that created the Safari web browser, iPhone, iPad, and Apple Watch. Ken lives in San Jose, California with his wife.",
    imageUrl: "ken-kocienda.png",
  },
  {
    name: "Rochester Institute of Technology",
    bio: "Academic institution.",
    imageUrl: "rochester-institute-of-technology.png",
  },
  {
    name: "Ben Horowitz",
    bio:
      "Ben Horowitz is the cofounder and general partner of Andreessen Horowitz, a Silicon Valley-based venture capital firm that invests in entrepreneurs building the next generation of leading technology companies. The firm's investments include Airbnb, GitHub, Facebook, Pinterest, and Twitter. Previously, he was cofounder and CEO of Opsware, formerly Loudcloud, which was acquired by Hewlett-Packard for $1.6 billion in 2007. Horowitz writes about his experiences and insights from his career as a computer science student, software engineer, cofounder, CEO, and investor in a blog that is read by nearly 10 million people. He has also been featured in the Wall Street Journal, the New York Times, the New Yorker, Fortune, the Economist, and Bloomberg Businessweek, among others. Horowitz lives in the San Francisco Bay Area with his wife Felicia.",
    imageUrl: "ben-horowitz.png",
  },
  {
    name: "Andrew Chen",
    bio: `Andrew Chen is a general partner at Andreessen Horowitz, investing in early stage consumer startups — focused on the themes of marketplaces, micro-entrepreneurship, games/entertainment, and next-gen social products. He is on the board of Virtual Kitchen Co, Substack, Snackpass, Singularity 6, Sandbox VR, Hipcamp, Envoy and Atrium. Previously, he led the Rider Growth teams at Uber, focusing on efforts across acquisition, new user experience, churn, and notifications/email. He writes about user growth, metrics, and network effects at andrewchen.co and has been cited at Wired, WSJ, and New York Times. Andrew is an advisor/investor for tech startups including AngelList, Barkbox, Boba Guys, Dropbox, Front, Gusto, Product Hunt, Workato, among others. He holds a B.S. in Applied Mathematics from the University of Washington, where he graduated at the age of 19.`,
    imageUrl: "andrew-chen.png",
  },
  {
    name: "Michael Seibel",
    bio:
      "Michael Seibel is the CEO of YC. He was the cofounder and CEO Justin.tv and Socialcam. Socialcam sold to Autodesk in 2012 and under the leadership of Emmett Shear, Justin.tv became Twitch.tv and sold to Amazon in 2014. Before getting into startups, he spent a year as the finance director for a US Senate campaign and in 2005, Michael graduated from Yale University with a BA in political science.",
    imageUrl: "michael-seibel.png",
  },
  {
    name: "Michael Mauboussin",
    bio:
      "Michael J. Mauboussin is Head of Consilient Research at Counterpoint Global. Previously, he was Director of Research at BlueMountain Capital, Head of Global Financial Strategies at Credit Suisse, and Chief Investment Strategist at Legg Mason Capital Management. He is also the author of three books, including More Than You Know: Finding Financial Wisdom in Unconventional Places, named in the The 100 Best Business Books of All Time by 800-CEO-Read. Michael has been an adjunct professor of finance at Columbia Business School since 1993, and received the Dean's Award for Teaching Excellence in 2009 and 2016. He is also chairman of the board of trustees of the Santa Fe Institute, a leading center for multi-disciplinary research in complex systems theory.",
    imageUrl: "michael-mauboussin.png",
  },
  {
    name: "James Baron",
    bio:
      "James Baron is the William S. Beinecke Professor of Management, with a secondary appointment in the Department of Sociology. Professor Baron’s research interests include human resources; organizational design and behavior; social stratification and inequality; work, labor markets, and careers; economic sociology; and entrepreneurial companies. Before coming to SOM in 2006, he taught at Stanford’s Graduate School of Business from 1982–2006. At Stanford, he taught the MBA core course, Human Resource Management. He was co-director of the Stanford Project on Emerging Companies (SPEC), a large-scale longitudinal study of the organizational design, human resource management practices, and financial and non-financial performance measures of entrepreneurial firms in Silicon Valley. Papers based on the project appeared in leading disciplinary journals, and an overview of the project in California Management Review won the 2003 Accenture Award for making “the most important contribution to improving the practice of management.”",
    imageUrl: "james-baron.png",
  },
  {
    name: "Michael Hannan",
    bio:
      "Michael Hannan investigates change in the world of organizations. This work involves both formal theoretical treatments of organizational change and empirical studies of the emergence, change, and dissolution of categories and populations of organizations. His current theoretical research involves applications of dynamic logics and Bayesian models to sociological theory, exploration of the emergence of categories, and typecasting processes. His current empirical research investigates the dynamics of categories in the wine industry.",
    imageUrl: "michael-hannan.png",
  },
  {
    name: "Eric Schmidt",
    bio:
      "Eric Emerson Schmidt (born April 27, 1955) is an American software engineer, businessman, as well as the executive chairman of Alphabet Inc (formerly named Google). In 2013, Forbes ranked Schmidt as the 138th-richest person in the world, with an estimated wealth of $9.1 billion. As an intern at Bell Labs, Schmidt did a complete re-write of Lex, a program to generate lexical analysers for the Unix computer operating system. From 1997 to 2001, he was chief executive officer of Novell. From 2001 to 2011, he served as the CEO of Google. He served on various other boards in academia and industry, such as the boards of trustees for both Carnegie Mellon University and Princeton University.",
    imageUrl: "eric-schmidt.png",
  },
  {
    name: "Jonathan Rosenberg",
    bio:
      "Jonathan Rosenberg is the former Senior Vice President of Products at Google and current advisor to Alphabet Inc. CEO Larry Page.",
    imageUrl: "jonathan-rosenberg.png",
  },
]

module.exports = authors
