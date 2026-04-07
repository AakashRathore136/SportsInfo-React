export const sportContent = {
  cricket: {
    key: 'cricket',
    title: 'Cricket',
    subtitle: "The gentleman's game with strategy, patience, and precision.",
    cardClass: 'cricket',
    cta: 'Take Cricket Quiz',
    groundTitle: 'Cricket Ground',
    groundImage: 'https://preview.redd.it/for-those-who-are-not-familiar-with-the-cricket-field-v0-yu6b45by4rx91.jpg?auto=webp&s=7e6e592d5716c3d69b4f8ca9dec70ed3792a266f',
    groundInfo: [
      { title: 'Pitch', text: 'The 22-yard central strip where the bowler delivers and batters score.' },
      { title: 'Boundary', text: 'The outer rope. A shot to the rope scores 4, over it scores 6.' },
      { title: 'Crease', text: 'Marked lines at each end used for safe zones and dismissals.' }
    ],
    positions: [
      { name: 'Wicket Keeper', desc: 'Stands behind the stumps and collects edges.' },
      { name: 'Slip', desc: 'Catches fine edges near the batter.' },
      { name: 'Mid Off / Mid On', desc: 'Protects straight drives and supports bowlers.' },
      { name: 'Point', desc: 'Covers square cuts on the off side.' }
    ],
    rules: [
      'Each side has 11 players.',
      'Batters score by running between wickets and by boundaries.',
      'An over has 6 legal balls.',
      'A batter can be out bowled, caught, LBW, run out, or stumped.',
      'The team with more runs at the end wins.'
    ],
    players: [
      { name: 'Sachin Tendulkar', role: 'Batsman', country: 'India', note: '100 international centuries and one of the most complete batters ever.' },
      { name: 'Don Bradman', role: 'Batsman', country: 'Australia', note: 'Test average of 99.94, the highest in cricket history.' },
      { name: 'Virat Kohli', role: 'Batsman', country: 'India', note: 'Modern era run-machine known for chase mastery and consistency.' }
    ]
  },
  football: {
    key: 'football',
    title: 'Football',
    subtitle: 'The beautiful game built on movement, shape, and teamwork.',
    cardClass: 'football',
    cta: 'Take Football Quiz',
    groundTitle: 'Football Pitch',
    groundImage: 'https://i.ytimg.com/vi/kZyohN26uHo/maxresdefault.jpg',
    groundInfo: [
      { title: 'Pitch', text: 'A rectangular field with goals at both ends.' },
      { title: 'Penalty Area', text: 'Fouls here can produce penalties; keepers can use hands here.' },
      { title: 'Center Circle', text: 'Used for kickoff with opponents outside until first touch.' }
    ],
    positions: [
      { name: 'Goalkeeper', desc: 'Last line of defense and shot stopper.' },
      { name: 'Center Back', desc: 'Protects central defensive spaces.' },
      { name: 'Midfielder', desc: 'Connects defense and attack, controls tempo.' },
      { name: 'Striker', desc: 'Primary goal scorer in attacking phases.' }
    ],
    rules: [
      '11 players per side, usually 90 minutes total.',
      'Goals decide the result.',
      'Offside prevents unfair goal-hanging.',
      'Serious fouls can produce yellow or red cards.',
      'Throw-ins, corners, and goal kicks restart play.'
    ],
    players: [
      { name: 'Lionel Messi', role: 'Forward', country: 'Argentina', note: 'Elite playmaker and finisher with extraordinary balance.' },
      { name: 'Cristiano Ronaldo', role: 'Forward', country: 'Portugal', note: 'Prolific scorer known for athleticism and longevity.' },
      { name: 'Pele', role: 'Forward', country: 'Brazil', note: 'Three-time World Cup winner and one of footballs icons.' }
    ]
  },
  golf: {
    key: 'golf',
    title: 'Golf',
    subtitle: 'A precision sport where consistency and control matter most.',
    cardClass: 'golf',
    cta: 'Take Golf Quiz',
    groundTitle: 'Golf Course',
    groundImage: 'https://golfbit.com/_next/image?url=https:%2F%2Fcdn.cosmicjs.com%2F8d04a3c0-e7e5-11ea-91a3-d189130ed2f9-Golf-Course-Terms-Golf-Hole-Terms.jpg&w=2048&q=75',
    groundInfo: [
      { title: 'Tee Box', text: 'The starting area for each hole.' },
      { title: 'Fairway', text: 'Main short-grass route toward the green.' },
      { title: 'Green', text: 'Putting surface around the hole with shortest grass.' }
    ],
    positions: [
      { name: 'Driver Specialist', desc: 'Maximizes controlled distance from the tee.' },
      { name: 'Iron Player', desc: 'Handles approach shots to attack greens.' },
      { name: 'Short Game Expert', desc: 'Chips and pitches from around the green.' },
      { name: 'Putter', desc: 'Finishes holes with touch and pace control.' }
    ],
    rules: [
      'Goal is to complete holes in the fewest strokes.',
      'A standard round has 18 holes.',
      'Par is the expected strokes for a hole.',
      'Birdie is one under par, bogey is one over par.',
      'Stroke penalties apply for lost balls and out-of-bounds.'
    ],
    players: [
      { name: 'Tiger Woods', role: 'Golfer', country: 'USA', note: 'A transformative figure with major-championship dominance.' },
      { name: 'Jack Nicklaus', role: 'Golfer', country: 'USA', note: 'Holds the all-time major championship record.' },
      { name: 'Annika Sorenstam', role: 'Golfer', country: 'Sweden', note: 'One of the greatest players in womens golf history.' }
    ]
  },
  basket: {
    key: 'basket',
    title: 'Basketball',
    subtitle: 'A high-tempo sport driven by spacing, pace, and shot selection.',
    cardClass: 'basketball',
    cta: 'Take Basketball Quiz',
    groundTitle: 'Basketball Court',
    groundImage: 'https://tse3.mm.bing.net/th/id/OIP.UomSz7vz3_772KaqXZuLCQHaEk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    groundInfo: [
      { title: 'Court', text: 'Rectangular hardwood surface with hoops at both ends.' },
      { title: 'Three-Point Line', text: 'Shots outside this arc count for three points.' },
      { title: 'Paint', text: 'Interior lane where close scoring and rebounding happen.' }
    ],
    positions: [
      { name: 'Point Guard', desc: 'Primary ball-handler and organizer.' },
      { name: 'Shooting Guard', desc: 'Perimeter scorer and off-ball threat.' },
      { name: 'Small Forward', desc: 'Versatile two-way wing role.' },
      { name: 'Center', desc: 'Interior defender, screener, and rebounder.' }
    ],
    rules: [
      'Five players per side on court.',
      'Field goals are worth 2, from long range 3, free throws 1.',
      'Shot clock limits each possession.',
      'Traveling and double-dribble are violations.',
      'Teams win by finishing with more points.'
    ],
    players: [
      { name: 'Michael Jordan', role: 'Shooting Guard', country: 'USA', note: 'Six titles and one of the most complete two-way scorers ever.' },
      { name: 'LeBron James', role: 'Forward', country: 'USA', note: 'Elite all-around production and long-term excellence.' },
      { name: 'Stephen Curry', role: 'Point Guard', country: 'USA', note: 'Changed spacing and shot value with deep-range accuracy.' }
    ]
  }
};

export const sportCards = [
  {
    key: 'cricket',
    title: 'Cricket',
    description: 'Discover batting, bowling, field setups, and cricket legends.',
    className: 'cricket'
  },
  {
    key: 'football',
    title: 'Football',
    description: 'Learn formations, tactics, and iconic football players.',
    className: 'football'
  },
  {
    key: 'golf',
    title: 'Golf',
    description: 'Master scoring, course strategy, and precision technique.',
    className: 'golf'
  },
  {
    key: 'basket',
    title: 'Basketball',
    description: 'Study positions, game flow, and legendary careers.',
    className: 'basketball'
  }
];
