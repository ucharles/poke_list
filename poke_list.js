var poke_list = [[1, "이상해씨", [4, 8]], [2, "이상해풀", [4, 8]], [3, "이상해꽃", [4, 8]], [4, "파이리", [2]], [5, "리자드", [2]], [6, "리자몽", [2, 10]], [7, "꼬부기", [3]], [8, "어니부기", [3]], [9, "거북왕", [3]], [10, "캐터피", [12]], [11, "단데기", [12]], [12, "버터플", [12, 10]], [13, "뿔충이", [12, 8]], [14, "딱충이", [12, 8]], [15, "독침붕", [12, 8]], [16, "구구", [1, 10]], [17, "피죤", [1, 10]], [18, "피죤투", [1, 10]], [19, "꼬렛", [1]], [20, "레트라", [1]], [21, "깨비참", [1, 10]], [22, "깨비드릴조", [1, 10]], [23, "아보", [8]], [24, "아보크", [8]], [25, "피카츄", [5]], [26, "라이츄", [5]], [27, "모래두지", [9]], [28, "고지", [9]], [29, "니드런♀", [8]], [30, "니드리나", [8]], [31, "니드퀸", [8, 9]], [32, "니드런♂", [8]], [33, "니드리노", [8]], [34, "니드킹", [8, 9]], [35, "삐삐", [18]], [36, "픽시", [18]], [37, "식스테일", [2]], [38, "나인테일", [2]], [39, "푸린", [1, 18]], [40, "푸크린", [1, 18]], [41, "주뱃", [8, 10]], [42, "골뱃", [8, 10]], [43, "뚜벅쵸", [4, 8]], [44, "냄새꼬", [4, 8]], [45, "라플레시아", [4, 8]], [46, "파라스", [12, 4]], [47, "파라섹트", [12, 4]], [48, "콘팡", [12, 8]], [49, "도나리", [12, 8]], [50, "디그다", [9]], [51, "닥트리오", [9]], [52, "나옹", [1]], [53, "페르시온", [1]], [54, "고라파덕", [3]], [55, "골덕", [3]], [56, "망키", [7]], [57, "성원숭", [7]], [58, "가디", [2]], [59, "윈디", [2]], [60, "발챙이", [3]], [61, "슈륙챙이", [3]], [62, "강챙이", [3, 7]], [63, "캐이시", [11]], [64, "윤겔라", [11]], [65, "후딘", [11]], [66, "알통몬", [7]], [67, "근육몬", [7]], [68, "괴력몬", [7]], [69, "모다피", [4, 8]], [70, "우츠동", [4, 8]], [71, "우츠보트", [4, 8]], [72, "왕눈해", [3, 8]], [73, "독파리", [3, 8]], [74, "꼬마돌", [13, 9]], [75, "데구리", [13, 9]], [76, "딱구리", [13, 9]], [77, "포니타", [2]], [78, "날쌩마", [2]], [79, "야돈", [3, 11]], [80, "야도란", [3, 11]], [81, "코일", [5, 17]], [82, "레어코일", [5, 17]], [83, "파오리", [1, 10]], [84, "두두", [1, 10]], [85, "두트리오", [1, 10]], [86, "쥬쥬", [3]], [87, "쥬레곤", [3, 6]], [88, "질퍽이", [8]], [89, "질뻐기", [8]], [90, "셀러", [3]], [91, "파르셀", [3, 6]], [92, "고오스", [14, 8]], [93, "고우스트", [14, 8]], [94, "팬텀", [14, 8]], [95, "롱스톤", [13, 9]], [96, "슬리프", [11]], [97, "슬리퍼", [11]], [98, "크랩", [3]], [99, "킹크랩", [3]], [100, "찌리리공", [5]], [101, "붐볼", [5]], [102, "아라리", [4, 11]], [103, "나시", [4, 11]], [104, "탕구리", [9]], [105, "텅구리", [9]], [106, "시라소몬", [7]], [107, "홍수몬", [7]], [108, "내루미", [1]], [109, "또가스", [8]], [110, "또도가스", [8]], [111, "뿔카노", [9, 13]], [112, "코뿌리", [9, 13]], [113, "럭키", [1]], [114, "덩쿠리", [4]], [115, "캥카", [1]], [116, "쏘드라", [3]], [117, "시드라", [3]], [118, "콘치", [3]], [119, "왕콘치", [3]], [120, "별가사리", [3]], [121, "아쿠스타", [3, 11]], [122, "마임맨", [11, 18]], [123, "스라크", [12, 10]], [124, "루주라", [6, 11]], [125, "에레브", [5]], [126, "마그마", [2]], [127, "쁘사이저", [12]], [128, "켄타로스", [1]], [129, "잉어킹", [3]], [130, "갸라도스", [3, 10]], [131, "라프라스", [3, 6]], [132, "메타몽", [1]], [133, "이브이", [1]], [134, "샤미드", [3]], [135, "쥬피썬더", [5]], [136, "부스터", [2]], [137, "폴리곤", [1]], [138, "암나이트", [13, 3]], [139, "암스타", [13, 3]], [140, "투구", [13, 3]], [141, "투구푸스", [13, 3]], [142, "프테라", [13, 10]], [143, "잠만보", [1]], [144, "프리져", [6, 10]], [145, "썬더", [5, 10]], [146, "파이어", [2, 10]], [147, "미뇽", [15]], [148, "신뇽", [15]], [149, "망나뇽", [15, 10]], [150, "뮤츠", [11]], [151, "뮤", [11]], [152, "치코리타", [4]], [153, "베이리프", [4]], [154, "메가니움", [4]], [155, "브케인", [2]], [156, "마그케인", [2]], [157, "블레이범", [2]], [158, "리아코", [3]], [159, "엘리게이", [3]], [160, "장크로다일", [3]], [161, "꼬리선", [1]], [162, "다꼬리", [1]], [163, "부우부", [1, 10]], [164, "야부엉", [1, 10]], [165, "레디바", [12, 10]], [166, "레디안", [12, 10]], [167, "페이검", [12, 8]], [168, "아리아도스", [12, 8]], [169, "크로뱃", [8, 10]], [170, "초라기", [3, 5]], [171, "랜턴", [3, 5]], [172, "피츄", [5]], [173, "삐", [18]], [174, "푸푸린", [1, 18]], [175, "토게피", [18]], [176, "토게틱", [18, 10]], [177, "네이티", [11, 10]], [178, "네이티오", [11, 10]], [179, "메리프", [5]], [180, "보송송", [5]], [181, "전룡", [5]], [182, "아르코", [4]], [183, "마릴", [3, 18]], [184, "마릴리", [3, 18]], [185, "꼬지모", [13]], [186, "왕구리", [3]], [187, "통통코", [4, 10]], [188, "두코", [4, 10]], [189, "솜솜코", [4, 10]], [190, "에이팜", [1]], [191, "해너츠", [4]], [192, "해루미", [4]], [193, "왕자리", [12, 10]], [194, "우파", [3, 9]], [195, "누오", [3, 9]], [196, "에브이", [11]], [197, "블래키", [16]], [198, "니로우", [16, 10]], [199, "야도킹", [3, 11]], [200, "무우마", [14]], [201, "안농", [11]], [202, "마자용", [11]], [203, "키링키", [1, 11]], [204, "피콘", [12]], [205, "쏘콘", [12, 17]], [206, "노고치", [1]], [207, "글라이거", [9, 10]], [208, "강철톤", [17, 9]], [209, "블루", [18]], [210, "그랑블루", [18]], [211, "침바루", [3, 8]], [212, "핫삼", [12, 17]], [213, "단단지", [12, 13]], [214, "헤라크로스", [12, 7]], [215, "포푸니", [16, 6]], [216, "깜지곰", [1]], [217, "링곰", [1]], [218, "마그마그", [2]], [219, "마그카르고", [2, 13]], [220, "꾸꾸리", [6, 9]], [221, "메꾸리", [6, 9]], [222, "코산호", [3, 13]], [223, "총어", [3]], [224, "대포무노", [3]], [225, "딜리버드", [6, 10]], [226, "만타인", [3, 10]], [227, "무장조", [17, 10]], [228, "델빌", [16, 2]], [229, "헬가", [16, 2]], [230, "킹드라", [3, 15]], [231, "코코리", [9]], [232, "코리갑", [9]], [233, "폴리곤2", [1]], [234, "노라키", [1]], [235, "루브도", [1]], [236, "배루키", [7]], [237, "카포에라", [7]], [238, "뽀뽀라", [6, 11]], [239, "에레키드", [5]], [240, "마그비", [2]], [241, "밀탱크", [1]], [242, "해피너스", [1]], [243, "라이코", [5]], [244, "앤테이", [2]], [245, "스이쿤", [3]], [246, "애버라스", [13, 9]], [247, "데기라스", [13, 9]], [248, "마기라스", [13, 16]], [249, "루기아", [11, 10]], [250, "칠색조", [2, 10]], [251, "세레비", [11, 4]], [252, "나무지기", [4]], [253, "나무돌이", [4]], [254, "나무킹", [4]], [255, "아차모", [2]], [256, "영치코", [2, 7]], [257, "번치코", [2, 7]], [258, "물짱이", [3]], [259, "늪짱이", [3, 9]], [260, "대짱이", [3, 9]], [261, "포챠나", [16]], [262, "그라에나", [16]], [263, "지그제구리", [1]], [264, "직구리", [1]], [265, "개무소", [12]], [266, "실쿤", [12]], [267, "뷰티플라이", [12, 10]], [268, "카스쿤", [12]], [269, "독케일", [12, 8]], [270, "연꽃몬", [3, 4]], [271, "로토스", [3, 4]], [272, "로파파", [3, 4]], [273, "도토링", [4]], [274, "잎새코", [4, 16]], [275, "다탱구", [4, 16]], [276, "테일로", [1, 10]], [277, "스왈로", [1, 10]], [278, "갈모매", [3, 10]], [279, "패리퍼", [3, 10]], [280, "랄토스", [11, 18]], [281, "킬리아", [11, 18]], [282, "가디안", [11, 18]], [283, "비구술", [12, 3]], [284, "비나방", [12, 10]], [285, "버섯꼬", [4]], [286, "버섯모", [4, 7]], [287, "게을로", [1]], [288, "발바로", [1]], [289, "게을킹", [1]], [290, "토중몬", [12, 9]], [291, "아이스크", [12, 10]], [292, "껍질몬", [12, 14]], [293, "소곤룡", [1]], [294, "노공룡", [1]], [295, "폭음룡", [1]], [296, "마크탕", [7]], [297, "하리뭉", [7]], [298, "루리리", [1, 18]], [299, "코코파스", [13]], [300, "에나비", [1]], [301, "델케티", [1]], [302, "깜까미", [16, 14]], [303, "입치트", [17, 18]], [304, "가보리", [17, 13]], [305, "갱도라", [17, 13]], [306, "보스로라", [17, 13]], [307, "요가랑", [7, 11]], [308, "요가램", [7, 11]], [309, "썬더라이", [5]], [310, "썬더볼트", [5]], [311, "플러시", [5]], [312, "마이농", [5]], [313, "볼비트", [12]], [314, "네오비트", [12]], [315, "로젤리아", [4, 8]], [316, "꼴깍몬", [8]], [317, "꿀꺽몬", [8]], [318, "샤프니아", [3, 16]], [319, "샤크니아", [3, 16]], [320, "고래왕자", [3]], [321, "고래왕", [3]], [322, "둔타", [2, 9]], [323, "폭타", [2, 9]], [324, "코터스", [2]], [325, "피그점프", [11]], [326, "피그킹", [11]], [327, "얼루기", [1]], [328, "톱치", [9]], [329, "비브라바", [9, 15]], [330, "플라이곤", [9, 15]], [331, "선인왕", [4]], [332, "밤선인", [4, 16]], [333, "파비코", [1, 10]], [334, "파비코리", [15, 10]], [335, "쟝고", [1]], [336, "세비퍼", [8]], [337, "루나톤", [13, 11]], [338, "솔록", [13, 11]], [339, "미꾸리", [3, 9]], [340, "메깅", [3, 9]], [341, "가재군", [3]], [342, "가재장군", [3, 16]], [343, "오뚝군", [9, 11]], [344, "점토도리", [9, 11]], [345, "릴링", [13, 4]], [346, "릴리요", [13, 4]], [347, "아노딥스", [13, 12]], [348, "아말도", [13, 12]], [349, "빈티나", [3]], [350, "밀로틱", [3]], [351, "캐스퐁", [1]], [352, "켈리몬", [1]], [353, "어둠대신", [14]], [354, "다크펫", [14]], [355, "해골몽", [14]], [356, "미라몽", [14]], [357, "트로피우스", [4, 10]], [358, "치렁", [11]], [359, "앱솔", [16]], [360, "마자", [11]], [361, "눈꼬마", [6]], [362, "얼음귀신", [6]], [363, "대굴레오", [6, 3]], [364, "씨레오", [6, 3]], [365, "씨카이저", [6, 3]], [366, "진주몽", [3]], [367, "헌테일", [3]], [368, "분홍장이", [3]], [369, "시라칸", [3, 13]], [370, "사랑동이", [3]], [371, "아공이", [15]], [372, "쉘곤", [15]], [373, "보만다", [15, 10]], [374, "메탕", [17, 11]], [375, "메탕구", [17, 11]], [376, "메타그로스", [17, 11]], [377, "레지락", [13]], [378, "레지아이스", [6]], [379, "레지스틸", [17]], [380, "라티아스", [15, 11]], [381, "라티오스", [15, 11]], [382, "가이오가", [3]], [383, "그란돈", [9]], [384, "레쿠쟈", [15, 10]], [385, "지라치", [17, 11]], [386, "테오키스", [11]], [387, "모부기", [4]], [388, "수풀부기", [4]], [389, "토대부기", [4, 9]], [390, "불꽃숭이", [2]], [391, "파이숭이", [2, 7]], [392, "초염몽", [2, 7]], [393, "팽도리", [3]], [394, "팽태자", [3]], [395, "엠페르트", [3, 17]], [396, "찌르꼬", [1, 10]], [397, "찌르버드", [1, 10]], [398, "찌르호크", [1, 10]], [399, "비버니", [1]], [400, "비버통", [1, 3]], [401, "귀뚤뚜기", [12]], [402, "귀뚤톡크", [12]], [403, "꼬링크", [5]], [404, "럭시오", [5]], [405, "렌트라", [5]], [406, "꼬몽울", [4, 8]], [407, "로즈레이드", [4, 8]], [408, "두개도스", [13]], [409, "램펄드", [13]], [410, "방패톱스", [13, 17]], [411, "바리톱스", [13, 17]], [412, "도롱충이", [12]], [413, "도롱마담(초목도롱)", [12, 4]], [414, "나메일", [12, 10]], [415, "세꿀버리", [12, 10]], [416, "비퀸", [12, 10]], [417, "파치리스", [5]], [418, "브이젤", [3]], [419, "플로젤", [3]], [420, "체리버", [4]], [421, "체리꼬", [4]], [422, "깝질무", [3]], [423, "트리토돈", [3, 9]], [424, "겟핸보숭", [1]], [425, "흔들풍손", [14, 10]], [426, "둥실라이드", [14, 10]], [427, "이어롤", [1]], [428, "이어롭", [1]], [429, "무우마직", [14]], [430, "돈크로우", [16, 10]], [431, "나옹마", [1]], [432, "몬냥이", [1]], [433, "랑딸랑", [11]], [434, "스컹뿡", [8, 16]], [435, "스컹탱크", [8, 16]], [436, "동미러", [17, 11]], [437, "동탁군", [17, 11]], [438, "꼬지지", [13]], [439, "흉내내", [11, 18]], [440, "핑복", [1]], [441, "페라페", [1, 10]], [442, "화강돌", [14, 16]], [443, "딥상어동", [15, 9]], [444, "한바이트", [15, 9]], [445, "한카리아스", [15, 9]], [446, "먹고자", [1]], [447, "리오르", [7]], [448, "루카리오", [7, 17]], [449, "히포포타스", [9]], [450, "하마돈", [9]], [451, "스콜피", [8, 12]], [452, "드래피온", [8, 16]], [453, "삐딱구리", [8, 7]], [454, "독개굴", [8, 7]], [455, "무스틈니", [4]], [456, "형광어", [3]], [457, "네오라이트", [3]], [458, "타만타", [3, 10]], [459, "눈쓰개", [4, 6]], [460, "눈설왕", [4, 6]], [461, "포푸니라", [16, 6]], [462, "자포코일", [5, 17]], [463, "내룸벨트", [1]], [464, "거대코뿌리", [9, 13]], [465, "덩쿠림보", [4]], [466, "에레키블", [5]], [467, "마그마번", [2]], [468, "토게키스", [18, 10]], [469, "메가자리", [12, 10]], [470, "리피아", [4]], [471, "글레이시아", [6]], [472, "글라이온", [9, 10]], [473, "맘모꾸리", [6, 9]], [474, "폴리곤Z", [1]], [475, "엘레이드", [11, 7]], [476, "대코파스", [13, 17]], [477, "야느와르몽", [14]], [478, "눈여아", [6, 14]], [479, "로토무", [5, 14]], [480, "유크시", [11]], [481, "엠라이트", [11]], [482, "아그놈", [11]], [483, "디아루가", [17, 15]], [484, "펄기아", [3, 15]], [485, "히드런", [2, 17]], [486, "레지기가스", [1]], [487, "기라티나(어나더폼)", [14, 15]], [488, "크레세리아", [11]], [489, "피오네", [3]], [490, "마나피", [3]], [491, "다크라이", [16]], [492, "쉐이미", [4]], [493, "아르세우스", [1]], [494, "비크티니", [11, 2]], [495, "주리비얀", [4]], [496, "샤비", [4]], [497, "샤로다", [4]], [498, "뚜꾸리", [2]], [499, "차오꿀", [2, 7]], [500, "염무왕", [2, 7]], [501, "수댕이", [3]], [502, "쌍검자비", [3]], [503, "대검귀", [3]], [504, "보르쥐", [1]], [505, "보르그", [1]], [506, "요테리", [1]], [507, "하데리어", [1]], [508, "바랜드", [1]], [509, "쌔비냥", [16]], [510, "레파르다스", [16]], [511, "야나프", [4]], [512, "야나키", [4]], [513, "바오프", [2]], [514, "바오키", [2]], [515, "앗차프", [3]], [516, "앗차키", [3]], [517, "몽나", [11]], [518, "몽얌나", [11]], [519, "콩둘기", [1, 10]], [520, "유토브", [1, 10]], [521, "켄호로우", [1, 10]], [522, "줄뮤마", [5]], [523, "제브라이카", [5]], [524, "단굴", [13]], [525, "암트르", [13]], [526, "기가이어스", [13]], [527, "또르박쥐", [11, 10]], [528, "맘박쥐", [11, 10]], [529, "두더류", [9]], [530, "몰드류", [9, 17]], [531, "다부니", [1]], [532, "으랏차", [7]], [533, "토쇠골", [7]], [534, "노보청", [7]], [535, "동챙이", [3]], [536, "두까비", [3, 9]], [537, "두빅굴", [3, 9]], [538, "던지미", [7]], [539, "타격귀", [7]], [540, "두르보", [12, 4]], [541, "두르쿤", [12, 4]], [542, "모아머", [12, 4]], [543, "마디네", [12, 8]], [544, "휠구", [12, 8]], [545, "펜드라", [12, 8]], [546, "소미안", [4, 18]], [547, "엘풍", [4, 18]], [548, "치릴리", [4]], [549, "드레디어", [4]], [550, "배쓰나이", [3]], [551, "깜눈크", [9, 16]], [552, "악비르", [9, 16]], [553, "악비아르", [9, 16]], [554, "달막화", [2]], [555, "불비달마", [2]], [556, "마라카치", [4]], [557, "돌살이", [12, 13]], [558, "암팰리스", [12, 13]], [559, "곤율랭", [16, 7]], [560, "곤율거니", [16, 7]], [561, "심보러", [11, 10]], [562, "데스마스", [14]], [563, "데스니칸", [14]], [564, "프로토가", [3, 13]], [565, "늑골라", [3, 13]], [566, "아켄", [13, 10]], [567, "아케오스", [13, 10]], [568, "깨봉이", [8]], [569, "더스트나", [8]], [570, "조로아", [16]], [571, "조로아크", [16]], [572, "치라미", [1]], [573, "치라치노", [1]], [574, "고디탱", [11]], [575, "고디보미", [11]], [576, "고디모아젤", [11]], [577, "유니란", [11]], [578, "듀란", [11]], [579, "란쿨루스", [11]], [580, "꼬지보리", [3, 10]], [581, "스완나", [3, 10]], [582, "바닐프티", [6]], [583, "바닐리치", [6]], [584, "배바닐라", [6]], [585, "사철록", [1, 4]], [586, "바라철록", [1, 4]], [587, "에몽가", [5, 10]], [588, "딱정곤", [12]], [589, "슈바르고", [12, 17]], [590, "깜놀버슬", [4, 8]], [591, "뽀록나", [4, 8]], [592, "탱그릴", [3, 14]], [593, "탱탱겔", [3, 14]], [594, "맘복치", [3]], [595, "파쪼옥", [12, 5]], [596, "전툴라", [12, 5]], [597, "철시드", [4, 17]], [598, "너트령", [4, 17]], [599, "기어르", [17]], [600, "기기어르", [17]], [601, "기기기어르", [17]], [602, "저리어", [5]], [603, "저리릴", [5]], [604, "저리더프", [5]], [605, "리그레", [11]], [606, "벰크", [11]], [607, "불켜미", [14, 2]], [608, "램프라", [14, 2]], [609, "샹델라", [14, 2]], [610, "터검니", [15]], [611, "액슨도", [15]], [612, "액스라이즈", [15]], [613, "코고미", [6]], [614, "툰베어", [6]], [615, "프리지오", [6]], [616, "쪼마리", [12]], [617, "어지리더", [12]], [618, "메더", [9, 5]], [619, "비조푸", [7]], [620, "비조도", [7]], [621, "크리만", [15]], [622, "골비람", [9, 14]], [623, "골루그", [9, 14]], [624, "자망칼", [16, 17]], [625, "절각참", [16, 17]], [626, "버프론", [1]], [627, "수리둥보", [1, 10]], [628, "워글", [1, 10]], [629, "벌차이", [16, 10]], [630, "버랜지나", [16, 10]], [631, "앤티골", [2]], [632, "아이앤트", [12, 17]], [633, "모노두", [16, 15]], [634, "디헤드", [16, 15]], [635, "삼삼드래", [16, 15]], [636, "활화르바", [12, 2]], [637, "불카모스", [12, 2]], [638, "코바르온", [17, 7]], [639, "테라키온", [13, 7]], [640, "비리디온", [4, 7]], [641, "토네로스", [10]], [642, "볼트로스", [5, 10]], [643, "레시라무", [15, 2]], [644, "제크로무", [15, 5]], [645, "랜드로스", [9, 10]], [646, "큐레무", [15, 6]], [647, "케르디오", [3, 7]], [648, "메로엣타", [1, 11]], [649, "게노세크트", [12, 17]], [650, "도치마론", [4]], [651, "도치보구", [4]], [652, "브리가론", [4, 7]], [653, "푸호꼬", [2]], [654, "테르나", [2]], [655, "마폭시", [2, 11]], [656, "개구마르", [3]], [657, "개굴반장", [3]], [658, "개굴닌자", [3, 16]], [659, "파르빗", [1]], [660, "파르토", [1, 9]], [661, "화살꼬빈", [1, 10]], [662, "불화살빈", [2, 10]], [663, "파이어로", [2, 10]], [664, "분이벌레", [12]], [665, "분떠도리", [12]], [666, "비비용", [12, 10]], [667, "레오꼬", [2, 1]], [668, "화염레오", [2, 1]], [669, "플라베베", [18]], [670, "플라엣테", [18]], [671, "플라제스", [18]], [672, "메이클", [4]], [673, "고고트", [4]], [674, "판짱", [7]], [675, "부란다", [7, 16]], [676, "트리미앙", [1]], [677, "냐스퍼", [11]], [678, "냐오닉스", [11]], [679, "단칼빙", [17, 14]], [680, "쌍검킬", [17, 14]], [681, "킬가르도", [17, 14]], [682, "슈쁘", [18]], [683, "프레프티르", [18]], [684, "나룸퍼프", [18]], [685, "나루림", [18]], [686, "오케이징", [16, 11]], [687, "칼라마네로", [16, 11]], [688, "거북손손", [13, 3]], [689, "거북손데스", [13, 3]], [690, "수레기", [8, 3]], [691, "드래캄", [8, 15]], [692, "완철포", [3]], [693, "블로스터", [3]], [694, "목도리키텔", [5, 1]], [695, "일레도리자드", [5, 1]], [696, "티고라스", [13, 15]], [697, "견고라스", [13, 15]], [698, "아마루스", [13, 6]], [699, "아마루르가", [13, 6]], [700, "님피아", [18]], [701, "루차불", [7, 10]], [702, "데덴네", [5, 18]], [703, "멜리시", [13, 18]], [704, "미끄메라", [15]], [705, "미끄네일", [15]], [706, "미끄래곤", [15]], [707, "클레피", [17, 18]], [708, "나목령", [14, 4]], [709, "대로트", [14, 4]], [710, "호바귀", [14, 4]], [711, "펌킨인", [14, 4]], [712, "꽁어름", [6]], [713, "크레베이스", [6]], [714, "음뱃", [10, 15]], [715, "음번", [10, 15]], [716, "제르네아스", [18]], [717, "이벨타르", [16, 10]], [718, "지가르데", [15, 9]], [719, "디안시", [13, 18]], [720, "후파", [11, 14]], [721, "볼케니온", [2, 3]], [722, "나몰빼미", [4, 10]], [723, "빼미스로우", [4, 10]], [724, "모크나이퍼", [4, 14]], [725, "냐오불", [2]], [726, "냐오히트", [2]], [727, "어흥염", [2, 16]], [728, "누리공", [3]], [729, "키요공", [3]], [730, "누리레느", [3, 18]], [731, "콕코구리", [1, 10]], [732, "크라파", [1, 10]], [733, "왕큰부리", [1, 10]], [734, "영구스", [1]], [735, "형사구스", [1]], [736, "턱지충이", [12]], [737, "전지충이", [12, 5]], [738, "투구뿌논", [12, 5]], [739, "오기지게", [7]], [740, "모단단게", [7, 6]], [741, "춤추새(이글이글스타일)", [2, 10]], [742, "에블리", [12, 18]], [743, "에리본", [12, 18]], [744, "암멍이", [13]], [745, "루가루암", [13]], [746, "약어리", [3]], [747, "시마사리", [8, 3]], [748, "더시마사리", [8, 3]], [749, "머드나기", [9]], [750, "만마드", [9]], [751, "물거미", [3, 12]], [752, "깨비물거미", [3, 12]], [753, "짜랑랑", [4]], [754, "라란티스", [4]], [755, "자마슈", [4, 18]], [756, "마셰이드", [4, 18]], [757, "야도뇽", [8, 2]], [758, "염뉴트", [8, 2]], [759, "포곰곰", [1, 7]], [760, "이븐곰", [1, 7]], [761, "달콤아", [4]], [762, "달무리나", [4]], [763, "달코퀸", [4]], [764, "큐아링", [18]], [765, "하랑우탄", [1, 11]], [766, "내던숭이", [7]], [767, "꼬시레", [12, 3]], [768, "갑주무사", [12, 3]], [769, "모래꿍", [14, 9]], [770, "모래성이당", [14, 9]], [771, "해무기", [3]], [772, "타입:널", [1]], [773, "실버디", [1]], [774, "메테노", [13, 10]], [775, "자말라", [1]], [776, "폭거북스", [2, 15]], [777, "토게데마루", [5, 17]], [778, "따라큐", [14, 18]], [779, "치갈기", [3, 11]], [780, "할비롱", [1, 15]], [781, "타타륜", [14, 4]], [782, "짜랑꼬", [15]], [783, "짜랑고우", [15, 7]], [784, "짜랑고우거", [15, 7]], [785, "카푸꼬꼬꼭", [5, 18]], [786, "카푸나비나", [11, 18]], [787, "카푸브루루", [4, 18]], [788, "카푸느지느", [3, 18]], [789, "코스모그", [11]], [790, "코스모움", [11]], [791, "솔가레오", [11, 17]], [792, "루나아라", [11, 14]], [793, "텅비드", [13, 8]], [794, "매시붕", [12, 7]], [795, "페로코체", [12, 7]], [796, "전수목", [5]], [797, "철화구야", [17, 10]], [798, "종이신도", [4, 17]], [799, "악식킹", [16, 15]], [800, "네크로즈마", [11]], [801, "마기아나", [17, 18]], [802, "마샤도", [7, 14]], [803, "베베놈", [8]], [804, "아고용", [8, 15]], [805, "차곡차곡", [13, 17]], [806, "두파팡", [2, 14]], [807, "제라오라", [5]], [808, "멜탄", [17]], [809, "멜메탈", [17]], [810, "흥나숭", [4]], [811, "채키몽", [4]], [812, "고릴타", [4]], [813, "염버니", [2]], [814, "래비풋", [2]], [815, "에이스번", [2]], [816, "울머기", [3]], [817, "누겔레온", [3]], [818, "인텔리레온", [3]], [819, "탐리스", [1]], [820, "요씽리스", [1]], [821, "파라꼬", [10]], [822, "파크로우", [10]], [823, "아머까오", [10, 17]], [824, "두루지벌레", [12]], [825, "레돔벌레", [12, 11]], [826, "이올브", [12, 11]], [827, "훔처우", [16]], [828, "폭슬라이", [16]], [829, "꼬모카", [4]], [830, "백솜모카", [4]], [831, "우르", [1]], [832, "배우르", [1]], [833, "깨물부기", [3]], [834, "갈가부기", [3, 13]], [835, "멍파치", [5]], [836, "펄스멍", [5]], [837, "탄동", [13]], [838, "탄차곤", [13, 2]], [839, "석탄산", [13, 2]], [840, "과사삭벌레", [4, 15]], [841, "애프룡", [4, 15]], [842, "단지래플", [4, 15]], [843, "모래뱀", [9]], [844, "사다이사", [9]], [845, "윽우지", [10, 3]], [846, "찌로꼬치", [3]], [847, "꼬치조", [3]], [848, "일레즌", [5, 8]], [849, "스트린더", [5, 8]], [850, "태우지네", [2, 12]], [851, "다태우지네", [2, 12]], [852, "때때무노", [7]], [853, "케오퍼스", [7]], [854, "데인차", [14]], [855, "포트데스", [14]], [856, "몸지브림", [11]], [857, "손지브림", [11]], [858, "브리무음", [11, 18]], [859, "메롱꿍", [16, 18]], [860, "쏘겨모", [16, 18]], [861, "오롱털", [16, 18]], [862, "가로막구리", [16, 1]], [863, "나이킹", [17]], [864, "산호르곤", [14]], [865, "창파나이트", [7]], [866, "마임꽁꽁", [6, 11]], [867, "데스판", [9, 14]], [868, "마빌크", [18]], [869, "마휘핑", [18]], [870, "대여르", [7]], [871, "찌르성게", [5]], [872, "누니머기", [6, 12]], [873, "모스노우", [6, 12]], [874, "돌헨진", [13]], [875, "빙큐보", [6]], [876, "에써르", [11, 1]], [877, "모르페코", [5, 16]], [878, "끼리동", [17]], [879, "대왕끼리동", [17]], [880, "파치래곤", [5, 15]], [881, "파치르돈", [5, 6]], [882, "어래곤", [3, 15]], [883, "어치르돈", [3, 6]], [884, "두랄루돈", [17, 15]], [885, "드라꼰", [15, 14]], [886, "드래런치", [15, 14]], [887, "드래펄트", [15, 14]], [888, "자시안", [18]], [889, "자마젠타", [7]], [890, "무한다이노", [8, 15]], [891, "치고마", [7]], [892, "우라오스(일격의태세)", [7, 16]], [893, "자루도", [16, 4]], [894, "레지에레키", [5]], [895, "레지드래고", [15]], [896, "블리자포스", [6]], [897, "레이스포스", [14]], [898, "버드렉스", [11, 4]], [899, "신비록", [1, 11]], [900, "사마자르", [12, 13]], [901, "다투곰", [9, 1]], [902, "대쓰여너", [3, 14]], [903, "포푸니크", [7, 8]], [904, "장침바루", [16, 8]], [905, "러브로스", [18, 10]], [906, "나오하", [4]], [907, "나로테", [4]], [908, "마스카나", [4, 16]], [909, "뜨아거", [2]], [910, "악뜨거", [2]], [911, "라우드본", [2, 14]], [912, "꾸왁스", [3]], [913, "아꾸왁", [3]], [914, "웨이니발", [3, 7]], [915, "맛보돈", [1]], [916, "퍼퓨돈", [1]], [917, "노고고치", [12]], [918, "타랜툴라", [12]], [919, "트래피더", [12]], [920, "콩알뚜기", [12, 16]], [921, "엑스레그", [5]], [922, "구르데", [5, 7]], [923, "베라카", [5, 7]], [924, "망망이", [1]], [925, "묘두기", [1]], [926, "하느라기", [18]], [927, "클레스퍼트라", [18]], [928, "키키링", [4, 1]], [929, "바다그다", [4, 1]], [930, "바닥트리오", [4, 1]], [931, "어써러셔", [1, 10]], [932, "가비루사", [13]], [933, "맨돌핀", [13]], [934, "돌핀맨", [13]], [935, "미니브", [2]], [936, "올니뇨", [2, 11]], [937, "올리르바", [2, 14]], [938, "캡싸이", [5]], [939, "스코빌런", [5]], [940, "빈나두", [5, 10]], [941, "찌리배리", [5, 10]], [942, "부르롱", [16]], [943, "부르르룸", [16]], [944, "꿈트렁", [8, 1]], [945, "두리쥐", [8, 1]], [946, "파밀리쥐", [4, 14]], [947, "터벅고래", [4, 14]], [948, "우락고래", [9, 4]], [949, "드니차", [9, 4]], [950, "드니꽁", [13]], [951, "드닐레이브", [4]], [952, "싸리용", [4, 2]], [953, "모토마", [12]], [954, "빠모", [12, 11]], [955, "빠모트", [11]], [956, "빠르모트", [11]], [957, "찌리비", [18, 17]], [958, "찌리비크", [18, 17]], [959, "떨구새", [18, 17]], [960, "시비꼬", [3]], [961, "꼬이밍고", [3]], [962, "절벼게", [10, 16]], [963, "베베솔트", [3]], [964, "스테솔트", [3]], [965, "콜로솔트", [17, 8]], [966, "초롱순", [17, 8]], [967, "킬라플로르", [15, 1]], [968, "땃쭈르", [17]], [969, "태깅구르", [13, 8]], [970, "쫀도기", [13, 8]], [971, "바우첼", [14]], [972, "오라티프", [14]], [973, "마피티프", [10, 7]], [974, "그푸리", [6]], [975, "공푸리", [6]], [976, "모으령", [3, 11]], [977, "타부자고", [3]], [978, "위대한엄니", [15, 3]], [979, "사나운버섯", [7, 14]], [981, "모래털가죽", [8, 9]], [982, "우렁찬꼬리", [1, 11]], [983, "날개치는머리", [1]], [984, "땅을기는날개", [16, 17]], [985, "고동치는달", [9, 7]], [986, "무쇠바퀴", [18, 11]], [988, "무쇠독나방", [4, 16]], [989, "무쇠손", [14, 18]], [990, "무쇠머리", [12, 7]], [991, "무쇠가시", [5, 9]], [992, "무쇠보따리", [9, 17]], [993, "무쇠무인", [6, 3]], [994, "딩루", [7, 5]], [995, "파오젠", [16, 10]], [996, "총지엔", [2, 8]], [997, "위유이", [13, 5]], [998, "코라이돈", [15, 6]], [999, "미라이돈", [15, 6]], [1000, "어리짱", [15, 6]], [1001, "벼리짱", [14]], [1002, "두드리짱", [17, 14]], [1003, "카르본", [16, 4]], [1004, "카디나르마", [16, 6]], [1005, "파라블레이즈", [16, 9]], [1006, "들눈해", [16, 2]], [1007, "육파리", [15, 16]], [1008, "대도각참", [18, 7]], [1009, "토오", [7, 15]], [1010, "저승갓숭", [5, 15]], [10003, "테오키스(스피드폼)", [11]], [10004, "도롱마담(모래땅도롱)", [12, 9]], [10005, "도롱마담(슈레도롱)", [12, 17]], [10006, "쉐이미(스카이폼)", [4, 10]], [10007, "기라티나(오리진폼)", [14, 15]], [10008, "히트로토무", [5, 2]], [10009, "워시로토무", [5, 3]], [10010, "프로스트로토무", [5, 6]], [10011, "스핀로토무", [5, 10]], [10012, "커트로토무", [5, 4]], [10013, "캐스퐁(태양)", [2]], [10014, "캐스퐁(빗방울)", [3]], [10015, "캐스퐁(설운)", [6]], [10016, "배쓰나이(청)", [3]], [10017, "불비달마(달마모드)", [2, 11]], [10018, "메로엣타(스텝폼)", [1, 7]], [10019, "토네로스(영물폼)", [10]], [10020, "볼트로스(영물폼)", [5, 10]], [10021, "랜드로스(영물폼)", [9, 10]], [10022, "블랙큐레무", [15, 6]], [10023, "화이트큐레무", [15, 6]], [10024, "케르디오(각오의모습)", [3, 7]], [10026, "킬카르도(블레이드폼)", [17, 14]], [10027, "호바귀(작은크기)", [14, 4]], [10028, "호바귀(큰크기)", [14, 4]], [10029, "호바귀(아주큰크기)", [14, 4]], [10030, "펌킨인(작은크기)", [14, 4]], [10031, "펌킨인(큰크기)", [14, 4]], [10032, "펌킨인(아주큰크기)", [14, 4]], [10033, "메가이상해꽃", [4, 8]], [10034, "메가리자몽X", [2, 15]], [10035, "메가리자몽Y", [2, 10]], [10036, "메가거북왕", [3]], [10037, "메가후딘", [11]], [10038, "메가팬텀", [14, 8]], [10039, "메가캥카", [1]], [10040, "메가쁘사이저", [12, 10]], [10041, "메가갸라도스", [3, 16]], [10042, "메가프테라", [13, 10]], [10043, "메가뮤츠X", [11, 7]], [10044, "메가뮤츠Y", [11]], [10045, "메가전룡", [5, 15]], [10046, "메가핫삼", [12, 17]], [10047, "메가헤라크로스", [12, 7]], [10048, "메가헬가", [16, 2]], [10049, "메가마기로스", [13, 16]], [10050, "메가번치코", [2, 7]], [10051, "메가가디안", [11, 18]], [10052, "메가입치트", [17, 18]], [10053, "메가보스로라", [17]], [10054, "메가요가램", [7, 11]], [10055, "메가썬더볼트", [5]], [10056, "메가다크펫", [14]], [10057, "메가앱솔", [16]], [10058, "메가한카리아스", [15, 9]], [10059, "메가루카리오", [7, 17]], [10060, "메가눈설왕", [4, 6]], [10061, "메가라티아스", [18]], [10062, "메가라티오스", [15, 11]], [10064, "메가대짱이", [3, 9]], [10065, "메가나무킹", [4, 15]], [10066, "메가깜까미", [16, 14]], [10067, "메가파비코리", [15, 18]], [10068, "메가엘레이드", [11, 7]], [10069, "메가다부니", [1, 18]], [10070, "메가샤크니아", [3, 16]], [10071, "메가야도란", [3, 11]], [10072, "메가강철톤", [17, 9]], [10073, "메가피죤투", [1, 10]], [10074, "메가얼음귀신", [6]], [10075, "메가디안시", [13, 18]], [10076, "메가메타그로스", [17, 11]], [10077, "원시가이오가", [3]], [10078, "원시그란돈", [9, 2]], [10079, "메가레쿠쟈", [15, 10]], [10086, "후파(굴레를벗어난)", [11, 16]], [10087, "메가폭타", [2, 9]], [10088, "메가이어롭", [1, 7]], [10089, "메가보만다", [15, 10]], [10090, "메가독침붕", [12, 8]], [10091, "꼬렛(알로라)", [16, 1]], [10092, "레트(알로라)", [16, 1]], [10100, "라이츄(알로라)", [5, 11]], [10101, "모래두지(알로라)", [6, 17]], [10102, "고지(알로라)", [6, 17]], [10103, "식스테일(알로라)", [6]], [10104, "나인테일(알로라)", [6, 18]], [10105, "디그다(알로라)", [9, 17]], [10106, "닥트리오(알로라)", [9, 17]], [10107, "나옹(알로라)", [16]], [10108, "페르시온(알로라)", [16]], [10109, "꼬마돌(알로라)", [13, 5]], [10110, "데구리(알로라)", [13, 5]], [10111, "딱구리(알로라)", [13, 5]], [10112, "질퍽이(알로라)", [8, 16]], [10113, "질뻐기(알로라)", [8, 16]], [10114, "나시(알로라)", [4, 15]], [10115, "텅구리(알로라)", [2, 14]], [10117, "지우개굴닌자", [3, 16]], [10118, "지가르데(10%)", [15, 9]], [10119, "지가르데(50%)", [15, 9]], [10120, "지가르데(퍼펙트)", [15, 9]], [10123, "춤추새(파칙파칙스타일)", [5, 10]], [10124, "춤추새(훌라훌라스타일)", [11, 10]], [10125, "춤추새(하늘하늘스타일)", [14, 10]], [10126, "루가루암(한밤)", [13]], [10127, "약어리(군집)", [3]], [10152, "루가루암(황혼)", [13]], [10155, "네크로즈마(황혼의갈기)", [11, 17]], [10156, "네크로즈마(새벽의날개)", [11, 14]], [10157, "울트라네크로즈마", [11, 15]], [10161, "나옹(가라르)", [17]], [10162, "포니타(가라르)", [11]], [10163, "날쌩마(가라르)", [11, 18]], [10164, "야돈(가라르)", [11]], [10165, "야도란(가라르)", [8, 11]], [10166, "파오리(가라르)", [7]], [10167, "또도가스(가라르)", [8, 18]], [10168, "마임맨(가라르)", [6, 11]], [10169, "프리져(가라르)", [11, 10]], [10170, "썬더(가라르)", [7, 10]], [10171, "파이어(가라르)", [16, 10]], [10172, "야도킹(가라르)", [8, 11]], [10173, "코산호(가라르)", [14]], [10174, "지그제구리(가라르)", [16, 1]], [10175, "직구리(가라르)", [16, 1]], [10176, "달막화(가라르)", [6]], [10177, "불비달마(가라르)", [6]], [10178, "불비달마(달마모드)(가라르)", [6, 2]], [10179, "데스마스(가라르)", [9, 14]], [10180, "메더(가라르)", [9, 17]], [10186, "에써르♀", [11, 1]], [10188, "자시안(검왕)", [18, 17]], [10189, "자마젠타(방패왕)", [7, 17]], [10190, "무한다이노(무한다이맥스)", [8, 15]], [10191, "우라오스(연격의태세)", [7, 3]], [10193, "버드렉스(백마탄모습)", [11, 6]], [10194, "버드렉스(흑마탄모습)", [11, 14]], [10195, "이상해꽃(거다이맥스)", [4, 8]], [10196, "리자몽(거다이맥스)", [2, 10]], [10197, "거북왕(거다이맥스)", [3]], [10198, "버터플(거다이맥스)", [12, 10]], [10199, "피카츄(거다이맥스)", [5]], [10200, "나옹(거다이맥스)", [1]], [10201, "괴력몬(거다이맥스)", [7]], [10202, "팬텀(거다이맥스)", [14, 8]], [10203, "킹크랩(거다이맥스)", [3]], [10204, "라프라스(거다이맥스)", [3, 6]], [10205, "이브이(거다이맥스)", [1]], [10206, "잠만보(거다이맥스)", [1]], [10207, "더스트나(거다이맥스)", [8]], [10208, "멜메탈(거다이맥스)", [17]], [10209, "고릴타(거다이맥스)", [4]], [10210, "에이스번(거다이맥스)", [2]], [10211, "인텔리레온(거다이맥스)", [3]], [10212, "아머까오(거다이맥스)", [10, 17]], [10213, "이올브(거다이맥스)", [12, 11]], [10214, "갈가부기(거다이맥스)", [3, 13]], [10215, "석탄산(거다이맥스)", [13, 2]], [10216, "애프룡(거다이맥스)", [4, 15]], [10217, "단지래플(거다이맥스)", [4, 15]], [10218, "사다이사(거다이맥스)", [9]], [10219, "스트린더(거다이맥스)", [5, 8]], [10220, "다태우지네(거다이맥스)", [2, 12]], [10221, "브리무음(거다이맥스)", [11, 18]], [10222, "오롱털(거다이맥스)", [16, 18]], [10223, "마휘핑(거다이맥스)", [18]], [10224, "대왕끼리동(거다이맥스)", [17]], [10225, "두랄루돈(거다이맥스)", [17, 15]], [10226, "우라오스(일격의태세)(거다이맥스)", [7, 16]], [10227, "우라오스(연격의태세)(거다이맥스)", [7, 3]], [10229, "가디(히스이)", [2, 13]], [10230, "윈디(히스이)", [2, 13]], [10231, "찌리리공(히스이)", [5, 4]], [10232, "붐볼(히스이)", [5, 4]], [10233, "블레이범(히스이)", [2, 14]], [10234, "침바루(히스이)", [16, 8]], [10235, "포푸니(히스이)", [7, 8]], [10236, "대검귀(히스이)", [3, 16]], [10237, "드래디어(히스이)", [4, 7]], [10238, "조로아(히스이)", [1, 14]], [10239, "조로아크(히스이)", [1, 14]], [10240, "워글(히스이)", [11, 10]], [10241, "미끄네일(히스이)", [17, 15]], [10242, "미끄레곤(히스이)", [17, 15]], [10243, "크레베이스(히스이)", [6, 13]], [10244, "모크나이퍼(히스이)", [4, 7]], [10245, "디아루가(히스이)", [17, 15]], [10246, "펄기아(히스이)", [3, 15]], [10247, "배쓰나(백색근)", [3]], [10249, "러브로스(영물폼)", [18, 10]], [10250, "켄타로스(컴뱃종)", [7]], [10251, "켄타로스(블레이즈종)", [7, 2]], [10252, "켄타로스(워터종)", [7, 3]], [10253, "우파(팔데아)", [8, 9]], [10256, "돌핀맨(마이티폼)", [3]]]