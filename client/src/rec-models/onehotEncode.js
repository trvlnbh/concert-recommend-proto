import { LabelEncoder } from "machinelearn/preprocessing/label"

const labelEncoder = new LabelEncoder();

let genreIndex = [
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
]

const genreList = [
    '랩',
    '힙합',
    '인디',
    '락',
    '발라드',
    '알앤비',
    '어반',
    '포크',
    '퍼포먼스',
    '트로트',
    '재즈',
    '블루스',
    'CCM',
    '오케스트라',
    '댄스',
    'OST',
    '퓨전재즈',
    '보컬재즈',
    '메탈',
    '일렉트로니카',
    '퓨전',
    '크로스오버재즈',
    '클래시컬크로스오버',
    '뮤지컬'
];
labelEncoder.fit(genreList);

export const labelTransform = (genre) => {
    const result = labelEncoder.transform(genre);
    
    let onehot = result.map(idx => {
        genreIndex[idx] = 1;
    });
    return genreIndex;
};

export const genreIndexInitial = () => {
    genreIndex = [
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0
    ]
}