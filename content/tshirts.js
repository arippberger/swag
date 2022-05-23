const tshirts = [
  {
    id: 1,
    name: 'A&D',
    year: '2016',
    source: '/images/IMG_0403.JPEG',
    current: false,
    description: 'I started work at <a href="https://www.crunchbase.com/organization/ackmann-dickenson">Ackmann & Dickenson</a> in 2016. I miss the outdoor BBQs and party bus. The company was acquired by <a href="https://modernclimate.com">Modern Climate</a> not long after I started.',
    tags: ['all', 'workplace', 'tech'],
    information: {
      color: 'blue',
      condition: 'fair',
    },
  },
  {
    id: 2,
    name: 'Minnestar',
    year: '2014',
    source: '/images/IMG_0428.JPEG',
    reverse: '/images/IMG_0429.JPEG',
    current: false,
    description: 'Another Minnebar shirt?',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 3,
    name: 'Flywheel',
    year: '2014',
    source: '/images/IMG_0430.JPEG',
    reverse: '/images/IMG_0431.JPEG',
    current: false,
    description: 'I probably acquired this at a WordCamp conference circa 2015.',
    tags: ['all', 'tech', 'swag'],
    information: {
      color: 'black',
      condition: 'poor',
      issues: 'rip near neck'
    },
  },
  {
    id: 4,
    name: 'Minnebar',
    year: '2013',
    source: '/images/IMG_0432.JPEG',
    reverse: '/images/IMG_0433.JPEG',
    current: false,
    description: 'This was probably my first Minnebar.',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'red',
      condition: 'poor',
      issues: 'cracking/fading'
    },
  },
  {
    id: 5,
    name: 'TBS',
    year: '2017',
    source: '/images/IMG_0434.JPEG',
    reverse: '/images/IMG_0435.JPEG',
    current: false,
    description: 'Probably a top-5 band for me. I think my wife bought me this when we saw them in concert at <a href="https://first-avenue.com/">First Avenue</a> for my birthday.',
    tags: ['all', 'band'],
    information: {
      color: 'blue',
      condition: 'fair',
    },
  },
  {
    id: 6,
    name: 'Minnebar',
    year: '2014',
    source: '/images/IMG_0436.JPEG',
    reverse: '/images/IMG_0436.JPEG',
    current: false,
    description: 'Minnebar again! Always a good time.',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'green',
      condition: 'poor',
      issues: 'stained'
    },
  },
  {
    id: 7,
    name: 'WordCamp',
    year: '2014',
    source: '/images/IMG_0437.JPEG',
    reverse: '/images/IMG_0438.JPEG',
    current: false,
    description: 'Maybe one of my first WordCamps? I believe this one was designed by former colleague and extraordinarily talented designer <a href="https://www.tylerdehague.com/">Tyler Dehague</a>.',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 8,
    name: 'DBZ',
    year: '2020',
    source: '/images/IMG_0439.JPEG',
    reverse: '/images/IMG_0440.JPEG',
    current: false,
    description: 'Probably the best anime series ever? This is just a T from Target. The show is that good.',
    tags: ['all', 'misc'],
    information: {
      color: 'blue',
      condition: 'fair',
    },
  },
  {
    id: 9,
    name: 'WordCamp',
    year: '2015',
    source: '/images/IMG_0441.JPEG',
    reverse: '/images/IMG_0442.JPEG',
    current: false,
    description: 'Another WordCamp',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'purple',
      condition: 'fair',
    },
  },
  {
    id: 10,
    name: 'WordCamp Maui',
    year: '2015',
    source: '/images/IMG_0443.JPEG',
    reverse: '/images/IMG_0444.JPEG',
    current: false,
    description: 'I actually didn\'t attend this one - but a coworker did and was nice enough to bring me back a shirt.',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'tan',
      condition: 'fair',
    },
  },
  {
    id: 11,
    name: 'Open Streets',
    year: '2014',
    source: '/images/IMG_0445.JPEG',
    reverse: '/images/IMG_0446.JPEG',
    current: false,
    description: 'I volunteered for <a href="https://www.openstreetsmpls.org">Open Streets Minneapolis</a> - a cool annual neighborhood celebration.',
    tags: ['all', 'misc'],
    information: {
      color: 'purple',
      condition: 'fair',
    },
  },
  {
    id: 12,
    name: 'Remax',
    year: '2020',
    source: '/images/IMG_0450.JPEG',
    reverse: '/images/IMG_0451.JPEG',
    current: false,
    description: 'My buddy does <a href="https://24kevinhomes.com">real estate in Duluth</a> and was nice enough to give me this shirt.',
    tags: ['all', 'swag'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 13,
    name: 'Grandma\'s Marathon',
    year: '2015',
    source: '/images/IMG_0452.JPEG',
    reverse: '/images/IMG_0453.JPEG',
    current: false,
    description: 'I ran a half marathon - damn my feet were tired after that.',
    tags: ['all', 'misc'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 14,
    name: 'Beachbody Tech',
    year: '2018',
    source: '/images/IMG_0454.JPEG',
    reverse: '/images/IMG_0455.JPEG',
    current: false,
    description: 'While at Ackmann & Dickenson I worked with the <a href="https://www.teambeachbody.com/shop/us/coach">Beachbody Coach</a> team to develop their product. I worked with the team long enough to earn myself a T-Shirt!',
    tags: ['all', 'workplace', 'tech'],
    information: {
      color: 'blue',
      condition: 'poor',
      issues: 'rips'
    },
  },
  {
    id: 15,
    name: 'Blink 182',
    year: '2001',
    source: '/images/IMG_0456.JPEG',
    reverse: '/images/IMG_0457.JPEG',
    current: false,
    description: 'Wow - the oldest T-Shirt I own - from my first concert! Definitely time to retire this one.',
    tags: ['all', 'band'],
    information: {
      color: 'green',
      condition: 'poor',
      issues: 'two decades old...'
    },
  },
  {
    id: 16,
    name: 'ChocoTaco',
    year: '2018',
    source: '/images/IMG_0458.JPEG',
    reverse: '/images/IMG_0459.JPEG',
    current: false,
    description: 'Who would have thought playing video games could make you a mini-celebrity?',
    tags: ['all', 'misc'],
    information: {
      color: 'yellow',
      condition: 'fair',
    },
  },
  {
    id: 17,
    name: 'Ad League',
    year: '2020',
    source: '/images/IMG_0460.JPEG',
    reverse: '/images/IMG_0461.JPEG',
    current: false,
    description: 'I was on a bowling team - the league being comprised of ad company employees. You won these shirts by bowling a strike, obtainign a ticket, and then winning a raffle. I\'m proud to say I own a few.',
    tags: ['all', 'misc'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 18,
    name: 'Prestige',
    year: '2015',
    source: '/images/IMG_0462.JPEG',
    reverse: '/images/IMG_0463.JPEG',
    current: false,
    description: 'Another tech conference. Cool that the little tech symbols make a tie fighter.',
    tags: ['all', 'tech'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 19,
    name: 'Dead to Fall',
    year: '2006',
    source: '/images/IMG_0464.JPEG',
    reverse: '/images/IMG_0465.JPEG',
    current: false,
    description: 'Some concert I went to? The shirt has swords and dinosaurs so I mean, hard to get rid of that right?',
    tags: ['all', 'band'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
  {
    id: 20,
    name: 'Minnebar',
    year: '2013',
    source: '/images/IMG_0466.JPEG',
    reverse: '/images/IMG_0467.JPEG',
    current: false,
    description: 'Another Minnebar shirt?',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'red',
      condition: 'fair',
    },
  },
  {
    id: 21,
    name: 'WordCamp Milwaukee',
    year: '2015',
    source: '/images/IMG_0468.JPEG',
    reverse: '/images/IMG_0469.JPEG',
    current: false,
    description: 'This was fun - Milwaukee is a cool town.',
    tags: ['all', 'tech', 'conference'],
    information: {
      color: 'gray',
      condition: 'fair',
    },
  },
];

export default tshirts;