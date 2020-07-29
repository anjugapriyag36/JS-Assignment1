var quotes = ['It\'s only when you have the courage to step off the ledge that you\'ll realize you \'ve had wings all along ',
    'Trust is knowing that we\'re exactly where we are supposed to be in life, especially when it doesn\'t feel like it.',
    'In every moment, you are the only one who gets to choose your attitude.Choose wisely',
    'The greatest personal ful!llment comes when we contribute to improving the welfare of others.',
    'Who and what you are will be determined by you, not by your circumstances.',
    'Follow your passion. Listen to your heart. Trust the process. Be grateful. Life is magic and your dreams matter.',
    'Life is about right now in this very moment.Not tomorrow, not yesterday but NOW.Live it!',
    'Having a great dream and belief in yourself is great, but nothing happens until you take action.',
    'Your words are simply the thoughts of yours that will become things the soonest.',
    'Refuse to be defined by someoneelse\'s vision of what\'s possible.',
    'In all moments,for all reasons--love completely.',
    'If we aim high and fall short, we still achieve more than by aiming low and falling short.',
    'May you recognize the passion and the possibility in your day today and have the courage to follow it.',
    'In every moment,for every reason--choose LOVE.',
    'Set your goals high and do something everyday to move forward ',
    'When was the last time worry ever solved a problem? Breathe and know that you are perfect in this moment.',
    'Limitations seem real when we lack faith and belief. With faith and belief, anything is possible.',
    'Today, be the person of your dreams.See and act from their eyes.',
    'Praise is one of the best, yet inexpensive gifts we can give to others.',
    'There is nothing more important in the world than loving yourself.',
    'In times of turmoil, it matters not that we forgot we are in infite, unlimited beings.What matters most, is how quickly we remember.',
    'Most times, regrets are things we didn\'t do,not those we did.',
    'Take the time today to be good to you, in thoughts, deeds and actions--but especially in your thoughts.',
    'Remember, perspective can cause two people to look at the same thing and see two totally different things.',
    'Every good thing you do creates ripples that you may not see.Do them anyway.',
    'For today, think positive thoughts, believe in yourself and others, share hugs and spread love.that\'s it--nothingelse .',
    'Everything starts from gratitude.Everything.From there, allelse lines up for you.',
    'Life is more meaningful when our goal is ful!llment rather than grati!cation.',
    'Focus on the WHY of life and not the HOW, remembering that where focus goes, energy flows '
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
}
