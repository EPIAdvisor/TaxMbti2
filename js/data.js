const qnaList = [
  {
    q: '1. 둘 중 원하는 옵션을 선택하세요',
    a: [
      { answer: 'a. 발행어음', score: 10, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 저축금리', score: 20, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  },
  {
    q: '2. 투자테마를 선택하세요',
    a: [
      { answer: 'a. 반도체', score: 100, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'a. 2차전지', score: 200, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'a. S&P500', score: 300, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 나스닥', score: 400, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  },
  {
    q: '3. 투자테마의 포트폴리오 비중을 선택하세요',
    a: [
      { answer: 'a. 10%', score: 1, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'a. 20%', score: 2, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'a. 30%', score: 3, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'a. 40%', score: 4, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 50%', score: 5, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 10,
    mLeft: '20%',
    name: '당신의 MBTI는... I',
    name3: '1',
    name2: '당신의 고유 MBTI는... I',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.' + '<br>' + '(자산배분: 주식 20%, 채권 80%로 보수적인 포트폴리오)',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
  {
    from: 11,
    to: 49,
    mLeft: '40%',
    name: '당신의 MBTI는... I',
    name2: '당신의 고유 MBTI는... I',
    name3: '2',
    desc2: '주식 40%, 채권 60% 비중에 대체자산 투자',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.<br>(자산배분: 주식 40%, 채권 60%로 안정적인 포트폴리오)',
    desc_1: ' 42%',
    desc_2: ' 28%',
    desc_3: ' 30%'
  },
  {
    from: 50,
    to: 89,
    mLeft: '60%',
    name: '당신의 MBTI는... E',
    name2: '당신의 고유 MBTI는... E',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 90,
    to: 100,
    mLeft: '80%',
    name: '당신의 MBTI는... E',
    name2: '당신의 고유 MBTI는... E',
    name3: '4',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 80%, 채권 20%로 공격적인 포트폴리오)',
    desc2: '주식 80%, 채권 20% 비중에 대체자산 투자',
    desc_1: ' 14%',
    desc_2: ' 56%',
    desc_3: ' 30%'
  }
]

const infoList2 = [
  {
    from: 0,
    to: 0,
    name: 'T',
    name2: 'T',
    name3: '0', 
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.' + '<br>' + '(채권자산: 예금처럼 안전한 초단기 국채 투자자)',
    desc2: '초단기 국채(SHV ETF)',
    link: 'https://youtu.be/0a2yaZhzBuI'
  },
  {
    from: 1,
    to: 1, 
    name: 'T',
    name2: 'T',
    name3: '1',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.',
    desc2: '단기 국채(SHY ETF)',
    link: 'https://youtu.be/buPqw1wsPwg'
  },
  {
    from: 2,
    to: 2, 
    name: 'T',
    name2: 'T',
    name3: '2',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.',
    desc2: '중장기 국채(IEF ETF)',
    link: 'https://youtu.be/JCKxyiOTdeg'
  },
  {
    from: 3,
    to: 3,
    name: 'F',
    name2: 'F',
    name3: '3',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.',
    desc2: '투자등급 회사채(LQD ETF)',
    link: 'https://youtu.be/r4kUtX4Gwxk'
  },
  {
    from: 4,
    to: 4,
    name: 'F',
    name2: 'F',
    name3: '4',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.',
    desc2: '하이일드 회사채(HYG ETF)',
    link: 'https://youtu.be/zL9OABgFzPM'
  }
]

const infoList3 = [
  {
    from: 0,
    to: 0,
    name: 'N',
    name2: 'N',
    name3: '0',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '글로벌주식지수(ACWI ETF)',
    link: 'https://youtu.be/iwN1zhK4-Oo'
  },
  {
    from: 1,
    to: 1, 
    name: 'S',
    name2: 'S',
    name3: '1',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '한국주식지수(EWY ETF)',
    link: 'https://youtu.be/NsfvHf8o1W8'
  },
  {
    from: 2,
    to: 2,
    name: 'N',
    name2: 'N',
    name3: '2',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '미국주식지수(SPY ETF)',
    link: 'https://youtu.be/ppFSYmtDj94'
  },
  {
    from: 3,
    to: 3, 
    name: 'S',
    name2: 'S',
    name3: '3',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '중국주식지수(FXI ETF)',
    link: 'https://youtu.be/UDO6E1oUSn4'
  },
  {
    from: 4,
    to: 4,
    name: 'S',
    name2: 'S',
    name3: '4',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '유럽주식지수(FEZ ETF)',
    link: 'https://youtu.be/AyB-whOxFjE'
  }
]

const infoList4 = [
  {
    from: 0,
    to: 0,
    name: 'J',
    name2: 'J',
    name3: '0',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.',
    desc2: '금(GLD ETF)',
    link: 'https://youtu.be/xPDJp3Whgdk'
  },
  {
    from: 1,
    to: 1, 
    name: 'J',
    name2: 'J',
    name3: '1',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.',
    desc2: '미국 부동산 리츠지수(VNQ ETF)',
    link: 'https://youtu.be/4EbDM47AJIo'
  },
  {
    from: 2,
    to: 2,
    name: 'P',
    name2: 'P',
    name3: '2',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.',
    desc2: '원유(USO ETF)',
    link: 'https://youtu.be/svaHyCpJL10'
  },
  {
    from: 3,
    to: 3, 
    name: 'P',
    name2: 'P',
    name3: '3',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.',
    desc2: '비트코인(BITO ETF)',
    link: 'https://youtu.be/92m94Fmg3gs'
  }
]

const infoList5 = [
  {
    from: 0,
    to: 0,
    name: 'S',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '',
    link: ''
  },
  {
    from: 1,
    to: 1, 
    name: 'N',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '',
    link: ''
  }
]

