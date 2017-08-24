import Boys from './images/boys.jpg'; 
import Palms from './images/palms.jpg';
import Banana from './images/banana.png';
import Bravo from './images/bravo.png';
import Cat from './images/cat.jpg';
import Dumbface from './images/dumbface.png';
import Homer from './images/homer.jpg';
import Horse from './images/horse.jpg';
import Monster from './images/monster.jpeg';
import Moon from './images/moon.jpg';
import Rainbow from './images/rainbow.jpg';
import Rawr from './images/rawr.jpg';
import Snoopy from './images/snoopy.jpg';
import Tree from './images/tree.jpg';
import Rock from './images/rock.jpg';
import MySquad from './Squads/MySquad';
import Squad2 from './Squads/Squad2';
import { team1, team2, team3 } from './players';




const data = [
   {
     img: Rock,
     title: 'Jeffery for Jeffrey',
     record: '0-0',
     id: 1,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Palms,
     title: 'MattyMuchacho',
     record: '0-0',
     id: 2,
     team: [
         { name: 'Jay Ajayi', src: team2['Jay Ajayi'].src, pos: team2['Jay Ajayi'].pos},
         { name: 'Doug Baldwin', src: team2['Doug Baldwin'].src, pos: team2['Doug Baldwin'].pos},
         { name: 'Golden Tate', src: team2['Golden Tate'].src, pos: team2['Golden Tate'].pos},
         { name: 'Larry Fitzgerald', src: team2['Larry Fitzgerald'].src, pos: team2['Larry Fitzgerald'].pos},
         { name: 'Paul Perkins', src: team2['Paul Perkins'].src, pos: team2['Paul Perkins'].pos},
         { name: 'Frank Gore', src: team2['Frank Gore'].src, pos: team2['Frank Gore'].pos},
         { name: 'Adam Thielen', src: team2['Adam Thielen'].src, pos: team2['Adam Thielen'].pos},
         { name: 'Marcus Mariota', src: team2['Marcus Mariota'].src, pos: team2['Marcus Mariota'].pos},
         { name: 'Julius Thomas', src: team2['Julius Thomas'].src, pos: team2['Julius Thomas'].pos},
         { name: 'Jamaal Charles', src: team2['Jamaal Charles'].src, pos: team2['Jamaal Charles'].pos},
         { name: 'Tyrod Taylor', src: team2['Tyrod Taylor'].src, pos: team2['Tyrod Taylor'].pos},
         { name: 'Kansas City Chiefs', src: team2['Kansas City Chiefs'].src, pos: team2['Kansas City Chiefs'].pos},
         { name: 'Justin Tucker', src: team2['Justin Tucker'].src, pos: team2['Justin Tucker'].pos},
         { name: 'Jason Witten', src: team2['Jason Witten'].src, pos: team2['Jason Witten'].pos},
         { name: 'Devin Funchess', src: team2['Devin Funchess'].src, pos: team2['Devin Funchess'].pos}
    ]
   },
   {
     img: Banana,
     title: 'Brahsil',
     record: '0-0',
     id: 3,
     team: [
         { name: 'Leveon Bell', src: team3['Leveon Bell'].src, pos: team3['Leveon Bell'].pos},
         { name: 'Brandin Cooks', src: team3['Brandin Cooks'].src, pos: team3['Brandin Cooks'].pos},
         { name: 'Tyreek Hill', src: team3['Tyreek Hill'].src, pos: team3['Tyreek Hill'].pos},
         { name: 'Willie Snead', src: team3['Willie Snead'].src, pos: team3['Willie Snead'].pos},
         { name: 'Carlos Hyde', src: team3['Carlos Hyde'].src, pos: team3['Carlos Hyde'].pos},
         { name: 'Martellus Bennett', src: team3['Martellus Bennett'].src, pos: team3['Martellus Bennett'].pos},
         { name: 'John Brown', src: team3['John Brown'].src, pos: team3['John Brown'].pos},
         { name: 'Duke Johnson', src: team3['Duke Johnson'].src, pos: team3['Duke Johnson'].pos},
         { name: 'James White', src: team3['James White'].src, pos: team3['James White'].pos},
         { name: 'Jameis Winston', src: team3['Jameis Winston'].src, pos: team3['Jameis Winston'].pos},
         { name: 'Cole Beasley', src: team3['Cole Beasley'].src, pos: team3['Cole Beasley'].pos},
         { name: 'Derek Carr', src: team3['Derek Carr'].src, pos: team3['Derek Carr'].pos},
         { name: 'Torrey Smith', src: team3['Torrey Smith'].src, pos: team3['Torrey Smith'].pos},
         { name: 'New England Patriots', src: team3['New England Patriots'].src, pos: team3['New England Patriots'].pos},
         { name: 'Sebastian Janikowski', src: team3['Sebastian Janikowski'].src, pos: team3['Sebastian Janikowski'].pos}
    ]
   },
   {
     img: Bravo,
     title: 'Andythechamp19',
     record: '0-0',
     id: 4,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Cat,
     title: 'King of Keef',
     record: '0-0',
     id: 5,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Dumbface,
     title: 'NVO on your HO',
     record: '0-0',
     id: 6,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Homer,
     title: 'Stinkner',
     record: '0-0',
     id: 7,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Horse,
     title: 'Seattle\'s Rainman',
     record: '0-0',
     id: 8,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Monster,
     title: 'AcogIverson',
     record: '0-0',
     id: 9,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Moon,
     title: 'T1LT0N',
     record: '0-0',
     id: 10,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Rainbow,
     title: 'DChi4Lyfe',
     record: '0-0',
     id: 11,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Rawr,
     title: 'Oil Mun',
     record: '0-0',
     id: 12,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Snoopy,
     title: 'Felix the Cat',
     record: '0-0',
     id: 13,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   },
   {
     img: Tree,
     title: 'Drewsalem',
     record: '0-0',
     id: 14,
     team: [
         { name: 'David Johnson', src: team1['David Johnson'].src, pos: team1['David Johnson'].pos},
         { name: 'Allen Robinson', src: team1['Allen Robinson'].src, pos: team1['Allen Robinson'].pos},
         { name: 'Ty Montgomery', src: team1['Ty Montgomery'].src, pos: team1['Ty Montgomery'].pos},
         { name: 'Julian Edelman', src: team1['Julian Edelman'].src, pos: team1['Julian Edelman'].pos},
         { name: 'Donte Moncrief', src: team1['Donte Moncrief'].src, pos: team1['Donte Moncrief'].pos},
         { name: 'Tyler Eifert', src: team1['Tyler Eifert'].src, pos: team1['Tyler Eifert'].pos},
         { name: 'Adrian Peterson', src: team1['Adrian Peterson'].src, pos: team1['Adrian Peterson'].pos},
         { name: 'Brandon Marshall', src: team1['Brandon Marshall'].src, pos: team1['Brandon Marshall'].pos},
         { name: 'Derrick Henry', src: team1['Derrick Henry'].src, pos: team1['Derrick Henry'].pos},
         { name: 'Tyler Lockett', src: team1['Tyler Lockett'].src, pos: team1['Tyler Lockett'].pos},
         { name: 'Jonathan Williams', src: team1['Jonathan Williams'].src, pos: team1['Jonathan Williams'].pos},
         { name: 'Andy Dalton', src: team1['Andy Dalton'].src, pos: team1['Andy Dalton'].pos},
         { name: 'J.J. Nelson', src: team1['J.J. Nelson'].src, pos: team1['J.J. Nelson'].pos},
         { name: 'Los Angeles Chargers', src: team1['Los Angeles Chargers'].src, pos: team1['Los Angeles Chargers'].pos},
         { name: 'Stephen Gostkowski', src: team1['Stephen Gostkowski'].src, pos: team1['Stephen Gostkowski'].pos}
    ]
   }
 ];

export default data;