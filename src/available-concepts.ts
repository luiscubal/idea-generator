import Concept from './concept';

const AvailableConcepts: Concept[] = [];

AvailableConcepts.push(...[
  'Romance',
  'Romantic Comedy',
  'Comedy',
  'Horror',
  'Drama',
  'Documentary',
  'Musical',
  'Thriller',
  'RPG',
  'Shooter',
  'Grand Strategy',
  'FPS',
  'Walking Simulator',
  'Sandbox',
  'Comic Book',
  'Monster of the Week',
  'Anime',
  'Movie'
].map((idea) => new Concept('genre', idea)));

AvailableConcepts.push(...[
  'Dieselpunk',
  'Steampunk',
  'Childhood',
  'Aging & Decay',
  'The Big Bang',
  'The Heat Death of the Universe',
  'Time Travel',
  'Space Travel',
  'Other Dimensions',
  'Terraforming',
  'Colonization',
  'Sentient Life',
  'The Nature Of Humanity',
  'The Nature Of War',
  'Torture',
  'Outrage',
  'Love',
  'Greed',
  'Politics',
  'Fossils',
  'Evolution',
  'Creationism',
  'Lamarckism',
  'Darwinism',
  'Judaism',
  'Christianism',
  'Catholicism',
  'Protestantism',
  'The Orthodox Church',
  'Mormonism',
  'Islamism',
  'Buddhism',
  'Taoism',
  'Confucionism',
  'Zoroastrianism',
  'Wicca',
  'Satanism',
  'Atheism',
  'Greek Mythology',
  'Egyptian Mythology',
  'Roman Mythology',
  'Nordic Mythology',
  'The Deadly Sins',
  'Capitalism',
  'Communism',
  'Anarchism',
  'Monarchism',
  'Socialism',
  'Feudalism',
  'Republicanism',
  'Democratism',
  'Slavery',
  'Opposites',
  'The Mundane',
  'Literature',
  'Film Making',
  'Fraud',
  'Pyramid Schemes',
  'Cryptography',
  'Steganography',
  'What happens in the game happens in real-life!!!',
  'Death of the Author',
  'Racial Tensions',
  'Animal Rights',
  'LGBT+ Rights',
  'Worker\'s Rights',
  'Black & White',
  'Grey Morality',
  'Non-Euclidian Geometry',
  'Apartheid',
  'Terrorism',
  'Independence Movements',
  'The Streisand Effect',
  'Princesses',
  'Biology',
  'Geology',
  'Physics',
  'Mathematics',
  'Psychology',
  'Sociology',
  'History',
  'Philosophy',
  'Linguistics',
  'The Zodiac',
  'Predators',
  'Law of the jungle',
  'Teamwork',
  'Anti-vax'
].map((idea) => new Concept('theme', idea)));

AvailableConcepts.push(...[
  // Generic
  'Coma',
  'Disease',
  'Euthanasia',
  // Procedures
  'Medical Examination',
  'Surgery',
  'Amputation',
  'Blood Transfusion',
  // Mental
  'Bipolar Personality Disorder',
  'Narcissistic Personality Disorder',
  'Depression',
  // Other Neurological
  "Parkinson's disease",
  // Physical
  'Influenza',
  'Cancer',
  'Broken Bone'
].map((idea) => new Concept('health', idea)));

AvailableConcepts.push(...[
  'Classical Architecture',
  'Brutalism',
].map((idea) => new Concept('architecture', idea)));

AvailableConcepts.push(...[
  'The Paleolithic',
  'The Stone Age',
  'The Neolithic',
  'The Bronze Age',
  'The Iron Age',
  'The Classical Age',
  'The Trial of Socrates',
  'The Birth of Jesus',
  'The Jewish-Roman Wars',
  'The Battle of Red Cliffs',
  'The Three Kingdoms Period',
  'The Coptic Period',
  'The Persecution of the Christians in the Roman Empire',
  'Constantine\'s Conversion to Christianism',
  'Battle of the Catalaunian Plains',
  'The Fall of the Western Roman Empire',
  'The Arab–Byzantine wars',
  'The First Fitna',
  'The Iberian Reconquista',
  'The Black Plague',
  'The Discovery of America by the Europeans',
  'The Sallem Witch Trials',
  'The British Agricultural Revolution',
  'The Industrial Revolution',
  'The Invention of the Penicillin',
  'The Apollo 11',
  'The Satanic Panic of the 1980s/1990s',
  'The September 11 Attacks',
  'The Coronavirus Pandemy of 2019',
].map((idea) => new Concept('historical-events', idea)));

