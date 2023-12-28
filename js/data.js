const qnaList = [
  {
    q: '1. 예금성 자산(90%)',
    a: [
      { answer: 'a. 저축은행예금(저축은행 중앙회 회원 70개사) 평균금리<br>   3.97%', score: 20, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 발행어음(증권사 4개사) 한국투자증권 발행금리<br>   3.654%', score: 10, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'c. 금융지주발행채(신종자본증권, 후순위채) 신한금융지주 발행금리<br>   5.4%', score: 30, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  },
  {
    q: '2. 테마 ETF 투자(10%)',
    a: [
      { answer: 'a. 중국 HSCEI지수 3년 수익률 -32%', score: 100, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 한국 KOSPI지수 3년 수익률 +5%', score: 200, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'c. 미국 S&P500지수 3년 수익률 +52%', score: 300, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'd. 미국 NASDAQ100지수 3년 수익률 +54%', score: 400, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  }
]

const infoList = [
  {
    from: 110,
    to: 110,
    mLeft: '20%',
    name: '증권사 발행어음 + TIGER 차이나HSCEI ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1068" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 120,
    to: 120,
    mLeft: '20%',
    name: '저축은행 예금 + TIGER 차이나HSCEI ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1067" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 130,
    to: 130,
    mLeft: '20%',
    name: '금융지주 신종자본증권 + TIGER 차이나HSCEI ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1069" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 210,
    to: 210,
    mLeft: '20%',
    name: '증권사 발행어음 + TIGER 200 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1071" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 220,
    to: 220,
    mLeft: '20%',
    name: '저축은행 예금 + TIGER 200 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1070" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 230,
    to: 230,
    mLeft: '20%',
    name: '금융지주 신종자본증권 + TIGER 200 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1072" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 310,
    to: 10,
    mLeft: '310%',
    name: '증권사 발행어음 + TIGER 미국S&P500 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1065" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 320,
    to: 320,
    mLeft: '20%',
    name: '저축은행 예금 + TIGER 미국S&P500 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1064" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 330,
    to: 330,
    mLeft: '20%',
    name: '금융지주 신종자본증권 + TIGER 미국S&P500 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1066" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 410,
    to: 410,
    mLeft: '20%',
    name: '증권사 발행어음 + TIGER 미국나스닥 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1062" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
    {
    from: 420,
    to: 420,
    mLeft: '20%',
    name: '저축은행 예금 + TIGER 미국나스닥 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1061" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
  {
    from: 430,
    to: 430,
    mLeft: '80%',
    name: '금융지주 신종자본증권 + TIGER 미국나스닥 ETF',
    name3: '1',
    name2: '<a href="https://etfdiy.imweb.me/39/?idx=1063" target="_blank">EMD 성과를 보려면 클릭하세요</a>',
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

