"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", [
      {
        id: 1,
        title: "Spider-Man: No Way Home",
        banner:
          "http://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        synopsis:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        release_date: "2021-12-15",
        youtube_link: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      },
      {
        id: 2,
        title: "Encanto",
        banner:
          "http://image.tmdb.org/t/p/w780/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        synopsis:
          "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        release_date: "2021-11-24",
        youtube_link: "https://www.youtube.com/watch?v=CaimKeDcudo",
        category_id: 16,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster: "https://cdn1-production-images-kly.akamaized.net/T-qAsWUMuNByWoYmePnLBIpkYqM=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3594218/original/052642100_1633507720-243335083_1024199508376654_4800931753752397272_n.jpg",
      },
      {
        id: 3,
        title: "The Dark Knight",
        banner:
          "http://image.tmdb.org/t/p/w780/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        synopsis:
          "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        release_date: "2008-07-14",
        youtube_link: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        category_id: 18,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster: "http://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: 4,
        title: "Turning Red",
        banner:
          "http://image.tmdb.org/t/p/w780/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        synopsis:
          "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        release_date: "2022-03-01",
        youtube_link: "https://www.youtube.com/watch?v=XdKzUbAiswE",
        category_id: 10751,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      },
      {
        id: 5,
        title: "Morbius",
        banner:
          "http://image.tmdb.org/t/p/w780/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
        synopsis:
          "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
        release_date: "2022-03-30",
        youtube_link: "https://www.youtube.com/watch?v=oZ6iiRrz1SY",
        category_id: 14,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      },
      {
        id: 6,
        title: "Uncharted",
        banner:
          "http://image.tmdb.org/t/p/w780/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
        synopsis:
          "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
        release_date: "2022-02-10",
        youtube_link: "https://www.youtube.com/watch?v=eHp3MbsCbMg",
        category_id: 14,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
      },
      {
        id: 7,
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        banner:
          "http://image.tmdb.org/t/p/w780/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
        synopsis:
          "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        release_date: "2022-04-06",
        youtube_link: "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",
        category_id: 14,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
      },
      {
        id: 8,
        title: "Sonic the Hedgehog 2",
        banner:
          "http://image.tmdb.org/t/p/w780/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
        synopsis:
          "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        release_date: "2022-03-30",
        youtube_link: "https://www.youtube.com/watch?v=47r8FXYZWNU",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster: "http://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      },
      {
        id: 9,
        title: "The Lost City",
        banner:
          "http://image.tmdb.org/t/p/w780/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
        synopsis:
          "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
        release_date: "2022-03-24",
        youtube_link: "https://www.youtube.com/watch?v=nfKO9rYDmE8",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
      },
      {
        id: 10,
        title: "Jurassic World Dominion",
        banner:
          "http://image.tmdb.org/t/p/w780/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg",
        synopsis:
          "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        release_date: "2022-06-01",
        youtube_link: "https://www.youtube.com/watch?v=fb5ELWi-ekk",
        category_id: 12,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      },
      {
        id: 11,
        title: "Memory",
        banner:
          "http://image.tmdb.org/t/p/w780/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
        synopsis:
          "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
        release_date: "2022-04-28",
        youtube_link: "https://www.youtube.com/watch?v=yGw8yw6Mso8",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster: "http://image.tmdb.org/t/p/w300/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
      },
      {
        id: 12,
        title: "The Northman",
        banner:
          "http://image.tmdb.org/t/p/w780/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
        synopsis:
          "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
        release_date: "2022-04-07",
        youtube_link: "https://www.youtube.com/watch?v=oMSdFM12hOw",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
      },
      {
        id: 13,
        title: "Doctor Strange in the Multiverse of Madness",
        banner:
          "http://image.tmdb.org/t/p/w780/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg",
        synopsis:
          "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        release_date: "2022-05-04",
        youtube_link: "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        category_id: 14,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      },
      {
        id: 14,
        title: "Clean",
        banner:
          "http://image.tmdb.org/t/p/w780/k0bZfbtwZvMtKazaabeLVGQLhGg.jpg",
        synopsis:
          "Tormented by a past life, garbage man Clean attempts a life of quiet redemption. But when his good intentions mark him a target of a local crime boss, Clean is forced to reconcile with the violence of his past.",
        release_date: "2022-01-28",
        youtube_link: "https://www.youtube.com/watch?v=G747avZgnSc",
        category_id: 80,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/kRpKJstAW7DsoPAEBW2Kk1uD9Q6.jpg",
      },
      {
        id: 15,
        title: "The Batman",
        banner:
          "http://image.tmdb.org/t/p/w780/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
        synopsis:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        release_date: "2022-03-01",
        youtube_link: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        category_id: 80,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      },
      {
        id: 16,
        title: "Veneciafrenia",
        banner:
          "http://image.tmdb.org/t/p/w780/egS5SHI4Ppwmb65lUjqsy79ASnN.jpg",
        synopsis:
          "A group of spanish tourists in Venice finds themselves fighting for their lives against locals that are not too keen on foreigners.",
        release_date: "2022-04-21",
        youtube_link: "https://www.youtube.com/watch?v=11fXUvBpcAo",
        category_id: 27,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/luMC56bwZqaECYRz6X7sXjqN6nd.jpg",
      },
      {
        id: 17,
        title: "A Day to Die",
        banner:
          "http://image.tmdb.org/t/p/w780/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg",
        synopsis:
          "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",
        release_date: "2022-03-04",
        youtube_link: "https://www.youtube.com/watch?v=JnFQv6hnUuU",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg",
      },
      {
        id: 18,
        title: "The Bad Guys",
        banner:
          "http://image.tmdb.org/t/p/w780/fEe5fe82qHzjO4yej0o79etqsWV.jpg",
        synopsis:
          "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
        release_date: "2022-03-17",
        youtube_link: "https://www.youtube.com/watch?v=m8Xt0yXaDPU",
        category_id: 16,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
        poster:
          "http://image.tmdb.org/t/p/w300/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