AvailableConcepts.push(...[
  // On Earth (General)
  'Planet Core',
  'Deep Sea',
  'The Stratosphere',
  'The Himalayas',
  'Mount Kilimanjaro',
  // Earth Ruins
  'Waka',
  'Tikal',
  'Teotihuacan',
  'Mataram',
  // Notable Earth Cities
  'Alexandria',
  'Almaty',
  'Ankara',
  'Athens',
  'Austin',
  'Barcelona',
  'Beijing',
  'Berlin',
  'Budapest',
  'Cairo',
  'Casablanca',
  'Chicago',
  'Copenhagen',
  'Damascus',
  'Delhi',
  'Detroit',
  'Edinburg',
  'Faro',
  'Fortaleza',
  'Guangzhou',
  'Giza',
  'Hanoi',
  'Hong Kong',
  'Houston',
  'Istanbul',
  'Jerusalem',
  'Johannesburg',
  'Kyoto',
  'Las Vegas',
  'London',
  'Manila',
  'Minsk',
  'Mumbai',
  'Nagasaki',
  'New York',
  'Oxford',
  'Porto',
  'Pyongyang',
  'Qingdao',
  'Rome',
  'Stockholm',
  'Tegucigalpa',
  'Vienna',
  'Warsaw',
  'Wuhan',
  // Ordinary
  'Road',
  'Scrapyard',
  'Bridge',
  // Type of terrain
  'Forest',
  'Desert'
].map((idea) => new Concept('location', idea)));

AvailableConcepts.push(...[
  // Solar System
  'The Sun',
  'Mercury',
  'Venus',
  'The Moon',
  'The International Space Station',
  'Mars',
  'Phobos (Moon)',
  'Deimos (Moon)',
  'Jupiter',
  'Europa (Moon)',
  'Saturn',
  'Uranus',
  'Neptune',
].map((idea) => new Concept('space-location', idea)));

AvailableConcepts.push(...[
  // - (Europe)
  'The Cathars',
  'The Vikings',
  'The Carolingian Empire',
  'The URSS',
  // - (America)
  'The Aztecs',
  'The Mayans',
  // - (Asia)
  'The Babylons',
  'The Persian Empire',
  // - (Africa)
  'The Kingdom of Aksum',
  // - (Oceania)
  // - (Who the fuck knows)
  'Atlantis',
].map((idea) => new Concept('ancient-civilization', idea)));

AvailableConcepts.push(...[
  'Ant',
  'Bat',
  'Bear',
  'Bison',
  'Cat',
  'Chicken',
  'Cockroach',
  'Cow',
  'Crow',
  'Dinossaur',
  'Dog',
  'Donkey',
  'Eagle',
  'Eel',
  'Flea',
  'Fly (the bug)',
  'Fox',
  'Gull',
  'Horse',
  'Mosquito',
  'Mouse',
  'Pidgeon',
  'Rabbit',
  'Raccoon',
  'Rat',
  'Squirrel',
  'Tick',
  'Tyrannosaurus',
  'Velociraptor',
  'Whale',
  'Wolf'
].map((idea) => new Concept('animal', idea)));

AvailableConcepts.push(...[
  // Plants
  'Flower',
  'Tulip',
  'Rose',
  'Lemon Tree',
  'Oak',
  'Orange Tree',
  'Sequoia',
  'Aspen',
  'Mahogany',
  'Chestnut',
  // Not Plants
  'Mushroom',
].map((idea) => new Concept('plantlike', idea)));

AvailableConcepts.push(...[
  // Common
  'Castle',
  'Wall',
  'Well',
  'House',
  'Office',
  'Museum',
  'Congress',
  'Library',
  'Orphanage',
  'Pyramid',
  'Power plant',
  'Windmill',
  'Bunker',
  // Unique
  'The Pentagon',
  'The Eiffel Tower',
  'The Forbidden Palace'
].map((idea) => new Concept('building', idea)));

AvailableConcepts.push(...[
  'Bow & Arrows',
  'Cannon',
  'Gun',
  'Sword',
  'Atomic Bomb'
].map((idea) => new Concept('weapon', idea)));

AvailableConcepts.push(...[
  'Car',
  'Bike',
  'Ship',
  'Rocket',
  'Submarine',
  'Tank'
].map((idea) => new Concept('vehicle', idea)));

AvailableConcepts.push(...[
  'Umbrella',
  'Scarecrow',
  'Piano',
  'Computer',
  'Canvas'
].map((idea) => new Concept('object', idea)));

AvailableConcepts.push(...[
  'Journalist',
  'Teacher',
  'Plumber',
  'Firefighter',
  'Store Clerk',
  'Manager',
  'Fisherperson',
  'Explorer',
  'Politician',
  'Painter',
  'Taxi Driver',
  'Cop',
  'Programmer',
  'Engineer',
  'Architect',
  'Market Researcher'
].map((idea) => new Concept('profession', idea)));

AvailableConcepts.push(...[
  'Pollen',
  'Wind',
  'Tsunamis',
  'Earthquakes',
  'Volcanic Eruptions',
  'Hurricanes',
  'Hallucinations',
  'With A Twist',
  'Kids',
  'Old People',
  'Midlife Crisis',
  "Noah's Ark"
].map((idea) => new Concept('misc', idea)));

export default AvailableConcepts;
