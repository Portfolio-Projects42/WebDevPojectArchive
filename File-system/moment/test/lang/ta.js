var moment = require('../../moment');

/**************************************************
      Tamil - தமிழ்
     *************************************************/

exports['lang:ta'] = {
  setUp: function (cb) {
    moment.lang('ta');
    cb();
  },

  tearDown: function (cb) {
    moment.lang('ta');
    cb();
  },

  parse: function (test) {
    test.expect(96);
    var tests =
        'ஜனவரி ஜனவரி_பிப்ரவரி பிப்ரவரி_மார்ச் மார்ச்_ஏப்ரல் ஏப்ரல்_மே மே_ஜூன் ஜூன்_ஜூலை ஜூலை_ஆகஸ்ட் ஆகஸ்ட்_செப்டெம்பர் செப்டெம்பர்_அக்டோபர் அக்டோபர்_நவம்பர் நவம்பர்_டிசம்பர் டிசம்பர்'.split(
          '_'
        ),
      i;
    function equalTest(input, mmm, i) {
      test.equal(
        moment(input, mmm).month(),
        i,
        input + ' should be month ' + (i + 1)
      );
    }
    for (i = 0; i < 12; i++) {
      tests[i] = tests[i].split(' ');
      equalTest(tests[i][0], 'MMM', i);
      equalTest(tests[i][1], 'MMM', i);
      equalTest(tests[i][0], 'MMMM', i);
      equalTest(tests[i][1], 'MMMM', i);
      equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
      equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
      equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
      equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
    }
    test.done();
  },

  format: function (test) {
    test.expect(22);
    var a = [
        [
          'dddd, MMMM Do YYYY, h:mm:ss a',
          'ஞாயிற்றுக்கிழமை, பிப்ரவரி 14வது 2010, 3:25:50  எற்பாடு',
        ],
        ['ddd, hA', 'ஞாயிறு, 3 எற்பாடு'],
        ['M Mo MM MMMM MMM', '2 2வது 02 பிப்ரவரி பிப்ரவரி'],
        ['YYYY YY', '2010 10'],
        ['D Do DD', '14 14வது 14'],
        ['d do dddd ddd dd', '0 0வது ஞாயிற்றுக்கிழமை ஞாயிறு ஞா'],
        ['DDD DDDo DDDD', '45 45வது 045'],
        ['w wo ww', '8 8வது 08'],
        ['h hh', '3 03'],
        ['H HH', '15 15'],
        ['m mm', '25 25'],
        ['s ss', '50 50'],
        ['a A', ' எற்பாடு  எற்பாடு'],
        ['[ஆண்டின்] DDDo  [நாள்]', 'ஆண்டின் 45வது  நாள்'],
        ['L', '14/02/2010'],
        ['LL', '14 பிப்ரவரி 2010'],
        ['LLL', '14 பிப்ரவரி 2010, 15:25'],
        ['LLLL', 'ஞாயிற்றுக்கிழமை, 14 பிப்ரவரி 2010, 15:25'],
        ['l', '14/2/2010'],
        ['ll', '14 பிப்ரவரி 2010'],
        ['lll', '14 பிப்ரவரி 2010, 15:25'],
        ['llll', 'ஞாயிறு, 14 பிப்ரவரி 2010, 15:25'],
      ],
      b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
      i;
    for (i = 0; i < a.length; i++) {
      test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
    test.done();
  },

  'format ordinal': function (test) {
    test.expect(31);
    test.equal(moment([2011, 0, 1]).format('DDDo'), '1வது', '1வது');
    test.equal(moment([2011, 0, 2]).format('DDDo'), '2வது', '2வது');
    test.equal(moment([2011, 0, 3]).format('DDDo'), '3வது', '3வது');
    test.equal(moment([2011, 0, 4]).format('DDDo'), '4வது', '4வது');
    test.equal(moment([2011, 0, 5]).format('DDDo'), '5வது', '5வது');
    test.equal(moment([2011, 0, 6]).format('DDDo'), '6வது', '6வது');
    test.equal(moment([2011, 0, 7]).format('DDDo'), '7வது', '7வது');
    test.equal(moment([2011, 0, 8]).format('DDDo'), '8வது', '8வது');
    test.equal(moment([2011, 0, 9]).format('DDDo'), '9வது', '9வது');
    test.equal(moment([2011, 0, 10]).format('DDDo'), '10வது', '10வது');

    test.equal(moment([2011, 0, 11]).format('DDDo'), '11வது', '11வது');
    test.equal(moment([2011, 0, 12]).format('DDDo'), '12வது', '12வது');
    test.equal(moment([2011, 0, 13]).format('DDDo'), '13வது', '13வது');
    test.equal(moment([2011, 0, 14]).format('DDDo'), '14வது', '14வது');
    test.equal(moment([2011, 0, 15]).format('DDDo'), '15வது', '15வது');
    test.equal(moment([2011, 0, 16]).format('DDDo'), '16வது', '16வது');
    test.equal(moment([2011, 0, 17]).format('DDDo'), '17வது', '17வது');
    test.equal(moment([2011, 0, 18]).format('DDDo'), '18வது', '18வது');
    test.equal(moment([2011, 0, 19]).format('DDDo'), '19வது', '19வது');
    test.equal(moment([2011, 0, 20]).format('DDDo'), '20வது', '20வது');

    test.equal(moment([2011, 0, 21]).format('DDDo'), '21வது', '21வது');
    test.equal(moment([2011, 0, 22]).format('DDDo'), '22வது', '22வது');
    test.equal(moment([2011, 0, 23]).format('DDDo'), '23வது', '23வது');
    test.equal(moment([2011, 0, 24]).format('DDDo'), '24வது', '24வது');
    test.equal(moment([2011, 0, 25]).format('DDDo'), '25வது', '25வது');
    test.equal(moment([2011, 0, 26]).format('DDDo'), '26வது', '26வது');
    test.equal(moment([2011, 0, 27]).format('DDDo'), '27வது', '27வது');
    test.equal(moment([2011, 0, 28]).format('DDDo'), '28வது', '28வது');
    test.equal(moment([2011, 0, 29]).format('DDDo'), '29வது', '29வது');
    test.equal(moment([2011, 0, 30]).format('DDDo'), '30வது', '30வது');

    test.equal(moment([2011, 0, 31]).format('DDDo'), '31வது', '31வது');
    test.done();
  },

  'format month': function (test) {
    test.expect(12);
    var expected =
        'ஜனவரி ஜனவரி_பிப்ரவரி பிப்ரவரி_மார்ச் மார்ச்_ஏப்ரல் ஏப்ரல்_மே மே_ஜூன் ஜூன்_ஜூலை ஜூலை_ஆகஸ்ட் ஆகஸ்ட்_செப்டெம்பர் செப்டெம்பர்_அக்டோபர் அக்டோபர்_நவம்பர் நவம்பர்_டிசம்பர் டிசம்பர்'.split(
          '_'
        ),
      i;
    for (i = 0; i < expected.length; i++) {
      test.equal(
        moment([2011, i, 1]).format('MMMM MMM'),
        expected[i],
        expected[i]
      );
    }
    test.done();
  },

  'format week': function (test) {
    test.expect(7);
    var expected =
        'ஞாயிற்றுக்கிழமை ஞாயிறு ஞா_திங்கட்கிழமை திங்கள் தி_செவ்வாய்கிழமை செவ்வாய் செ_புதன்கிழமை புதன் பு_வியாழக்கிழமை வியாழன் வி_வெள்ளிக்கிழமை வெள்ளி வெ_சனிக்கிழமை சனி ச'.split(
          '_'
        ),
      i;
    for (i = 0; i < expected.length; i++) {
      test.equal(
        moment([2011, 0, 2 + i]).format('dddd ddd dd'),
        expected[i],
        expected[i]
      );
    }
    test.done();
  },

  from: function (test) {
    test.expect(30);
    var start = moment([2007, 1, 28]);
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 44 }), true),
      'ஒரு சில விநாடிகள்',
      '44 விநாடிகள் = ஒரு சில விநாடிகள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 45 }), true),
      'ஒரு நிமிடம்',
      '45 விநாடிகள் = ஒரு நிமிடம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 89 }), true),
      'ஒரு நிமிடம்',
      '89 விநாடிகள் = ஒரு நிமிடம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 90 }), true),
      '2 நிமிடங்கள்',
      '90 விநாடிகள் = 2 நிமிடங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 44 }), true),
      '44 நிமிடங்கள்',
      '44 நிமிடங்கள் = 44 நிமிடங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 45 }), true),
      'ஒரு மணி நேரம்',
      '45 நிமிடங்கள் = ஒரு மணி நேரம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 89 }), true),
      'ஒரு மணி நேரம்',
      '89 நிமிடங்கள் = ஒரு மணி நேரம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 90 }), true),
      '2 மணி நேரம்',
      '90 நிமிடங்கள் = 2 மணி நேரம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 5 }), true),
      '5 மணி நேரம்',
      '5 மணி நேரம் = 5 மணி நேரம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 21 }), true),
      '21 மணி நேரம்',
      '21 மணி நேரம் = 21 மணி நேரம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 22 }), true),
      'ஒரு நாள்',
      '22 மணி நேரம் = ஒரு நாள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 35 }), true),
      'ஒரு நாள்',
      '35 மணி நேரம் = ஒரு நாள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 36 }), true),
      '2 நாட்கள்',
      '36 மணி நேரம் = 2 days'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 1 }), true),
      'ஒரு நாள்',
      '1 நாள் = ஒரு நாள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 5 }), true),
      '5 நாட்கள்',
      '5 நாட்கள் = 5 நாட்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 25 }), true),
      '25 நாட்கள்',
      '25 நாட்கள் = 25 நாட்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 26 }), true),
      'ஒரு மாதம்',
      '26 நாட்கள் = ஒரு மாதம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 30 }), true),
      'ஒரு மாதம்',
      '30 நாட்கள் = ஒரு மாதம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 45 }), true),
      'ஒரு மாதம்',
      '45 நாட்கள் = ஒரு மாதம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 46 }), true),
      '2 மாதங்கள்',
      '46 நாட்கள் = 2 மாதங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 74 }), true),
      '2 மாதங்கள்',
      '75 நாட்கள் = 2 மாதங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 76 }), true),
      '3 மாதங்கள்',
      '76 நாட்கள் = 3 மாதங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 1 }), true),
      'ஒரு மாதம்',
      '1 மாதம் = ஒரு மாதம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 5 }), true),
      '5 மாதங்கள்',
      '5 மாதங்கள் = 5 மாதங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 344 }), true),
      '11 மாதங்கள்',
      '344 நாட்கள் = 11 மாதங்கள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 345 }), true),
      'ஒரு வருடம்',
      '345 நாட்கள் = ஒரு வருடம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 547 }), true),
      'ஒரு வருடம்',
      '547 நாட்கள் = ஒரு வருடம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 548 }), true),
      '2 ஆண்டுகள்',
      '548 நாட்கள் = 2 ஆண்டுகள்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 1 }), true),
      'ஒரு வருடம்',
      '1 வருடம் = ஒரு வருடம்'
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 5 }), true),
      '5 ஆண்டுகள்',
      '5 ஆண்டுகள் = 5 ஆண்டுகள்'
    );
    test.done();
  },

  suffix: function (test) {
    test.expect(2);
    test.equal(moment(30000).from(0), 'ஒரு சில விநாடிகள் இல்', 'prefix');
    test.equal(moment(0).from(30000), 'ஒரு சில விநாடிகள் முன்', 'suffix');
    test.done();
  },

  'now from now': function (test) {
    test.expect(1);
    test.equal(
      moment().fromNow(),
      'ஒரு சில விநாடிகள் முன்',
      'இப்போது இருந்து கடந்த காலத்தில் காட்ட வேண்டும்'
    );
    test.done();
  },

  fromNow: function (test) {
    test.expect(2);
    test.equal(
      moment().add({ s: 30 }).fromNow(),
      'ஒரு சில விநாடிகள் இல்',
      'ஒரு சில விநாடிகள் இல்'
    );
    test.equal(
      moment().add({ d: 5 }).fromNow(),
      '5 நாட்கள் இல்',
      '5 நாட்கள் இல்'
    );
    test.done();
  },

  'calendar day': function (test) {
    test.expect(6);

    var a = moment().hours(2).minutes(0).seconds(0);

    test.equal(moment(a).calendar(), 'இன்று 02:00', 'இன்று  02:00');
    test.equal(
      moment(a).add({ m: 25 }).calendar(),
      'இன்று 02:25',
      'இன்று  02:25'
    );
    test.equal(
      moment(a).add({ h: 1 }).calendar(),
      'இன்று 03:00',
      'இன்று  03:00'
    );
    test.equal(moment(a).add({ d: 1 }).calendar(), 'நாளை 02:00', 'நாளை  02:00');
    test.equal(
      moment(a).subtract({ h: 1 }).calendar(),
      'இன்று 01:00',
      'இன்று  01:00'
    );
    test.equal(
      moment(a).subtract({ d: 1 }).calendar(),
      'நேற்று 02:00',
      'நேற்று  02:00'
    );
    test.done();
  },

  'calendar next week': function (test) {
    test.expect(15);

    var i, m;
    for (i = 2; i < 7; i++) {
      m = moment().add({ d: i });
      test.equal(
        m.calendar(),
        m.format('dddd, LT'),
        'Today + ' + i + ' days current time'
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format('dddd, LT'),
        'Today + ' + i + ' days beginning of day'
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format('dddd, LT'),
        'Today + ' + i + ' days end of day'
      );
    }
    test.done();
  },

  'calendar last week': function (test) {
    test.expect(15);

    var i, m;

    for (i = 2; i < 7; i++) {
      m = moment().subtract({ d: i });
      test.equal(
        m.calendar(),
        m.format('[கடந்த வாரம்] dddd, LT'),
        'Today - ' + i + ' days current time'
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format('[கடந்த வாரம்] dddd, LT'),
        'Today - ' + i + ' days beginning of day'
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format('[கடந்த வாரம்] dddd, LT'),
        'Today - ' + i + ' days end of day'
      );
    }
    test.done();
  },

  'calendar all else': function (test) {
    test.expect(4);

    var weeksAgo = moment().subtract({ w: 1 }),
      weeksFromNow = moment().add({ w: 1 });

    test.equal(weeksAgo.calendar(), weeksAgo.format('L'), '1 week ago');
    test.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 1 week');

    weeksAgo = moment().subtract({ w: 2 });
    weeksFromNow = moment().add({ w: 2 });

    test.equal(weeksAgo.calendar(), weeksAgo.format('L'), '2 weeks ago');
    test.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 2 weeks');

    test.done();
  },

  // Monday is the first day of the week.
  // The week that contains Jan 1th is the first week of the year.
  // Monday is the first day of the week.
  // The week that contains Jan 1st is the first week of the year.

  'weeks year starting sunday': function (test) {
    test.expect(5);

    test.equal(moment([2012, 0, 1]).week(), 1, 'Jan  1 2012 should be week 1');
    test.equal(moment([2012, 0, 7]).week(), 1, 'Jan  7 2012 should be week 1');
    test.equal(moment([2012, 0, 8]).week(), 2, 'Jan  8 2012 should be week 2');
    test.equal(moment([2012, 0, 14]).week(), 2, 'Jan 14 2012 should be week 2');
    test.equal(moment([2012, 0, 15]).week(), 3, 'Jan 15 2012 should be week 3');

    test.done();
  },

  'weeks year starting monday': function (test) {
    test.expect(6);

    test.equal(
      moment([2006, 11, 31]).week(),
      1,
      'Dec 31 2006 should be week 1'
    );
    test.equal(moment([2007, 0, 1]).week(), 1, 'Jan  1 2007 should be week 1');
    test.equal(moment([2007, 0, 6]).week(), 1, 'Jan  6 2007 should be week 1');
    test.equal(moment([2007, 0, 7]).week(), 2, 'Jan  7 2007 should be week 2');
    test.equal(moment([2007, 0, 13]).week(), 2, 'Jan 13 2007 should be week 2');
    test.equal(moment([2007, 0, 14]).week(), 3, 'Jan 14 2007 should be week 3');

    test.done();
  },

  'weeks year starting tuesday': function (test) {
    test.expect(6);

    test.equal(
      moment([2007, 11, 29]).week(),
      52,
      'Dec 29 2007 should be week 52'
    );
    test.equal(moment([2008, 0, 1]).week(), 1, 'Jan  1 2008 should be week 1');
    test.equal(moment([2008, 0, 5]).week(), 1, 'Jan  5 2008 should be week 1');
    test.equal(moment([2008, 0, 6]).week(), 2, 'Jan  6 2008 should be week 2');
    test.equal(moment([2008, 0, 12]).week(), 2, 'Jan 12 2008 should be week 2');
    test.equal(moment([2008, 0, 13]).week(), 3, 'Jan 13 2008 should be week 3');

    test.done();
  },

  'weeks year starting wednesday': function (test) {
    test.expect(6);

    test.equal(
      moment([2002, 11, 29]).week(),
      1,
      'Dec 29 2002 should be week 1'
    );
    test.equal(moment([2003, 0, 1]).week(), 1, 'Jan  1 2003 should be week 1');
    test.equal(moment([2003, 0, 4]).week(), 1, 'Jan  4 2003 should be week 1');
    test.equal(moment([2003, 0, 5]).week(), 2, 'Jan  5 2003 should be week 2');
    test.equal(moment([2003, 0, 11]).week(), 2, 'Jan 11 2003 should be week 2');
    test.equal(moment([2003, 0, 12]).week(), 3, 'Jan 12 2003 should be week 3');

    test.done();
  },

  'weeks year starting thursday': function (test) {
    test.expect(6);

    test.equal(
      moment([2008, 11, 28]).week(),
      1,
      'Dec 28 2008 should be week 1'
    );
    test.equal(moment([2009, 0, 1]).week(), 1, 'Jan  1 2009 should be week 1');
    test.equal(moment([2009, 0, 3]).week(), 1, 'Jan  3 2009 should be week 1');
    test.equal(moment([2009, 0, 4]).week(), 2, 'Jan  4 2009 should be week 2');
    test.equal(moment([2009, 0, 10]).week(), 2, 'Jan 10 2009 should be week 2');
    test.equal(moment([2009, 0, 11]).week(), 3, 'Jan 11 2009 should be week 3');

    test.done();
  },

  'weeks year starting friday': function (test) {
    test.expect(6);

    test.equal(
      moment([2009, 11, 27]).week(),
      1,
      'Dec 27 2009 should be week 1'
    );
    test.equal(moment([2010, 0, 1]).week(), 1, 'Jan  1 2010 should be week 1');
    test.equal(moment([2010, 0, 2]).week(), 1, 'Jan  2 2010 should be week 1');
    test.equal(moment([2010, 0, 3]).week(), 2, 'Jan  3 2010 should be week 2');
    test.equal(moment([2010, 0, 9]).week(), 2, 'Jan  9 2010 should be week 2');
    test.equal(moment([2010, 0, 10]).week(), 3, 'Jan 10 2010 should be week 3');

    test.done();
  },

  'weeks year starting saturday': function (test) {
    test.expect(5);

    test.equal(
      moment([2010, 11, 26]).week(),
      1,
      'Dec 26 2010 should be week 1'
    );
    test.equal(moment([2011, 0, 1]).week(), 1, 'Jan  1 2011 should be week 1');
    test.equal(moment([2011, 0, 2]).week(), 2, 'Jan  2 2011 should be week 2');
    test.equal(moment([2011, 0, 8]).week(), 2, 'Jan  8 2011 should be week 2');
    test.equal(moment([2011, 0, 9]).week(), 3, 'Jan  9 2011 should be week 3');

    test.done();
  },

  meridiem: function (test) {
    test.expect(6);

    test.equal(
      moment([2011, 2, 23, 2, 30]).format('a'),
      ' வைகறை',
      'before dawn'
    );
    test.equal(moment([2011, 2, 23, 9, 30]).format('a'), ' காலை', 'morning');
    test.equal(
      moment([2011, 2, 23, 14, 30]).format('a'),
      ' நண்பகல்',
      'during day'
    );
    test.equal(
      moment([2011, 2, 23, 17, 30]).format('a'),
      ' எற்பாடு',
      'evening'
    );
    test.equal(
      moment([2011, 2, 23, 19, 30]).format('a'),
      ' மாலை',
      'late evening'
    );
    test.equal(moment([2011, 2, 23, 21, 20]).format('a'), ' இரவு', 'night');
    test.done();
  },

  'returns the name of the language': function (test) {
    if (typeof module !== 'undefined' && module.exports) {
      test.equal(require('../../lang/ta'), 'ta', 'module should export ta');
    }

    test.done();
  },
};
