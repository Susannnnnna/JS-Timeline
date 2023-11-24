// // http://timeline.knightlab.com/docs/options.html
// var additionalOptions = {
//   start_at_end: true,
//   default_bg_color: {r:0, g:0, b:0},
//   timenav_height: 250
// };

// var sample_json = {
//   "events": [
//       {
//           "start_date": {
//               "month": "1",
//               "day": "1",
//               "year": "2017"
//           },
//           "text": {
//               "headline": "Sun Release",
//               "text": "Released Sun"
//           },
//           "group": "Sun"
//       },
//       {
//           "start_date": {
//               "month": "2",
//               "day": "4",
//               "year": "2017"
//           },
//           "text": {
//               "headline": "Sun Release",
//               "text": "Released Sun again"
//           },
//           "group": "Sun"
//       },
//       {
//           "start_date": {
//               "month": "1",
//               "day": "16",
//               "year": "2017"
//           },
//           "text": {
//               "headline": "Auth Release",
//               "text": "Released Authentication Service"
//           },
//           "group": "Authentication"
//       }
//   ]
// };

// // http://timeline.knightlab.com/docs/json-format.html
// var timeline_json = {
//   "title": {
//       "media": {
//         "url": "//www.flickr.com/photos/tm_10001/2310475988/",
//         "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
//         "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
//       },
//       "text": {
//         "headline": "Whitney Houston<br/> 1963 - 2012",
//         "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
//       }
//   },
//   "events": [
//     {
//       "media": {
//         "url": "{{ static_url }}/img/examples/houston/family.jpg",
//         "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
//         "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
//       },
//       "start_date": {
//         "month": "8",
//         "day": "9",
//         "year": "1963"
//       },
//       "text": {
//         "headline": "A Musical Heritage",
//         "text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/fSrO91XO1Ck",
//         "caption": "",
//         "credit": "<a href=\"http://unidiscmusic.com\">Unidisc Music</a>"
//       },
//       "start_date": {
//         "year": "1978"
//       },
//       "text": {
//         "headline": "First Recording",
//         "text": "At the age of 15 Houston was featured on Michael Zager's song, Life's a Party."
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/_gvJCCZzmro",
//         "caption": "A young poised Whitney Houston in an interview with EbonyJet.",
//         "credit": "EbonyJet"
//       },
//       "start_date": {
//         "year": "1978"
//       },
//       "text": {
//         "headline": "The Early Years",
//         "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/H7_sqdkaAfo",
//         "caption": "I'm Every Women as performed by Whitney Houston.",
//         "credit": "Arista Records"
//       },
//       "start_date": {
//         "year": "1978"
//       },
//       "text": {
//         "headline": "Early Album Credits",
//         "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/A4jGzNm2yPI",
//         "caption": "Whitney Houston and Clive Davis discussing her discovery and her eponymous first album.",
//         "credit": "Sony Music Entertainment"
//       },
//       "start_date": {
//         "year": "1983"
//       },
//       "text": {
//         "headline": "Signed",
//         "text": "Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York."
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/m3-hY-hlhBg",
//         "caption": "The 'How Will I Know' video showcases the youthful energy that boosted Houston to stardom.",
//         "credit": "Arista Records Inc."
//       },
//       "start_date": {
//         "year": "1985"
//       },
//       "text": {
//         "headline": "Debut",
//         "text": "Whitney Houston's self titled first release sold over 12 million copies in the U.S. and included the hit singles 'How Will I Know,' 'You Give Good Love,' 'Saving All My Love For You' and 'Greatest Love of All.'"
//       }
//     },
//     {
//       "media": {
//         "url": "https://youtu.be/v0XuiMX1XHg",
//         "caption": "Dionne Warwick gleefully announces cousin, Whitney Houston, the winner of the Best Female Pop Vocal Performance for the song Saving All My Love.",
//         "credit": "<a href='http://grammy.org'>The Recording Academy</a>"
//       },
//       "start_date": {
//         "year": "1986"
//       },
//       "text": {
//         "headline": "'The Grammys'",
//         "text": "In 1986 Houston won her first Grammy for the song Saving All My Love. In total she has won six Grammys, the last of which she won in 1999 for It's Not Right But It's Okay."
//       }
//     }
//   ]
// };

// // two arguments: the id of the Timeline container (no '#')
// // and the JSON object or an instance of TL.TimelineConfig created from
// // a suitable JSON object
// window.timeline = new TL.Timeline('timeline-embed'
// //, timeline_json
// , sample_json
// );