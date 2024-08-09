const questions = [
  {
    id: 'q1',
    question: '새로운 아이디어가 떠오를 때 나는',
    example: [
      {
        answer: '혼자 고민하며 발전시키기',
        value: 'I',
      },
      {
        answer: '팀원들과 브레인스토밍하기',
        value: 'E',
      },
    ],
  },
  {
    id: 'q2',
    question: '공유 오피스에 입주하게 되었습니다. 어떤 사무실을 선택할 건가요?',
    example: [
      {
        answer: '채광과 뷰가 좋고 창문이 있지만 구석에 있는 호실',
        value: 'I',
      },
      {
        answer: '통창으로 되어 있고 옆 입주 기업들과 네트워킹이 가능한 가운데 호실',
        value: 'E',
      },
    ],
  },
  {
    id: 'q3',
    question: '선호하는 팀 유형은 무엇인가요?',
    example: [
      {
        answer: '역할 분담을 통해 필요한 시간 만큼만 효율적으로 회의 하는 팀',
        value: 'I',
      },
      {
        answer: '정해진 회의 종료 시간은 없지만 팀원들과 함께하는 시간이 많아 친해질 수 있는 팀',
        value: 'E',
      },
    ],
  },
  {
    id: 'q4',
    question: '팀원과 회의 중일 때 당신이 주로 하는 말은 무엇인가요?',
    example: [
      {
        answer: '좋은 아이디어가 떠올랐는데, 이건 어때?',
        value: 'N',
      },
      {
        answer: '내가 봤을 때 그건 리스크가 훨씬 큰 것 같아. 보완이 필요해 보여.',
        value: 'S',
      },
    ],
  },
  {
    id: 'q5',
    question: '창업지원금 천만원을 받게 된다면 어디에 쓸 생각인가요?',
    example: [
      {
        answer: '평소에 본인이 하고 싶었던 아이템으로 창업을 도전해본다.',
        value: 'N',
      },
      {
        answer:
          '구글 리서치, 기사 검색 등을 통해 경제 동향을 살핀 후 유망 아이템을 선택 후 창업을 시작한다.',
        value: 'S',
      },
    ],
  },
  {
    id: 'q6',
    question: '창업에서 가장 중요하다고 생각하는 가치는 무엇인가요?',
    example: [
      {
        answer: '내가 꿈꿔왔던 이상의 실현',
        value: 'N',
      },
      {
        answer: '부와 직결된 현실적인 성공',
        value: 'S',
      },
    ],
  },
  {
    id: 'q7',
    question:
      '시장 조사 시 객관적 데이터를 중시하나요, 직접 발로 뛰며 타겟 고객의 피드백을 듣는 것을 중시하나요?',
    example: [
      {
        answer: '객관적 데이터 중시',
        value: 'T',
      },
      {
        answer: '고객의 피드백 중시',
        value: 'F',
      },
    ],
  },
  {
    id: 'q8',
    question: '창업 활동 중 팀원의 실수로 투자유치가 실패되었습니다. 그 다음은 어떻게 하실 건가요?',
    example: [
      {
        answer: '더 바쁘게 움직여, 성과를 위해 어떻게서든 투자자를 바로 찾는다.',
        value: 'T',
      },
      {
        answer: '우선 준비해왔던 과정을 격려하며 팀워크를 쌓는다.',
        value: 'F',
      },
    ],
  },
  {
    id: 'q9',
    question: '빠른 수익 창출이 가능한 아이템 VS 가치가 담긴 독창적 아이템',
    example: [
      {
        answer: '빠른 수익 창출이 가능한 아이템',
        value: 'T',
      },
      {
        answer: '가치가 담긴 독창적 아이템',
        value: 'F',
      },
    ],
  },
  {
    id: 'q10',
    question: '창업 활동 중 스케줄을 관리하는 나의 모습은 어떤가요?',
    example: [
      {
        answer: '일주일에 정해진 시간을 잡고 그만큼 투자할 거야!',
        value: 'J',
      },
      {
        answer: '변수를 고려해서 시간 나는 대로 해야지!',
        value: 'P',
      },
    ],
  },
  {
    id: 'q11',
    question: '업무를 시작할 때 타임라인을 꼼꼼하게 작성하는 편인가요, 일단 시작하고 보나요?',
    example: [
      {
        answer: '타임라인을 꼼꼼히 작성 후 시작',
        value: 'J',
      },
      {
        answer: '일단 시작해보기',
        value: 'P',
      },
    ],
  },
  {
    id: 'q12',
    question: '나의 태스크 제출 유형은?',
    example: [
      {
        answer: '마감 기한이 오기 전에 미리 끝내는 편',
        value: 'J',
      },
      {
        answer: '마감 기한이 임박하면 빠르게 집중해서 끝내는 편',
        value: 'P',
      },
    ],
  },
];

export default questions;
